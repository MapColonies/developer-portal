import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridColumnMenu, GridColumnMenuProps, GridColumnHeaderParams } from '@mui/x-data-grid';
import rowsTable from './data.json';

const rows = rowsTable;
const columns: GridColDef[] = [
  { 
    field: 'phrase', 
    width: 150,
    headerAlign: 'center',
    align: 'center',
    renderHeader: () => (<strong>{'Word / Phrase'}</strong>),
  },
  {
    field: 'class',
    width: 150,
    headerAlign: 'center',
    align: 'center',
    renderHeader: () => (<strong>{'Class'}</strong>),
  },
  {
    field: 'type',
    width: 150,
    headerAlign: 'center',
    align: 'center',
    renderHeader: () => (<strong>{'Type'}</strong>),
  },
  {
    field: 'operator',
    width: 110,
    headerAlign: 'center',
    align: 'center',
    renderHeader: () => (<strong>{'Operator'}</strong>),
  },
  {
    field: 'plural',
    width: 80,
    headerAlign: 'center',
    align: 'center',
    renderHeader: () => (<strong>{'Plural'}</strong>),
  }
];


function CustomColumnMenu(props: GridColumnMenuProps) {
  return (
    <GridColumnMenu
      {...props}
      slots={{
        // Hide `columnMenuColumnsItem`
        columnMenuColumnsItem: null,
      }}
    />
  );
}

export default function DataGridSpeicalPhrases() {
  return (
    <Box sx={{ 
      height: 1000, 
      width: '70%'
    }}>
      <DataGrid
        slots={{ columnMenu: CustomColumnMenu }} 
        style={{ backgroundColor: 'white'}}
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
