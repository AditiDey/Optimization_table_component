import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@material-ui/core';

const sampleData = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' },
  { id: 4, name: 'D' },
  { id: 5, name: 'E' },
];

const TableComponent = () => {
  const [data, setData] = React.useState(sampleData);

  const handleButtonClick = () => {
    const additionalData = [
      { id: 6, name: 'F' },
      { id: 7, name: 'G' },
      { id: 8, name: 'H' },
      { id: 9, name: 'I' },
      { id: 10, name: 'J' },
    ];
    const newData = [...data, ...additionalData];
    setData(newData);
  };

  return (
    <div>
      <h1>Demo-Project</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button onClick={handleButtonClick}>Show 15 Data</Button>
      </TableContainer>
    </div>
  );
};

export default TableComponent;
