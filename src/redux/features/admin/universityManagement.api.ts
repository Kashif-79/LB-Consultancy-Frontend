import type { TQueryParam, TResponseRedux, TUniversity } from "../../../types";
import { baseApi } from "../../api/baseApi";

const universityManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUniversities: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/universities",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TUniversity[]>) => {
        // console.log(response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addUniversity: builder.mutation({
      query: (data) => ({
        url: "/universities/create-university",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllUniversitiesQuery, useAddUniversityMutation } =
  universityManagementApi;
