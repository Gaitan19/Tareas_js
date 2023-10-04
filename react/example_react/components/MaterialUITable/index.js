import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Modal from '../Menu/modal';
import { people } from '@/constants/people';

const MaterialUITable = () => {
  const [isClient, setIsClient] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setIsClient(true);
  }, []);
  const [visible, setVisible] = useState(false);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 60,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              console.log('di click', cellValues);
              const { row } = cellValues;
              setData(row);
              setVisible(true);
            }}
          >
            print
          </Button>
        );
      },
    },
  ];

  const rows = [];

  people.forEach((person) => {
    rows.push({
      id: person.id,
      lastName: person.lastName,
      firstName: person.lastName,
      age: person.age,
    });
  });

  const options = {
    filter: true,
    // selectableRows: 'multiple',
    filterType: 'dropdown',
    responsive: 'vertical',
    rowsPerPage: 5,
  };

  const componentPDF = useRef();

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: 'PeopleData',
    onAfterPrint: () => alert('Data saved in pdf'),
  });

  return (
    <>
      <div>
        <Button color="success" onClick={generatePDF}>
          PDF
        </Button>
      </div>
      <div style={{ height: 400, width: '100%' }} ref={componentPDF}>
        {isClient && (
          <DataGrid
            rows={rows}
            columns={columns}
            options={options}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            // checkboxSelection
            disableRowSelectionOnClick
            disableColumnSelector
          />
        )}
        {visible && (
          <Modal visible={visible} setVisible={setVisible}>
            <h2>{data.firstName}</h2>
            <h2>{data.age}</h2>
          </Modal>
        )}
      </div>
    </>
  );
};

export default MaterialUITable;
