import type { TQueryParam, TResponseRedux } from "../../../types";
import type { TCountry } from "../../../types/country&uni.types";
import { baseApi } from "../../api/baseApi";

const countryManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/countries",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TCountry[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["countries"],
    }),
    getSingleCountry: builder.query({
      query: (id) => {
        return {
          url: `/countries/${id}`,
          method: "GET",
        };
      },
      providesTags: ["countries"],
    }),
    deleteSingleCountry: builder.mutation({
      query: (id) => ({
        url: `/countries/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["countries"],
    }),
    addCountry: builder.mutation({
      query: (data) => ({
        url: "/countries/create-country",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["countries"],
    }),
    updateCountry: builder.mutation({
      query: (args) => ({
        url: `/countries/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["countries"],
    }),
  }),
});

export const {
  useGetAllCountriesQuery,
  useGetSingleCountryQuery,
  useAddCountryMutation,
  useUpdateCountryMutation,
  useDeleteSingleCountryMutation,
} = countryManagementApi;
