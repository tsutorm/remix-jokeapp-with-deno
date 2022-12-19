
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.7.1
 * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
 */
Prisma.prismaVersion = {
  client: "4.7.1",
  engine: "272861e07ab64f234d3ffc4094e32bd61775599c"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


const dirname = '/'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.JokeScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  content: 'content'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
  Joke: 'Joke'
});

const compressedDMMF = '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='
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/tsutorm/git/remix-jokeapp-with-deno/joke-app/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.7.1",
  "engineVersion": "272861e07ab64f234d3ffc4094e32bd61775599c",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": true
}
config.document = dmmf
config.dirname = dirname

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCIKICBwcmV2aWV3RmVhdHVyZXMgPSBbImRlbm8iXQp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBKb2tlIHsKICBpZCAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgY3JlYXRlZEF0ICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgIERhdGVUaW1lIEB1cGRhdGVkQXQKICBuYW1lICAgICAgIFN0cmluZwogIGNvbnRlbnQgICAgU3RyaW5nCn0K'
config.inlineSchemaHash = '5da723afcec592e00e38147422f843202c4cf0879587710569fc1bee1a1b86b7'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
}

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

