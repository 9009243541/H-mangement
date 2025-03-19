import React from "react";
import DoctorList from "./DoctorList";
import { useGetDoctorsQuery } from "../../../Slice/doctorApi/DoctorApiSlice";
import AtmLoader from "../../../component/AtmLoader";

const DoctorListWrapper = () => {
  const { data, isLoading, isError } = useGetDoctorsQuery();
  
  if (isLoading)
    return (
      <div>
        <AtmLoader />
      </div>
    );
  if (isError) return <div>Error...</div>;
  return (
    <div>
      <DoctorList data={data.data}/>
    </div>
  );
};

export default DoctorListWrapper;
