/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/privateLinkResourcesMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a PrivateLinkResources. */
export class PrivateLinkResources {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a PrivateLinkResources.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Get all private link resources for a workspaces
   * @summary Private Link Resources
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkResourcesListResponse>
   */
  list(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkResourcesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): void;
  list(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkResourceListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): Promise<Models.PrivateLinkResourcesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PrivateLinkResourcesListResponse>;
  }

  /**
   * Get private link resource in workspace
   * @summary Get Private Link Resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param privateLinkResourceName The name of the private link resource
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkResourcesGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, privateLinkResourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkResourcesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param privateLinkResourceName The name of the private link resource
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, privateLinkResourceName: string, callback: msRest.ServiceCallback<Models.PrivateLinkResource>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param privateLinkResourceName The name of the private link resource
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, privateLinkResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkResource>): void;
  get(resourceGroupName: string, workspaceName: string, privateLinkResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkResource>, callback?: msRest.ServiceCallback<Models.PrivateLinkResource>): Promise<Models.PrivateLinkResourcesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        privateLinkResourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PrivateLinkResourcesGetResponse>;
  }

  /**
   * Get all private link resources for a workspaces
   * @summary Private Link Resources
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkResourcesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkResourcesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkResourceListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): Promise<Models.PrivateLinkResourcesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.PrivateLinkResourcesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/privateLinkResources",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/privateLinkResources/{privateLinkResourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.privateLinkResourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
