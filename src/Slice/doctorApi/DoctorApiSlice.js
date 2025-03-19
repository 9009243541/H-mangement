import HospitalApiSlice from "../Service";

const DoctorApiSlice = HospitalApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginDoctor: builder.mutation({
      query: (doctorLoginData) => ({
        url: "doctor/login",
        method: "POST",
        body: doctorLoginData,
      }),
    }),
    getDoctors: builder.query({
      query: () => ({
        url: "doctor/get-doctors",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginDoctorMutation,useGetDoctorsQuery } = DoctorApiSlice;
