

import { Request, Response } from 'express';
import Provider from '../models/Provider';


// Create a new provider
export const createProvider = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      nuccGrouping,
      providerType,
      firstName,
      middleName,
      lastName,
      suffix,
      addressType,
      street1,
      street2,
      city,
      state,
      zipCode,
      primaryPracticeState,
      birthDate,
      emailType,
      emailAddress,
      socialSecurityNumber,
      npiNumber,
      deaNumber,
      licenseState,
      licenseNumber,
      hasNoIndividualNPI,
      hasNoDEA,
      hasNoProfessionalLicense,
    } = req.body;

    // Validate required fields
    if (
      !nuccGrouping || 
      !providerType || 
      !firstName || 
      !lastName || 
      !addressType || 
      !street1 || 
      !city || 
      !state || 
      !zipCode || 
      !primaryPracticeState || 
      !birthDate || 
      !emailType || 
      !emailAddress || 
      !socialSecurityNumber || 
      !npiNumber || 
      !licenseState || 
      !licenseNumber
    ) {
      res.status(400).json({ error: 'All required fields must be provided' });
      return;
    }

    // Check if the email address already exists
    const existingProvider = await Provider.findOne({ where: { emailAddress } });
    if (existingProvider) {
      res.status(400).json({ error: 'Provider with this email address already exists' });
      return;
    }

    // Check if the social security number already exists
    const existingSSN = await Provider.findOne({ where: { socialSecurityNumber } });
    if (existingSSN) {
      res.status(400).json({ error: 'Provider with this Social Security Number already exists' });
      return;
    }

    // Check if the NPI number already exists
    const existingNPI = await Provider.findOne({ where: { npiNumber } });
    if (existingNPI) {
      res.status(400).json({ error: 'Provider with this NPI number already exists' });
      return;
    }

    // Create a new provider
    const newProvider = await Provider.create({
      nuccGrouping,
      providerType,
      firstName,
      middleName,
      lastName,
      suffix,
      addressType,
      street1,
      street2,
      city,
      state,
      zipCode,
      primaryPracticeState,
      birthDate,
      emailType,
      emailAddress,
      socialSecurityNumber,
      npiNumber,
      deaNumber,
      licenseState,
      licenseNumber,
      hasNoIndividualNPI,
      hasNoDEA,
      hasNoProfessionalLicense,
    });

    // Send a success response
    res.status(201).json({
      message: 'Provider created successfully',
      provider: newProvider,
    });
  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${(error as Error).message}`,
    });
  }
};





// Get all providers
export const getAllProviders = async (req: Request, res: Response): Promise<void> => {
  try {
    const providers = await Provider.findAll();
    res.status(200).json(providers);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Get a single provider by ID
export const getProviderById = async (req: Request, res: Response): Promise<void> => {
  try {
    const provider = await Provider.findByPk(req.params.providerId);
    if (provider) {
      res.status(200).json(provider);
    } else {
      res.status(404).json({ message: 'Provider not found' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Update a provider
export const updateProvider = async (req: Request, res: Response): Promise<void> => {
  try {
    const [updated] = await Provider.update(req.body, {
      where: { providerId: req.params.providerId },
    });
    if (updated) {
      const updatedProvider = await Provider.findByPk(req.params.providerId);
      res.status(200).json(updatedProvider);
    } else {
      res.status(404).json({ message: 'Provider not found' });
    }
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

// Delete a provider
export const deleteProvider = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleted = await Provider.destroy({
      where: { providerId: req.params.providerId},
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Provider not found' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

