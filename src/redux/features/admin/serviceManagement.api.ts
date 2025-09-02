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
      providesTags: ["services"],
    }),
    getSingleService: builder.query({
      query: (id) => {
        return {
          url: `/services/${id}`,
          method: "GET",
        };
      },
      providesTags: ["services"],
    }),
    addService: builder.mutation({
      query: (data) => ({
        url: "/services/create-service",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["services"],
    }),
    updateService: builder.mutation({
      query: (args) => ({
        url: `/services/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["services"],
    }),
  }),
});

export const {
  useAddServiceMutation,
  useGetAllServicesQuery,
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
} = serviceManagementApi;
