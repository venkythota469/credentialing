import { Request, Response } from 'express';
import Provider from '../models/Provider';
import InsuranceCompany from '../models/insuranceCompany';

export const createInsurance = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, providerId } = req.body;

    // Validate required fields
    if (!name || !providerId) {
      res.status(400).json({ error: 'Both name and providerId are required' });
      return;
    }

    // Check if the provider exists
    const existingProvider = await Provider.findByPk(providerId);

    if (!existingProvider) {
      res.status(404).json({ error: `Provider with ID ${providerId} not found` });
      return;
    }

    // Create a new InsuranceCompany
    const newInsuranceCompany = await InsuranceCompany.create({
      name,
      providerId, // Associate with the existing provider
    });

    // Send a success response
    res.status(201).json({
      message: 'Insurance company created successfully',
      insuranceCompany: newInsuranceCompany,
    });
  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${(error as Error).message}`,
    });
  }
};


export const getAllInsuranceCompanies = async (req: Request, res: Response): Promise<void> => {
    try {
      const insuranceCompanies = await InsuranceCompany.findAll({
        include: [
          {
            model: Provider,
            as: 'provider', // Ensure this matches the alias you used in the model
            required: false, // If the provider is not mandatory, this can be false
            attributes: [ 'firstName', 'lastName'], // Select the required fields from Provider model
          },
        ],
      });
  
      // If no insurance companies are found
      if (!insuranceCompanies.length) {
        res.status(404).json({ error: 'No insurance companies found' });
        return;
      }
  
      // Map the insurance companies with additional provider data
      const mappedInsuranceCompanies = insuranceCompanies.map((insurance: any) => ({
        id: insurance.id,
        name: insurance.name,
        providerFirstName: insurance.provider ? insurance.provider.firstName : null, // Check if provider exists
        providerLastName: insurance.provider ? insurance.provider.lastName : null,
      }));
  
      res.status(200).json({
        message: 'Insurance companies retrieved successfully',
        insuranceCompanies: mappedInsuranceCompanies,
      });
    } catch (error) {
      res.status(500).json({
        error: `Internal server error: ${(error as Error).message}`,
      });
    }
  };

  

  export const getInsuranceById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params; // Get the ID from the request parameters
  
      // Find the insurance company by ID
      const insuranceCompany = await InsuranceCompany.findByPk(id);
  
      // Check if the insurance company exists
      if (!insuranceCompany) {
        res.status(404).json({ error: `Insurance company with ID ${id} not found` });
        return;
      }
  
      res.status(200).json({
        message: 'Insurance company retrieved successfully',
        insuranceCompany,
      });
    } catch (error) {
      res.status(500).json({
        error: `Internal server error: ${(error as Error).message}`,
      });
    }
  };
  




  export const updateInsurance = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params; // ID of the insurance company to update
      const { name, providerId } = req.body;
  
      const insuranceCompany = await InsuranceCompany.findByPk(id);
  
      if (!insuranceCompany) {
        res.status(404).json({ error: `Insurance company with ID ${id} not found` });
        return;
      }
  
      if (name) insuranceCompany.name = name;
      if (providerId) {
        const existingProvider = await Provider.findByPk(providerId);
        if (!existingProvider) {
          res.status(404).json({ error: `Provider with ID ${providerId} not found` });
          return;
        }
        insuranceCompany.providerId = providerId;
      }
  
      await insuranceCompany.save();
  
      res.status(200).json({
        message: 'Insurance company updated successfully',
        insuranceCompany,
      });
    } catch (error) {
      res.status(500).json({
        error: `Internal server error: ${(error as Error).message}`,
      });
    }
  };
  


  export const deleteInsurance = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params; // ID of the insurance company to delete
  
      const insuranceCompany = await InsuranceCompany.findByPk(id);
  
      if (!insuranceCompany) {
        res.status(404).json({ error: `Insurance company with ID ${id} not found` });
        return;
      }
  
      await insuranceCompany.destroy();
  
      res.status(200).json({
        message: 'Insurance company deleted successfully',
      });
    } catch (error) {
      res.status(500).json({
        error: `Internal server error: ${(error as Error).message}`,
      });
    }
  };
  