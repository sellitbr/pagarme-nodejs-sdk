/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, nullable, object, optional, Schema } from '../schema';
import {
  GetSubscriptionItemResponse,
  getSubscriptionItemResponseSchema,
} from './getSubscriptionItemResponse';
import { PagingResponse, pagingResponseSchema } from './pagingResponse';

/** Response model for listing subscription items */
export interface ListSubscriptionItemsResponse {
  /** The subscription items */
  data?: GetSubscriptionItemResponse[] | null;
  /** Paging object */
  paging?: PagingResponse | null;
}

export const listSubscriptionItemsResponseSchema: Schema<ListSubscriptionItemsResponse> = object(
  {
    data: [
      'data',
      optional(nullable(array(lazy(() => getSubscriptionItemResponseSchema)))),
    ],
    paging: ['paging', optional(nullable(lazy(() => pagingResponseSchema)))],
  }
);