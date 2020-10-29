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
import * as Mappers from "../models/sqlPoolDataWarehouseUserActivitiesMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a SqlPoolDataWarehouseUserActivities. */
export class SqlPoolDataWarehouseUserActivities {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a SqlPoolDataWarehouseUserActivities.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the user activities of a SQL pool which includes running and suspended queries
   * @summary Get SQL pool user activities
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolDataWarehouseUserActivitiesGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolDataWarehouseUserActivitiesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, callback: msRest.ServiceCallback<Models.DataWarehouseUserActivities>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataWarehouseUserActivities>): void;
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataWarehouseUserActivities>, callback?: msRest.ServiceCallback<Models.DataWarehouseUserActivities>): Promise<Models.SqlPoolDataWarehouseUserActivitiesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SqlPoolDataWarehouseUserActivitiesGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/dataWarehouseUserActivities/{dataWarehouseUserActivityName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.dataWarehouseUserActivityName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataWarehouseUserActivities
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
