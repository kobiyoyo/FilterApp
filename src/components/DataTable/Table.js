import React from "react";

const DataTable = ({ data }) => {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.username}</td>
            <td>{row.email}</td>
            <td>{row.address.street }</td>
            <td>{row.phone}</td>
            <td>{row.website}</td>
            <td>{row.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
