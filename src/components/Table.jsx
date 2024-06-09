import React from "react";
import { FaTrash, FaEye, FaExclamationCircle } from "react-icons/fa";

const Table = () => {
  const data = [
    { id: 1, sender: "John Doe", amount: "€250.00", status: "Empfangen", ceoCheck: true },
    { id: 2, sender: "Jane Smith", amount: "€150.00", status: "Übertragen", ceoCheck: false },
    { id: 3, sender: "Michael Johnson", amount: "€350.00", status: "Kontiert", ceoCheck: false },
    { id: 4, sender: "Sarah Lee", amount: "€450.00", status: "Übertragen", ceoCheck: false },
    { id: 5, sender: "David Kim", amount: "€550.00", status: "Übertragen", ceoCheck: false },
  ];

  const renderStatus = (status) => {
    if (status === "Empfangen" || status === "Übertragen") {
      return (
        <div className="flex items-center">
          <span className="mr-2">{status}</span>
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">ACTION REQUIRED</span>
        </div>
      );
    }
    return <span>{status}</span>;
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white table-auto">
        <thead>
          <tr>
            <th className="py-4 px-6 border-b">ID</th>
            <th className="py-4 px-6 border-b">Sender</th>
            <th className="py-4 px-6 border-b">Amount</th>
            <th className="py-4 px-6 border-b">Status</th>
            <th className="py-4 px-6 border-b">CEO-Check</th>
            <th className="py-4 px-6 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id} className={`border-b ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200`}>
              <td className="py-4 px-6">{row.id}</td>
              <td className="py-4 px-6">{row.sender}</td>
              <td className="py-4 px-6">{row.amount}</td>
              <td className="py-4 px-6">{renderStatus(row.status)}</td>
              <td className="py-4 px-6">
                <input type="checkbox" checked={row.ceoCheck} readOnly />
              </td>
              <td className="py-4 px-6">
                <div className="flex space-x-2">
                  <FaTrash className="cursor-pointer" />
                  <FaEye className="cursor-pointer" />
                  {(row.status === "Empfangen" || row.status === "Übertragen") && (
                    <FaExclamationCircle className="cursor-pointer text-red-500" />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;