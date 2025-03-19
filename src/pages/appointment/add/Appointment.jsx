import React from "react";
import { useGetAppointmentsQuery } from "../../../Slice/appointmentApi/AppointmentApiSlice";

const Appointment = ({ formikProps }) => {
  const { values, handleBlur, handleChange, isSubmitting } = formikProps;
  const { data } = useGetAppointmentsQuery();

  return (
    <div className="flex flex-col items-center justify-center pt-12 min-h-screen">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-gray-200 space-y-6">
        <h1 className="font-bold text-3xl text-gray-900 text-center mb-4">
          Book Appointment
        </h1>

        {/* Doctor Selection */}
        <div>
          <label className="block text-gray-700">Select Doctor</label>
          <select
            name="doctorId"
            value={values?.doctorId || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select a Doctor</option>
            {data?.data?.map((appointment) => (
              <option key={appointment?.doctorId?._id} value={appointment?.doctorId?._id}>
                {appointment?.doctorId?.name}
              </option>
            ))}
          </select>
          {formikProps.errors.doctorId && formikProps.touched.doctorId && (
            <p className="text-red-500 text-sm">{formikProps.errors.doctorId}</p>
          )}
        </div>

        {/* Patient Selection */}
        <div>
          <label className="block text-gray-700">Select Patient</label>
          <select
            name="patientId"
            value={values?.patientId || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select a Patient</option>
            {data?.data?.map((appointment) => (
              <option key={appointment?.patientId?._id} value={appointment?.patientId?._id}>
                {appointment?.patientId?.name}
              </option>
            ))}
          </select>
          {formikProps.errors.patientId && formikProps.touched.patientId && (
            <p className="text-red-500 text-sm">{formikProps.errors.patientId}</p>
          )}
        </div>

        {/* Date */}
        <div>
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={values?.date || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-2 border rounded-md"
          />
          {formikProps.errors.date && formikProps.touched.date && (
            <p className="text-red-500 text-sm">{formikProps.errors.date}</p>
          )}
        </div>

        {/* Time */}
        <div>
          <label className="block text-gray-700">Time</label>
          <input
            type="time"
            name="time"
            value={values?.time || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-2 border rounded-md"
          />
          {formikProps.errors.time && formikProps.touched.time && (
            <p className="text-red-500 text-sm">{formikProps.errors.time}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-3 text-white rounded-md shadow-lg transition-all duration-300 ${
              isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Create Appointment"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
