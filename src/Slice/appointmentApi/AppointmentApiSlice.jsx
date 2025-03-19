import HospitalApiSlice from "../Service";

const AppointmentApiSlice = HospitalApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    bookAppointment: builder.mutation({
      query: (appointmentData) => ({
        url: "appointment/book",
        method: "POST",
        body: appointmentData,
      }),
      invalidatesTags: ["Appointment"],
    }),
    cancelAppointment: builder.mutation({
      query: (id) => ({
        url: `appointment/cancel/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Appointment"],
    }),
    getAppointments: builder.query({
      query: () => ({
        url: "appointment/get-appointments",
        method: "GET",
      }),
      providesTags: ["Appointment"],
    }),
  }),
});

export const {
  useBookAppointmentMutation,
  useGetAppointmentsQuery,
  useCancelAppointmentMutation,
} = AppointmentApiSlice;
