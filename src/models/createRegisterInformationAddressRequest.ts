/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** Register Information Address */
export interface CreateRegisterInformationAddressRequest {
  street: string;
  complementary: string;
  streetNumber: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  referencePoint: string;
}

export const createRegisterInformationAddressRequestSchema: Schema<CreateRegisterInformationAddressRequest> = object(
  {
    street: ['street', string()],
    complementary: ['complementary', string()],
    streetNumber: ['street_number', string()],
    neighborhood: ['neighborhood', string()],
    city: ['city', string()],
    state: ['state', string()],
    zipCode: ['zip_code', string()],
    referencePoint: ['reference_point', string()],
  }
);