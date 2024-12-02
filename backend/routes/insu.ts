import express from 'express';
import { createInsurance, getAllInsuranceCompanies,getInsuranceById, updateInsurance, deleteInsurance } from '../controllers/insuranceController';

const router = express.Router();

router.post('/insurance', createInsurance);
router.get('/insurance1', getAllInsuranceCompanies);
router.get('/insurance/:id', getInsuranceById);  
router.put('/insurance/:id', updateInsurance);
router.delete('/insurance/:id', deleteInsurance);

export default router;
