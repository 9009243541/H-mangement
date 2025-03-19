import React from "react";

import { useGetPatientQuery } from "../../../Slice/patientApi/PatientApiSlice";
import PatientList from "./PatientList";
import AtmLoader from "../../../component/AtmLoader";

const PatientListingWrapper = () => {
  const { data, isLoading, isError } = useGetPatientQuery();

  if (isLoading)
    return (
      <div>
        <AtmLoader />
      </div>
    );
  if (isError) return <div>Error...</div>;

  return (
    <div>
      <PatientList data={data?.data || []} />
    </div>
  );
};

export default PatientListingWrapper;
