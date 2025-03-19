import React from "react";
import AppointmentList from "./AppointmentList";
import { useGetAppointmentsQuery } from "../../../Slice/appointmentApi/AppointmentApiSlice";
import AtmLoader from "../../../component/AtmLoader";

const AppointmentListWrapper = () => {
  const { data, isLoading, isError } = useGetAppointmentsQuery();
  console.log(data, "doctyyy");
  if (isLoading)
    return (
      <div>
        <AtmLoader />
      </div>
    );
  if (isError) return <div>Error...</div>;
  return (
    <div>
      <AppointmentList data={data.data} />
    </div>
  );
};

export default AppointmentListWrapper;
