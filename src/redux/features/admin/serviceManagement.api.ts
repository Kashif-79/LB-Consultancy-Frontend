import type { TQueryParam, TResponseRedux } from "../../../types";
import type { TService } from "../../../types/service.types";
import { baseApi } from "../../api/baseApi";

const serviceManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/services",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TService[]>) => {
        // console.log(response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addService: builder.mutation({
      query: (data) => ({
        url: "/services/create-service",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddServiceMutation, useGetAllServicesQuery } =
  serviceManagementApi;
