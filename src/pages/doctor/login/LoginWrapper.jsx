import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { useLoginDoctorMutation } from "../../../Slice/doctorApi/DoctorApiSlice";
import { toast } from "react-toastify";

const LoginWrapper = () => {
  const navigate = useNavigate();
  const [doctorLoginData] = useLoginDoctorMutation();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const res = await doctorLoginData(values);

          if (res.data.status) {
            toast.success("Login Successful");
            console.log(res.data.token);
            localStorage.setItem("auth", res?.data.token);
            navigate("/layout");
          } else {
            toast.error("Invalid Credentials");
          }
        } catch (error) {
          toast.error(error?.message || "Invalid Credentials");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {(formikProps) => (
        <Form>
          <Login formikProps={formikProps} />
        </Form>
      )}
    </Formik>
  );
};

export default LoginWrapper;
