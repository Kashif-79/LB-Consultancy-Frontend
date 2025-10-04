import {
  createApi,
  fetchBaseQuery,
  type BaseQueryApi,
  type BaseQueryFn,
  type FetchArgs,
} from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";
import { logOut, setUser } from "../features/auth/authSlice";
import type { DefinitionType } from "@reduxjs/toolkit/query";
import { toast } from "sonner";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headeres, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headeres.set("authorization", `${token}`);
    }

    return headeres;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (arg, api, extraOptions): Promise<any> => {
  let result = await baseQuery(arg, api, extraOptions);
  // if (result.error?.status === 404) {
  //   toast.error(result.error?.data.message);
  // }

  if (result.error?.status === 404) {
    const errorData = result.error.data as { message: string };
    toast.error(errorData.message);
  }

  // if (result.error?.status === 403) {
  //   toast.error(result.error?.data.message);
  // }

  if (result.error?.status === 403) {
    const errorData = result.error.data as { message: string };
    toast.error(errorData.message);
  }

  if (result.error?.status === 401) {
    const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();

    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;
      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken,
        })
      );

      result = await baseQuery(arg, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: [
    "countries",
    "universities",
    "services",
    "students",
    "consultants",
    "admins",
  ],
  endpoints: () => ({}),
});
