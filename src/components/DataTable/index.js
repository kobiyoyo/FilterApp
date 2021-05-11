import React from "react";
import { Table } from 'rsuite';

const DataTable = ({ data }) => {
  const { Column, HeaderCell, Cell, Pagination } = Table;
  return (
    <div>
    <Table
      virtualized
      height={400}
      data={data}
      onRowClick={data => {
        console.log(data);
      }}
    >
      <Column width={70} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={130}>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>

      <Column width={130}>
        <HeaderCell>Username</HeaderCell>
        <Cell dataKey="username" />
      </Column>

      <Column width={200}>
        <HeaderCell>Street</HeaderCell>
        <Cell>{rowData =>  rowData.address.street}</Cell>
      </Column>
      
      <Column width={200}>
        <HeaderCell>City</HeaderCell>
        <Cell>{rowData =>  rowData.address.city}</Cell>
      </Column>

      <Column width={200}>
        <HeaderCell>Website</HeaderCell>
        <Cell dataKey="website" />
      </Column>

      <Column width={200}>
        <HeaderCell>Phone</HeaderCell>
        <Cell dataKey="phone" />
      </Column>

      <Column width={200}>
        <HeaderCell>Company Name</HeaderCell>
        <Cell>{rowData =>  rowData.company.name}</Cell>
      </Column>
    </Table>
  </div>
  )
};

export default DataTable;
