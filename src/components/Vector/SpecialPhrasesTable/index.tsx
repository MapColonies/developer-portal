import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridColumnMenu, GridColumnMenuProps } from '@mui/x-data-grid';
import rowsTable from './data.json';


const rows = rowsTable;
const columns: GridColDef[] = [
  { 
    field: 'phrase', 
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    renderHeader: () => (<strong>{'Word / Phrase'}</strong>),
  },
  {
    field: 'class',
    flex: 1,
    headerAlign: 'center',
    align: 'center',
    renderHeader: () => (<strong>{'Key'}</strong>),
  },
  {
    field: 'type',
    headerName: 'Value',
    flex: 1,
    headerAlign: 'center',
    align: 'center',
    renderHeader: () => (<strong>{'Value'}</strong>),
  },
  {
    field: 'operator',
    flex: 1,
    headerAlign: 'center',
    align: 'center',
    renderHeader: () => (<strong>{'Operator'}</strong>),
  },
  {
    field: 'plural',
    flex: 1,
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


export default function DataGridSpecialPhrases() {
  return (
    <Box sx={{ width: '100%'}}>
      <DataGrid
          slots={{ columnMenu: CustomColumnMenu }} 
          rows={rows}
          columns={columns}
          getRowId={row => row.phrase}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 25,
              },
            },
          }}
          pageSizeOptions={[25, 50, 100]}
          disableRowSelectionOnClick
      />
    </Box>
  );
}
