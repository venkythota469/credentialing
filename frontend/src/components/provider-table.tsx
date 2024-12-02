
// // 'use client'

// // import { useState, useEffect } from 'react'
// // import { useNavigate } from 'react-router-dom'
// // import axios from 'axios'
// // import './provider-table.css'
// // import EditIcon from '@mui/icons-material/Edit'
// // import DeleteIcon from '@mui/icons-material/Delete'
// // import SaveIcon from '@mui/icons-material/Save'
// // import AddBusinessIcon from '@mui/icons-material/AddBusiness'
// // import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material'
// // import { API_BASE_URL } from './config'
// // import AccountCircleIcon from '@mui/icons-material/AccountCircle';


// // interface Provider {
// //   providerId: string
// //   nuccGrouping: string
// //   providerType: string
// //   firstName: string
// //   lastName: string
// //   emailAddress: string
// //   npiNumber: string
// //   licenseNumber: string
// // }

// // export default function ProviderTable() {
// //   const [providers, setProviders] = useState<Provider[]>([])
// //   const [editingId, setEditingId] = useState<string | null>(null)
// //   const [openDialog, setOpenDialog] = useState(false)
// //   const [selectedProviderId, setSelectedProviderId] = useState('')
// //   const [name, setname] = useState('')
// //   const router = useNavigate()
  

// //   useEffect(() => {
// //     fetchProviders()
// //   }, [])

// //   const fetchProviders = async () => {
// //     try {
// //       const response = await axios.get(`${API_BASE_URL}/providers`)
// //       setProviders(response.data)
// //     } catch (error) {
// //       console.error('Error fetching providers:', error)
// //     }
// //   }

// //   const handleEdit = (providerId: string) => {
// //     setEditingId(providerId)
// //   }

// //   const handleSave = async (providerId: string) => {
// //     const provider = providers.find(p => p.providerId === providerId)
// //     if (!provider) return

// //     try {
// //       await axios.put(`${API_BASE_URL}/providers/${providerId}`, provider)
// //       setEditingId(null)
// //       fetchProviders()
// //     } catch (error) {
// //       console.error('Error updating provider:', error)
// //     }
// //   }

// //   const handleDelete = async (providerId: string) => {
// //     if (!confirm('Are you sure you want to delete this provider?')) return

// //     try {
// //       await axios.delete(`${API_BASE_URL}/providers/${providerId}`)
// //       fetchProviders()
// //     } catch (error) {
// //       console.error('Error deleting provider:', error)
// //     }
// //   }

// //   const handleChange = (providerId: string, field: keyof Provider, value: string) => {
// //     setProviders(providers.map(p => 
// //       p.providerId === providerId ? { ...p, [field]: value } : p
// //     ))
// //   }

// //   const handleOpenDialog = (providerId: string) => {
// //     setSelectedProviderId(providerId)
// //     setOpenDialog(true)
// //   }

// //   const handleCloseDialog = () => {
// //     setOpenDialog(false)
// //     setSelectedProviderId('')
// //     setname('')
// //   }

// //   const handleSubmitInsurance = async () => {
// //     try {
// //       await axios.post(`${API_BASE_URL}/insurance`, {
// //         providerId: selectedProviderId,
// //         name: name,
// //       })
// //       handleCloseDialog()
// //       router('/provider-table1') // Navigate to the insurance details page
// //     } catch (error) {
// //       console.error('Error submitting insurance:', error)
// //     }
// //   }

// //   return (
// //     <div className="provider-table-container">
// //       <h2>Registered Providers</h2>
// //       <table className="provider-table">
// //         <thead>
// //           <tr>
// //             <th>NUCC Grouping</th>
// //             <th>Provider Type</th>
// //             <th>First Name</th>
// //             <th>Last Name</th>
// //             <th>Email</th>
// //             <th>NPI Number</th>
// //             <th>License Number</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {providers.map(provider => (
// //             <tr key={provider.providerId}>
// //               <td>
// //                 {editingId === provider.providerId ? (
// //                   <input 
// //                     value={provider.nuccGrouping} 
// //                     onChange={(e) => handleChange(provider.providerId, 'nuccGrouping', e.target.value)}
// //                   />
// //                 ) : provider.nuccGrouping}
// //               </td>
// //               <td>
// //                 {editingId === provider.providerId ? (
// //                   <input 
// //                     value={provider.providerType} 
// //                     onChange={(e) => handleChange(provider.providerId, 'providerType', e.target.value)}
// //                   />
// //                 ) : provider.providerType}
// //               </td>
// //               <td>
// //                 {editingId === provider.providerId ? (
// //                   <input 
// //                     value={provider.firstName} 
// //                     onChange={(e) => handleChange(provider.providerId, 'firstName', e.target.value)}
// //                   />
// //                 ) : provider.firstName}
// //               </td>
// //               <td>
// //                 {editingId === provider.providerId ? (
// //                   <input 
// //                     value={provider.lastName} 
// //                     onChange={(e) => handleChange(provider.providerId, 'lastName', e.target.value)}
// //                   />
// //                 ) : provider.lastName}
// //               </td>
// //               <td>
// //                 {editingId === provider.providerId ? (
// //                   <input 
// //                     value={provider.emailAddress} 
// //                     onChange={(e) => handleChange(provider.providerId, 'emailAddress', e.target.value)}
// //                   />
// //                 ) : provider.emailAddress}
// //               </td>
// //               <td>
// //                 {editingId === provider.providerId ? (
// //                   <input 
// //                     value={provider.npiNumber} 
// //                     onChange={(e) => handleChange(provider.providerId, 'npiNumber', e.target.value)}
// //                   />
// //                 ) : provider.npiNumber}
// //               </td>
// //               <td>
// //                 {editingId === provider.providerId ? (
// //                   <input 
// //                     value={provider.licenseNumber} 
// //                     onChange={(e) => handleChange(provider.providerId, 'licenseNumber', e.target.value)}
// //                   />
// //                 ) : provider.licenseNumber}
// //               </td>
// //               <td>
// //                 {editingId === provider.providerId ? (
// //                   <Button onClick={() => handleSave(provider.providerId)}>
// //                     <SaveIcon />
// //                   </Button>
// //                 ) : (
// //                   <Button onClick={() => handleEdit(provider.providerId)}>
// //                     <EditIcon />
// //                   </Button>
// //                 )}
// //                 <Button  onClick={() => handleOpenDialog(provider.providerId)}>
// //                   <AddBusinessIcon />
// //                 </Button>
              
// //                 <Button 
// //                   variant="contained" 
// //                   color="primary" 
// //                   startIcon={<AccountCircleIcon />} 
// //                 // onClick={onClick}
// //                 >
// //                 </Button>

// //                   <Button onClick={() => handleDelete(provider.providerId)}>
// //                   <DeleteIcon />
// //                 </Button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>

// //       <Dialog open={openDialog} onClose={handleCloseDialog}>
// //         <DialogTitle>Add Insurance Company</DialogTitle>
// //         <DialogContent>
// //           <TextField
// //             autoFocus
// //             margin="dense"
// //             id="insuranceName"
// //             label="Insurance Company Name"
// //             type="text"
// //             fullWidth
// //             variant="standard"
// //             value={name}
// //             onChange={(e) => setname(e.target.value)}
// //           />
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleCloseDialog}>Cancel</Button>
// //           <Button onClick={handleSubmitInsurance}>Submit</Button>
// //         </DialogActions>
// //       </Dialog>
// //     </div>
// //   )
// // }






// 'use client'

// import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import  './provider-table.css'
// import EditIcon from '@mui/icons-material/Edit'
// import DeleteIcon from '@mui/icons-material/Delete'
// import SaveIcon from '@mui/icons-material/Save'
// import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle'
// import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material'
// import { API_BASE_URL } from './config'

// interface Provider {
//   providerId: string
//   nuccGrouping: string
//   providerType: string
//   addressType: string
//   birthDate: string
//   city: string
//   createdAt: string
//   deaNumber: string | null
//   emailAddress: string
//   emailType: string
//   firstName: string
//   hasNoDEA: boolean
//   hasNoIndividualNPI: boolean
//   hasNoProfessionalLicense: boolean
//   lastName: string
//   licenseNumber: string
//   licenseState: string
//   middleName: string | null
//   npiNumber: string
//   primaryPracticeState: string
//   socialSecurityNumber: string
//   state: string
//   street1: string
//   street2: string | null
//   suffix: string | null
//   updatedAt: string
//   zipCode: string
// }

// export default function ProviderTable() {
//   const [providers, setProviders] = useState<Provider[]>([])
//   const [editingId, setEditingId] = useState<string | null>(null)
//   const [openDialog, setOpenDialog] = useState(false)
//   const [selectedProviderId, setSelectedProviderId] = useState('')
//   const [name, setName] = useState('')
//   const router = useNavigate()
//   const [open, setOpen] = useState(false)
//   const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null)

//   useEffect(() => {
//     fetchProviders()
//   }, [])

//   const fetchProviders = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/providers`)
//       setProviders(response.data)
//     } catch (error) {
//       console.error('Error fetching providers:', error)
//     }
//   }

//   const fetchProviderDetails = async (providerId: string) => {
//     setOpen(true)
//     try {
//       const response = await axios.get(`${API_BASE_URL}/providers/${providerId}`)
//       setSelectedProvider(response.data)
//     } catch (error) {
//       console.error('Error fetching provider details:', error)
//     }
//   }

//   const handleClose = () => {
//     setOpen(false)
//     setSelectedProvider(null)
//   }

//   const handleEdit = (providerId: string) => {
//     setEditingId(providerId)
//   }

//   const handleSave = async (providerId: string) => {
//     const provider = providers.find(p => p.providerId === providerId)
//     if (!provider) return

//     try {
//       await axios.put(`${API_BASE_URL}/providers/${providerId}`, provider)
//       setEditingId(null)
//       fetchProviders()
//     } catch (error) {
//       console.error('Error updating provider:', error)
//     }
//   }

//   const handleDelete = async (providerId: string) => {
//     if (!confirm('Are you sure you want to delete this provider?')) return

//     try {
//       await axios.delete(`${API_BASE_URL}/providers/${providerId}`)
//       fetchProviders()
//     } catch (error) {
//       console.error('Error deleting provider:', error)
//     }
//   }

//   const handleChange = (providerId: string, field: keyof Provider, value: string) => {
//     setProviders(providers.map(p => 
//       p.providerId === providerId ? { ...p, [field]: value } : p
//     ))
//   }

//   const handleOpenDialog = (providerId: string) => {
//     setSelectedProviderId(providerId)
//     setOpenDialog(true)
//   }

//   const handleCloseDialog = () => {
//     setOpenDialog(false)
//     setSelectedProviderId('')
//     setName('')
//   }

//   const handleSubmitInsurance = async () => {
//     try {
//       await axios.post(`${API_BASE_URL}/insurance`, {
//         providerId: selectedProviderId,
//         name: name,
//       })
//       handleCloseDialog()
//       router('/provider-table1')
//     } catch (error) {
//       console.error('Error submitting insurance:', error)
//     }
//   }

//   const handleClick = () => {
//     router('/provider-table1'); // Navigate to the /another route
//   };



//   return (
//     <div className="provider-table-container">
//       <h2  style={{ marginLeft: '40%' }}>Registered Providers </h2>
//       <button onClick={handleClick} style={{ marginLeft: '80%' }}>
//       Go To Insurance Table
//       </button>
//       <table className="provider-table">
//         <thead>
//           <tr>
//             <th>NUCC Grouping</th>
//             <th>Provider Type</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>NPI Number</th>
//             <th>License Number</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {providers.map(provider => (
//             <tr key={provider.providerId}>
//               <td>
//                 {editingId === provider.providerId ? (
//                   <input 
//                     value={provider.nuccGrouping} 
//                     onChange={(e) => handleChange(provider.providerId, 'nuccGrouping', e.target.value)}
//                   />
//                 ) : provider.nuccGrouping}
//               </td>
//               <td>
//                 {editingId === provider.providerId ? (
//                   <input 
//                     value={provider.providerType} 
//                     onChange={(e) => handleChange(provider.providerId, 'providerType', e.target.value)}
//                   />
//                 ) : provider.providerType}
//               </td>
//               <td>
//                 {editingId === provider.providerId ? (
//                   <input 
//                     value={provider.firstName} 
//                     onChange={(e) => handleChange(provider.providerId, 'firstName', e.target.value)}
//                   />
//                 ) : provider.firstName}
//               </td>
//               <td>
//                 {editingId === provider.providerId ? (
//                   <input 
//                     value={provider.lastName} 
//                     onChange={(e) => handleChange(provider.providerId, 'lastName', e.target.value)}
//                   />
//                 ) : provider.lastName}
//               </td>
//               <td>
//                 {editingId === provider.providerId ? (
//                   <input 
//                     value={provider.emailAddress} 
//                     onChange={(e) => handleChange(provider.providerId, 'emailAddress', e.target.value)}
//                   />
//                 ) : provider.emailAddress}
//               </td>
//               <td>
//                 {editingId === provider.providerId ? (
//                   <input 
//                     value={provider.npiNumber} 
//                     onChange={(e) => handleChange(provider.providerId, 'npiNumber', e.target.value)}
//                   />
//                 ) : provider.npiNumber}
//               </td>
//               <td>
//                 {editingId === provider.providerId ? (
//                   <input 
//                     value={provider.licenseNumber} 
//                     onChange={(e) => handleChange(provider.providerId, 'licenseNumber', e.target.value)}
//                   />
//                 ) : provider.licenseNumber}
//               </td>
//               <td>

//               <Button 
//                   variant="contained" 
//                   color="primary" 
//                   startIcon={<AccountCircleIcon />} 
//                   onClick={() => fetchProviderDetails(provider.providerId)}
//                 />
                
//                 {editingId === provider.providerId ? (
//                   <Button onClick={() => handleSave(provider.providerId)}>
//                     <SaveIcon />
//                   </Button>
//                 ) : (
//                   <Button onClick={() => handleEdit(provider.providerId)}>
//                     <EditIcon />
//                   </Button>
//                 )}
//                 <Button onClick={() => handleOpenDialog(provider.providerId)}>
//                   <HealthAndSafetyIcon/>
//                 </Button>
                
//                 <Button onClick={() => handleDelete(provider.providerId)}>
//                   <DeleteIcon />
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Provider Details</DialogTitle>
//         <DialogContent>
//           {selectedProvider ? (
//             <div>
//               <p><strong>First Name:</strong> {selectedProvider.firstName}</p>
//               <p><strong>Last Name:</strong> {selectedProvider.lastName}</p>
//               <p><strong>Email:</strong> {selectedProvider.emailAddress}</p>
//               <p><strong>Provider Type:</strong> {selectedProvider.providerType}</p>
//               <p><strong>NUCC Grouping:</strong> {selectedProvider.nuccGrouping}</p>
//               <p><strong>License Number:</strong> {selectedProvider.licenseNumber}</p>
//               <p><strong>NPI Number:</strong> {selectedProvider.npiNumber}</p>
//               <p><strong>Address:</strong> 
//                 {`${selectedProvider.street1}, ${selectedProvider.city}, ${selectedProvider.state}, ${selectedProvider.zipCode}`}
//               </p>
//               <p><strong>Primary Practice State:</strong> {selectedProvider.primaryPracticeState}</p>
//               <p><strong>Birth Date:</strong> {new Date(selectedProvider.birthDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

//             </div>
//           ) : (
//             <p>Loading...</p>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <Dialog open={openDialog} onClose={handleCloseDialog}>
//         <DialogTitle>Add Insurance Company</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="insuranceName"
//             label="Insurance Company Name"
//             type="text"
//             fullWidth
//             variant="standard"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog}>Cancel</Button>
//           <Button onClick={handleSubmitInsurance}>Submit</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   )
// }











// // 'use client'

// // import { useState, useEffect } from 'react'
// // import { useNavigate } from 'react-router-dom' 
// // import axios from 'axios'
// // import {
// //   Button,
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// //   TextField,
// //   Box,
// //   Typography,
// //   Paper,
// //   Snackbar,
// //   Alert,
// // } from '@mui/material'
// // import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
// // import EditIcon from '@mui/icons-material/Edit'
// // import DeleteIcon from '@mui/icons-material/Delete'
// // import AddBusinessIcon from '@mui/icons-material/AddBusiness'
// // import { styled } from '@mui/material/styles'
// // import { API_BASE_URL } from './config'

// // interface Provider {
// //   providerId: string
// //   nuccGrouping: string
// //   providerType: string
// //   firstName: string
// //   lastName: string
// //   emailAddress: string
// //   npiNumber: string
// //   licenseNumber: string
// // }

// // const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
// //   '& .MuiDataGrid-root': {
// //     border: 'none',
// //   },
// //   '& .MuiDataGrid-cell': {
// //     borderBottom: `1px solid ${theme.palette.mode === 'dark' ? '#303030' : '#f0f0f0'}`,
// //   },
// //   '& .MuiDataGrid-columnHeaders': {
// //     backgroundColor: theme.palette.mode === 'dark' ? '#303030' : '#f0f0f0',
// //     color: theme.palette.text.primary,
// //     fontWeight: 'bold',
// //   },
// //   '& .MuiDataGrid-virtualScroller': {
// //     backgroundColor: theme.palette.background.paper,
// //   },
// //   '& .MuiDataGrid-footerContainer': {
// //     backgroundColor: theme.palette.mode === 'dark' ? '#303030' : '#f0f0f0',
// //     color: theme.palette.text.primary,
// //     borderTop: '1px solid',
// //     borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ccc',
// //   },
// //   '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
// //     color: `${theme.palette.text.primary} !important`,
// //   },
// // }))

// // export default function ProviderTable() {
// //   const [providers, setProviders] = useState<Provider[]>([])
// //   const [editingId, setEditingId] = useState<string | null>(null)
// //   const [openDialog, setOpenDialog] = useState(false)
// //   const [selectedProviderId, setSelectedProviderId] = useState('')
// //   const [name, setName] = useState('')
// //   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' })
// //   const router = useNavigate()

// //   useEffect(() => {
// //     fetchProviders()
// //   }, [])

// //   const fetchProviders = async () => {
// //     try {
// //       const response = await axios.get(`${API_BASE_URL}/providers`)
// //       setProviders(response.data)
// //     } catch (error) {
// //       console.error('Error fetching providers:', error)
// //       setSnackbar({ open: true, message: 'Failed to fetch providers', severity: 'error' })
// //     }
// //   }

// //   const handleEdit = (providerId: string) => {
// //     setEditingId(providerId)
// //   }

// //   const handleSave = async (providerId: string) => {
// //     const provider = providers.find(p => p.providerId === providerId)
// //     if (!provider) return

// //     try {
// //       await axios.put(`${API_BASE_URL}/providers/${providerId}`, provider)
// //       setEditingId(null)
// //       fetchProviders()
// //       setSnackbar({ open: true, message: 'Provider updated successfully', severity: 'success' })
// //     } catch (error) {
// //       console.error('Error updating provider:', error)
// //       setSnackbar({ open: true, message: 'Failed to update provider', severity: 'error' })
// //     }
// //   }

// //   const handleDelete = async (providerId: string) => {
// //     if (!confirm('Are you sure you want to delete this provider?')) return

// //     try {
// //       await axios.delete(`${API_BASE_URL}/providers/${providerId}`)
// //       fetchProviders()
// //       setSnackbar({ open: true, message: 'Provider deleted successfully', severity: 'success' })
// //     } catch (error) {
// //       console.error('Error deleting provider:', error)
// //       setSnackbar({ open: true, message: 'Failed to delete provider', severity: 'error' })
// //     }
// //   }

// //   const handleChange = (providerId: string, field: keyof Provider, value: string) => {
// //     setProviders(providers.map(p => 
// //       p.providerId === providerId ? { ...p, [field]: value } : p
// //     ))
// //   }

// //   const handleOpenDialog = (providerId: string) => {
// //     setSelectedProviderId(providerId)
// //     setOpenDialog(true)
// //   }

// //   const handleCloseDialog = () => {
// //     setOpenDialog(false)
// //     setSelectedProviderId('')
// //     setName('')
// //   }

// //   const handleSubmitInsurance = async () => {
// //     try {
// //       await axios.post(`${API_BASE_URL}/insurance`, {
// //         providerId: selectedProviderId,
// //         name: name,
// //       })
// //       handleCloseDialog()
// //       router('/provider-table1') // Navigate to the insurance details page
// //       setSnackbar({ open: true, message: 'Insurance added successfully', severity: 'success' })
// //     } catch (error) {
// //       console.error('Error submitting insurance:', error)
// //       setSnackbar({ open: true, message: 'Failed to add insurance', severity: 'error' })
// //     }
// //   }

// //   const columns: GridColDef[] = [
// //     { field: 'nuccGrouping', headerName: 'NUCC Grouping', width: 150, editable: true },
// //     { field: 'providerType', headerName: 'Provider Type', width: 150, editable: true },
// //     { field: 'firstName', headerName: 'First Name', width: 120, editable: true },
// //     { field: 'lastName', headerName: 'Last Name', width: 120, editable: true },
// //     { field: 'emailAddress', headerName: 'Email', width: 200, editable: true },
// //     { field: 'npiNumber', headerName: 'NPI Number', width: 120, editable: true },
// //     { field: 'licenseNumber', headerName: 'License Number', width: 150, editable: true },
// //     {
// //       field: 'actions',
// //       headerName: 'Actions',
// //       width: 180,
// //       renderCell: (params: GridRenderCellParams) => (
// //         <Box>
// //           {editingId === params.row.providerId ? (
// //             <Button onClick={() => handleSave(params.row.providerId)} color="primary" size="small">
// //               Save
// //             </Button>
// //           ) : (
// //             <Button onClick={() => handleEdit(params.row.providerId)} color="primary" size="small" startIcon={<EditIcon />}>
// //               Edit
// //             </Button>
// //           )}
// //           <Button onClick={() => handleDelete(params.row.providerId)} color="secondary" size="small" startIcon={<DeleteIcon />}>
// //             Delete
// //           </Button>
// //           <Button onClick={() => handleOpenDialog(params.row.providerId)} color="primary" size="small" startIcon={<AddBusinessIcon />}>
// //             Add Insurance
// //           </Button>
// //         </Box>
// //       ),
// //     },
// //   ]

// //   return (
// //     <Box sx={{ height: 600, width: '100%' }}>
// //       <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
// //         <Typography variant="h4" gutterBottom component="div">
// //           Registered Providers
// //         </Typography>
// //         <StyledDataGrid
// //           rows={providers}
// //           columns={columns}
// //           // eslint-disable-next-line @typescript-eslint/no-explicit-any
// //           {...({ pageSize: 5 } as any)}
// //           rowsPerPageOptions={[5, 10, 20]}
// //           checkboxSelection
// //           disableSelectionOnClick
// //           getRowId={(row) => row.providerId}
// //           onCellEditCommit={(params: { id: string; field: string; value: string }) => handleChange(params.id as string, params.field as keyof Provider, params.value)}
// //         />
// //       </Paper>

// //       <Dialog open={openDialog} onClose={handleCloseDialog}>
// //         <DialogTitle>Add Insurance Company</DialogTitle>
// //         <DialogContent>
// //           <TextField
// //             autoFocus
// //             margin="dense"
// //             id="insuranceName"
// //             label="Insurance Company Name"
// //             type="text"
// //             fullWidth
// //             variant="outlined"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //           />
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleCloseDialog}>Cancel</Button>
// //           <Button onClick={handleSubmitInsurance} variant="contained" color="primary">Submit</Button>
// //         </DialogActions>
// //       </Dialog>

// //       <Snackbar
// //         open={snackbar.open}
// //         autoHideDuration={6000}
// //         onClose={() => setSnackbar({ ...snackbar, open: false })}
// //       >
// //         <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
// //           {snackbar.message}
// //         </Alert>
// //       </Snackbar>
// //     </Box>
// //   )
// // }





'use client'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './provider-table.css'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, useMediaQuery, useTheme, Card, CardContent, Typography } from '@mui/material'
import { API_BASE_URL } from './config'

interface Provider {
  providerId: string
  nuccGrouping: string
  providerType: string
  addressType: string
  birthDate: string
  city: string
  createdAt: string
  deaNumber: string | null
  emailAddress: string
  emailType: string
  firstName: string
  hasNoDEA: boolean
  hasNoIndividualNPI: boolean
  hasNoProfessionalLicense: boolean
  lastName: string
  licenseNumber: string
  licenseState: string
  middleName: string | null
  npiNumber: string
  primaryPracticeState: string
  socialSecurityNumber: string
  state: string
  street1: string
  street2: string | null
  suffix: string | null
  updatedAt: string
  zipCode: string
}

export default function ProviderTable() {
  const [providers, setProviders] = useState<Provider[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedProviderId, setSelectedProviderId] = useState('')
  const [name, setName] = useState('')
  const router = useNavigate()
  const [open, setOpen] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  useEffect(() => {
    fetchProviders()
  }, [])

  const fetchProviders = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/providers`)
      setProviders(response.data)
    } catch (error) {
      console.error('Error fetching providers:', error)
    }
  }

  const fetchProviderDetails = async (providerId: string) => {
    setOpen(true)
    try {
      const response = await axios.get(`${API_BASE_URL}/providers/${providerId}`)
      setSelectedProvider(response.data)
    } catch (error) {
      console.error('Error fetching provider details:', error)
    }
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedProvider(null)
  }

  const handleEdit = (providerId: string) => {
    setEditingId(providerId)
  }

  const handleSave = async (providerId: string) => {
    const provider = providers.find(p => p.providerId === providerId)
    if (!provider) return

    try {
      await axios.put(`${API_BASE_URL}/providers/${providerId}`, provider)
      setEditingId(null)
      fetchProviders()
    } catch (error) {
      console.error('Error updating provider:', error)
    }
  }

  const handleDelete = async (providerId: string) => {
    if (!confirm('Are you sure you want to delete this provider?')) return

    try {
      await axios.delete(`${API_BASE_URL}/providers/${providerId}`)
      fetchProviders()
    } catch (error) {
      console.error('Error deleting provider:', error)
    }
  }

  const handleChange = (providerId: string, field: keyof Provider, value: string) => {
    setProviders(providers.map(p => 
      p.providerId === providerId ? { ...p, [field]: value } : p
    ))
  }

  const handleOpenDialog = (providerId: string) => {
    setSelectedProviderId(providerId)
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setSelectedProviderId('')
    setName('')
  }

  const handleSubmitInsurance = async () => {
    try {
      await axios.post(`${API_BASE_URL}/insurance`, {
        providerId: selectedProviderId,
        name: name,
      })
      handleCloseDialog()
      router('/provider-table1')
    } catch (error) {
      console.error('Error submitting insurance:', error)
    }
  }

  const handleClick = () => {
    router('/provider-table1') // Navigate to the /another route
  }

  const MobileProviderCards = () => (
    <div>
      {providers.map((provider) => (
        <Card key={provider.providerId} style={{ marginBottom: '1rem' }}>
          <CardContent>
            <Typography variant="h6">{`${provider.firstName} ${provider.lastName}`}</Typography>
            <Typography color="textSecondary">{provider.providerType}</Typography>
            <Typography variant="body2">{`Email: ${provider.emailAddress}`}</Typography>
            <Typography variant="body2">{`NPI: ${provider.npiNumber}`}</Typography>
            <Typography variant="body2">{`License: ${provider.licenseNumber}`}</Typography>
            <div style={{ marginTop: '1rem' }}>
              <Button
                size="small"
                startIcon={<AccountCircleIcon />}
                onClick={() => fetchProviderDetails(provider.providerId)}
              >
                Details
              </Button>
              {editingId === provider.providerId ? (
                <Button size="small" startIcon={<SaveIcon />} onClick={() => handleSave(provider.providerId)}>
                  Save
                </Button>
              ) : (
                <Button size="small" startIcon={<EditIcon />} onClick={() => handleEdit(provider.providerId)}>
                  Edit
                </Button>
              )}
              <Button
                size="small"
                startIcon={<HealthAndSafetyIcon />}
                onClick={() => handleOpenDialog(provider.providerId)}
              >
                Insurance
              </Button>
              <Button size="small" startIcon={<DeleteIcon />} onClick={() => handleDelete(provider.providerId)}>
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <div className="provider-table-container">
      <h2 style={{ marginLeft: '40%' }}>Registered Providers </h2>
      <button onClick={handleClick} style={{ marginLeft: '80%' }}>
        Go To Insurance Table
      </button>
      {isMobile ? (
        <MobileProviderCards />
      ) : (
        <table className="provider-table">
          <thead>
            <tr>
              <th>NUCC Grouping</th>
              <th>Provider Type</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>NPI Number</th>
              <th>License Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {providers.map(provider => (
              <tr key={provider.providerId}>
                <td>
                  {editingId === provider.providerId ? (
                    <input 
                      value={provider.nuccGrouping} 
                      onChange={(e) => handleChange(provider.providerId, 'nuccGrouping', e.target.value)}
                    />
                  ) : provider.nuccGrouping}
                </td>
                <td>
                  {editingId === provider.providerId ? (
                    <input 
                      value={provider.providerType} 
                      onChange={(e) => handleChange(provider.providerId, 'providerType', e.target.value)}
                    />
                  ) : provider.providerType}
                </td>
                <td>
                  {editingId === provider.providerId ? (
                    <input 
                      value={provider.firstName} 
                      onChange={(e) => handleChange(provider.providerId, 'firstName', e.target.value)}
                    />
                  ) : provider.firstName}
                </td>
                <td>
                  {editingId === provider.providerId ? (
                    <input 
                      value={provider.lastName} 
                      onChange={(e) => handleChange(provider.providerId, 'lastName', e.target.value)}
                    />
                  ) : provider.lastName}
                </td>
                <td>
                  {editingId === provider.providerId ? (
                    <input 
                      value={provider.emailAddress} 
                      onChange={(e) => handleChange(provider.providerId, 'emailAddress', e.target.value)}
                    />
                  ) : provider.emailAddress}
                </td>
                <td>
                  {editingId === provider.providerId ? (
                    <input 
                      value={provider.npiNumber} 
                      onChange={(e) => handleChange(provider.providerId, 'npiNumber', e.target.value)}
                    />
                  ) : provider.npiNumber}
                </td>
                <td>
                  {editingId === provider.providerId ? (
                    <input 
                      value={provider.licenseNumber} 
                      onChange={(e) => handleChange(provider.providerId, 'licenseNumber', e.target.value)}
                    />
                  ) : provider.licenseNumber}
                </td>
                <td>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    startIcon={<AccountCircleIcon />} 
                    onClick={() => fetchProviderDetails(provider.providerId)}
                  />
                  
                  {editingId === provider.providerId ? (
                    <Button onClick={() => handleSave(provider.providerId)}>
                      <SaveIcon />
                    </Button>
                  ) : (
                    <Button onClick={() => handleEdit(provider.providerId)}>
                      <EditIcon />
                    </Button>
                  )}
                  <Button onClick={() => handleOpenDialog(provider.providerId)}>
                    <HealthAndSafetyIcon/>
                  </Button>
                  
                  <Button onClick={() => handleDelete(provider.providerId)}>
                    <DeleteIcon />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Provider Details</DialogTitle>
        <DialogContent>
          {selectedProvider ? (
            <div>
              <p><strong>First Name:</strong> {selectedProvider.firstName}</p>
              <p><strong>Last Name:</strong> {selectedProvider.lastName}</p>
              <p><strong>Email:</strong> {selectedProvider.emailAddress}</p>
              <p><strong>Provider Type:</strong> {selectedProvider.providerType}</p>
              <p><strong>NUCC Grouping:</strong> {selectedProvider.nuccGrouping}</p>
              <p><strong>License Number:</strong> {selectedProvider.licenseNumber}</p>
              <p><strong>NPI Number:</strong> {selectedProvider.npiNumber}</p>
              <p><strong>Address:</strong> 
                {`${selectedProvider.street1}, ${selectedProvider.city}, ${selectedProvider.state}, ${selectedProvider.zipCode}`}
              </p>
              <p><strong>Primary Practice State:</strong> {selectedProvider.primaryPracticeState}</p>
              <p><strong>Birth Date:</strong> {new Date(selectedProvider.birthDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add Insurance Company</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="insuranceName"
            label="Insurance Company Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmitInsurance}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

