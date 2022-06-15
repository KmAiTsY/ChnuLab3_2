import React from "react";

const TableItem = ({ arrayList, alertFunction, deleteUser }) => {
  return (
    <>
      {arrayList.map((i, index) => {
        return (
          <tr key={index}>
            <td>{i.name}</td>
            <td>{i.secondName}</td>
            <td>{i.salary}</td>
            <td>{i.gender}</td>
            <td
              onClick={() => {
                alertFunction(i.name, index + 1);
              }}
            >
              Show Message
            </td>
            <td
              onClick={() => {
                deleteUser(index + 1);
              }}
            >
              Delete User
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TableItem;
