import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import data from './data.json';

const columns: GridColDef[] = [
  { 
    field: 'phrase', 
    headerName: 'Phrase', 
    width: 150,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'class',
    headerName: 'Class',
    width: 150,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 150,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'operator',
    headerName: 'Operator',
    width: 110,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'plural',
    headerName: 'Plural',
    width: 80,
    headerAlign: 'center',
    align: 'center'
  }
];

const rows = data;

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 1000, width: '70%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={row => row.phrase}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 100,
            },
          },
        }}
        pageSizeOptions={[100]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
