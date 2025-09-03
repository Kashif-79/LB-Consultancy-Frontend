import type {
  TAdmin,
  TConsultant,
  TQueryParam,
  TResponseRedux,
  TStudent,
} from "../../../types";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/students",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TStudent[]>) => {
        // console.log(response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["students"],
    }),
    getSingleStudent: builder.query({
      query: (stuId) => {
        return {
          url: `/students/${stuId}`,
          method: "GET",
        };
      },
      providesTags: ["students"],
    }),
    addStudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["students"],
    }),
    updateStudent: builder.mutation({
      query: (args) => ({
        url: `/students/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["students"],
    }),
    getAllConsultants: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/consultants",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TConsultant[]>) => {
        // console.log(response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["consultants"],
    }),
    getSingleConsultant: builder.query({
      query: (id) => {
        return {
          url: `/consultants/${id}`,
          method: "GET",
        };
      },
      providesTags: ["consultants"],
    }),
    addConsultant: builder.mutation({
      query: (data) => ({
        url: "/users/create-consultant",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["consultants"],
    }),
    updateConsultants: builder.mutation({
      query: (args) => ({
        url: `/consultants/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["consultants"],
    }),
    getAllAdmins: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/admins",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAdmin[]>) => {
        // console.log(response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["admins"],
    }),
    getSingleAdmin: builder.query({
      query: (id) => {
        return {
          url: `/admins/${id}`,
          method: "GET",
        };
      },
      providesTags: ["admins"],
    }),
    addAdmin: builder.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["admins"],
    }),
    updateAdmins: builder.mutation({
      query: (args) => ({
        url: `/admins/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["admins"],
    }),
  }),
});

export const {
  useAddStudentMutation,
  useGetAllStudentsQuery,
  useGetSingleStudentQuery,
  useUpdateStudentMutation,
  useGetAllConsultantsQuery,
  useGetSingleConsultantQuery,
  useAddConsultantMutation,
  useUpdateConsultantsMutation,
  useGetAllAdminsQuery,
  useGetSingleAdminQuery,
  useAddAdminMutation,
  useUpdateAdminsMutation,
} = userManagementApi;
