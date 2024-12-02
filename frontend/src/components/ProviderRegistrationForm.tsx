
'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import './re.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {API_BASE_URL} from './config'

const formSchema = z.object({
  nuccGrouping: z.string().min(1, "NUCC Grouping is required"),
  providerType: z.string().min(1, "Provider Type is required"),
  firstName: z.string().min(1, "First Name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last Name is required"),
  suffix: z.string().optional(),
  addressType: z.string().min(1, "Address Type is required"),
  street1: z.string().min(1, "Street 1 is required"),
  street2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Invalid ZIP code"),
  primaryPracticeState: z.string().min(1, "Primary Practice State is required"),
  birthDate: z.string().min(1, "Birth Date is required"),
  emailType: z.string().min(1, "Email Type is required"),
  emailAddress: z.string().email("Invalid email address"),
  emailAddressConfirmation: z.string().email("Invalid email address"),
  socialSecurityNumber: z.string().regex(/^\d{3}-\d{2}-\d{4}$/, "Invalid SSN"),
  npiNumber: z.string().regex(/^\d{10}$/, "Invalid NPI Number"),
  hasNoNPI: z.boolean(),
  deaNumber: z.string().optional(),
  licenseState: z.string().min(1, "License State is required"),
  licenseNumber: z.string().min(1, "License Number is required"),
  hasNoIndividualNPI: z.boolean(),
  hasNoProfessionalLicense: z.boolean(),
}).refine((data) => data.emailAddress === data.emailAddressConfirmation, {
  message: "Email addresses must match",
  path: ["emailAddressConfirmation"],
})

type FormSchema = z.infer<typeof formSchema>;

export default function ProviderRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormSchema>({
    resolver: zodResolver(formSchema)
  })

  const hasNoNPI = watch('hasNoNPI')

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    setIsSubmitting(true)
    try {
      const response = await axios.post(`${API_BASE_URL}/providers`, data);
    
      if (response.status !== 201) {
        throw new Error(response.data.error || 'An error occurred');
      }
      alert('Form submitted successfully');
      navigate('/provider-table');
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.error || error.message || 'Something went wrong');
      } else if (error instanceof Error) {
        alert(error.message || 'Something went wrong');
      } else {
        alert('Something went wrong');
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form 
  onSubmit={handleSubmit(onSubmit)} 
  className="provider-form" 
  style={{
    backgroundImage: `url('https://www.pyramidsglobal.com/wp-content/uploads/2024/05/Medical-Credentialing-A-Step-by-Step-Guide-for-Providers.webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
<h1 style={{ textAlign: 'center', margin: '4' }}>
  Provider Registration
</h1>

    
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="nuccGrouping">NUCC Grouping *</label>
          <select id="nuccGrouping" {...register('nuccGrouping')}>
            <option value="">Please Select</option>
            <option value="allopathic_osteopathic">Allopathic & Osteopathic Physicians</option>
            <option value="ambulatory_health_care">Ambulatory Health Care Facilities</option>
            <option value="behavioral_health">Behavioral Health & Social Service Providers</option>
            <option value="chiropractic">Chiropractic Providers</option>
            <option value="dental">Dental Providers</option>
            <option value="eye_vision">Eye and Vision Service Providers</option>
            <option value="hospitals">Hospitals</option>
            <option value="laboratory_pathology">Laboratory & Pathology Service Providers</option>
            <option value="nursing">Nursing Service Providers</option>
            <option value="pharmacy">Pharmacy Service Providers</option>
            <option value="respiratory_developmental">Respiratory, Developmental, Rehabilitative, and Restorative Service Providers</option>
            <option value="speech_language_hearing">Speech, Language, and Hearing Providers</option>
          </select>
          {errors.nuccGrouping && (
          <p className="error">{errors.nuccGrouping.message}</p>)}
        </div>

        <div className="form-group">
          <label htmlFor="providerType">Provider Type *</label>
          <select id="providerType" {...register('providerType')}>
            <option value="">Please Select</option>
            <option value="osteopathic_doctor">Osteopathic Doctor (DO)</option>
            <option value="hospitalist">Hospitalist</option>
            <option value="medical_doctor">Medical Doctor (MD)</option>
            <option value="provider_type_not_listed">Provider Type Not Listed</option>
          </select>
          {errors.providerType && (<p className="error">{errors.providerType.message}</p>)}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input id="firstName" type="text" {...register('firstName')} />
          {errors.firstName && (<p className="error">{errors.firstName.message}</p>)}
        </div>

        <div className="form-group">
          <label htmlFor="middleName">Middle Name</label>
          <input id="middleName" type="text" {...register('middleName')} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input id="lastName" type="text" {...register('lastName')} />
          {errors.lastName && (<p className="error">{errors.lastName.message}</p>)}
        </div>

        <div className="form-group">
          <label htmlFor="suffix">Suffix</label>
          <select id="suffix" {...register('suffix')}>
            <option value="">--</option>
            <option value="Jr">Jr</option>
            <option value="Sr">Sr</option>
            <option value="II">II</option>
            <option value="III">III</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="addressType">Address Type *</label>
        <select id="addressType" {...register('addressType')}>
          <option value="">Please Select</option>
          <option value="home">Home</option>
          <option value="correspondence">Correspondence</option>
          <option value="primary_practice">Primary Practice</option>
          <option value="other">Other</option>
        </select>
        {errors.addressType && (<p className="error">{errors.addressType.message}</p>)}
      </div>

      <div className="form-group">
        <label htmlFor="street1">Street 1 *</label>
        <input id="street1" type="text" {...register('street1')} />
        {errors.street1 && ( <p className="error">{errors.street1.message}</p>)}
      </div>

      <div className="form-group">
        <label htmlFor="street2">Street 2</label>
        <input id="street2" type="text" {...register('street2')} />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="city">City *</label>
          <input id="city" type="text" {...register('city')} />
          {errors.city && (<p className="error">{errors.city.message}</p>)}
        </div>

        <div className="form-group">
          <label htmlFor="state">State *</label>
          <select id="state" {...register('state')}>
            <option value="">Select</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          {errors.state && (<p className="error">{errors.state.message}</p>)}
        </div>

        <div className="form-group">
          <label htmlFor="zipCode">ZIP Code *</label>
          <input id="zipCode" type="text" {...register('zipCode')} />
          {errors.zipCode && (<p className="error">{errors.zipCode.message}</p>)}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="primaryPracticeState">Primary Practice State *</label>
        <select id="primaryPracticeState" {...register('primaryPracticeState')}>
          <option value="">Select only one</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
        {errors.primaryPracticeState && (<p className="error">{errors.primaryPracticeState.message}</p>)}
      </div>

      <div className="form-group">
        <label htmlFor="birthDate">Birth Date *</label>
        <input id="birthDate" type="date" {...register('birthDate')} />
        {errors.birthDate && (<p className="error">{errors.birthDate.message}</p>)}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="emailType">E-mail Type</label>
          <select id="emailType" {...register('emailType')}>
            <option value="">Please Select</option>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="both">Both</option>
          </select>
          {errors.emailType && (<p className="error">{errors.emailType.message}</p>)}
        </div>

        <div className="form-group">
          <label htmlFor="emailAddress">E-mail Address *</label>
          <input id="emailAddress" type="email" {...register('emailAddress')} />
          {errors.emailAddress && (<p className="error">{errors.emailAddress.message}</p>)}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="emailAddressConfirmation">E-mail Address (confirmation) *</label>
        <input id="emailAddressConfirmation" type="email" {...register('emailAddressConfirmation')} />
        {errors.emailAddressConfirmation && (<p className="error">{errors.emailAddressConfirmation.message}</p>)}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="socialSecurityNumber">Social Security Number *</label>
          <input id="socialSecurityNumber" type="text" {...register('socialSecurityNumber')} pattern="\d{3}-\d{2}-\d{4}"  placeholder="___-__-____" />
          {errors.socialSecurityNumber && (<p className="error">{errors.socialSecurityNumber.message}</p>)}
        </div>

        <div className="form-group">
          <label htmlFor="deaNumber">DEA Number *</label>
          <input id="deaNumber" type="text" {...register('deaNumber')} placeholder='AB1234563' />
          {errors.deaNumber && (<p className="error">{errors.deaNumber.message}</p>)}
        </div>
      </div>

      <div className="form-group checkbox">
        <input id="hasNoNPI" type="checkbox" {...register('hasNoNPI')} />
        <label htmlFor="hasNoNPI">I do not have an NPI Number.</label>
      </div>

      {!hasNoNPI && (
        <div className="form-group">
          <label htmlFor="npiNumber">NPI Number</label>
          <input id="npiNumber" type="text" {...register('npiNumber')} placeholder="Enter 10-digit NPI number" />
          {errors.npiNumber && (<p className="error">{errors.npiNumber.message}</p>)}
        </div>
      )}

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="licenseState">License State *</label>
          <select id="licenseState" {...register('licenseState')}>
            <option value="">Select</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          {errors.licenseState && (<p className="error">{errors.licenseState.message}</p>)}
        </div>

        <div className="form-group">
          <label htmlFor="licenseNumber">License Number *</label>
          <input id="licenseNumber" type="text" {...register('licenseNumber')} placeholder="ABC-1234" />
          {errors.licenseNumber && (<p className="error">{errors.licenseNumber.message}</p>)}
        </div>
      </div>

      <div className="form-group checkbox">
        <input id="hasNoIndividualNPI" type="checkbox" {...register('hasNoIndividualNPI')} />
        <label htmlFor="hasNoIndividualNPI">I do not have an Individual NPI.</label>
      </div>

      <div className="form-group checkbox">
        <input id="hasNoProfessionalLicense" type="checkbox" {...register('hasNoProfessionalLicense')} />
        <label htmlFor="hasNoProfessionalLicense">I do not have a professional license.</label>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
  <button type="submit" disabled={isSubmitting}>
    {isSubmitting ? 'Submitting...' : 'Continue'}
  </button>
</div>

    </form>
  )
}
