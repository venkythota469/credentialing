

import express, { Router } from 'express';
import * as providerController from '../controllers/providerController';


const router: Router = express.Router();

// Create a new provider
router.post('/providers', providerController.createProvider);


// Get all providers
router.get('/providers', providerController.getAllProviders);


// Get a single provider by ID
router.get('/providers/:providerId', providerController.getProviderById);

// Update a provider
router.put('/providers/:providerId', providerController.updateProvider);

// Delete a provider
router.delete('/providers/:providerId', providerController.deleteProvider);

export default router;
