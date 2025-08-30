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
        // console.log(response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getSingleCountry: builder.query({
      query: (id) => {
        return {
          url: `/countries/${id}`,
          method: "GET",
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
    // updateSingleCountry: builder.query({
    //   query: (id) => {
    //     return {
    //       url: `/countries/${id}`,
    //       method: "PATCH",
    //     };
    //   },
    // }),
  }),
});

export const {
  useGetAllCountriesQuery,
  useGetSingleCountryQuery,
  useAddCountryMutation,
  // useUpdateSingleCountryQuery,
} = countryManagementApi;
