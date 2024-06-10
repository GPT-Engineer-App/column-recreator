import React, { useState } from "react";
import { MdDeleteOutline, MdOutlineVisibility, MdOutlineErrorOutline, MdFilterList, MdSort } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Drawer from "@/components/Drawer";

const Table = ({ toggleDrawer }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    toggleDrawer();
  };

  const data = [
    { id: 1, sender: "John Doe", amount: "€250.00", status: "Empfangen", ceoCheck: true },
    { id: 2, sender: "Jane Smith", amount: "€150.00", status: "Übertragen", ceoCheck: false },
    { id: 3, sender: "Michael Johnson", amount: "€350.00", status: "Kontiert", ceoCheck: false },
    { id: 4, sender: "Sarah Lee", amount: "€450.00", status: "Übertragen", ceoCheck: false },
    { id: 5, sender: "David Kim", amount: "€550.00", status: "Übertragen", ceoCheck: false },
  ];

  const renderStatus = (status) => {
    status = status.toUpperCase();
    let bgColor = "";
    let textColor = "text-white";

    switch (status) {
      case "EMPFANGEN":
        bgColor = "bg-blue-500";
        break;
      case "ÜBERTRAGEN":
        bgColor = "bg-yellow-500";
        break;
      case "KONTIERT":
        bgColor = "bg-green-500";
        break;
      default:
        bgColor = "bg-gray-500";
    }

    return (
      <div className="flex items-center space-x-2">
        <span className={`inline-block ${bgColor} ${textColor} px-2 py-1 rounded-full text-xs`}>
          {status}
        </span>
        {(status === "EMPFANGEN" || status === "ÜBERTRAGEN") && (
          <span
            className="inline-block bg-red-500 text-white px-2 py-1 rounded-full text-xs cursor-pointer"
            onClick={handleToggleDrawer}
          >
            ACTION REQUIRED
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="overflow-x-auto w-full max-w-none">
      <div className="flex justify-end space-x-2 mb-4">
        <Button variant="outline" size="sm" className="flex items-center space-x-1">
          <MdFilterList className="h-4 w-4" />
          <span>Filter</span>
        </Button>
        <Button variant="outline" size="sm" className="flex items-center space-x-1">
          <MdSort className="h-4 w-4" />
          <span>Sort</span>
        </Button>
      </div>
      <table className="min-w-full w-full bg-white table-auto w-full">
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
                  <MdDeleteOutline className="cursor-pointer" />
                  <MdOutlineVisibility className="cursor-pointer" />
                  {(row.status === "Empfangen" || row.status === "Übertragen") && (
                    <MdOutlineErrorOutline className="cursor-pointer text-red-500" />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Drawer isOpen={isDrawerOpen} onClose={handleToggleDrawer}>
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">Action Required</h2>
          <p>Please review the details and take necessary actions.</p>
        </div>
      </Drawer>
    </div>
  );
};

export default Table;