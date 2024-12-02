// 'use client'

// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import './provider-table.css'
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   CircularProgress,
//   Snackbar,
// } from '@mui/material'
// import {  Delete as DeleteIcon } from '@mui/icons-material'
// import {API_BASE_URL} from './config';

// interface InsuranceCompany {
//   id: number
//   name: string
//   providerFirstName: string
//   providerLastName: string
// }



// export default function InsuranceTable() {
//   const [companies, setCompanies] = useState<InsuranceCompany[]>([])
//   const [loading, setLoading] = useState(true)
//   const [openDialog, setOpenDialog] = useState(false)
//   const [editingCompany, setEditingCompany] = useState<InsuranceCompany | null>(null)
//   const [errors, setErrors] = useState<Partial<InsuranceCompany>>({})
//   const [snackbar, setSnackbar] = useState({ open: false, message: '' })

//   useEffect(() => {
//     fetchCompanies()
//   }, [])

//   const fetchCompanies = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/insurance1`)
//       if (Array.isArray(response.data) && response.data.length > 0) {
//         setCompanies(response.data)
//       } else if (response.data && Array.isArray(response.data.insuranceCompanies)) {
//         setCompanies(response.data.insuranceCompanies)
//       } else {
//         setCompanies([])
//       }
//       setSnackbar({ open: true, message: response.data.message || 'Companies fetched successfully' })
//     } catch (error) {
//       console.error('Failed to fetch companies:', error)
//       setSnackbar({ open: true, message: 'Failed to fetch companies' })
//       setCompanies([])
//     } finally {
//       setLoading(false)
//     }
//   }



//   const handleDelete = async (id: number) => {
//     try {
//       const response = await axios.delete(`${API_BASE_URL}/insurance/${id}`)
//       setCompanies(companies.filter(company => company.id !== id))
//       setSnackbar({ open: true, message: response.data.message || 'Company deleted successfully' })
//     } catch (error) {
//       console.error('Failed to delete company:', error)
//       setSnackbar({ open: true, message: 'Failed to delete company' })
//     }
//   }

//   const validateForm = (): boolean => {
//     const newErrors: Partial<InsuranceCompany> = {}
//     if (!editingCompany?.name) newErrors.name = 'Name is required'
//     if (!editingCompany?.providerFirstName) newErrors.providerFirstName = 'Provider First Name is required'
//     if (!editingCompany?.providerLastName) newErrors.providerLastName = 'Provider Last Name is required'
//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSave = async () => {
//     if (editingCompany && validateForm()) {
//       try {
//         const response = await axios.put(`${API_BASE_URL}/insurance/${editingCompany.id}`, editingCompany)
//         const updatedCompany = response.data.insuranceCompany || response.data
//         setCompanies(companies.map(company => 
//           company.id === updatedCompany.id ? updatedCompany : company
//         ))
//         setOpenDialog(false)
//         setEditingCompany(null)
//         setSnackbar({ open: true, message: response.data.message || 'Company updated successfully' })
//       } catch (error) {
//         console.error('Failed to update company:', error)
//         setSnackbar({ open: true, message: 'Failed to update company' })
//       }
//     }
//   }

//   if (loading) {
//     return <CircularProgress />
//   }

//   return (
//     <div className="p-4">
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>ID</TableCell>
//               <TableCell>Insurance Company</TableCell>
//               <TableCell>Provider First Name</TableCell>
//               <TableCell>Provider Last Name</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {companies.map((company) => (
//               <TableRow key={company.id}>
//                 <TableCell>{company.id}</TableCell>
//                 <TableCell>{company.name}</TableCell>
//                 <TableCell>{company.providerFirstName}</TableCell>
//                 <TableCell>{company.providerLastName}</TableCell>
//                 <TableCell>
                 
//                   <IconButton onClick={() => handleDelete(company.id)} color="secondary" aria-label="Delete">
//                     <DeleteIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
//         <DialogTitle>Edit Insurance Company</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Name"
//             fullWidth
//             value={editingCompany?.name || ''}
//             onChange={(e) => setEditingCompany(prev => prev ? {...prev, name: e.target.value} : null)}
//             error={!!errors.name}
//             helperText={errors.name}
//           />
//           <TextField
//             margin="dense"
//             label="Provider First Name"
//             fullWidth
//             value={editingCompany?.providerFirstName || ''}
//             onChange={(e) => setEditingCompany(prev => prev ? {...prev, providerFirstName: e.target.value} : null)}
//             error={!!errors.providerFirstName}
//             helperText={errors.providerFirstName}
//           />
//           <TextField
//             margin="dense"
//             label="Provider Last Name"
//             fullWidth
//             value={editingCompany?.providerLastName || ''}
//             onChange={(e) => setEditingCompany(prev => prev ? {...prev, providerLastName: e.target.value} : null)}
//             error={!!errors.providerLastName}
//             helperText={errors.providerLastName}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
//           <Button onClick={handleSave}>Save</Button>
//         </DialogActions>
//       </Dialog>

//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={6000}
//         onClose={() => setSnackbar({ ...snackbar, open: false })}
//         message={snackbar.message}
//       />
//     </div>
//   )
// }







// 'use client'

// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { API_BASE_URL } from './config'
// import {
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Snackbar,
//   Alert,
//   Paper,
//   Typography,
//   Box,
// } from '@mui/material'
// import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
// import DeleteIcon from '@mui/icons-material/Delete'
// //import EditIcon from '@mui/icons-material/Edit'
// import { styled } from '@mui/material/styles'

// interface InsuranceCompany {
//   id: number
//   name: string
//   providerFirstName: string
//   providerLastName: string
// }

// const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
//   '& .MuiDataGrid-root': {
//     border: 'none',
//   },
//   '& .MuiDataGrid-cell': {
//     borderBottom: `1px solid ${theme.palette.mode === 'dark' ? '#303030' : '#f0f0f0'}`,
//   },
//   '& .MuiDataGrid-columnHeaders': {
//     backgroundColor: theme.palette.mode === 'dark' ? '#303030' : '#f0f0f0',
//     color: theme.palette.text.primary,
//     fontWeight: 'bold',
//   },
//   '& .MuiDataGrid-virtualScroller': {
//     backgroundColor: theme.palette.background.paper,
//   },
//   '& .MuiDataGrid-footerContainer': {
//     backgroundColor: theme.palette.mode === 'dark' ? '#303030' : '#f0f0f0',
//     color: theme.palette.text.primary,
//     borderTop: '1px solid',
//     borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ccc',
//   },
//   '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
//     color: `${theme.palette.text.primary} !important`,
//   },
// }))

// export default function InsuranceTable() {
//   const [companies, setCompanies] = useState<InsuranceCompany[]>([])
//   const [loading, setLoading] = useState(true)
//   const [openDialog, setOpenDialog] = useState(false)
//   const [editingCompany, setEditingCompany] = useState<InsuranceCompany | null>(null)
//   const [errors, setErrors] = useState<Partial<InsuranceCompany>>({})
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' })

//   useEffect(() => {
//     fetchCompanies()
//   }, [])

//   const fetchCompanies = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/insurance1`)
//       if (Array.isArray(response.data) && response.data.length > 0) {
//         setCompanies(response.data)
//       } else if (response.data && Array.isArray(response.data.insuranceCompanies)) {
//         setCompanies(response.data.insuranceCompanies)
//       } else {
//         setCompanies([])
//       }
//       setSnackbar({ open: true, message: response.data.message || 'Companies fetched successfully', severity: 'success' })
//     } catch (error) {
//       console.error('Failed to fetch companies:', error)
//       setSnackbar({ open: true, message: 'Failed to fetch companies', severity: 'error' })
//       setCompanies([])
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleDelete = async (id: number) => {
//     try {
//       const response = await axios.delete(`${API_BASE_URL}/insurance/${id}`)
//       setCompanies(companies.filter(company => company.id !== id))
//       setSnackbar({ open: true, message: response.data.message || 'Company deleted successfully', severity: 'success' })
//     } catch (error) {
//       console.error('Failed to delete company:', error)
//       setSnackbar({ open: true, message: 'Failed to delete company', severity: 'error' })
//     }
//   }

//   const validateForm = (): boolean => {
//     const newErrors: Partial<InsuranceCompany> = {}
//     if (!editingCompany?.name) newErrors.name = 'Name is required'
//     if (!editingCompany?.providerFirstName) newErrors.providerFirstName = 'Provider First Name is required'
//     if (!editingCompany?.providerLastName) newErrors.providerLastName = 'Provider Last Name is required'
//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSave = async () => {
//     if (editingCompany && validateForm()) {
//       try {
//         const response = await axios.put(`${API_BASE_URL}/insurance/${editingCompany.id}`, editingCompany)
//         const updatedCompany = response.data.insuranceCompany || response.data
//         setCompanies(companies.map(company => 
//           company.id === updatedCompany.id ? updatedCompany : company
//         ))
//         setOpenDialog(false)
//         setEditingCompany(null)
//         setSnackbar({ open: true, message: response.data.message || 'Company updated successfully', severity: 'success' })
//       } catch (error) {
//         console.error('Failed to update company:', error)
//         setSnackbar({ open: true, message: 'Failed to update company', severity: 'error' })
//       }
//     }
//   }

//   const columns: GridColDef[] = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'name', headerName: 'Insurance Company', width: 200 },
//     { field: 'providerFirstName', headerName: 'Provider First Name', width: 180 },
//     { field: 'providerLastName', headerName: 'Provider Last Name', width: 180 },
//     {
//       field: 'actions',
//       headerName: 'Actions',
//       width: 120,
//       renderCell: (params: GridRenderCellParams) => (
//         <Box>
//           {/* <Button
//             onClick={() => {
//               setEditingCompany(params.row)
//               setOpenDialog(true)
//             }}
//             color="primary"
//             size="small"
//             startIcon={<EditIcon />}
//           >
//             Edit
//           </Button> */}
//           <Button
//             onClick={() => handleDelete(params.row.id)}
//             color="secondary"
//             size="small"
//             startIcon={<DeleteIcon />}
//           >
//             Delete
//           </Button>
//         </Box>
//       ),
//     },
//   ]

//   return (
//     <Box sx={{ height: 400, width: '100%' }}>
//       <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
//         <Typography variant="h4" gutterBottom component="div">
//           Insurance Companies
//         </Typography>
//         {/* <StyledDataGrid
//           rows={companies}
//           columns={columns}
//           pageSize={5}
//           rowsPerPageOptions={[5, 10, 20]}
//           checkboxSelection
//           disableSelectionOnClick
//           loading={loading}
//         /> */}

//           <StyledDataGrid
//           rows={companies}
//           columns={columns}
//           // eslint-disable-next-line @typescript-eslint/no-explicit-any
//           {...({ pageSize: 5 } as any)}
//           rowsPerPageOptions={[5, 10, 20]}
//           checkboxSelection
//           disableSelectionOnClick
//           loading={loading}
//           />

//       </Paper>

//       <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
//         <DialogTitle>Edit Insurance Company</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Name"
//             fullWidth
//             value={editingCompany?.name || ''}
//             onChange={(e) => setEditingCompany(prev => prev ? {...prev, name: e.target.value} : null)}
//             error={!!errors.name}
//             helperText={errors.name}
//           />
//           <TextField
//             margin="dense"
//             label="Provider First Name"
//             fullWidth
//             value={editingCompany?.providerFirstName || ''}
//             onChange={(e) => setEditingCompany(prev => prev ? {...prev, providerFirstName: e.target.value} : null)}
//             error={!!errors.providerFirstName}
//             helperText={errors.providerFirstName}
//           />
//           <TextField
//             margin="dense"
//             label="Provider Last Name"
//             fullWidth
//             value={editingCompany?.providerLastName || ''}
//             onChange={(e) => setEditingCompany(prev => prev ? {...prev, providerLastName: e.target.value} : null)}
//             error={!!errors.providerLastName}
//             helperText={errors.providerLastName}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
//           <Button onClick={handleSave} variant="contained" color="primary">Save</Button>
//         </DialogActions>
//       </Dialog>

//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={6000}
//         onClose={() => setSnackbar({ ...snackbar, open: false })}
//       >
//         <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </Box>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_BASE_URL } from './config'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
  Paper,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  Grid,
} from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import { styled } from '@mui/material/styles'

interface InsuranceCompany {
  id: number
  name: string
  providerFirstName: string
  providerLastName: string
}

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  '& .MuiDataGrid-root': {
    border: 'none',
  },
  '& .MuiDataGrid-cell': {
    borderBottom: `1px solid ${theme.palette.mode === 'dark' ? '#303030' : '#f0f0f0'}`,
  },
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: theme.palette.mode === 'dark' ? '#303030' : '#f0f0f0',
    color: theme.palette.text.primary,
    fontWeight: 'bold',
  },
  '& .MuiDataGrid-virtualScroller': {
    backgroundColor: theme.palette.background.paper,
  },
  '& .MuiDataGrid-footerContainer': {
    backgroundColor: theme.palette.mode === 'dark' ? '#303030' : '#f0f0f0',
    color: theme.palette.text.primary,
    borderTop: '1px solid',
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ccc',
  },
  '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
    color: `${theme.palette.text.primary} !important`,
  },
}))

const MobileCard = ({ company, onDelete }: { company: InsuranceCompany; onDelete: (id: number) => void }) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h6">{company.name}</Typography>
      <Typography variant="body2">ID: {company.id}</Typography>
      <Typography variant="body2">Provider: {company.providerFirstName} {company.providerLastName}</Typography>
      <Button
        onClick={() => onDelete(company.id)}
        color="secondary"
        size="small"
        startIcon={<DeleteIcon />}
        sx={{ mt: 1 }}
      >
        Delete
      </Button>
    </CardContent>
  </Card>
)

export default function InsuranceTable() {
  const [companies, setCompanies] = useState<InsuranceCompany[]>([])
  const [loading, setLoading] = useState(true)
  const [openDialog, setOpenDialog] = useState(false)
  const [editingCompany, setEditingCompany] = useState<InsuranceCompany | null>(null)
  const [errors, setErrors] = useState<Partial<InsuranceCompany>>({})
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' })

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  useEffect(() => {
    fetchCompanies()
  }, [])

  const fetchCompanies = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/insurance1`)
      if (Array.isArray(response.data) && response.data.length > 0) {
        setCompanies(response.data)
      } else if (response.data && Array.isArray(response.data.insuranceCompanies)) {
        setCompanies(response.data.insuranceCompanies)
      } else {
        setCompanies([])
      }
      setSnackbar({ open: true, message: response.data.message || 'Companies fetched successfully', severity: 'success' })
    } catch (error) {
      console.error('Failed to fetch companies:', error)
      setSnackbar({ open: true, message: 'Failed to fetch companies', severity: 'error' })
      setCompanies([])
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/insurance/${id}`)
      setCompanies(companies.filter(company => company.id !== id))
      setSnackbar({ open: true, message: response.data.message || 'Company deleted successfully', severity: 'success' })
    } catch (error) {
      console.error('Failed to delete company:', error)
      setSnackbar({ open: true, message: 'Failed to delete company', severity: 'error' })
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<InsuranceCompany> = {}
    if (!editingCompany?.name) newErrors.name = 'Name is required'
    if (!editingCompany?.providerFirstName) newErrors.providerFirstName = 'Provider First Name is required'
    if (!editingCompany?.providerLastName) newErrors.providerLastName = 'Provider Last Name is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSave = async () => {
    if (editingCompany && validateForm()) {
      try {
        const response = await axios.put(`${API_BASE_URL}/insurance/${editingCompany.id}`, editingCompany)
        const updatedCompany = response.data.insuranceCompany || response.data
        setCompanies(companies.map(company => 
          company.id === updatedCompany.id ? updatedCompany : company
        ))
        setOpenDialog(false)
        setEditingCompany(null)
        setSnackbar({ open: true, message: response.data.message || 'Company updated successfully', severity: 'success' })
      } catch (error) {
        console.error('Failed to update company:', error)
        setSnackbar({ open: true, message: 'Failed to update company', severity: 'error' })
      }
    }
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Insurance Company', width: 200 },
    { field: 'providerFirstName', headerName: 'Provider First Name', width: 180 },
    { field: 'providerLastName', headerName: 'Provider Last Name', width: 180 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params: GridRenderCellParams) => (
        <Box>
          <Button
            onClick={() => handleDelete(params.row.id)}
            color="secondary"
            size="small"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ]

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom component="div">
          Insurance Companies
        </Typography>
        {isMobile ? (
          <Grid container spacing={2}>
            {companies.map((company) => (
              <Grid item xs={12} key={company.id}>
                <MobileCard company={company} onDelete={handleDelete} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <StyledDataGrid
            rows={companies}
            columns={columns}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {...({ pageSize: 5 } as any)}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
            disableSelectionOnClick
            loading={loading}
          />
        )}
      </Paper>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Edit Insurance Company</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            value={editingCompany?.name || ''}
            onChange={(e) => setEditingCompany(prev => prev ? {...prev, name: e.target.value} : null)}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            margin="dense"
            label="Provider First Name"
            fullWidth
            value={editingCompany?.providerFirstName || ''}
            onChange={(e) => setEditingCompany(prev => prev ? {...prev, providerFirstName: e.target.value} : null)}
            error={!!errors.providerFirstName}
            helperText={errors.providerFirstName}
          />
          <TextField
            margin="dense"
            label="Provider Last Name"
            fullWidth
            value={editingCompany?.providerLastName || ''}
            onChange={(e) => setEditingCompany(prev => prev ? {...prev, providerLastName: e.target.value} : null)}
            error={!!errors.providerLastName}
            helperText={errors.providerLastName}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary">Save</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

