/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CreateAccessTokenRequest,
  createAccessTokenRequestSchema,
} from '../models/createAccessTokenRequest';
import {
  CreateAddressRequest,
  createAddressRequestSchema,
} from '../models/createAddressRequest';
import {
  CreateCardRequest,
  createCardRequestSchema,
} from '../models/createCardRequest';
import {
  CreateCustomerRequest,
  createCustomerRequestSchema,
} from '../models/createCustomerRequest';
import {
  GetAccessTokenResponse,
  getAccessTokenResponseSchema,
} from '../models/getAccessTokenResponse';
import {
  GetAddressResponse,
  getAddressResponseSchema,
} from '../models/getAddressResponse';
import {
  GetCardResponse,
  getCardResponseSchema,
} from '../models/getCardResponse';
import {
  GetCustomerResponse,
  getCustomerResponseSchema,
} from '../models/getCustomerResponse';
import {
  ListAccessTokensResponse,
  listAccessTokensResponseSchema,
} from '../models/listAccessTokensResponse';
import {
  ListAddressesResponse,
  listAddressesResponseSchema,
} from '../models/listAddressesResponse';
import {
  ListCardsResponse,
  listCardsResponseSchema,
} from '../models/listCardsResponse';
import {
  ListCustomersResponse,
  listCustomersResponseSchema,
} from '../models/listCustomersResponse';
import {
  UpdateAddressRequest,
  updateAddressRequestSchema,
} from '../models/updateAddressRequest';
import {
  UpdateCardRequest,
  updateCardRequestSchema,
} from '../models/updateCardRequest';
import {
  UpdateCustomerRequest,
  updateCustomerRequestSchema,
} from '../models/updateCustomerRequest';
import {
  UpdateMetadataRequest,
  updateMetadataRequestSchema,
} from '../models/updateMetadataRequest';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class CustomersController extends BaseController {
  /**
   * Updates a card
   *
   * @param customerId      Customer Id
   * @param cardId          Card id
   * @param request         Request for updating a card
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateCard(
    customerId: string,
    cardId: string,
    request: UpdateCardRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetCardResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      cardId: [cardId, string()],
      request: [request, updateCardRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/customers/${mapped.customerId}/cards/${mapped.cardId}`;
    return req.callAsJson(getCardResponseSchema, requestOptions);
  }

  /**
   * Updates an address
   *
   * @param customerId      Customer Id
   * @param addressId       Address Id
   * @param request         Request for updating an address
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateAddress(
    customerId: string,
    addressId: string,
    request: UpdateAddressRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetAddressResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      addressId: [addressId, string()],
      request: [request, updateAddressRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/customers/${mapped.customerId}/addresses/${mapped.addressId}`;
    return req.callAsJson(getAddressResponseSchema, requestOptions);
  }

  /**
   * Delete a customer's access token
   *
   * @param customerId      Customer Id
   * @param tokenId         Token Id
   * @param idempotencyKey
   * @return Response from the API call
   */
  async deleteAccessToken(
    customerId: string,
    tokenId: string,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetAccessTokenResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      tokenId: [tokenId, string()],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.appendTemplatePath`/customers/${mapped.customerId}/access-tokens/${mapped.tokenId}`;
    return req.callAsJson(getAccessTokenResponseSchema, requestOptions);
  }

  /**
   * Creates a new address for a customer
   *
   * @param customerId      Customer Id
   * @param request         Request for creating an address
   * @param idempotencyKey
   * @return Response from the API call
   */
  async createAddress(
    customerId: string,
    request: CreateAddressRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetAddressResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      request: [request, createAddressRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/customers/${mapped.customerId}/addresses`;
    return req.callAsJson(getAddressResponseSchema, requestOptions);
  }

  /**
   * Creates a new customer
   *
   * @param request         Request for creating a customer
   * @param idempotencyKey
   * @return Response from the API call
   */
  async createCustomer(
    request: CreateCustomerRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetCustomerResponse>> {
    const req = this.createRequest('POST', '/customers');
    const mapped = req.prepareArgs({
      request: [request, createCustomerRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    return req.callAsJson(getCustomerResponseSchema, requestOptions);
  }

  /**
   * Creates a new card for a customer
   *
   * @param customerId      Customer id
   * @param request         Request for creating a card
   * @param idempotencyKey
   * @return Response from the API call
   */
  async createCard(
    customerId: string,
    request: CreateCardRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetCardResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      request: [request, createCardRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/customers/${mapped.customerId}/cards`;
    return req.callAsJson(getCardResponseSchema, requestOptions);
  }

  /**
   * Get all cards from a customer
   *
   * @param customerId  Customer Id
   * @param page        Page number
   * @param size        Page size
   * @return Response from the API call
   */
  async getCards(
    customerId: string,
    page?: number,
    size?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListCardsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      page: [page, optional(number())],
      size: [size, optional(number())],
    });
    req.query('page', mapped.page);
    req.query('size', mapped.size);
    req.appendTemplatePath`/customers/${mapped.customerId}/cards`;
    return req.callAsJson(listCardsResponseSchema, requestOptions);
  }

  /**
   * Renew a card
   *
   * @param customerId      Customer id
   * @param cardId          Card Id
   * @param idempotencyKey
   * @return Response from the API call
   */
  async renewCard(
    customerId: string,
    cardId: string,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetCardResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      cardId: [cardId, string()],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.appendTemplatePath`/customers/${mapped.customerId}/cards/${mapped.cardId}/renew`;
    return req.callAsJson(getCardResponseSchema, requestOptions);
  }

  /**
   * Get a customer's address
   *
   * @param customerId  Customer id
   * @param addressId   Address Id
   * @return Response from the API call
   */
  async getAddress(
    customerId: string,
    addressId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetAddressResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      addressId: [addressId, string()],
    });
    req.appendTemplatePath`/customers/${mapped.customerId}/addresses/${mapped.addressId}`;
    return req.callAsJson(getAddressResponseSchema, requestOptions);
  }

  /**
   * Delete a Customer's address
   *
   * @param customerId      Customer Id
   * @param addressId       Address Id
   * @param idempotencyKey
   * @return Response from the API call
   */
  async deleteAddress(
    customerId: string,
    addressId: string,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetAddressResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      addressId: [addressId, string()],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.appendTemplatePath`/customers/${mapped.customerId}/addresses/${mapped.addressId}`;
    return req.callAsJson(getAddressResponseSchema, requestOptions);
  }

  /**
   * Get a Customer's access token
   *
   * @param customerId  Customer Id
   * @param tokenId     Token Id
   * @return Response from the API call
   */
  async getAccessToken(
    customerId: string,
    tokenId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetAccessTokenResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      tokenId: [tokenId, string()],
    });
    req.appendTemplatePath`/customers/${mapped.customerId}/access-tokens/${mapped.tokenId}`;
    return req.callAsJson(getAccessTokenResponseSchema, requestOptions);
  }

  /**
   * Updates the metadata a customer
   *
   * @param customerId      The customer id
   * @param request         Request for updating the customer metadata
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateCustomerMetadata(
    customerId: string,
    request: UpdateMetadataRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetCustomerResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      request: [request, updateMetadataRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/Customers/${mapped.customerId}/metadata`;
    return req.callAsJson(getCustomerResponseSchema, requestOptions);
  }

  /**
   * Get a customer's card
   *
   * @param customerId  Customer id
   * @param cardId      Card id
   * @return Response from the API call
   */
  async getCard(
    customerId: string,
    cardId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetCardResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      cardId: [cardId, string()],
    });
    req.appendTemplatePath`/customers/${mapped.customerId}/cards/${mapped.cardId}`;
    return req.callAsJson(getCardResponseSchema, requestOptions);
  }

  /**
   * Delete a Customer's access tokens
   *
   * @param customerId  Customer Id
   * @return Response from the API call
   */
  async deleteAccessTokens(
    customerId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListAccessTokensResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ customerId: [customerId, string()] });
    req.appendTemplatePath`/customers/${mapped.customerId}/access-tokens/`;
    return req.callAsJson(listAccessTokensResponseSchema, requestOptions);
  }

  /**
   * Creates a access token for a customer
   *
   * @param customerId      Customer Id
   * @param request         Request for creating a access token
   * @param idempotencyKey
   * @return Response from the API call
   */
  async createAccessToken(
    customerId: string,
    request: CreateAccessTokenRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetAccessTokenResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      request: [request, createAccessTokenRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/customers/${mapped.customerId}/access-tokens`;
    return req.callAsJson(getAccessTokenResponseSchema, requestOptions);
  }

  /**
   * Get all access tokens from a customer
   *
   * @param customerId  Customer Id
   * @param page        Page number
   * @param size        Page size
   * @return Response from the API call
   */
  async getAccessTokens(
    customerId: string,
    page?: number,
    size?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListAccessTokensResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      page: [page, optional(number())],
      size: [size, optional(number())],
    });
    req.query('page', mapped.page);
    req.query('size', mapped.size);
    req.appendTemplatePath`/customers/${mapped.customerId}/access-tokens`;
    return req.callAsJson(listAccessTokensResponseSchema, requestOptions);
  }

  /**
   * Get all Customers
   *
   * @param name     Name of the Customer
   * @param document Document of the Customer
   * @param page     Current page the the search
   * @param size     Quantity pages of the search
   * @param email    Customer's email
   * @param code     Customer's code
   * @return Response from the API call
   */
  async getCustomers(
    name?: string,
    document?: string,
    page?: number,
    size?: number,
    email?: string,
    code?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListCustomersResponse>> {
    const req = this.createRequest('GET', '/customers');
    const mapped = req.prepareArgs({
      name: [name, optional(string())],
      document: [document, optional(string())],
      page: [page, optional(number())],
      size: [size, optional(number())],
      email: [email, optional(string())],
      code: [code, optional(string())],
    });
    req.query('name', mapped.name);
    req.query('document', mapped.document);
    req.query('page', mapped.page);
    req.query('size', mapped.size);
    req.query('email', mapped.email);
    req.query('Code', mapped.code);
    return req.callAsJson(listCustomersResponseSchema, requestOptions);
  }

  /**
   * Updates a customer
   *
   * @param customerId      Customer id
   * @param request         Request for updating a customer
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateCustomer(
    customerId: string,
    request: UpdateCustomerRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetCustomerResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      request: [request, updateCustomerRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/customers/${mapped.customerId}`;
    return req.callAsJson(getCustomerResponseSchema, requestOptions);
  }

  /**
   * Delete a customer's card
   *
   * @param customerId      Customer Id
   * @param cardId          Card Id
   * @param idempotencyKey
   * @return Response from the API call
   */
  async deleteCard(
    customerId: string,
    cardId: string,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetCardResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      cardId: [cardId, string()],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.appendTemplatePath`/customers/${mapped.customerId}/cards/${mapped.cardId}`;
    return req.callAsJson(getCardResponseSchema, requestOptions);
  }

  /**
   * Gets all adressess from a customer
   *
   * @param customerId  Customer id
   * @param page        Page number
   * @param size        Page size
   * @return Response from the API call
   */
  async getAddresses(
    customerId: string,
    page?: number,
    size?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListAddressesResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      page: [page, optional(number())],
      size: [size, optional(number())],
    });
    req.query('page', mapped.page);
    req.query('size', mapped.size);
    req.appendTemplatePath`/customers/${mapped.customerId}/addresses`;
    return req.callAsJson(listAddressesResponseSchema, requestOptions);
  }

  /**
   * Get a customer
   *
   * @param customerId  Customer Id
   * @return Response from the API call
   */
  async getCustomer(
    customerId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetCustomerResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ customerId: [customerId, string()] });
    req.appendTemplatePath`/customers/${mapped.customerId}`;
    return req.callAsJson(getCustomerResponseSchema, requestOptions);
  }
}