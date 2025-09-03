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
      providesTags: ["universities"],
    }),
    addUniversity: builder.mutation({
      query: (data) => ({
        url: "/universities/create-university",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["universities"],
    }),
    getSingleUniversity: builder.query({
      query: (id) => {
        return {
          url: `/universities/${id}`,
          method: "GET",
        };
      },
      providesTags: ["universities"],
    }),
    deleteSingleUniversity: builder.mutation({
      query: (id) => ({
        url: `/universities/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["universities"],
    }),
  }),
});

export const {
  useGetAllUniversitiesQuery,
  useAddUniversityMutation,
  useGetSingleUniversityQuery,
  useDeleteSingleUniversityMutation,
} = universityManagementApi;
