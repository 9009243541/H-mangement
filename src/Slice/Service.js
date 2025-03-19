import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const HospitalApiSlice = createApi({
  reducerPath: "HospitalManageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("auth");
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
  }),
  tagTypes: ["Doctor","Patient","Appointment"],
  endpoints: () => ({}),
});
export default HospitalApiSlice;
