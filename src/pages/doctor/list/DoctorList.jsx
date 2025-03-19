import { Link } from "react-router-dom";

const DoctorList = ({ data: DoctorData }) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg md:text-xl font-bold">Doctor List</h1>
        <span>
          <p>Hello</p>
        </span>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full border-separate border-spacing-0 border border-gray-300 min-w-full">
          <thead className="bg-gray-100 text-gray-700 text-xs md:text-sm">
            <tr className="border-b border-gray-300">
              <th className="p-3 border border-gray-300 text-left">Name</th>
              <th className="p-3 border border-gray-300 text-left">
                Specialization
              </th>
              <th className="p-3 border border-gray-300 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {DoctorData.length > 0 ? (
              DoctorData.map((item) => (
                <tr
                  key={item.email}
                  className="border-b border-gray-300 hover:bg-blue-50 transition"
                >
                  <td className="p-3 border border-gray-300">{item.name}</td>
                  <td className="p-3 border border-gray-300">
                    {item.specialization}
                  </td>
                  <td className="p-3 border border-gray-300">{item.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="text-center p-4 text-sm text-gray-500"
                >
                  No Doctors Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorList;
