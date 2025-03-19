
import React from "react";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import Appointment from "./Appointment";
import { useBookAppointmentMutation } from "../../../Slice/appointmentApi/AppointmentApiSlice";



const AppointmentWrapper= () => {
  const [bookAppointment] = useBookAppointmentMutation();
  const navigate = useNavigate();

  let initialValues = {
    doctorId: "",
    patientId: "",
    date: "",
    time: "",
  };

  const validationSchema = Yup.object({
    doctorId: Yup.string().required("Doctor ID is required"),
    patientId: Yup.string().required("Patient ID is required"),
    date: Yup.string().required("Date is required"),
    time: Yup.string().required("Time is required"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            bookAppointment(values).then((res) => {
              if (res.data.status) {
                navigate("/layout/appointments");
                toast.success(res.data.message);
              } else {
                toast.error("Failed to create appointment");
              }
              setSubmitting(false);
            });
          } catch (error) {
            toast.error("An error occurred");
            setSubmitting(false);
          }
        }}
      >
        {(formikProps) => (
          <Form>
            <Appointment formikProps={formikProps} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AppointmentWrapper;
