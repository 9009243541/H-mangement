import React from "react";
import { FaUserInjured, FaProcedures, FaCalendarCheck, FaUserMd, FaMoneyBillWave } from "react-icons/fa";

const Dashboard = () => {
  const hospitalData = {
    totalPatients: 120,
    admitted: 40,
    discharged: 50,
    icu: 30,
    upcomingAppointments: 15,
    completedAppointments: 85,
    availableDoctors: 25,
    totalRevenue: "$250,000",
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Total Patients */}
      <div className="bg-white p-4 shadow-md rounded-lg flex items-center gap-4">
        <FaUserInjured className="text-4xl text-blue-500" />
        <div>
          <h3 className="text-lg font-semibold">Total Patients</h3>
          <p className="text-xl">{hospitalData.totalPatients}</p>
        </div>
      </div>

      {/* Admitted & ICU */}
      <div className="bg-white p-4 shadow-md rounded-lg flex items-center gap-4">
        <FaProcedures className="text-4xl text-red-500" />
        <div>
          <h3 className="text-lg font-semibold">Admitted / ICU</h3>
          <p className="text-xl">{hospitalData.admitted} / {hospitalData.icu}</p>
        </div>
      </div>

      {/* Appointments */}
      <div className="bg-white p-4 shadow-md rounded-lg flex items-center gap-4">
        <FaCalendarCheck className="text-4xl text-green-500" />
        <div>
          <h3 className="text-lg font-semibold">Appointments</h3>
          <p className="text-xl">{hospitalData.upcomingAppointments} Upcoming</p>
          <p className="text-sm text-gray-500">{hospitalData.completedAppointments} Completed</p>
        </div>
      </div>

      {/* Available Doctors */}
      <div className="bg-white p-4 shadow-md rounded-lg flex items-center gap-4">
        <FaUserMd className="text-4xl text-purple-500" />
        <div>
          <h3 className="text-lg font-semibold">Available Doctors</h3>
          <p className="text-xl">{hospitalData.availableDoctors}</p>
        </div>
      </div>

      {/* Revenue */}
      <div className="bg-white p-4 shadow-md rounded-lg flex items-center gap-4">
        <FaMoneyBillWave className="text-4xl text-yellow-500" />
        <div>
          <h3 className="text-lg font-semibold">Total Revenue</h3>
          <p className="text-xl">{hospitalData.totalRevenue}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
