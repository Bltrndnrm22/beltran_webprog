import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

const users = [
  { id: 1, firstName: 'Jon', lastName: 'Snow', email: 'jon.snow@example.com', role: 'Admin', status: 'Active' },
  { id: 2, firstName: 'Cersei', lastName: 'Lannister', email: 'cersei@example.com', role: 'Editor', status: 'Active' },
  { id: 3, firstName: 'Jaime', lastName: 'Lannister', email: 'jaime@example.com', role: 'Editor', status: 'Pending' },
  { id: 4, firstName: 'Arya', lastName: 'Stark', email: 'arya@example.com', role: 'Viewer', status: 'Active' },
  { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', email: 'dany@example.com', role: 'Admin', status: 'Review' },
  { id: 6, firstName: 'Ferrara', lastName: 'Clifford', email: 'ferrara@example.com', role: 'Viewer', status: 'Pending' },
];

const activeCount = users.filter((user) => user.status === 'Active').length;
const pendingCount = users.filter((user) => user.status === 'Pending').length;

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'firstName', headerName: 'First Name', flex: 1, minWidth: 140, editable: true },
  { field: 'lastName', headerName: 'Last Name', flex: 1, minWidth: 140, editable: true },
  { field: 'email', headerName: 'Email', flex: 1.3, minWidth: 220 },
  { field: 'role', headerName: 'Role', width: 120 },
  {
    field: 'status',
    headerName: 'Status',
    width: 130,
    renderCell: (params) => (
      <Chip
        label={params.value}
        size="small"
        color={params.value === 'Active' ? 'success' : 'warning'}
        variant="outlined"
      />
    ),
  },
];

const cardSx = {
  border: '1px solid',
  borderColor: 'divider',
  borderRadius: 2,
  boxShadow: '0 12px 30px rgba(15, 23, 42, 0.06)',
};

function UsersPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Card sx={cardSx}>
        <CardContent>
          <Typography variant="overline" color="text.secondary">
            Users
          </Typography>
          <Typography variant="h4" sx={{ mt: 0.5, fontWeight: 800 }}>
            Users Management
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 700 }}>
            Review user records, roles, and account status in a searchable grid-style table.
          </Typography>
        </CardContent>
      </Card>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, minmax(0, 1fr))' },
          gap: 2,
        }}
      >
        <Card sx={cardSx}>
          <CardContent>
            <Stack direction="row" justifyContent="space-between">
              <Box>
                <Typography variant="body2" color="text.secondary">Total Users</Typography>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>{users.length}</Typography>
              </Box>
              <Avatar sx={{ bgcolor: '#2563eb' }}><GroupIcon /></Avatar>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={cardSx}>
          <CardContent>
            <Stack direction="row" justifyContent="space-between">
              <Box>
                <Typography variant="body2" color="text.secondary">Active</Typography>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>{activeCount}</Typography>
              </Box>
              <Avatar sx={{ bgcolor: '#16a34a' }}><VerifiedUserIcon /></Avatar>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={cardSx}>
          <CardContent>
            <Stack direction="row" justifyContent="space-between">
              <Box>
                <Typography variant="body2" color="text.secondary">Pending</Typography>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>{pendingCount}</Typography>
              </Box>
              <Avatar sx={{ bgcolor: '#ea580c' }}><PendingActionsIcon /></Avatar>
            </Stack>
          </CardContent>
        </Card>
      </Box>

      <Card sx={cardSx}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            User List
          </Typography>
          <Box sx={{ height: 500, width: '100%' }}>
            <DataGrid
              rows={users}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default UsersPage;
