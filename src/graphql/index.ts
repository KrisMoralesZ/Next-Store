import { GraphQLClient } from "graphql-request";

export class GraphQLClientSingleton {
  private readonly endpoint: string = `${process.env.SHOPIFY_HOSTNAME}api/2025-10/graphql.json`;

  private static instance: GraphQLClientSingleton;

  static getInstance(): GraphQLClientSingleton {
    if (!this.instance) {
      this.instance = new GraphQLClientSingleton();
    }
    return this.instance;
  }

  getClient(): GraphQLClient {
    const token = process.env.PRIVATE_ACCESS_TOKEN;
    return new GraphQLClient(this.endpoint, {
      headers: token
        ? { "Shopify-Storefront-Private-Token": token }
        : undefined,
    });
  }
}
