import HospitalApiSlice from "../Service";

const PatientApiSlice = HospitalApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginPatient: builder.mutation({
      query: (doctorLoginData) => ({
        url: "patient/login",
        method: "POST",
        body: doctorLoginData,
      }),
    }),
    getPatient: builder.query({
      query: () => ({
        url: "patient/get-patients",
        method: "GET",
      }),
    }),
  }),
});

export const {useLoginPatientMutation, useGetPatientQuery } = PatientApiSlice;
