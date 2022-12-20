import { PrismaClient } from "../../generated/client/deno/edge.ts";

import { tryLoadDotenv } from "./env.ts";
tryLoadDotenv()

const clientOption = {
  datasources: {
    db: {
      url: Deno.env.get("DATABASE_DATAPROXY_URL")
    }
  }
};

let db: PrismaClient;

declare global {
  var __db: PrismaClient | undefined;
}

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
if (process.env.NODE_ENV === "production") {
  db = new PrismaClient(clientOption);
} else {
  if (!global.__db) {
    global.__db = new PrismaClient(clientOption);
  }
  db = global.__db;
}

export { db };
