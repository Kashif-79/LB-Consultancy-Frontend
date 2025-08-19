import type { TQueryParam, TResponseRedux } from "../../../types";
import type { TCountry, TUniversity } from "../../../types/country&uni.types";
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
        // console.log(response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addCountry: builder.mutation({
      query: (data) => ({
        url: "/countries/create-country",
        method: "POST",
        body: data,
      }),
    }),
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

export const {
  useGetAllCountriesQuery,
  useAddCountryMutation,
  useAddUniversityMutation,
  useGetAllUniversitiesQuery,
} = countryManagementApi;
