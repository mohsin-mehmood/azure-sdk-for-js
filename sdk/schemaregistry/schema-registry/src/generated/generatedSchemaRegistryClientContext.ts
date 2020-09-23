/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { GeneratedSchemaRegistryClientOptionalParams } from "./models";

const packageName = "@azure/schema-registry";
const packageVersion = "1.0.0-beta.2";

export class GeneratedSchemaRegistryClientContext extends coreHttp.ServiceClient {
  endpoint: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the GeneratedSchemaRegistryClientContext class.
   * @param endpoint The Schema Registry service endpoint, for example
   *                 my-namespace.servicebus.windows.net.
   * @param options The parameter options
   */
  constructor(
    endpoint: string,
    options?: GeneratedSchemaRegistryClientOptionalParams
  ) {
    if (endpoint === undefined) {
      throw new Error("'endpoint' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "https://{endpoint}";

    // Parameter assignments
    this.endpoint = endpoint;

    // Assigning values to Constant parameters
    this.apiVersion = options.apiVersion || "2018-01-01-preview";
  }
}
