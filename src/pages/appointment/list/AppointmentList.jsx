import { FaEdit, FaExclamationCircle, FaPlus } from "react-icons/fa";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useCancelAppointmentMutation } from "../../../Slice/appointmentApi/AppointmentApiSlice";
import Swal from "sweetalert2";
const AppointmentListing = ({ data: appointmentData }) => {
  const [cancelAppointment] = useCancelAppointmentMutation();

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this appointment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        cancelAppointment(id)
          .then((res) => {
            if (res?.data?.status) {
              toast.success("Appointment cancelled successfully");
            }
          })
          .catch((err) => {
            console.error("Error cancelling appointment:", err);
            toast.error("Failed to cancel the appointment");
          });
      }
    });
  };
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg md:text-xl font-bold">Appointment List</h1>
        <span
          className="cursor-pointer p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          title="Add-New-Appointment"
        >
          <Link to="/book-appointments">
            <FaPlus />
          </Link>
        </span>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full border-separate border-spacing-0 border border-gray-300 min-w-full">
          <thead className="bg-gray-100 text-gray-700 text-xs md:text-sm">
            <tr className="border-b border-gray-300">
              <th className="p-3 border border-gray-300 text-left">Doctor</th>
              <th className="p-3 border border-gray-300 text-left">Patient</th>
              <th className="p-3 border border-gray-300 text-left">Date</th>
              <th className="p-3 border border-gray-300 text-left">Time</th>
              <th className="p-3 border border-gray-300 text-left">Status</th>
              <th className="p-3 border border-gray-300 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointmentData.length > 0 ? (
              appointmentData.map((item) => (
                <tr
                  key={item._id}
                  className="border-b border-gray-300 hover:bg-blue-50 transition"
                >
                  <td className="p-3 border border-gray-300">
                    {item.doctorId.name}
                  </td>
                  <td className="p-3 border border-gray-300">
                    {item.patientId.name}
                  </td>
                  <td className="p-3 border border-gray-300">
                    {format(new Date(item.date), "dd-MM-yyyy")}
                  </td>
                  <td className="p-3 border border-gray-300">{item.time}</td>
                  <td
                    className={`p-3 border border-gray-300 text-center font-semibold rounded-md 
                    ${item.status === "cancelled" ? "text-red-500" : ""}
                    ${item.status === "booked" ? "text-green-500" : ""}
                    `}
                  >
                    {item.status}
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleCancel(item._id)}
                        className="p-2 flex items-center justify-center bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                        title="Cancel Appointment"
                      >
                        <FaExclamationCircle />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="text-center p-4 text-sm text-gray-500"
                >
                  No Appointments Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentListing;
