
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectEndpoint
 * 
 */
export type ProjectEndpoint = $Result.DefaultSelection<Prisma.$ProjectEndpointPayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model ApiKeyEndpointPermission
 * 
 */
export type ApiKeyEndpointPermission = $Result.DefaultSelection<Prisma.$ApiKeyEndpointPermissionPayload>
/**
 * Model UsageLog
 * 
 */
export type UsageLog = $Result.DefaultSelection<Prisma.$UsageLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EndpointMethod: {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
};

export type EndpointMethod = (typeof EndpointMethod)[keyof typeof EndpointMethod]


export const EndpointStatus: {
  ENABLED: 'ENABLED',
  DISABLED: 'DISABLED'
};

export type EndpointStatus = (typeof EndpointStatus)[keyof typeof EndpointStatus]


export const ApiKeyStatus: {
  ACTIVE: 'ACTIVE',
  REVOKED: 'REVOKED'
};

export type ApiKeyStatus = (typeof ApiKeyStatus)[keyof typeof ApiKeyStatus]


export const UsageLogOutcome: {
  SUCCESS: 'SUCCESS',
  API_KEY_MISSING: 'API_KEY_MISSING',
  API_KEY_INVALID: 'API_KEY_INVALID',
  API_KEY_REVOKED: 'API_KEY_REVOKED',
  ENDPOINT_NOT_FOUND: 'ENDPOINT_NOT_FOUND',
  ENDPOINT_DISABLED: 'ENDPOINT_DISABLED',
  PERMISSION_DENIED: 'PERMISSION_DENIED',
  UPSTREAM_ERROR: 'UPSTREAM_ERROR',
  GATEWAY_VALIDATION_ERROR: 'GATEWAY_VALIDATION_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR'
};

export type UsageLogOutcome = (typeof UsageLogOutcome)[keyof typeof UsageLogOutcome]

}

export type EndpointMethod = $Enums.EndpointMethod

export const EndpointMethod: typeof $Enums.EndpointMethod

export type EndpointStatus = $Enums.EndpointStatus

export const EndpointStatus: typeof $Enums.EndpointStatus

export type ApiKeyStatus = $Enums.ApiKeyStatus

export const ApiKeyStatus: typeof $Enums.ApiKeyStatus

export type UsageLogOutcome = $Enums.UsageLogOutcome

export const UsageLogOutcome: typeof $Enums.UsageLogOutcome

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectEndpoint`: Exposes CRUD operations for the **ProjectEndpoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectEndpoints
    * const projectEndpoints = await prisma.projectEndpoint.findMany()
    * ```
    */
  get projectEndpoint(): Prisma.ProjectEndpointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKeyEndpointPermission`: Exposes CRUD operations for the **ApiKeyEndpointPermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeyEndpointPermissions
    * const apiKeyEndpointPermissions = await prisma.apiKeyEndpointPermission.findMany()
    * ```
    */
  get apiKeyEndpointPermission(): Prisma.ApiKeyEndpointPermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usageLog`: Exposes CRUD operations for the **UsageLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsageLogs
    * const usageLogs = await prisma.usageLog.findMany()
    * ```
    */
  get usageLog(): Prisma.UsageLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Project: 'Project',
    ProjectEndpoint: 'ProjectEndpoint',
    ApiKey: 'ApiKey',
    ApiKeyEndpointPermission: 'ApiKeyEndpointPermission',
    UsageLog: 'UsageLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "project" | "projectEndpoint" | "apiKey" | "apiKeyEndpointPermission" | "usageLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectEndpoint: {
        payload: Prisma.$ProjectEndpointPayload<ExtArgs>
        fields: Prisma.ProjectEndpointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectEndpointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEndpointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectEndpointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEndpointPayload>
          }
          findFirst: {
            args: Prisma.ProjectEndpointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEndpointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectEndpointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEndpointPayload>
          }
          findMany: {
            args: Prisma.ProjectEndpointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEndpointPayload>[]
          }
          create: {
            args: Prisma.ProjectEndpointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEndpointPayload>
          }
          createMany: {
            args: Prisma.ProjectEndpointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectEndpointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEndpointPayload>[]
          }
          delete: {
            args: Prisma.ProjectEndpointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEndpointPayload>
          }
          update: {
            args: Prisma.ProjectEndpointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEndpointPayload>
          }
          deleteMany: {
            args: Prisma.ProjectEndpointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectEndpointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectEndpointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEndpointPayload>[]
          }
          upsert: {
            args: Prisma.ProjectEndpointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEndpointPayload>
          }
          aggregate: {
            args: Prisma.ProjectEndpointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectEndpoint>
          }
          groupBy: {
            args: Prisma.ProjectEndpointGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectEndpointGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectEndpointCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectEndpointCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      ApiKeyEndpointPermission: {
        payload: Prisma.$ApiKeyEndpointPermissionPayload<ExtArgs>
        fields: Prisma.ApiKeyEndpointPermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyEndpointPermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyEndpointPermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyEndpointPermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyEndpointPermissionPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyEndpointPermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyEndpointPermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyEndpointPermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyEndpointPermissionPayload>
          }
          findMany: {
            args: Prisma.ApiKeyEndpointPermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyEndpointPermissionPayload>[]
          }
          create: {
            args: Prisma.ApiKeyEndpointPermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyEndpointPermissionPayload>
          }
          createMany: {
            args: Prisma.ApiKeyEndpointPermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyEndpointPermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyEndpointPermissionPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyEndpointPermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyEndpointPermissionPayload>
          }
          update: {
            args: Prisma.ApiKeyEndpointPermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyEndpointPermissionPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyEndpointPermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyEndpointPermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyEndpointPermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyEndpointPermissionPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyEndpointPermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyEndpointPermissionPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyEndpointPermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKeyEndpointPermission>
          }
          groupBy: {
            args: Prisma.ApiKeyEndpointPermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyEndpointPermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyEndpointPermissionCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyEndpointPermissionCountAggregateOutputType> | number
          }
        }
      }
      UsageLog: {
        payload: Prisma.$UsageLogPayload<ExtArgs>
        fields: Prisma.UsageLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsageLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsageLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload>
          }
          findFirst: {
            args: Prisma.UsageLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsageLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload>
          }
          findMany: {
            args: Prisma.UsageLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload>[]
          }
          create: {
            args: Prisma.UsageLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload>
          }
          createMany: {
            args: Prisma.UsageLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsageLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload>[]
          }
          delete: {
            args: Prisma.UsageLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload>
          }
          update: {
            args: Prisma.UsageLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload>
          }
          deleteMany: {
            args: Prisma.UsageLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsageLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsageLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload>[]
          }
          upsert: {
            args: Prisma.UsageLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload>
          }
          aggregate: {
            args: Prisma.UsageLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsageLog>
          }
          groupBy: {
            args: Prisma.UsageLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsageLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsageLogCountArgs<ExtArgs>
            result: $Utils.Optional<UsageLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    project?: ProjectOmit
    projectEndpoint?: ProjectEndpointOmit
    apiKey?: ApiKeyOmit
    apiKeyEndpointPermission?: ApiKeyEndpointPermissionOmit
    usageLog?: UsageLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    endpoints: number
    apiKeys: number
    apiKeyEndpointPermissions: number
    usageLogs: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoints?: boolean | ProjectCountOutputTypeCountEndpointsArgs
    apiKeys?: boolean | ProjectCountOutputTypeCountApiKeysArgs
    apiKeyEndpointPermissions?: boolean | ProjectCountOutputTypeCountApiKeyEndpointPermissionsArgs
    usageLogs?: boolean | ProjectCountOutputTypeCountUsageLogsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountEndpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectEndpointWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountApiKeyEndpointPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyEndpointPermissionWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountUsageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageLogWhereInput
  }


  /**
   * Count Type ProjectEndpointCountOutputType
   */

  export type ProjectEndpointCountOutputType = {
    apiKeyPermissions: number
    usageLogs: number
  }

  export type ProjectEndpointCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKeyPermissions?: boolean | ProjectEndpointCountOutputTypeCountApiKeyPermissionsArgs
    usageLogs?: boolean | ProjectEndpointCountOutputTypeCountUsageLogsArgs
  }

  // Custom InputTypes
  /**
   * ProjectEndpointCountOutputType without action
   */
  export type ProjectEndpointCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEndpointCountOutputType
     */
    select?: ProjectEndpointCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectEndpointCountOutputType without action
   */
  export type ProjectEndpointCountOutputTypeCountApiKeyPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyEndpointPermissionWhereInput
  }

  /**
   * ProjectEndpointCountOutputType without action
   */
  export type ProjectEndpointCountOutputTypeCountUsageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageLogWhereInput
  }


  /**
   * Count Type ApiKeyCountOutputType
   */

  export type ApiKeyCountOutputType = {
    permissions: number
    usageLogs: number
  }

  export type ApiKeyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | ApiKeyCountOutputTypeCountPermissionsArgs
    usageLogs?: boolean | ApiKeyCountOutputTypeCountUsageLogsArgs
  }

  // Custom InputTypes
  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyCountOutputType
     */
    select?: ApiKeyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyEndpointPermissionWhereInput
  }

  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeCountUsageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    ownerId: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    ownerId: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    endpoints?: boolean | Project$endpointsArgs<ExtArgs>
    apiKeys?: boolean | Project$apiKeysArgs<ExtArgs>
    apiKeyEndpointPermissions?: boolean | Project$apiKeyEndpointPermissionsArgs<ExtArgs>
    usageLogs?: boolean | Project$usageLogsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    ownerId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    endpoints?: boolean | Project$endpointsArgs<ExtArgs>
    apiKeys?: boolean | Project$apiKeysArgs<ExtArgs>
    apiKeyEndpointPermissions?: boolean | Project$apiKeyEndpointPermissionsArgs<ExtArgs>
    usageLogs?: boolean | Project$usageLogsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      endpoints: Prisma.$ProjectEndpointPayload<ExtArgs>[]
      apiKeys: Prisma.$ApiKeyPayload<ExtArgs>[]
      apiKeyEndpointPermissions: Prisma.$ApiKeyEndpointPermissionPayload<ExtArgs>[]
      usageLogs: Prisma.$UsageLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    endpoints<T extends Project$endpointsArgs<ExtArgs> = {}>(args?: Subset<T, Project$endpointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEndpointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiKeys<T extends Project$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, Project$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiKeyEndpointPermissions<T extends Project$apiKeyEndpointPermissionsArgs<ExtArgs> = {}>(args?: Subset<T, Project$apiKeyEndpointPermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyEndpointPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usageLogs<T extends Project$usageLogsArgs<ExtArgs> = {}>(args?: Subset<T, Project$usageLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly ownerId: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.endpoints
   */
  export type Project$endpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEndpoint
     */
    select?: ProjectEndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEndpoint
     */
    omit?: ProjectEndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEndpointInclude<ExtArgs> | null
    where?: ProjectEndpointWhereInput
    orderBy?: ProjectEndpointOrderByWithRelationInput | ProjectEndpointOrderByWithRelationInput[]
    cursor?: ProjectEndpointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectEndpointScalarFieldEnum | ProjectEndpointScalarFieldEnum[]
  }

  /**
   * Project.apiKeys
   */
  export type Project$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    cursor?: ApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * Project.apiKeyEndpointPermissions
   */
  export type Project$apiKeyEndpointPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyEndpointPermission
     */
    select?: ApiKeyEndpointPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyEndpointPermission
     */
    omit?: ApiKeyEndpointPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyEndpointPermissionInclude<ExtArgs> | null
    where?: ApiKeyEndpointPermissionWhereInput
    orderBy?: ApiKeyEndpointPermissionOrderByWithRelationInput | ApiKeyEndpointPermissionOrderByWithRelationInput[]
    cursor?: ApiKeyEndpointPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyEndpointPermissionScalarFieldEnum | ApiKeyEndpointPermissionScalarFieldEnum[]
  }

  /**
   * Project.usageLogs
   */
  export type Project$usageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    where?: UsageLogWhereInput
    orderBy?: UsageLogOrderByWithRelationInput | UsageLogOrderByWithRelationInput[]
    cursor?: UsageLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsageLogScalarFieldEnum | UsageLogScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectEndpoint
   */

  export type AggregateProjectEndpoint = {
    _count: ProjectEndpointCountAggregateOutputType | null
    _min: ProjectEndpointMinAggregateOutputType | null
    _max: ProjectEndpointMaxAggregateOutputType | null
  }

  export type ProjectEndpointMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    method: $Enums.EndpointMethod | null
    path: string | null
    routeShape: string | null
    upstreamUrl: string | null
    status: $Enums.EndpointStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectEndpointMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    method: $Enums.EndpointMethod | null
    path: string | null
    routeShape: string | null
    upstreamUrl: string | null
    status: $Enums.EndpointStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectEndpointCountAggregateOutputType = {
    id: number
    projectId: number
    method: number
    path: number
    routeShape: number
    upstreamUrl: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectEndpointMinAggregateInputType = {
    id?: true
    projectId?: true
    method?: true
    path?: true
    routeShape?: true
    upstreamUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectEndpointMaxAggregateInputType = {
    id?: true
    projectId?: true
    method?: true
    path?: true
    routeShape?: true
    upstreamUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectEndpointCountAggregateInputType = {
    id?: true
    projectId?: true
    method?: true
    path?: true
    routeShape?: true
    upstreamUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectEndpointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectEndpoint to aggregate.
     */
    where?: ProjectEndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectEndpoints to fetch.
     */
    orderBy?: ProjectEndpointOrderByWithRelationInput | ProjectEndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectEndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectEndpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectEndpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectEndpoints
    **/
    _count?: true | ProjectEndpointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectEndpointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectEndpointMaxAggregateInputType
  }

  export type GetProjectEndpointAggregateType<T extends ProjectEndpointAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectEndpoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectEndpoint[P]>
      : GetScalarType<T[P], AggregateProjectEndpoint[P]>
  }




  export type ProjectEndpointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectEndpointWhereInput
    orderBy?: ProjectEndpointOrderByWithAggregationInput | ProjectEndpointOrderByWithAggregationInput[]
    by: ProjectEndpointScalarFieldEnum[] | ProjectEndpointScalarFieldEnum
    having?: ProjectEndpointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectEndpointCountAggregateInputType | true
    _min?: ProjectEndpointMinAggregateInputType
    _max?: ProjectEndpointMaxAggregateInputType
  }

  export type ProjectEndpointGroupByOutputType = {
    id: string
    projectId: string
    method: $Enums.EndpointMethod
    path: string
    routeShape: string
    upstreamUrl: string
    status: $Enums.EndpointStatus
    createdAt: Date
    updatedAt: Date
    _count: ProjectEndpointCountAggregateOutputType | null
    _min: ProjectEndpointMinAggregateOutputType | null
    _max: ProjectEndpointMaxAggregateOutputType | null
  }

  type GetProjectEndpointGroupByPayload<T extends ProjectEndpointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectEndpointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectEndpointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectEndpointGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectEndpointGroupByOutputType[P]>
        }
      >
    >


  export type ProjectEndpointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    method?: boolean
    path?: boolean
    routeShape?: boolean
    upstreamUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    apiKeyPermissions?: boolean | ProjectEndpoint$apiKeyPermissionsArgs<ExtArgs>
    usageLogs?: boolean | ProjectEndpoint$usageLogsArgs<ExtArgs>
    _count?: boolean | ProjectEndpointCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectEndpoint"]>

  export type ProjectEndpointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    method?: boolean
    path?: boolean
    routeShape?: boolean
    upstreamUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectEndpoint"]>

  export type ProjectEndpointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    method?: boolean
    path?: boolean
    routeShape?: boolean
    upstreamUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectEndpoint"]>

  export type ProjectEndpointSelectScalar = {
    id?: boolean
    projectId?: boolean
    method?: boolean
    path?: boolean
    routeShape?: boolean
    upstreamUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectEndpointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "method" | "path" | "routeShape" | "upstreamUrl" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["projectEndpoint"]>
  export type ProjectEndpointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    apiKeyPermissions?: boolean | ProjectEndpoint$apiKeyPermissionsArgs<ExtArgs>
    usageLogs?: boolean | ProjectEndpoint$usageLogsArgs<ExtArgs>
    _count?: boolean | ProjectEndpointCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectEndpointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectEndpointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectEndpointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectEndpoint"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      apiKeyPermissions: Prisma.$ApiKeyEndpointPermissionPayload<ExtArgs>[]
      usageLogs: Prisma.$UsageLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      method: $Enums.EndpointMethod
      path: string
      routeShape: string
      upstreamUrl: string
      status: $Enums.EndpointStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectEndpoint"]>
    composites: {}
  }

  type ProjectEndpointGetPayload<S extends boolean | null | undefined | ProjectEndpointDefaultArgs> = $Result.GetResult<Prisma.$ProjectEndpointPayload, S>

  type ProjectEndpointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectEndpointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectEndpointCountAggregateInputType | true
    }

  export interface ProjectEndpointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectEndpoint'], meta: { name: 'ProjectEndpoint' } }
    /**
     * Find zero or one ProjectEndpoint that matches the filter.
     * @param {ProjectEndpointFindUniqueArgs} args - Arguments to find a ProjectEndpoint
     * @example
     * // Get one ProjectEndpoint
     * const projectEndpoint = await prisma.projectEndpoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectEndpointFindUniqueArgs>(args: SelectSubset<T, ProjectEndpointFindUniqueArgs<ExtArgs>>): Prisma__ProjectEndpointClient<$Result.GetResult<Prisma.$ProjectEndpointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectEndpoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectEndpointFindUniqueOrThrowArgs} args - Arguments to find a ProjectEndpoint
     * @example
     * // Get one ProjectEndpoint
     * const projectEndpoint = await prisma.projectEndpoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectEndpointFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectEndpointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectEndpointClient<$Result.GetResult<Prisma.$ProjectEndpointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectEndpoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEndpointFindFirstArgs} args - Arguments to find a ProjectEndpoint
     * @example
     * // Get one ProjectEndpoint
     * const projectEndpoint = await prisma.projectEndpoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectEndpointFindFirstArgs>(args?: SelectSubset<T, ProjectEndpointFindFirstArgs<ExtArgs>>): Prisma__ProjectEndpointClient<$Result.GetResult<Prisma.$ProjectEndpointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectEndpoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEndpointFindFirstOrThrowArgs} args - Arguments to find a ProjectEndpoint
     * @example
     * // Get one ProjectEndpoint
     * const projectEndpoint = await prisma.projectEndpoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectEndpointFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectEndpointFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectEndpointClient<$Result.GetResult<Prisma.$ProjectEndpointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectEndpoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEndpointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectEndpoints
     * const projectEndpoints = await prisma.projectEndpoint.findMany()
     * 
     * // Get first 10 ProjectEndpoints
     * const projectEndpoints = await prisma.projectEndpoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectEndpointWithIdOnly = await prisma.projectEndpoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectEndpointFindManyArgs>(args?: SelectSubset<T, ProjectEndpointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEndpointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectEndpoint.
     * @param {ProjectEndpointCreateArgs} args - Arguments to create a ProjectEndpoint.
     * @example
     * // Create one ProjectEndpoint
     * const ProjectEndpoint = await prisma.projectEndpoint.create({
     *   data: {
     *     // ... data to create a ProjectEndpoint
     *   }
     * })
     * 
     */
    create<T extends ProjectEndpointCreateArgs>(args: SelectSubset<T, ProjectEndpointCreateArgs<ExtArgs>>): Prisma__ProjectEndpointClient<$Result.GetResult<Prisma.$ProjectEndpointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectEndpoints.
     * @param {ProjectEndpointCreateManyArgs} args - Arguments to create many ProjectEndpoints.
     * @example
     * // Create many ProjectEndpoints
     * const projectEndpoint = await prisma.projectEndpoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectEndpointCreateManyArgs>(args?: SelectSubset<T, ProjectEndpointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectEndpoints and returns the data saved in the database.
     * @param {ProjectEndpointCreateManyAndReturnArgs} args - Arguments to create many ProjectEndpoints.
     * @example
     * // Create many ProjectEndpoints
     * const projectEndpoint = await prisma.projectEndpoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectEndpoints and only return the `id`
     * const projectEndpointWithIdOnly = await prisma.projectEndpoint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectEndpointCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectEndpointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEndpointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectEndpoint.
     * @param {ProjectEndpointDeleteArgs} args - Arguments to delete one ProjectEndpoint.
     * @example
     * // Delete one ProjectEndpoint
     * const ProjectEndpoint = await prisma.projectEndpoint.delete({
     *   where: {
     *     // ... filter to delete one ProjectEndpoint
     *   }
     * })
     * 
     */
    delete<T extends ProjectEndpointDeleteArgs>(args: SelectSubset<T, ProjectEndpointDeleteArgs<ExtArgs>>): Prisma__ProjectEndpointClient<$Result.GetResult<Prisma.$ProjectEndpointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectEndpoint.
     * @param {ProjectEndpointUpdateArgs} args - Arguments to update one ProjectEndpoint.
     * @example
     * // Update one ProjectEndpoint
     * const projectEndpoint = await prisma.projectEndpoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectEndpointUpdateArgs>(args: SelectSubset<T, ProjectEndpointUpdateArgs<ExtArgs>>): Prisma__ProjectEndpointClient<$Result.GetResult<Prisma.$ProjectEndpointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectEndpoints.
     * @param {ProjectEndpointDeleteManyArgs} args - Arguments to filter ProjectEndpoints to delete.
     * @example
     * // Delete a few ProjectEndpoints
     * const { count } = await prisma.projectEndpoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectEndpointDeleteManyArgs>(args?: SelectSubset<T, ProjectEndpointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectEndpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEndpointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectEndpoints
     * const projectEndpoint = await prisma.projectEndpoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectEndpointUpdateManyArgs>(args: SelectSubset<T, ProjectEndpointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectEndpoints and returns the data updated in the database.
     * @param {ProjectEndpointUpdateManyAndReturnArgs} args - Arguments to update many ProjectEndpoints.
     * @example
     * // Update many ProjectEndpoints
     * const projectEndpoint = await prisma.projectEndpoint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectEndpoints and only return the `id`
     * const projectEndpointWithIdOnly = await prisma.projectEndpoint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectEndpointUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectEndpointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEndpointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectEndpoint.
     * @param {ProjectEndpointUpsertArgs} args - Arguments to update or create a ProjectEndpoint.
     * @example
     * // Update or create a ProjectEndpoint
     * const projectEndpoint = await prisma.projectEndpoint.upsert({
     *   create: {
     *     // ... data to create a ProjectEndpoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectEndpoint we want to update
     *   }
     * })
     */
    upsert<T extends ProjectEndpointUpsertArgs>(args: SelectSubset<T, ProjectEndpointUpsertArgs<ExtArgs>>): Prisma__ProjectEndpointClient<$Result.GetResult<Prisma.$ProjectEndpointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectEndpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEndpointCountArgs} args - Arguments to filter ProjectEndpoints to count.
     * @example
     * // Count the number of ProjectEndpoints
     * const count = await prisma.projectEndpoint.count({
     *   where: {
     *     // ... the filter for the ProjectEndpoints we want to count
     *   }
     * })
    **/
    count<T extends ProjectEndpointCountArgs>(
      args?: Subset<T, ProjectEndpointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectEndpointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectEndpoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEndpointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectEndpointAggregateArgs>(args: Subset<T, ProjectEndpointAggregateArgs>): Prisma.PrismaPromise<GetProjectEndpointAggregateType<T>>

    /**
     * Group by ProjectEndpoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEndpointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectEndpointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectEndpointGroupByArgs['orderBy'] }
        : { orderBy?: ProjectEndpointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectEndpointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectEndpointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectEndpoint model
   */
  readonly fields: ProjectEndpointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectEndpoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectEndpointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    apiKeyPermissions<T extends ProjectEndpoint$apiKeyPermissionsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectEndpoint$apiKeyPermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyEndpointPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usageLogs<T extends ProjectEndpoint$usageLogsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectEndpoint$usageLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectEndpoint model
   */
  interface ProjectEndpointFieldRefs {
    readonly id: FieldRef<"ProjectEndpoint", 'String'>
    readonly projectId: FieldRef<"ProjectEndpoint", 'String'>
    readonly method: FieldRef<"ProjectEndpoint", 'EndpointMethod'>
    readonly path: FieldRef<"ProjectEndpoint", 'String'>
    readonly routeShape: FieldRef<"ProjectEndpoint", 'String'>
    readonly upstreamUrl: FieldRef<"ProjectEndpoint", 'String'>
    readonly status: FieldRef<"ProjectEndpoint", 'EndpointStatus'>
    readonly createdAt: FieldRef<"ProjectEndpoint", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectEndpoint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectEndpoint findUnique
   */
  export type ProjectEndpointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEndpoint
     */
    select?: ProjectEndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEndpoint
     */
    omit?: ProjectEndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEndpointInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEndpoint to fetch.
     */
    where: ProjectEndpointWhereUniqueInput
  }

  /**
   * ProjectEndpoint findUniqueOrThrow
   */
  export type ProjectEndpointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEndpoint
     */
    select?: ProjectEndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEndpoint
     */
    omit?: ProjectEndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEndpointInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEndpoint to fetch.
     */
    where: ProjectEndpointWhereUniqueInput
  }

  /**
   * ProjectEndpoint findFirst
   */
  export type ProjectEndpointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEndpoint
     */
    select?: ProjectEndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEndpoint
     */
    omit?: ProjectEndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEndpointInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEndpoint to fetch.
     */
    where?: ProjectEndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectEndpoints to fetch.
     */
    orderBy?: ProjectEndpointOrderByWithRelationInput | ProjectEndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectEndpoints.
     */
    cursor?: ProjectEndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectEndpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectEndpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectEndpoints.
     */
    distinct?: ProjectEndpointScalarFieldEnum | ProjectEndpointScalarFieldEnum[]
  }

  /**
   * ProjectEndpoint findFirstOrThrow
   */
  export type ProjectEndpointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEndpoint
     */
    select?: ProjectEndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEndpoint
     */
    omit?: ProjectEndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEndpointInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEndpoint to fetch.
     */
    where?: ProjectEndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectEndpoints to fetch.
     */
    orderBy?: ProjectEndpointOrderByWithRelationInput | ProjectEndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectEndpoints.
     */
    cursor?: ProjectEndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectEndpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectEndpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectEndpoints.
     */
    distinct?: ProjectEndpointScalarFieldEnum | ProjectEndpointScalarFieldEnum[]
  }

  /**
   * ProjectEndpoint findMany
   */
  export type ProjectEndpointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEndpoint
     */
    select?: ProjectEndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEndpoint
     */
    omit?: ProjectEndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEndpointInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEndpoints to fetch.
     */
    where?: ProjectEndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectEndpoints to fetch.
     */
    orderBy?: ProjectEndpointOrderByWithRelationInput | ProjectEndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectEndpoints.
     */
    cursor?: ProjectEndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectEndpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectEndpoints.
     */
    skip?: number
    distinct?: ProjectEndpointScalarFieldEnum | ProjectEndpointScalarFieldEnum[]
  }

  /**
   * ProjectEndpoint create
   */
  export type ProjectEndpointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEndpoint
     */
    select?: ProjectEndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEndpoint
     */
    omit?: ProjectEndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEndpointInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectEndpoint.
     */
    data: XOR<ProjectEndpointCreateInput, ProjectEndpointUncheckedCreateInput>
  }

  /**
   * ProjectEndpoint createMany
   */
  export type ProjectEndpointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectEndpoints.
     */
    data: ProjectEndpointCreateManyInput | ProjectEndpointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectEndpoint createManyAndReturn
   */
  export type ProjectEndpointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEndpoint
     */
    select?: ProjectEndpointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEndpoint
     */
    omit?: ProjectEndpointOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectEndpoints.
     */
    data: ProjectEndpointCreateManyInput | ProjectEndpointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEndpointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectEndpoint update
   */
  export type ProjectEndpointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEndpoint
     */
    select?: ProjectEndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEndpoint
     */
    omit?: ProjectEndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEndpointInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectEndpoint.
     */
    data: XOR<ProjectEndpointUpdateInput, ProjectEndpointUncheckedUpdateInput>
    /**
     * Choose, which ProjectEndpoint to update.
     */
    where: ProjectEndpointWhereUniqueInput
  }

  /**
   * ProjectEndpoint updateMany
   */
  export type ProjectEndpointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectEndpoints.
     */
    data: XOR<ProjectEndpointUpdateManyMutationInput, ProjectEndpointUncheckedUpdateManyInput>
    /**
     * Filter which ProjectEndpoints to update
     */
    where?: ProjectEndpointWhereInput
    /**
     * Limit how many ProjectEndpoints to update.
     */
    limit?: number
  }

  /**
   * ProjectEndpoint updateManyAndReturn
   */
  export type ProjectEndpointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEndpoint
     */
    select?: ProjectEndpointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEndpoint
     */
    omit?: ProjectEndpointOmit<ExtArgs> | null
    /**
     * The data used to update ProjectEndpoints.
     */
    data: XOR<ProjectEndpointUpdateManyMutationInput, ProjectEndpointUncheckedUpdateManyInput>
    /**
     * Filter which ProjectEndpoints to update
     */
    where?: ProjectEndpointWhereInput
    /**
     * Limit how many ProjectEndpoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEndpointIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectEndpoint upsert
   */
  export type ProjectEndpointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEndpoint
     */
    select?: ProjectEndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEndpoint
     */
    omit?: ProjectEndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEndpointInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectEndpoint to update in case it exists.
     */
    where: ProjectEndpointWhereUniqueInput
    /**
     * In case the ProjectEndpoint found by the `where` argument doesn't exist, create a new ProjectEndpoint with this data.
     */
    create: XOR<ProjectEndpointCreateInput, ProjectEndpointUncheckedCreateInput>
    /**
     * In case the ProjectEndpoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectEndpointUpdateInput, ProjectEndpointUncheckedUpdateInput>
  }

  /**
   * ProjectEndpoint delete
   */
  export type ProjectEndpointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEndpoint
     */
    select?: ProjectEndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEndpoint
     */
    omit?: ProjectEndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEndpointInclude<ExtArgs> | null
    /**
     * Filter which ProjectEndpoint to delete.
     */
    where: ProjectEndpointWhereUniqueInput
  }

  /**
   * ProjectEndpoint deleteMany
   */
  export type ProjectEndpointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectEndpoints to delete
     */
    where?: ProjectEndpointWhereInput
    /**
     * Limit how many ProjectEndpoints to delete.
     */
    limit?: number
  }

  /**
   * ProjectEndpoint.apiKeyPermissions
   */
  export type ProjectEndpoint$apiKeyPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyEndpointPermission
     */
    select?: ApiKeyEndpointPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyEndpointPermission
     */
    omit?: ApiKeyEndpointPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyEndpointPermissionInclude<ExtArgs> | null
    where?: ApiKeyEndpointPermissionWhereInput
    orderBy?: ApiKeyEndpointPermissionOrderByWithRelationInput | ApiKeyEndpointPermissionOrderByWithRelationInput[]
    cursor?: ApiKeyEndpointPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyEndpointPermissionScalarFieldEnum | ApiKeyEndpointPermissionScalarFieldEnum[]
  }

  /**
   * ProjectEndpoint.usageLogs
   */
  export type ProjectEndpoint$usageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    where?: UsageLogWhereInput
    orderBy?: UsageLogOrderByWithRelationInput | UsageLogOrderByWithRelationInput[]
    cursor?: UsageLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsageLogScalarFieldEnum | UsageLogScalarFieldEnum[]
  }

  /**
   * ProjectEndpoint without action
   */
  export type ProjectEndpointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEndpoint
     */
    select?: ProjectEndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEndpoint
     */
    omit?: ProjectEndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEndpointInclude<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    prefix: string | null
    keyHash: string | null
    status: $Enums.ApiKeyStatus | null
    revokedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    prefix: string | null
    keyHash: string | null
    status: $Enums.ApiKeyStatus | null
    revokedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    prefix: number
    keyHash: number
    status: number
    revokedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    prefix?: true
    keyHash?: true
    status?: true
    revokedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    prefix?: true
    keyHash?: true
    status?: true
    revokedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    prefix?: true
    keyHash?: true
    status?: true
    revokedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    projectId: string
    name: string
    prefix: string
    keyHash: string
    status: $Enums.ApiKeyStatus
    revokedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    prefix?: boolean
    keyHash?: boolean
    status?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    permissions?: boolean | ApiKey$permissionsArgs<ExtArgs>
    usageLogs?: boolean | ApiKey$usageLogsArgs<ExtArgs>
    _count?: boolean | ApiKeyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    prefix?: boolean
    keyHash?: boolean
    status?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    prefix?: boolean
    keyHash?: boolean
    status?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    prefix?: boolean
    keyHash?: boolean
    status?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "name" | "prefix" | "keyHash" | "status" | "revokedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["apiKey"]>
  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    permissions?: boolean | ApiKey$permissionsArgs<ExtArgs>
    usageLogs?: boolean | ApiKey$usageLogsArgs<ExtArgs>
    _count?: boolean | ApiKeyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      permissions: Prisma.$ApiKeyEndpointPermissionPayload<ExtArgs>[]
      usageLogs: Prisma.$UsageLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      prefix: string
      keyHash: string
      status: $Enums.ApiKeyStatus
      revokedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    permissions<T extends ApiKey$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, ApiKey$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyEndpointPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usageLogs<T extends ApiKey$usageLogsArgs<ExtArgs> = {}>(args?: Subset<T, ApiKey$usageLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKey model
   */
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly projectId: FieldRef<"ApiKey", 'String'>
    readonly name: FieldRef<"ApiKey", 'String'>
    readonly prefix: FieldRef<"ApiKey", 'String'>
    readonly keyHash: FieldRef<"ApiKey", 'String'>
    readonly status: FieldRef<"ApiKey", 'ApiKeyStatus'>
    readonly revokedAt: FieldRef<"ApiKey", 'DateTime'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
    readonly updatedAt: FieldRef<"ApiKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey.permissions
   */
  export type ApiKey$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyEndpointPermission
     */
    select?: ApiKeyEndpointPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyEndpointPermission
     */
    omit?: ApiKeyEndpointPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyEndpointPermissionInclude<ExtArgs> | null
    where?: ApiKeyEndpointPermissionWhereInput
    orderBy?: ApiKeyEndpointPermissionOrderByWithRelationInput | ApiKeyEndpointPermissionOrderByWithRelationInput[]
    cursor?: ApiKeyEndpointPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyEndpointPermissionScalarFieldEnum | ApiKeyEndpointPermissionScalarFieldEnum[]
  }

  /**
   * ApiKey.usageLogs
   */
  export type ApiKey$usageLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    where?: UsageLogWhereInput
    orderBy?: UsageLogOrderByWithRelationInput | UsageLogOrderByWithRelationInput[]
    cursor?: UsageLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsageLogScalarFieldEnum | UsageLogScalarFieldEnum[]
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model ApiKeyEndpointPermission
   */

  export type AggregateApiKeyEndpointPermission = {
    _count: ApiKeyEndpointPermissionCountAggregateOutputType | null
    _min: ApiKeyEndpointPermissionMinAggregateOutputType | null
    _max: ApiKeyEndpointPermissionMaxAggregateOutputType | null
  }

  export type ApiKeyEndpointPermissionMinAggregateOutputType = {
    id: string | null
    apiKeyId: string | null
    projectId: string | null
    endpointId: string | null
    createdAt: Date | null
  }

  export type ApiKeyEndpointPermissionMaxAggregateOutputType = {
    id: string | null
    apiKeyId: string | null
    projectId: string | null
    endpointId: string | null
    createdAt: Date | null
  }

  export type ApiKeyEndpointPermissionCountAggregateOutputType = {
    id: number
    apiKeyId: number
    projectId: number
    endpointId: number
    createdAt: number
    _all: number
  }


  export type ApiKeyEndpointPermissionMinAggregateInputType = {
    id?: true
    apiKeyId?: true
    projectId?: true
    endpointId?: true
    createdAt?: true
  }

  export type ApiKeyEndpointPermissionMaxAggregateInputType = {
    id?: true
    apiKeyId?: true
    projectId?: true
    endpointId?: true
    createdAt?: true
  }

  export type ApiKeyEndpointPermissionCountAggregateInputType = {
    id?: true
    apiKeyId?: true
    projectId?: true
    endpointId?: true
    createdAt?: true
    _all?: true
  }

  export type ApiKeyEndpointPermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeyEndpointPermission to aggregate.
     */
    where?: ApiKeyEndpointPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeyEndpointPermissions to fetch.
     */
    orderBy?: ApiKeyEndpointPermissionOrderByWithRelationInput | ApiKeyEndpointPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyEndpointPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeyEndpointPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeyEndpointPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeyEndpointPermissions
    **/
    _count?: true | ApiKeyEndpointPermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyEndpointPermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyEndpointPermissionMaxAggregateInputType
  }

  export type GetApiKeyEndpointPermissionAggregateType<T extends ApiKeyEndpointPermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKeyEndpointPermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKeyEndpointPermission[P]>
      : GetScalarType<T[P], AggregateApiKeyEndpointPermission[P]>
  }




  export type ApiKeyEndpointPermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyEndpointPermissionWhereInput
    orderBy?: ApiKeyEndpointPermissionOrderByWithAggregationInput | ApiKeyEndpointPermissionOrderByWithAggregationInput[]
    by: ApiKeyEndpointPermissionScalarFieldEnum[] | ApiKeyEndpointPermissionScalarFieldEnum
    having?: ApiKeyEndpointPermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyEndpointPermissionCountAggregateInputType | true
    _min?: ApiKeyEndpointPermissionMinAggregateInputType
    _max?: ApiKeyEndpointPermissionMaxAggregateInputType
  }

  export type ApiKeyEndpointPermissionGroupByOutputType = {
    id: string
    apiKeyId: string
    projectId: string
    endpointId: string
    createdAt: Date
    _count: ApiKeyEndpointPermissionCountAggregateOutputType | null
    _min: ApiKeyEndpointPermissionMinAggregateOutputType | null
    _max: ApiKeyEndpointPermissionMaxAggregateOutputType | null
  }

  type GetApiKeyEndpointPermissionGroupByPayload<T extends ApiKeyEndpointPermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyEndpointPermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyEndpointPermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyEndpointPermissionGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyEndpointPermissionGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeyEndpointPermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKeyId?: boolean
    projectId?: boolean
    endpointId?: boolean
    createdAt?: boolean
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    endpoint?: boolean | ProjectEndpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKeyEndpointPermission"]>

  export type ApiKeyEndpointPermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKeyId?: boolean
    projectId?: boolean
    endpointId?: boolean
    createdAt?: boolean
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    endpoint?: boolean | ProjectEndpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKeyEndpointPermission"]>

  export type ApiKeyEndpointPermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKeyId?: boolean
    projectId?: boolean
    endpointId?: boolean
    createdAt?: boolean
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    endpoint?: boolean | ProjectEndpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKeyEndpointPermission"]>

  export type ApiKeyEndpointPermissionSelectScalar = {
    id?: boolean
    apiKeyId?: boolean
    projectId?: boolean
    endpointId?: boolean
    createdAt?: boolean
  }

  export type ApiKeyEndpointPermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apiKeyId" | "projectId" | "endpointId" | "createdAt", ExtArgs["result"]["apiKeyEndpointPermission"]>
  export type ApiKeyEndpointPermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    endpoint?: boolean | ProjectEndpointDefaultArgs<ExtArgs>
  }
  export type ApiKeyEndpointPermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    endpoint?: boolean | ProjectEndpointDefaultArgs<ExtArgs>
  }
  export type ApiKeyEndpointPermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    endpoint?: boolean | ProjectEndpointDefaultArgs<ExtArgs>
  }

  export type $ApiKeyEndpointPermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKeyEndpointPermission"
    objects: {
      apiKey: Prisma.$ApiKeyPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
      endpoint: Prisma.$ProjectEndpointPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      apiKeyId: string
      projectId: string
      endpointId: string
      createdAt: Date
    }, ExtArgs["result"]["apiKeyEndpointPermission"]>
    composites: {}
  }

  type ApiKeyEndpointPermissionGetPayload<S extends boolean | null | undefined | ApiKeyEndpointPermissionDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyEndpointPermissionPayload, S>

  type ApiKeyEndpointPermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyEndpointPermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyEndpointPermissionCountAggregateInputType | true
    }

  export interface ApiKeyEndpointPermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKeyEndpointPermission'], meta: { name: 'ApiKeyEndpointPermission' } }
    /**
     * Find zero or one ApiKeyEndpointPermission that matches the filter.
     * @param {ApiKeyEndpointPermissionFindUniqueArgs} args - Arguments to find a ApiKeyEndpointPermission
     * @example
     * // Get one ApiKeyEndpointPermission
     * const apiKeyEndpointPermission = await prisma.apiKeyEndpointPermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyEndpointPermissionFindUniqueArgs>(args: SelectSubset<T, ApiKeyEndpointPermissionFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyEndpointPermissionClient<$Result.GetResult<Prisma.$ApiKeyEndpointPermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKeyEndpointPermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyEndpointPermissionFindUniqueOrThrowArgs} args - Arguments to find a ApiKeyEndpointPermission
     * @example
     * // Get one ApiKeyEndpointPermission
     * const apiKeyEndpointPermission = await prisma.apiKeyEndpointPermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyEndpointPermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyEndpointPermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyEndpointPermissionClient<$Result.GetResult<Prisma.$ApiKeyEndpointPermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKeyEndpointPermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyEndpointPermissionFindFirstArgs} args - Arguments to find a ApiKeyEndpointPermission
     * @example
     * // Get one ApiKeyEndpointPermission
     * const apiKeyEndpointPermission = await prisma.apiKeyEndpointPermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyEndpointPermissionFindFirstArgs>(args?: SelectSubset<T, ApiKeyEndpointPermissionFindFirstArgs<ExtArgs>>): Prisma__ApiKeyEndpointPermissionClient<$Result.GetResult<Prisma.$ApiKeyEndpointPermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKeyEndpointPermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyEndpointPermissionFindFirstOrThrowArgs} args - Arguments to find a ApiKeyEndpointPermission
     * @example
     * // Get one ApiKeyEndpointPermission
     * const apiKeyEndpointPermission = await prisma.apiKeyEndpointPermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyEndpointPermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyEndpointPermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyEndpointPermissionClient<$Result.GetResult<Prisma.$ApiKeyEndpointPermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeyEndpointPermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyEndpointPermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeyEndpointPermissions
     * const apiKeyEndpointPermissions = await prisma.apiKeyEndpointPermission.findMany()
     * 
     * // Get first 10 ApiKeyEndpointPermissions
     * const apiKeyEndpointPermissions = await prisma.apiKeyEndpointPermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyEndpointPermissionWithIdOnly = await prisma.apiKeyEndpointPermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyEndpointPermissionFindManyArgs>(args?: SelectSubset<T, ApiKeyEndpointPermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyEndpointPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKeyEndpointPermission.
     * @param {ApiKeyEndpointPermissionCreateArgs} args - Arguments to create a ApiKeyEndpointPermission.
     * @example
     * // Create one ApiKeyEndpointPermission
     * const ApiKeyEndpointPermission = await prisma.apiKeyEndpointPermission.create({
     *   data: {
     *     // ... data to create a ApiKeyEndpointPermission
     *   }
     * })
     * 
     */
    create<T extends ApiKeyEndpointPermissionCreateArgs>(args: SelectSubset<T, ApiKeyEndpointPermissionCreateArgs<ExtArgs>>): Prisma__ApiKeyEndpointPermissionClient<$Result.GetResult<Prisma.$ApiKeyEndpointPermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeyEndpointPermissions.
     * @param {ApiKeyEndpointPermissionCreateManyArgs} args - Arguments to create many ApiKeyEndpointPermissions.
     * @example
     * // Create many ApiKeyEndpointPermissions
     * const apiKeyEndpointPermission = await prisma.apiKeyEndpointPermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyEndpointPermissionCreateManyArgs>(args?: SelectSubset<T, ApiKeyEndpointPermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeyEndpointPermissions and returns the data saved in the database.
     * @param {ApiKeyEndpointPermissionCreateManyAndReturnArgs} args - Arguments to create many ApiKeyEndpointPermissions.
     * @example
     * // Create many ApiKeyEndpointPermissions
     * const apiKeyEndpointPermission = await prisma.apiKeyEndpointPermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeyEndpointPermissions and only return the `id`
     * const apiKeyEndpointPermissionWithIdOnly = await prisma.apiKeyEndpointPermission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyEndpointPermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyEndpointPermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyEndpointPermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKeyEndpointPermission.
     * @param {ApiKeyEndpointPermissionDeleteArgs} args - Arguments to delete one ApiKeyEndpointPermission.
     * @example
     * // Delete one ApiKeyEndpointPermission
     * const ApiKeyEndpointPermission = await prisma.apiKeyEndpointPermission.delete({
     *   where: {
     *     // ... filter to delete one ApiKeyEndpointPermission
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyEndpointPermissionDeleteArgs>(args: SelectSubset<T, ApiKeyEndpointPermissionDeleteArgs<ExtArgs>>): Prisma__ApiKeyEndpointPermissionClient<$Result.GetResult<Prisma.$ApiKeyEndpointPermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKeyEndpointPermission.
     * @param {ApiKeyEndpointPermissionUpdateArgs} args - Arguments to update one ApiKeyEndpointPermission.
     * @example
     * // Update one ApiKeyEndpointPermission
     * const apiKeyEndpointPermission = await prisma.apiKeyEndpointPermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyEndpointPermissionUpdateArgs>(args: SelectSubset<T, ApiKeyEndpointPermissionUpdateArgs<ExtArgs>>): Prisma__ApiKeyEndpointPermissionClient<$Result.GetResult<Prisma.$ApiKeyEndpointPermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeyEndpointPermissions.
     * @param {ApiKeyEndpointPermissionDeleteManyArgs} args - Arguments to filter ApiKeyEndpointPermissions to delete.
     * @example
     * // Delete a few ApiKeyEndpointPermissions
     * const { count } = await prisma.apiKeyEndpointPermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyEndpointPermissionDeleteManyArgs>(args?: SelectSubset<T, ApiKeyEndpointPermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeyEndpointPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyEndpointPermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeyEndpointPermissions
     * const apiKeyEndpointPermission = await prisma.apiKeyEndpointPermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyEndpointPermissionUpdateManyArgs>(args: SelectSubset<T, ApiKeyEndpointPermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeyEndpointPermissions and returns the data updated in the database.
     * @param {ApiKeyEndpointPermissionUpdateManyAndReturnArgs} args - Arguments to update many ApiKeyEndpointPermissions.
     * @example
     * // Update many ApiKeyEndpointPermissions
     * const apiKeyEndpointPermission = await prisma.apiKeyEndpointPermission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeyEndpointPermissions and only return the `id`
     * const apiKeyEndpointPermissionWithIdOnly = await prisma.apiKeyEndpointPermission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiKeyEndpointPermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyEndpointPermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyEndpointPermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKeyEndpointPermission.
     * @param {ApiKeyEndpointPermissionUpsertArgs} args - Arguments to update or create a ApiKeyEndpointPermission.
     * @example
     * // Update or create a ApiKeyEndpointPermission
     * const apiKeyEndpointPermission = await prisma.apiKeyEndpointPermission.upsert({
     *   create: {
     *     // ... data to create a ApiKeyEndpointPermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKeyEndpointPermission we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyEndpointPermissionUpsertArgs>(args: SelectSubset<T, ApiKeyEndpointPermissionUpsertArgs<ExtArgs>>): Prisma__ApiKeyEndpointPermissionClient<$Result.GetResult<Prisma.$ApiKeyEndpointPermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeyEndpointPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyEndpointPermissionCountArgs} args - Arguments to filter ApiKeyEndpointPermissions to count.
     * @example
     * // Count the number of ApiKeyEndpointPermissions
     * const count = await prisma.apiKeyEndpointPermission.count({
     *   where: {
     *     // ... the filter for the ApiKeyEndpointPermissions we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyEndpointPermissionCountArgs>(
      args?: Subset<T, ApiKeyEndpointPermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyEndpointPermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKeyEndpointPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyEndpointPermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyEndpointPermissionAggregateArgs>(args: Subset<T, ApiKeyEndpointPermissionAggregateArgs>): Prisma.PrismaPromise<GetApiKeyEndpointPermissionAggregateType<T>>

    /**
     * Group by ApiKeyEndpointPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyEndpointPermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyEndpointPermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyEndpointPermissionGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyEndpointPermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyEndpointPermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyEndpointPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKeyEndpointPermission model
   */
  readonly fields: ApiKeyEndpointPermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKeyEndpointPermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyEndpointPermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apiKey<T extends ApiKeyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiKeyDefaultArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    endpoint<T extends ProjectEndpointDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectEndpointDefaultArgs<ExtArgs>>): Prisma__ProjectEndpointClient<$Result.GetResult<Prisma.$ProjectEndpointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKeyEndpointPermission model
   */
  interface ApiKeyEndpointPermissionFieldRefs {
    readonly id: FieldRef<"ApiKeyEndpointPermission", 'String'>
    readonly apiKeyId: FieldRef<"ApiKeyEndpointPermission", 'String'>
    readonly projectId: FieldRef<"ApiKeyEndpointPermission", 'String'>
    readonly endpointId: FieldRef<"ApiKeyEndpointPermission", 'String'>
    readonly createdAt: FieldRef<"ApiKeyEndpointPermission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKeyEndpointPermission findUnique
   */
  export type ApiKeyEndpointPermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyEndpointPermission
     */
    select?: ApiKeyEndpointPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyEndpointPermission
     */
    omit?: ApiKeyEndpointPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyEndpointPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyEndpointPermission to fetch.
     */
    where: ApiKeyEndpointPermissionWhereUniqueInput
  }

  /**
   * ApiKeyEndpointPermission findUniqueOrThrow
   */
  export type ApiKeyEndpointPermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyEndpointPermission
     */
    select?: ApiKeyEndpointPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyEndpointPermission
     */
    omit?: ApiKeyEndpointPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyEndpointPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyEndpointPermission to fetch.
     */
    where: ApiKeyEndpointPermissionWhereUniqueInput
  }

  /**
   * ApiKeyEndpointPermission findFirst
   */
  export type ApiKeyEndpointPermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyEndpointPermission
     */
    select?: ApiKeyEndpointPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyEndpointPermission
     */
    omit?: ApiKeyEndpointPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyEndpointPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyEndpointPermission to fetch.
     */
    where?: ApiKeyEndpointPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeyEndpointPermissions to fetch.
     */
    orderBy?: ApiKeyEndpointPermissionOrderByWithRelationInput | ApiKeyEndpointPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeyEndpointPermissions.
     */
    cursor?: ApiKeyEndpointPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeyEndpointPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeyEndpointPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeyEndpointPermissions.
     */
    distinct?: ApiKeyEndpointPermissionScalarFieldEnum | ApiKeyEndpointPermissionScalarFieldEnum[]
  }

  /**
   * ApiKeyEndpointPermission findFirstOrThrow
   */
  export type ApiKeyEndpointPermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyEndpointPermission
     */
    select?: ApiKeyEndpointPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyEndpointPermission
     */
    omit?: ApiKeyEndpointPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyEndpointPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyEndpointPermission to fetch.
     */
    where?: ApiKeyEndpointPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeyEndpointPermissions to fetch.
     */
    orderBy?: ApiKeyEndpointPermissionOrderByWithRelationInput | ApiKeyEndpointPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeyEndpointPermissions.
     */
    cursor?: ApiKeyEndpointPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeyEndpointPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeyEndpointPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeyEndpointPermissions.
     */
    distinct?: ApiKeyEndpointPermissionScalarFieldEnum | ApiKeyEndpointPermissionScalarFieldEnum[]
  }

  /**
   * ApiKeyEndpointPermission findMany
   */
  export type ApiKeyEndpointPermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyEndpointPermission
     */
    select?: ApiKeyEndpointPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyEndpointPermission
     */
    omit?: ApiKeyEndpointPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyEndpointPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyEndpointPermissions to fetch.
     */
    where?: ApiKeyEndpointPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeyEndpointPermissions to fetch.
     */
    orderBy?: ApiKeyEndpointPermissionOrderByWithRelationInput | ApiKeyEndpointPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeyEndpointPermissions.
     */
    cursor?: ApiKeyEndpointPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeyEndpointPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeyEndpointPermissions.
     */
    skip?: number
    distinct?: ApiKeyEndpointPermissionScalarFieldEnum | ApiKeyEndpointPermissionScalarFieldEnum[]
  }

  /**
   * ApiKeyEndpointPermission create
   */
  export type ApiKeyEndpointPermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyEndpointPermission
     */
    select?: ApiKeyEndpointPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyEndpointPermission
     */
    omit?: ApiKeyEndpointPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyEndpointPermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKeyEndpointPermission.
     */
    data: XOR<ApiKeyEndpointPermissionCreateInput, ApiKeyEndpointPermissionUncheckedCreateInput>
  }

  /**
   * ApiKeyEndpointPermission createMany
   */
  export type ApiKeyEndpointPermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeyEndpointPermissions.
     */
    data: ApiKeyEndpointPermissionCreateManyInput | ApiKeyEndpointPermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKeyEndpointPermission createManyAndReturn
   */
  export type ApiKeyEndpointPermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyEndpointPermission
     */
    select?: ApiKeyEndpointPermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyEndpointPermission
     */
    omit?: ApiKeyEndpointPermissionOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeyEndpointPermissions.
     */
    data: ApiKeyEndpointPermissionCreateManyInput | ApiKeyEndpointPermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyEndpointPermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKeyEndpointPermission update
   */
  export type ApiKeyEndpointPermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyEndpointPermission
     */
    select?: ApiKeyEndpointPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyEndpointPermission
     */
    omit?: ApiKeyEndpointPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyEndpointPermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKeyEndpointPermission.
     */
    data: XOR<ApiKeyEndpointPermissionUpdateInput, ApiKeyEndpointPermissionUncheckedUpdateInput>
    /**
     * Choose, which ApiKeyEndpointPermission to update.
     */
    where: ApiKeyEndpointPermissionWhereUniqueInput
  }

  /**
   * ApiKeyEndpointPermission updateMany
   */
  export type ApiKeyEndpointPermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeyEndpointPermissions.
     */
    data: XOR<ApiKeyEndpointPermissionUpdateManyMutationInput, ApiKeyEndpointPermissionUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeyEndpointPermissions to update
     */
    where?: ApiKeyEndpointPermissionWhereInput
    /**
     * Limit how many ApiKeyEndpointPermissions to update.
     */
    limit?: number
  }

  /**
   * ApiKeyEndpointPermission updateManyAndReturn
   */
  export type ApiKeyEndpointPermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyEndpointPermission
     */
    select?: ApiKeyEndpointPermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyEndpointPermission
     */
    omit?: ApiKeyEndpointPermissionOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeyEndpointPermissions.
     */
    data: XOR<ApiKeyEndpointPermissionUpdateManyMutationInput, ApiKeyEndpointPermissionUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeyEndpointPermissions to update
     */
    where?: ApiKeyEndpointPermissionWhereInput
    /**
     * Limit how many ApiKeyEndpointPermissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyEndpointPermissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKeyEndpointPermission upsert
   */
  export type ApiKeyEndpointPermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyEndpointPermission
     */
    select?: ApiKeyEndpointPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyEndpointPermission
     */
    omit?: ApiKeyEndpointPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyEndpointPermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKeyEndpointPermission to update in case it exists.
     */
    where: ApiKeyEndpointPermissionWhereUniqueInput
    /**
     * In case the ApiKeyEndpointPermission found by the `where` argument doesn't exist, create a new ApiKeyEndpointPermission with this data.
     */
    create: XOR<ApiKeyEndpointPermissionCreateInput, ApiKeyEndpointPermissionUncheckedCreateInput>
    /**
     * In case the ApiKeyEndpointPermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyEndpointPermissionUpdateInput, ApiKeyEndpointPermissionUncheckedUpdateInput>
  }

  /**
   * ApiKeyEndpointPermission delete
   */
  export type ApiKeyEndpointPermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyEndpointPermission
     */
    select?: ApiKeyEndpointPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyEndpointPermission
     */
    omit?: ApiKeyEndpointPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyEndpointPermissionInclude<ExtArgs> | null
    /**
     * Filter which ApiKeyEndpointPermission to delete.
     */
    where: ApiKeyEndpointPermissionWhereUniqueInput
  }

  /**
   * ApiKeyEndpointPermission deleteMany
   */
  export type ApiKeyEndpointPermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeyEndpointPermissions to delete
     */
    where?: ApiKeyEndpointPermissionWhereInput
    /**
     * Limit how many ApiKeyEndpointPermissions to delete.
     */
    limit?: number
  }

  /**
   * ApiKeyEndpointPermission without action
   */
  export type ApiKeyEndpointPermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyEndpointPermission
     */
    select?: ApiKeyEndpointPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyEndpointPermission
     */
    omit?: ApiKeyEndpointPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyEndpointPermissionInclude<ExtArgs> | null
  }


  /**
   * Model UsageLog
   */

  export type AggregateUsageLog = {
    _count: UsageLogCountAggregateOutputType | null
    _avg: UsageLogAvgAggregateOutputType | null
    _sum: UsageLogSumAggregateOutputType | null
    _min: UsageLogMinAggregateOutputType | null
    _max: UsageLogMaxAggregateOutputType | null
  }

  export type UsageLogAvgAggregateOutputType = {
    gatewayStatusCode: number | null
    upstreamStatusCode: number | null
    durationMs: number | null
  }

  export type UsageLogSumAggregateOutputType = {
    gatewayStatusCode: number | null
    upstreamStatusCode: number | null
    durationMs: number | null
  }

  export type UsageLogMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    apiKeyId: string | null
    endpointId: string | null
    requestMethod: $Enums.EndpointMethod | null
    requestPath: string | null
    queryString: string | null
    outcome: $Enums.UsageLogOutcome | null
    gatewayStatusCode: number | null
    upstreamStatusCode: number | null
    errorCode: string | null
    durationMs: number | null
    clientIp: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type UsageLogMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    apiKeyId: string | null
    endpointId: string | null
    requestMethod: $Enums.EndpointMethod | null
    requestPath: string | null
    queryString: string | null
    outcome: $Enums.UsageLogOutcome | null
    gatewayStatusCode: number | null
    upstreamStatusCode: number | null
    errorCode: string | null
    durationMs: number | null
    clientIp: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type UsageLogCountAggregateOutputType = {
    id: number
    projectId: number
    apiKeyId: number
    endpointId: number
    requestMethod: number
    requestPath: number
    queryString: number
    outcome: number
    gatewayStatusCode: number
    upstreamStatusCode: number
    errorCode: number
    durationMs: number
    clientIp: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type UsageLogAvgAggregateInputType = {
    gatewayStatusCode?: true
    upstreamStatusCode?: true
    durationMs?: true
  }

  export type UsageLogSumAggregateInputType = {
    gatewayStatusCode?: true
    upstreamStatusCode?: true
    durationMs?: true
  }

  export type UsageLogMinAggregateInputType = {
    id?: true
    projectId?: true
    apiKeyId?: true
    endpointId?: true
    requestMethod?: true
    requestPath?: true
    queryString?: true
    outcome?: true
    gatewayStatusCode?: true
    upstreamStatusCode?: true
    errorCode?: true
    durationMs?: true
    clientIp?: true
    userAgent?: true
    createdAt?: true
  }

  export type UsageLogMaxAggregateInputType = {
    id?: true
    projectId?: true
    apiKeyId?: true
    endpointId?: true
    requestMethod?: true
    requestPath?: true
    queryString?: true
    outcome?: true
    gatewayStatusCode?: true
    upstreamStatusCode?: true
    errorCode?: true
    durationMs?: true
    clientIp?: true
    userAgent?: true
    createdAt?: true
  }

  export type UsageLogCountAggregateInputType = {
    id?: true
    projectId?: true
    apiKeyId?: true
    endpointId?: true
    requestMethod?: true
    requestPath?: true
    queryString?: true
    outcome?: true
    gatewayStatusCode?: true
    upstreamStatusCode?: true
    errorCode?: true
    durationMs?: true
    clientIp?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type UsageLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageLog to aggregate.
     */
    where?: UsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageLogs to fetch.
     */
    orderBy?: UsageLogOrderByWithRelationInput | UsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsageLogs
    **/
    _count?: true | UsageLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsageLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsageLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsageLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsageLogMaxAggregateInputType
  }

  export type GetUsageLogAggregateType<T extends UsageLogAggregateArgs> = {
        [P in keyof T & keyof AggregateUsageLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsageLog[P]>
      : GetScalarType<T[P], AggregateUsageLog[P]>
  }




  export type UsageLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageLogWhereInput
    orderBy?: UsageLogOrderByWithAggregationInput | UsageLogOrderByWithAggregationInput[]
    by: UsageLogScalarFieldEnum[] | UsageLogScalarFieldEnum
    having?: UsageLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsageLogCountAggregateInputType | true
    _avg?: UsageLogAvgAggregateInputType
    _sum?: UsageLogSumAggregateInputType
    _min?: UsageLogMinAggregateInputType
    _max?: UsageLogMaxAggregateInputType
  }

  export type UsageLogGroupByOutputType = {
    id: string
    projectId: string | null
    apiKeyId: string | null
    endpointId: string | null
    requestMethod: $Enums.EndpointMethod
    requestPath: string
    queryString: string | null
    outcome: $Enums.UsageLogOutcome
    gatewayStatusCode: number
    upstreamStatusCode: number | null
    errorCode: string | null
    durationMs: number
    clientIp: string | null
    userAgent: string | null
    createdAt: Date
    _count: UsageLogCountAggregateOutputType | null
    _avg: UsageLogAvgAggregateOutputType | null
    _sum: UsageLogSumAggregateOutputType | null
    _min: UsageLogMinAggregateOutputType | null
    _max: UsageLogMaxAggregateOutputType | null
  }

  type GetUsageLogGroupByPayload<T extends UsageLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsageLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsageLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsageLogGroupByOutputType[P]>
            : GetScalarType<T[P], UsageLogGroupByOutputType[P]>
        }
      >
    >


  export type UsageLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    apiKeyId?: boolean
    endpointId?: boolean
    requestMethod?: boolean
    requestPath?: boolean
    queryString?: boolean
    outcome?: boolean
    gatewayStatusCode?: boolean
    upstreamStatusCode?: boolean
    errorCode?: boolean
    durationMs?: boolean
    clientIp?: boolean
    userAgent?: boolean
    createdAt?: boolean
    project?: boolean | UsageLog$projectArgs<ExtArgs>
    apiKey?: boolean | UsageLog$apiKeyArgs<ExtArgs>
    endpoint?: boolean | UsageLog$endpointArgs<ExtArgs>
  }, ExtArgs["result"]["usageLog"]>

  export type UsageLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    apiKeyId?: boolean
    endpointId?: boolean
    requestMethod?: boolean
    requestPath?: boolean
    queryString?: boolean
    outcome?: boolean
    gatewayStatusCode?: boolean
    upstreamStatusCode?: boolean
    errorCode?: boolean
    durationMs?: boolean
    clientIp?: boolean
    userAgent?: boolean
    createdAt?: boolean
    project?: boolean | UsageLog$projectArgs<ExtArgs>
    apiKey?: boolean | UsageLog$apiKeyArgs<ExtArgs>
    endpoint?: boolean | UsageLog$endpointArgs<ExtArgs>
  }, ExtArgs["result"]["usageLog"]>

  export type UsageLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    apiKeyId?: boolean
    endpointId?: boolean
    requestMethod?: boolean
    requestPath?: boolean
    queryString?: boolean
    outcome?: boolean
    gatewayStatusCode?: boolean
    upstreamStatusCode?: boolean
    errorCode?: boolean
    durationMs?: boolean
    clientIp?: boolean
    userAgent?: boolean
    createdAt?: boolean
    project?: boolean | UsageLog$projectArgs<ExtArgs>
    apiKey?: boolean | UsageLog$apiKeyArgs<ExtArgs>
    endpoint?: boolean | UsageLog$endpointArgs<ExtArgs>
  }, ExtArgs["result"]["usageLog"]>

  export type UsageLogSelectScalar = {
    id?: boolean
    projectId?: boolean
    apiKeyId?: boolean
    endpointId?: boolean
    requestMethod?: boolean
    requestPath?: boolean
    queryString?: boolean
    outcome?: boolean
    gatewayStatusCode?: boolean
    upstreamStatusCode?: boolean
    errorCode?: boolean
    durationMs?: boolean
    clientIp?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }

  export type UsageLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "apiKeyId" | "endpointId" | "requestMethod" | "requestPath" | "queryString" | "outcome" | "gatewayStatusCode" | "upstreamStatusCode" | "errorCode" | "durationMs" | "clientIp" | "userAgent" | "createdAt", ExtArgs["result"]["usageLog"]>
  export type UsageLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | UsageLog$projectArgs<ExtArgs>
    apiKey?: boolean | UsageLog$apiKeyArgs<ExtArgs>
    endpoint?: boolean | UsageLog$endpointArgs<ExtArgs>
  }
  export type UsageLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | UsageLog$projectArgs<ExtArgs>
    apiKey?: boolean | UsageLog$apiKeyArgs<ExtArgs>
    endpoint?: boolean | UsageLog$endpointArgs<ExtArgs>
  }
  export type UsageLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | UsageLog$projectArgs<ExtArgs>
    apiKey?: boolean | UsageLog$apiKeyArgs<ExtArgs>
    endpoint?: boolean | UsageLog$endpointArgs<ExtArgs>
  }

  export type $UsageLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsageLog"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs> | null
      apiKey: Prisma.$ApiKeyPayload<ExtArgs> | null
      endpoint: Prisma.$ProjectEndpointPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string | null
      apiKeyId: string | null
      endpointId: string | null
      requestMethod: $Enums.EndpointMethod
      requestPath: string
      queryString: string | null
      outcome: $Enums.UsageLogOutcome
      gatewayStatusCode: number
      upstreamStatusCode: number | null
      errorCode: string | null
      durationMs: number
      clientIp: string | null
      userAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["usageLog"]>
    composites: {}
  }

  type UsageLogGetPayload<S extends boolean | null | undefined | UsageLogDefaultArgs> = $Result.GetResult<Prisma.$UsageLogPayload, S>

  type UsageLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsageLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsageLogCountAggregateInputType | true
    }

  export interface UsageLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsageLog'], meta: { name: 'UsageLog' } }
    /**
     * Find zero or one UsageLog that matches the filter.
     * @param {UsageLogFindUniqueArgs} args - Arguments to find a UsageLog
     * @example
     * // Get one UsageLog
     * const usageLog = await prisma.usageLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsageLogFindUniqueArgs>(args: SelectSubset<T, UsageLogFindUniqueArgs<ExtArgs>>): Prisma__UsageLogClient<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsageLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsageLogFindUniqueOrThrowArgs} args - Arguments to find a UsageLog
     * @example
     * // Get one UsageLog
     * const usageLog = await prisma.usageLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsageLogFindUniqueOrThrowArgs>(args: SelectSubset<T, UsageLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsageLogClient<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageLogFindFirstArgs} args - Arguments to find a UsageLog
     * @example
     * // Get one UsageLog
     * const usageLog = await prisma.usageLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsageLogFindFirstArgs>(args?: SelectSubset<T, UsageLogFindFirstArgs<ExtArgs>>): Prisma__UsageLogClient<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageLogFindFirstOrThrowArgs} args - Arguments to find a UsageLog
     * @example
     * // Get one UsageLog
     * const usageLog = await prisma.usageLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsageLogFindFirstOrThrowArgs>(args?: SelectSubset<T, UsageLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsageLogClient<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsageLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsageLogs
     * const usageLogs = await prisma.usageLog.findMany()
     * 
     * // Get first 10 UsageLogs
     * const usageLogs = await prisma.usageLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usageLogWithIdOnly = await prisma.usageLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsageLogFindManyArgs>(args?: SelectSubset<T, UsageLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsageLog.
     * @param {UsageLogCreateArgs} args - Arguments to create a UsageLog.
     * @example
     * // Create one UsageLog
     * const UsageLog = await prisma.usageLog.create({
     *   data: {
     *     // ... data to create a UsageLog
     *   }
     * })
     * 
     */
    create<T extends UsageLogCreateArgs>(args: SelectSubset<T, UsageLogCreateArgs<ExtArgs>>): Prisma__UsageLogClient<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsageLogs.
     * @param {UsageLogCreateManyArgs} args - Arguments to create many UsageLogs.
     * @example
     * // Create many UsageLogs
     * const usageLog = await prisma.usageLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsageLogCreateManyArgs>(args?: SelectSubset<T, UsageLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsageLogs and returns the data saved in the database.
     * @param {UsageLogCreateManyAndReturnArgs} args - Arguments to create many UsageLogs.
     * @example
     * // Create many UsageLogs
     * const usageLog = await prisma.usageLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsageLogs and only return the `id`
     * const usageLogWithIdOnly = await prisma.usageLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsageLogCreateManyAndReturnArgs>(args?: SelectSubset<T, UsageLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsageLog.
     * @param {UsageLogDeleteArgs} args - Arguments to delete one UsageLog.
     * @example
     * // Delete one UsageLog
     * const UsageLog = await prisma.usageLog.delete({
     *   where: {
     *     // ... filter to delete one UsageLog
     *   }
     * })
     * 
     */
    delete<T extends UsageLogDeleteArgs>(args: SelectSubset<T, UsageLogDeleteArgs<ExtArgs>>): Prisma__UsageLogClient<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsageLog.
     * @param {UsageLogUpdateArgs} args - Arguments to update one UsageLog.
     * @example
     * // Update one UsageLog
     * const usageLog = await prisma.usageLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsageLogUpdateArgs>(args: SelectSubset<T, UsageLogUpdateArgs<ExtArgs>>): Prisma__UsageLogClient<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsageLogs.
     * @param {UsageLogDeleteManyArgs} args - Arguments to filter UsageLogs to delete.
     * @example
     * // Delete a few UsageLogs
     * const { count } = await prisma.usageLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsageLogDeleteManyArgs>(args?: SelectSubset<T, UsageLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsageLogs
     * const usageLog = await prisma.usageLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsageLogUpdateManyArgs>(args: SelectSubset<T, UsageLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageLogs and returns the data updated in the database.
     * @param {UsageLogUpdateManyAndReturnArgs} args - Arguments to update many UsageLogs.
     * @example
     * // Update many UsageLogs
     * const usageLog = await prisma.usageLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsageLogs and only return the `id`
     * const usageLogWithIdOnly = await prisma.usageLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsageLogUpdateManyAndReturnArgs>(args: SelectSubset<T, UsageLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsageLog.
     * @param {UsageLogUpsertArgs} args - Arguments to update or create a UsageLog.
     * @example
     * // Update or create a UsageLog
     * const usageLog = await prisma.usageLog.upsert({
     *   create: {
     *     // ... data to create a UsageLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsageLog we want to update
     *   }
     * })
     */
    upsert<T extends UsageLogUpsertArgs>(args: SelectSubset<T, UsageLogUpsertArgs<ExtArgs>>): Prisma__UsageLogClient<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageLogCountArgs} args - Arguments to filter UsageLogs to count.
     * @example
     * // Count the number of UsageLogs
     * const count = await prisma.usageLog.count({
     *   where: {
     *     // ... the filter for the UsageLogs we want to count
     *   }
     * })
    **/
    count<T extends UsageLogCountArgs>(
      args?: Subset<T, UsageLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsageLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsageLogAggregateArgs>(args: Subset<T, UsageLogAggregateArgs>): Prisma.PrismaPromise<GetUsageLogAggregateType<T>>

    /**
     * Group by UsageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsageLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsageLogGroupByArgs['orderBy'] }
        : { orderBy?: UsageLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsageLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsageLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsageLog model
   */
  readonly fields: UsageLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsageLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsageLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends UsageLog$projectArgs<ExtArgs> = {}>(args?: Subset<T, UsageLog$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    apiKey<T extends UsageLog$apiKeyArgs<ExtArgs> = {}>(args?: Subset<T, UsageLog$apiKeyArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    endpoint<T extends UsageLog$endpointArgs<ExtArgs> = {}>(args?: Subset<T, UsageLog$endpointArgs<ExtArgs>>): Prisma__ProjectEndpointClient<$Result.GetResult<Prisma.$ProjectEndpointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsageLog model
   */
  interface UsageLogFieldRefs {
    readonly id: FieldRef<"UsageLog", 'String'>
    readonly projectId: FieldRef<"UsageLog", 'String'>
    readonly apiKeyId: FieldRef<"UsageLog", 'String'>
    readonly endpointId: FieldRef<"UsageLog", 'String'>
    readonly requestMethod: FieldRef<"UsageLog", 'EndpointMethod'>
    readonly requestPath: FieldRef<"UsageLog", 'String'>
    readonly queryString: FieldRef<"UsageLog", 'String'>
    readonly outcome: FieldRef<"UsageLog", 'UsageLogOutcome'>
    readonly gatewayStatusCode: FieldRef<"UsageLog", 'Int'>
    readonly upstreamStatusCode: FieldRef<"UsageLog", 'Int'>
    readonly errorCode: FieldRef<"UsageLog", 'String'>
    readonly durationMs: FieldRef<"UsageLog", 'Int'>
    readonly clientIp: FieldRef<"UsageLog", 'String'>
    readonly userAgent: FieldRef<"UsageLog", 'String'>
    readonly createdAt: FieldRef<"UsageLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UsageLog findUnique
   */
  export type UsageLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    /**
     * Filter, which UsageLog to fetch.
     */
    where: UsageLogWhereUniqueInput
  }

  /**
   * UsageLog findUniqueOrThrow
   */
  export type UsageLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    /**
     * Filter, which UsageLog to fetch.
     */
    where: UsageLogWhereUniqueInput
  }

  /**
   * UsageLog findFirst
   */
  export type UsageLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    /**
     * Filter, which UsageLog to fetch.
     */
    where?: UsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageLogs to fetch.
     */
    orderBy?: UsageLogOrderByWithRelationInput | UsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageLogs.
     */
    cursor?: UsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageLogs.
     */
    distinct?: UsageLogScalarFieldEnum | UsageLogScalarFieldEnum[]
  }

  /**
   * UsageLog findFirstOrThrow
   */
  export type UsageLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    /**
     * Filter, which UsageLog to fetch.
     */
    where?: UsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageLogs to fetch.
     */
    orderBy?: UsageLogOrderByWithRelationInput | UsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageLogs.
     */
    cursor?: UsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageLogs.
     */
    distinct?: UsageLogScalarFieldEnum | UsageLogScalarFieldEnum[]
  }

  /**
   * UsageLog findMany
   */
  export type UsageLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    /**
     * Filter, which UsageLogs to fetch.
     */
    where?: UsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageLogs to fetch.
     */
    orderBy?: UsageLogOrderByWithRelationInput | UsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsageLogs.
     */
    cursor?: UsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageLogs.
     */
    skip?: number
    distinct?: UsageLogScalarFieldEnum | UsageLogScalarFieldEnum[]
  }

  /**
   * UsageLog create
   */
  export type UsageLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    /**
     * The data needed to create a UsageLog.
     */
    data: XOR<UsageLogCreateInput, UsageLogUncheckedCreateInput>
  }

  /**
   * UsageLog createMany
   */
  export type UsageLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsageLogs.
     */
    data: UsageLogCreateManyInput | UsageLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsageLog createManyAndReturn
   */
  export type UsageLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * The data used to create many UsageLogs.
     */
    data: UsageLogCreateManyInput | UsageLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsageLog update
   */
  export type UsageLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    /**
     * The data needed to update a UsageLog.
     */
    data: XOR<UsageLogUpdateInput, UsageLogUncheckedUpdateInput>
    /**
     * Choose, which UsageLog to update.
     */
    where: UsageLogWhereUniqueInput
  }

  /**
   * UsageLog updateMany
   */
  export type UsageLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsageLogs.
     */
    data: XOR<UsageLogUpdateManyMutationInput, UsageLogUncheckedUpdateManyInput>
    /**
     * Filter which UsageLogs to update
     */
    where?: UsageLogWhereInput
    /**
     * Limit how many UsageLogs to update.
     */
    limit?: number
  }

  /**
   * UsageLog updateManyAndReturn
   */
  export type UsageLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * The data used to update UsageLogs.
     */
    data: XOR<UsageLogUpdateManyMutationInput, UsageLogUncheckedUpdateManyInput>
    /**
     * Filter which UsageLogs to update
     */
    where?: UsageLogWhereInput
    /**
     * Limit how many UsageLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsageLog upsert
   */
  export type UsageLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    /**
     * The filter to search for the UsageLog to update in case it exists.
     */
    where: UsageLogWhereUniqueInput
    /**
     * In case the UsageLog found by the `where` argument doesn't exist, create a new UsageLog with this data.
     */
    create: XOR<UsageLogCreateInput, UsageLogUncheckedCreateInput>
    /**
     * In case the UsageLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsageLogUpdateInput, UsageLogUncheckedUpdateInput>
  }

  /**
   * UsageLog delete
   */
  export type UsageLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    /**
     * Filter which UsageLog to delete.
     */
    where: UsageLogWhereUniqueInput
  }

  /**
   * UsageLog deleteMany
   */
  export type UsageLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageLogs to delete
     */
    where?: UsageLogWhereInput
    /**
     * Limit how many UsageLogs to delete.
     */
    limit?: number
  }

  /**
   * UsageLog.project
   */
  export type UsageLog$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * UsageLog.apiKey
   */
  export type UsageLog$apiKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
  }

  /**
   * UsageLog.endpoint
   */
  export type UsageLog$endpointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEndpoint
     */
    select?: ProjectEndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEndpoint
     */
    omit?: ProjectEndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEndpointInclude<ExtArgs> | null
    where?: ProjectEndpointWhereInput
  }

  /**
   * UsageLog without action
   */
  export type UsageLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectEndpointScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    method: 'method',
    path: 'path',
    routeShape: 'routeShape',
    upstreamUrl: 'upstreamUrl',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectEndpointScalarFieldEnum = (typeof ProjectEndpointScalarFieldEnum)[keyof typeof ProjectEndpointScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    prefix: 'prefix',
    keyHash: 'keyHash',
    status: 'status',
    revokedAt: 'revokedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const ApiKeyEndpointPermissionScalarFieldEnum: {
    id: 'id',
    apiKeyId: 'apiKeyId',
    projectId: 'projectId',
    endpointId: 'endpointId',
    createdAt: 'createdAt'
  };

  export type ApiKeyEndpointPermissionScalarFieldEnum = (typeof ApiKeyEndpointPermissionScalarFieldEnum)[keyof typeof ApiKeyEndpointPermissionScalarFieldEnum]


  export const UsageLogScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    apiKeyId: 'apiKeyId',
    endpointId: 'endpointId',
    requestMethod: 'requestMethod',
    requestPath: 'requestPath',
    queryString: 'queryString',
    outcome: 'outcome',
    gatewayStatusCode: 'gatewayStatusCode',
    upstreamStatusCode: 'upstreamStatusCode',
    errorCode: 'errorCode',
    durationMs: 'durationMs',
    clientIp: 'clientIp',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type UsageLogScalarFieldEnum = (typeof UsageLogScalarFieldEnum)[keyof typeof UsageLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EndpointMethod'
   */
  export type EnumEndpointMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EndpointMethod'>
    


  /**
   * Reference to a field of type 'EndpointMethod[]'
   */
  export type ListEnumEndpointMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EndpointMethod[]'>
    


  /**
   * Reference to a field of type 'EndpointStatus'
   */
  export type EnumEndpointStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EndpointStatus'>
    


  /**
   * Reference to a field of type 'EndpointStatus[]'
   */
  export type ListEnumEndpointStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EndpointStatus[]'>
    


  /**
   * Reference to a field of type 'ApiKeyStatus'
   */
  export type EnumApiKeyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApiKeyStatus'>
    


  /**
   * Reference to a field of type 'ApiKeyStatus[]'
   */
  export type ListEnumApiKeyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApiKeyStatus[]'>
    


  /**
   * Reference to a field of type 'UsageLogOutcome'
   */
  export type EnumUsageLogOutcomeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UsageLogOutcome'>
    


  /**
   * Reference to a field of type 'UsageLogOutcome[]'
   */
  export type ListEnumUsageLogOutcomeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UsageLogOutcome[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    ownerId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    endpoints?: ProjectEndpointListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionListRelationFilter
    usageLogs?: UsageLogListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    endpoints?: ProjectEndpointOrderByRelationAggregateInput
    apiKeys?: ApiKeyOrderByRelationAggregateInput
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionOrderByRelationAggregateInput
    usageLogs?: UsageLogOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ownerId_name?: ProjectOwnerIdNameCompoundUniqueInput
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    ownerId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    endpoints?: ProjectEndpointListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionListRelationFilter
    usageLogs?: UsageLogListRelationFilter
  }, "id" | "ownerId_name">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    ownerId?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectEndpointWhereInput = {
    AND?: ProjectEndpointWhereInput | ProjectEndpointWhereInput[]
    OR?: ProjectEndpointWhereInput[]
    NOT?: ProjectEndpointWhereInput | ProjectEndpointWhereInput[]
    id?: StringFilter<"ProjectEndpoint"> | string
    projectId?: StringFilter<"ProjectEndpoint"> | string
    method?: EnumEndpointMethodFilter<"ProjectEndpoint"> | $Enums.EndpointMethod
    path?: StringFilter<"ProjectEndpoint"> | string
    routeShape?: StringFilter<"ProjectEndpoint"> | string
    upstreamUrl?: StringFilter<"ProjectEndpoint"> | string
    status?: EnumEndpointStatusFilter<"ProjectEndpoint"> | $Enums.EndpointStatus
    createdAt?: DateTimeFilter<"ProjectEndpoint"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectEndpoint"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    apiKeyPermissions?: ApiKeyEndpointPermissionListRelationFilter
    usageLogs?: UsageLogListRelationFilter
  }

  export type ProjectEndpointOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    routeShape?: SortOrder
    upstreamUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    apiKeyPermissions?: ApiKeyEndpointPermissionOrderByRelationAggregateInput
    usageLogs?: UsageLogOrderByRelationAggregateInput
  }

  export type ProjectEndpointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_method_routeShape?: ProjectEndpointProjectIdMethodRouteShapeCompoundUniqueInput
    AND?: ProjectEndpointWhereInput | ProjectEndpointWhereInput[]
    OR?: ProjectEndpointWhereInput[]
    NOT?: ProjectEndpointWhereInput | ProjectEndpointWhereInput[]
    projectId?: StringFilter<"ProjectEndpoint"> | string
    method?: EnumEndpointMethodFilter<"ProjectEndpoint"> | $Enums.EndpointMethod
    path?: StringFilter<"ProjectEndpoint"> | string
    routeShape?: StringFilter<"ProjectEndpoint"> | string
    upstreamUrl?: StringFilter<"ProjectEndpoint"> | string
    status?: EnumEndpointStatusFilter<"ProjectEndpoint"> | $Enums.EndpointStatus
    createdAt?: DateTimeFilter<"ProjectEndpoint"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectEndpoint"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    apiKeyPermissions?: ApiKeyEndpointPermissionListRelationFilter
    usageLogs?: UsageLogListRelationFilter
  }, "id" | "projectId_method_routeShape">

  export type ProjectEndpointOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    routeShape?: SortOrder
    upstreamUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectEndpointCountOrderByAggregateInput
    _max?: ProjectEndpointMaxOrderByAggregateInput
    _min?: ProjectEndpointMinOrderByAggregateInput
  }

  export type ProjectEndpointScalarWhereWithAggregatesInput = {
    AND?: ProjectEndpointScalarWhereWithAggregatesInput | ProjectEndpointScalarWhereWithAggregatesInput[]
    OR?: ProjectEndpointScalarWhereWithAggregatesInput[]
    NOT?: ProjectEndpointScalarWhereWithAggregatesInput | ProjectEndpointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectEndpoint"> | string
    projectId?: StringWithAggregatesFilter<"ProjectEndpoint"> | string
    method?: EnumEndpointMethodWithAggregatesFilter<"ProjectEndpoint"> | $Enums.EndpointMethod
    path?: StringWithAggregatesFilter<"ProjectEndpoint"> | string
    routeShape?: StringWithAggregatesFilter<"ProjectEndpoint"> | string
    upstreamUrl?: StringWithAggregatesFilter<"ProjectEndpoint"> | string
    status?: EnumEndpointStatusWithAggregatesFilter<"ProjectEndpoint"> | $Enums.EndpointStatus
    createdAt?: DateTimeWithAggregatesFilter<"ProjectEndpoint"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectEndpoint"> | Date | string
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    projectId?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    prefix?: StringFilter<"ApiKey"> | string
    keyHash?: StringFilter<"ApiKey"> | string
    status?: EnumApiKeyStatusFilter<"ApiKey"> | $Enums.ApiKeyStatus
    revokedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    permissions?: ApiKeyEndpointPermissionListRelationFilter
    usageLogs?: UsageLogListRelationFilter
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    prefix?: SortOrder
    keyHash?: SortOrder
    status?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    permissions?: ApiKeyEndpointPermissionOrderByRelationAggregateInput
    usageLogs?: UsageLogOrderByRelationAggregateInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    keyHash?: string
    projectId_name?: ApiKeyProjectIdNameCompoundUniqueInput
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    projectId?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    prefix?: StringFilter<"ApiKey"> | string
    status?: EnumApiKeyStatusFilter<"ApiKey"> | $Enums.ApiKeyStatus
    revokedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    permissions?: ApiKeyEndpointPermissionListRelationFilter
    usageLogs?: UsageLogListRelationFilter
  }, "id" | "keyHash" | "projectId_name">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    prefix?: SortOrder
    keyHash?: SortOrder
    status?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    projectId?: StringWithAggregatesFilter<"ApiKey"> | string
    name?: StringWithAggregatesFilter<"ApiKey"> | string
    prefix?: StringWithAggregatesFilter<"ApiKey"> | string
    keyHash?: StringWithAggregatesFilter<"ApiKey"> | string
    status?: EnumApiKeyStatusWithAggregatesFilter<"ApiKey"> | $Enums.ApiKeyStatus
    revokedAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
  }

  export type ApiKeyEndpointPermissionWhereInput = {
    AND?: ApiKeyEndpointPermissionWhereInput | ApiKeyEndpointPermissionWhereInput[]
    OR?: ApiKeyEndpointPermissionWhereInput[]
    NOT?: ApiKeyEndpointPermissionWhereInput | ApiKeyEndpointPermissionWhereInput[]
    id?: StringFilter<"ApiKeyEndpointPermission"> | string
    apiKeyId?: StringFilter<"ApiKeyEndpointPermission"> | string
    projectId?: StringFilter<"ApiKeyEndpointPermission"> | string
    endpointId?: StringFilter<"ApiKeyEndpointPermission"> | string
    createdAt?: DateTimeFilter<"ApiKeyEndpointPermission"> | Date | string
    apiKey?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    endpoint?: XOR<ProjectEndpointScalarRelationFilter, ProjectEndpointWhereInput>
  }

  export type ApiKeyEndpointPermissionOrderByWithRelationInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    projectId?: SortOrder
    endpointId?: SortOrder
    createdAt?: SortOrder
    apiKey?: ApiKeyOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    endpoint?: ProjectEndpointOrderByWithRelationInput
  }

  export type ApiKeyEndpointPermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    apiKeyId_endpointId?: ApiKeyEndpointPermissionApiKeyIdEndpointIdCompoundUniqueInput
    AND?: ApiKeyEndpointPermissionWhereInput | ApiKeyEndpointPermissionWhereInput[]
    OR?: ApiKeyEndpointPermissionWhereInput[]
    NOT?: ApiKeyEndpointPermissionWhereInput | ApiKeyEndpointPermissionWhereInput[]
    apiKeyId?: StringFilter<"ApiKeyEndpointPermission"> | string
    projectId?: StringFilter<"ApiKeyEndpointPermission"> | string
    endpointId?: StringFilter<"ApiKeyEndpointPermission"> | string
    createdAt?: DateTimeFilter<"ApiKeyEndpointPermission"> | Date | string
    apiKey?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    endpoint?: XOR<ProjectEndpointScalarRelationFilter, ProjectEndpointWhereInput>
  }, "id" | "apiKeyId_endpointId">

  export type ApiKeyEndpointPermissionOrderByWithAggregationInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    projectId?: SortOrder
    endpointId?: SortOrder
    createdAt?: SortOrder
    _count?: ApiKeyEndpointPermissionCountOrderByAggregateInput
    _max?: ApiKeyEndpointPermissionMaxOrderByAggregateInput
    _min?: ApiKeyEndpointPermissionMinOrderByAggregateInput
  }

  export type ApiKeyEndpointPermissionScalarWhereWithAggregatesInput = {
    AND?: ApiKeyEndpointPermissionScalarWhereWithAggregatesInput | ApiKeyEndpointPermissionScalarWhereWithAggregatesInput[]
    OR?: ApiKeyEndpointPermissionScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyEndpointPermissionScalarWhereWithAggregatesInput | ApiKeyEndpointPermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKeyEndpointPermission"> | string
    apiKeyId?: StringWithAggregatesFilter<"ApiKeyEndpointPermission"> | string
    projectId?: StringWithAggregatesFilter<"ApiKeyEndpointPermission"> | string
    endpointId?: StringWithAggregatesFilter<"ApiKeyEndpointPermission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ApiKeyEndpointPermission"> | Date | string
  }

  export type UsageLogWhereInput = {
    AND?: UsageLogWhereInput | UsageLogWhereInput[]
    OR?: UsageLogWhereInput[]
    NOT?: UsageLogWhereInput | UsageLogWhereInput[]
    id?: StringFilter<"UsageLog"> | string
    projectId?: StringNullableFilter<"UsageLog"> | string | null
    apiKeyId?: StringNullableFilter<"UsageLog"> | string | null
    endpointId?: StringNullableFilter<"UsageLog"> | string | null
    requestMethod?: EnumEndpointMethodFilter<"UsageLog"> | $Enums.EndpointMethod
    requestPath?: StringFilter<"UsageLog"> | string
    queryString?: StringNullableFilter<"UsageLog"> | string | null
    outcome?: EnumUsageLogOutcomeFilter<"UsageLog"> | $Enums.UsageLogOutcome
    gatewayStatusCode?: IntFilter<"UsageLog"> | number
    upstreamStatusCode?: IntNullableFilter<"UsageLog"> | number | null
    errorCode?: StringNullableFilter<"UsageLog"> | string | null
    durationMs?: IntFilter<"UsageLog"> | number
    clientIp?: StringNullableFilter<"UsageLog"> | string | null
    userAgent?: StringNullableFilter<"UsageLog"> | string | null
    createdAt?: DateTimeFilter<"UsageLog"> | Date | string
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    apiKey?: XOR<ApiKeyNullableScalarRelationFilter, ApiKeyWhereInput> | null
    endpoint?: XOR<ProjectEndpointNullableScalarRelationFilter, ProjectEndpointWhereInput> | null
  }

  export type UsageLogOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrderInput | SortOrder
    apiKeyId?: SortOrderInput | SortOrder
    endpointId?: SortOrderInput | SortOrder
    requestMethod?: SortOrder
    requestPath?: SortOrder
    queryString?: SortOrderInput | SortOrder
    outcome?: SortOrder
    gatewayStatusCode?: SortOrder
    upstreamStatusCode?: SortOrderInput | SortOrder
    errorCode?: SortOrderInput | SortOrder
    durationMs?: SortOrder
    clientIp?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    apiKey?: ApiKeyOrderByWithRelationInput
    endpoint?: ProjectEndpointOrderByWithRelationInput
  }

  export type UsageLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    createdAt_id?: UsageLogCreatedAtIdCompoundUniqueInput
    AND?: UsageLogWhereInput | UsageLogWhereInput[]
    OR?: UsageLogWhereInput[]
    NOT?: UsageLogWhereInput | UsageLogWhereInput[]
    projectId?: StringNullableFilter<"UsageLog"> | string | null
    apiKeyId?: StringNullableFilter<"UsageLog"> | string | null
    endpointId?: StringNullableFilter<"UsageLog"> | string | null
    requestMethod?: EnumEndpointMethodFilter<"UsageLog"> | $Enums.EndpointMethod
    requestPath?: StringFilter<"UsageLog"> | string
    queryString?: StringNullableFilter<"UsageLog"> | string | null
    outcome?: EnumUsageLogOutcomeFilter<"UsageLog"> | $Enums.UsageLogOutcome
    gatewayStatusCode?: IntFilter<"UsageLog"> | number
    upstreamStatusCode?: IntNullableFilter<"UsageLog"> | number | null
    errorCode?: StringNullableFilter<"UsageLog"> | string | null
    durationMs?: IntFilter<"UsageLog"> | number
    clientIp?: StringNullableFilter<"UsageLog"> | string | null
    userAgent?: StringNullableFilter<"UsageLog"> | string | null
    createdAt?: DateTimeFilter<"UsageLog"> | Date | string
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    apiKey?: XOR<ApiKeyNullableScalarRelationFilter, ApiKeyWhereInput> | null
    endpoint?: XOR<ProjectEndpointNullableScalarRelationFilter, ProjectEndpointWhereInput> | null
  }, "id" | "createdAt_id">

  export type UsageLogOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrderInput | SortOrder
    apiKeyId?: SortOrderInput | SortOrder
    endpointId?: SortOrderInput | SortOrder
    requestMethod?: SortOrder
    requestPath?: SortOrder
    queryString?: SortOrderInput | SortOrder
    outcome?: SortOrder
    gatewayStatusCode?: SortOrder
    upstreamStatusCode?: SortOrderInput | SortOrder
    errorCode?: SortOrderInput | SortOrder
    durationMs?: SortOrder
    clientIp?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UsageLogCountOrderByAggregateInput
    _avg?: UsageLogAvgOrderByAggregateInput
    _max?: UsageLogMaxOrderByAggregateInput
    _min?: UsageLogMinOrderByAggregateInput
    _sum?: UsageLogSumOrderByAggregateInput
  }

  export type UsageLogScalarWhereWithAggregatesInput = {
    AND?: UsageLogScalarWhereWithAggregatesInput | UsageLogScalarWhereWithAggregatesInput[]
    OR?: UsageLogScalarWhereWithAggregatesInput[]
    NOT?: UsageLogScalarWhereWithAggregatesInput | UsageLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UsageLog"> | string
    projectId?: StringNullableWithAggregatesFilter<"UsageLog"> | string | null
    apiKeyId?: StringNullableWithAggregatesFilter<"UsageLog"> | string | null
    endpointId?: StringNullableWithAggregatesFilter<"UsageLog"> | string | null
    requestMethod?: EnumEndpointMethodWithAggregatesFilter<"UsageLog"> | $Enums.EndpointMethod
    requestPath?: StringWithAggregatesFilter<"UsageLog"> | string
    queryString?: StringNullableWithAggregatesFilter<"UsageLog"> | string | null
    outcome?: EnumUsageLogOutcomeWithAggregatesFilter<"UsageLog"> | $Enums.UsageLogOutcome
    gatewayStatusCode?: IntWithAggregatesFilter<"UsageLog"> | number
    upstreamStatusCode?: IntNullableWithAggregatesFilter<"UsageLog"> | number | null
    errorCode?: StringNullableWithAggregatesFilter<"UsageLog"> | string | null
    durationMs?: IntWithAggregatesFilter<"UsageLog"> | number
    clientIp?: StringNullableWithAggregatesFilter<"UsageLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"UsageLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UsageLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutProjectsInput
    endpoints?: ProjectEndpointCreateNestedManyWithoutProjectInput
    apiKeys?: ApiKeyCreateNestedManyWithoutProjectInput
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionCreateNestedManyWithoutProjectInput
    usageLogs?: UsageLogCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    ownerId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    endpoints?: ProjectEndpointUncheckedCreateNestedManyWithoutProjectInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutProjectInput
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionUncheckedCreateNestedManyWithoutProjectInput
    usageLogs?: UsageLogUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    endpoints?: ProjectEndpointUpdateManyWithoutProjectNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutProjectNestedInput
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionUpdateManyWithoutProjectNestedInput
    usageLogs?: UsageLogUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoints?: ProjectEndpointUncheckedUpdateManyWithoutProjectNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutProjectNestedInput
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionUncheckedUpdateManyWithoutProjectNestedInput
    usageLogs?: UsageLogUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    ownerId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEndpointCreateInput = {
    id?: string
    method: $Enums.EndpointMethod
    path: string
    routeShape: string
    upstreamUrl: string
    status?: $Enums.EndpointStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutEndpointsInput
    apiKeyPermissions?: ApiKeyEndpointPermissionCreateNestedManyWithoutEndpointInput
    usageLogs?: UsageLogCreateNestedManyWithoutEndpointInput
  }

  export type ProjectEndpointUncheckedCreateInput = {
    id?: string
    projectId: string
    method: $Enums.EndpointMethod
    path: string
    routeShape: string
    upstreamUrl: string
    status?: $Enums.EndpointStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKeyPermissions?: ApiKeyEndpointPermissionUncheckedCreateNestedManyWithoutEndpointInput
    usageLogs?: UsageLogUncheckedCreateNestedManyWithoutEndpointInput
  }

  export type ProjectEndpointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    path?: StringFieldUpdateOperationsInput | string
    routeShape?: StringFieldUpdateOperationsInput | string
    upstreamUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumEndpointStatusFieldUpdateOperationsInput | $Enums.EndpointStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutEndpointsNestedInput
    apiKeyPermissions?: ApiKeyEndpointPermissionUpdateManyWithoutEndpointNestedInput
    usageLogs?: UsageLogUpdateManyWithoutEndpointNestedInput
  }

  export type ProjectEndpointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    method?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    path?: StringFieldUpdateOperationsInput | string
    routeShape?: StringFieldUpdateOperationsInput | string
    upstreamUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumEndpointStatusFieldUpdateOperationsInput | $Enums.EndpointStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeyPermissions?: ApiKeyEndpointPermissionUncheckedUpdateManyWithoutEndpointNestedInput
    usageLogs?: UsageLogUncheckedUpdateManyWithoutEndpointNestedInput
  }

  export type ProjectEndpointCreateManyInput = {
    id?: string
    projectId: string
    method: $Enums.EndpointMethod
    path: string
    routeShape: string
    upstreamUrl: string
    status?: $Enums.EndpointStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectEndpointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    path?: StringFieldUpdateOperationsInput | string
    routeShape?: StringFieldUpdateOperationsInput | string
    upstreamUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumEndpointStatusFieldUpdateOperationsInput | $Enums.EndpointStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEndpointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    method?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    path?: StringFieldUpdateOperationsInput | string
    routeShape?: StringFieldUpdateOperationsInput | string
    upstreamUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumEndpointStatusFieldUpdateOperationsInput | $Enums.EndpointStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateInput = {
    id?: string
    name: string
    prefix: string
    keyHash: string
    status?: $Enums.ApiKeyStatus
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutApiKeysInput
    permissions?: ApiKeyEndpointPermissionCreateNestedManyWithoutApiKeyInput
    usageLogs?: UsageLogCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    prefix: string
    keyHash: string
    status?: $Enums.ApiKeyStatus
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: ApiKeyEndpointPermissionUncheckedCreateNestedManyWithoutApiKeyInput
    usageLogs?: UsageLogUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutApiKeysNestedInput
    permissions?: ApiKeyEndpointPermissionUpdateManyWithoutApiKeyNestedInput
    usageLogs?: UsageLogUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: ApiKeyEndpointPermissionUncheckedUpdateManyWithoutApiKeyNestedInput
    usageLogs?: UsageLogUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    projectId: string
    name: string
    prefix: string
    keyHash: string
    status?: $Enums.ApiKeyStatus
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyEndpointPermissionCreateInput = {
    id?: string
    createdAt?: Date | string
    apiKey: ApiKeyCreateNestedOneWithoutPermissionsInput
    project: ProjectCreateNestedOneWithoutApiKeyEndpointPermissionsInput
    endpoint: ProjectEndpointCreateNestedOneWithoutApiKeyPermissionsInput
  }

  export type ApiKeyEndpointPermissionUncheckedCreateInput = {
    id?: string
    apiKeyId: string
    projectId: string
    endpointId: string
    createdAt?: Date | string
  }

  export type ApiKeyEndpointPermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: ApiKeyUpdateOneRequiredWithoutPermissionsNestedInput
    project?: ProjectUpdateOneRequiredWithoutApiKeyEndpointPermissionsNestedInput
    endpoint?: ProjectEndpointUpdateOneRequiredWithoutApiKeyPermissionsNestedInput
  }

  export type ApiKeyEndpointPermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    endpointId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyEndpointPermissionCreateManyInput = {
    id?: string
    apiKeyId: string
    projectId: string
    endpointId: string
    createdAt?: Date | string
  }

  export type ApiKeyEndpointPermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyEndpointPermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    endpointId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageLogCreateInput = {
    id?: string
    requestMethod: $Enums.EndpointMethod
    requestPath: string
    queryString?: string | null
    outcome: $Enums.UsageLogOutcome
    gatewayStatusCode: number
    upstreamStatusCode?: number | null
    errorCode?: string | null
    durationMs: number
    clientIp?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    project?: ProjectCreateNestedOneWithoutUsageLogsInput
    apiKey?: ApiKeyCreateNestedOneWithoutUsageLogsInput
    endpoint?: ProjectEndpointCreateNestedOneWithoutUsageLogsInput
  }

  export type UsageLogUncheckedCreateInput = {
    id?: string
    projectId?: string | null
    apiKeyId?: string | null
    endpointId?: string | null
    requestMethod: $Enums.EndpointMethod
    requestPath: string
    queryString?: string | null
    outcome: $Enums.UsageLogOutcome
    gatewayStatusCode: number
    upstreamStatusCode?: number | null
    errorCode?: string | null
    durationMs: number
    clientIp?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type UsageLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestMethod?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    requestPath?: StringFieldUpdateOperationsInput | string
    queryString?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: EnumUsageLogOutcomeFieldUpdateOperationsInput | $Enums.UsageLogOutcome
    gatewayStatusCode?: IntFieldUpdateOperationsInput | number
    upstreamStatusCode?: NullableIntFieldUpdateOperationsInput | number | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneWithoutUsageLogsNestedInput
    apiKey?: ApiKeyUpdateOneWithoutUsageLogsNestedInput
    endpoint?: ProjectEndpointUpdateOneWithoutUsageLogsNestedInput
  }

  export type UsageLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
    endpointId?: NullableStringFieldUpdateOperationsInput | string | null
    requestMethod?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    requestPath?: StringFieldUpdateOperationsInput | string
    queryString?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: EnumUsageLogOutcomeFieldUpdateOperationsInput | $Enums.UsageLogOutcome
    gatewayStatusCode?: IntFieldUpdateOperationsInput | number
    upstreamStatusCode?: NullableIntFieldUpdateOperationsInput | number | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageLogCreateManyInput = {
    id?: string
    projectId?: string | null
    apiKeyId?: string | null
    endpointId?: string | null
    requestMethod: $Enums.EndpointMethod
    requestPath: string
    queryString?: string | null
    outcome: $Enums.UsageLogOutcome
    gatewayStatusCode: number
    upstreamStatusCode?: number | null
    errorCode?: string | null
    durationMs: number
    clientIp?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type UsageLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestMethod?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    requestPath?: StringFieldUpdateOperationsInput | string
    queryString?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: EnumUsageLogOutcomeFieldUpdateOperationsInput | $Enums.UsageLogOutcome
    gatewayStatusCode?: IntFieldUpdateOperationsInput | number
    upstreamStatusCode?: NullableIntFieldUpdateOperationsInput | number | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
    endpointId?: NullableStringFieldUpdateOperationsInput | string | null
    requestMethod?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    requestPath?: StringFieldUpdateOperationsInput | string
    queryString?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: EnumUsageLogOutcomeFieldUpdateOperationsInput | $Enums.UsageLogOutcome
    gatewayStatusCode?: IntFieldUpdateOperationsInput | number
    upstreamStatusCode?: NullableIntFieldUpdateOperationsInput | number | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProjectEndpointListRelationFilter = {
    every?: ProjectEndpointWhereInput
    some?: ProjectEndpointWhereInput
    none?: ProjectEndpointWhereInput
  }

  export type ApiKeyListRelationFilter = {
    every?: ApiKeyWhereInput
    some?: ApiKeyWhereInput
    none?: ApiKeyWhereInput
  }

  export type ApiKeyEndpointPermissionListRelationFilter = {
    every?: ApiKeyEndpointPermissionWhereInput
    some?: ApiKeyEndpointPermissionWhereInput
    none?: ApiKeyEndpointPermissionWhereInput
  }

  export type UsageLogListRelationFilter = {
    every?: UsageLogWhereInput
    some?: UsageLogWhereInput
    none?: UsageLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectEndpointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiKeyEndpointPermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsageLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOwnerIdNameCompoundUniqueInput = {
    ownerId: string
    name: string
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumEndpointMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.EndpointMethod | EnumEndpointMethodFieldRefInput<$PrismaModel>
    in?: $Enums.EndpointMethod[] | ListEnumEndpointMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.EndpointMethod[] | ListEnumEndpointMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumEndpointMethodFilter<$PrismaModel> | $Enums.EndpointMethod
  }

  export type EnumEndpointStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EndpointStatus | EnumEndpointStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EndpointStatus[] | ListEnumEndpointStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EndpointStatus[] | ListEnumEndpointStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEndpointStatusFilter<$PrismaModel> | $Enums.EndpointStatus
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectEndpointProjectIdMethodRouteShapeCompoundUniqueInput = {
    projectId: string
    method: $Enums.EndpointMethod
    routeShape: string
  }

  export type ProjectEndpointCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    routeShape?: SortOrder
    upstreamUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectEndpointMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    routeShape?: SortOrder
    upstreamUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectEndpointMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    routeShape?: SortOrder
    upstreamUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEndpointMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EndpointMethod | EnumEndpointMethodFieldRefInput<$PrismaModel>
    in?: $Enums.EndpointMethod[] | ListEnumEndpointMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.EndpointMethod[] | ListEnumEndpointMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumEndpointMethodWithAggregatesFilter<$PrismaModel> | $Enums.EndpointMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEndpointMethodFilter<$PrismaModel>
    _max?: NestedEnumEndpointMethodFilter<$PrismaModel>
  }

  export type EnumEndpointStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EndpointStatus | EnumEndpointStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EndpointStatus[] | ListEnumEndpointStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EndpointStatus[] | ListEnumEndpointStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEndpointStatusWithAggregatesFilter<$PrismaModel> | $Enums.EndpointStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEndpointStatusFilter<$PrismaModel>
    _max?: NestedEnumEndpointStatusFilter<$PrismaModel>
  }

  export type EnumApiKeyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiKeyStatus | EnumApiKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApiKeyStatusFilter<$PrismaModel> | $Enums.ApiKeyStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ApiKeyProjectIdNameCompoundUniqueInput = {
    projectId: string
    name: string
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    prefix?: SortOrder
    keyHash?: SortOrder
    status?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    prefix?: SortOrder
    keyHash?: SortOrder
    status?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    prefix?: SortOrder
    keyHash?: SortOrder
    status?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumApiKeyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiKeyStatus | EnumApiKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApiKeyStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApiKeyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApiKeyStatusFilter<$PrismaModel>
    _max?: NestedEnumApiKeyStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ApiKeyScalarRelationFilter = {
    is?: ApiKeyWhereInput
    isNot?: ApiKeyWhereInput
  }

  export type ProjectEndpointScalarRelationFilter = {
    is?: ProjectEndpointWhereInput
    isNot?: ProjectEndpointWhereInput
  }

  export type ApiKeyEndpointPermissionApiKeyIdEndpointIdCompoundUniqueInput = {
    apiKeyId: string
    endpointId: string
  }

  export type ApiKeyEndpointPermissionCountOrderByAggregateInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    projectId?: SortOrder
    endpointId?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeyEndpointPermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    projectId?: SortOrder
    endpointId?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeyEndpointPermissionMinOrderByAggregateInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    projectId?: SortOrder
    endpointId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumUsageLogOutcomeFilter<$PrismaModel = never> = {
    equals?: $Enums.UsageLogOutcome | EnumUsageLogOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.UsageLogOutcome[] | ListEnumUsageLogOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UsageLogOutcome[] | ListEnumUsageLogOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumUsageLogOutcomeFilter<$PrismaModel> | $Enums.UsageLogOutcome
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProjectNullableScalarRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type ApiKeyNullableScalarRelationFilter = {
    is?: ApiKeyWhereInput | null
    isNot?: ApiKeyWhereInput | null
  }

  export type ProjectEndpointNullableScalarRelationFilter = {
    is?: ProjectEndpointWhereInput | null
    isNot?: ProjectEndpointWhereInput | null
  }

  export type UsageLogCreatedAtIdCompoundUniqueInput = {
    createdAt: Date | string
    id: string
  }

  export type UsageLogCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    apiKeyId?: SortOrder
    endpointId?: SortOrder
    requestMethod?: SortOrder
    requestPath?: SortOrder
    queryString?: SortOrder
    outcome?: SortOrder
    gatewayStatusCode?: SortOrder
    upstreamStatusCode?: SortOrder
    errorCode?: SortOrder
    durationMs?: SortOrder
    clientIp?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type UsageLogAvgOrderByAggregateInput = {
    gatewayStatusCode?: SortOrder
    upstreamStatusCode?: SortOrder
    durationMs?: SortOrder
  }

  export type UsageLogMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    apiKeyId?: SortOrder
    endpointId?: SortOrder
    requestMethod?: SortOrder
    requestPath?: SortOrder
    queryString?: SortOrder
    outcome?: SortOrder
    gatewayStatusCode?: SortOrder
    upstreamStatusCode?: SortOrder
    errorCode?: SortOrder
    durationMs?: SortOrder
    clientIp?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type UsageLogMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    apiKeyId?: SortOrder
    endpointId?: SortOrder
    requestMethod?: SortOrder
    requestPath?: SortOrder
    queryString?: SortOrder
    outcome?: SortOrder
    gatewayStatusCode?: SortOrder
    upstreamStatusCode?: SortOrder
    errorCode?: SortOrder
    durationMs?: SortOrder
    clientIp?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type UsageLogSumOrderByAggregateInput = {
    gatewayStatusCode?: SortOrder
    upstreamStatusCode?: SortOrder
    durationMs?: SortOrder
  }

  export type EnumUsageLogOutcomeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UsageLogOutcome | EnumUsageLogOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.UsageLogOutcome[] | ListEnumUsageLogOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UsageLogOutcome[] | ListEnumUsageLogOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumUsageLogOutcomeWithAggregatesFilter<$PrismaModel> | $Enums.UsageLogOutcome
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUsageLogOutcomeFilter<$PrismaModel>
    _max?: NestedEnumUsageLogOutcomeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProjectCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectEndpointCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectEndpointCreateWithoutProjectInput, ProjectEndpointUncheckedCreateWithoutProjectInput> | ProjectEndpointCreateWithoutProjectInput[] | ProjectEndpointUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectEndpointCreateOrConnectWithoutProjectInput | ProjectEndpointCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectEndpointCreateManyProjectInputEnvelope
    connect?: ProjectEndpointWhereUniqueInput | ProjectEndpointWhereUniqueInput[]
  }

  export type ApiKeyCreateNestedManyWithoutProjectInput = {
    create?: XOR<ApiKeyCreateWithoutProjectInput, ApiKeyUncheckedCreateWithoutProjectInput> | ApiKeyCreateWithoutProjectInput[] | ApiKeyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutProjectInput | ApiKeyCreateOrConnectWithoutProjectInput[]
    createMany?: ApiKeyCreateManyProjectInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type ApiKeyEndpointPermissionCreateNestedManyWithoutProjectInput = {
    create?: XOR<ApiKeyEndpointPermissionCreateWithoutProjectInput, ApiKeyEndpointPermissionUncheckedCreateWithoutProjectInput> | ApiKeyEndpointPermissionCreateWithoutProjectInput[] | ApiKeyEndpointPermissionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ApiKeyEndpointPermissionCreateOrConnectWithoutProjectInput | ApiKeyEndpointPermissionCreateOrConnectWithoutProjectInput[]
    createMany?: ApiKeyEndpointPermissionCreateManyProjectInputEnvelope
    connect?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
  }

  export type UsageLogCreateNestedManyWithoutProjectInput = {
    create?: XOR<UsageLogCreateWithoutProjectInput, UsageLogUncheckedCreateWithoutProjectInput> | UsageLogCreateWithoutProjectInput[] | UsageLogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UsageLogCreateOrConnectWithoutProjectInput | UsageLogCreateOrConnectWithoutProjectInput[]
    createMany?: UsageLogCreateManyProjectInputEnvelope
    connect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
  }

  export type ProjectEndpointUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectEndpointCreateWithoutProjectInput, ProjectEndpointUncheckedCreateWithoutProjectInput> | ProjectEndpointCreateWithoutProjectInput[] | ProjectEndpointUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectEndpointCreateOrConnectWithoutProjectInput | ProjectEndpointCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectEndpointCreateManyProjectInputEnvelope
    connect?: ProjectEndpointWhereUniqueInput | ProjectEndpointWhereUniqueInput[]
  }

  export type ApiKeyUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ApiKeyCreateWithoutProjectInput, ApiKeyUncheckedCreateWithoutProjectInput> | ApiKeyCreateWithoutProjectInput[] | ApiKeyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutProjectInput | ApiKeyCreateOrConnectWithoutProjectInput[]
    createMany?: ApiKeyCreateManyProjectInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type ApiKeyEndpointPermissionUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ApiKeyEndpointPermissionCreateWithoutProjectInput, ApiKeyEndpointPermissionUncheckedCreateWithoutProjectInput> | ApiKeyEndpointPermissionCreateWithoutProjectInput[] | ApiKeyEndpointPermissionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ApiKeyEndpointPermissionCreateOrConnectWithoutProjectInput | ApiKeyEndpointPermissionCreateOrConnectWithoutProjectInput[]
    createMany?: ApiKeyEndpointPermissionCreateManyProjectInputEnvelope
    connect?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
  }

  export type UsageLogUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<UsageLogCreateWithoutProjectInput, UsageLogUncheckedCreateWithoutProjectInput> | UsageLogCreateWithoutProjectInput[] | UsageLogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UsageLogCreateOrConnectWithoutProjectInput | UsageLogCreateOrConnectWithoutProjectInput[]
    createMany?: UsageLogCreateManyProjectInputEnvelope
    connect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectEndpointUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectEndpointCreateWithoutProjectInput, ProjectEndpointUncheckedCreateWithoutProjectInput> | ProjectEndpointCreateWithoutProjectInput[] | ProjectEndpointUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectEndpointCreateOrConnectWithoutProjectInput | ProjectEndpointCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectEndpointUpsertWithWhereUniqueWithoutProjectInput | ProjectEndpointUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectEndpointCreateManyProjectInputEnvelope
    set?: ProjectEndpointWhereUniqueInput | ProjectEndpointWhereUniqueInput[]
    disconnect?: ProjectEndpointWhereUniqueInput | ProjectEndpointWhereUniqueInput[]
    delete?: ProjectEndpointWhereUniqueInput | ProjectEndpointWhereUniqueInput[]
    connect?: ProjectEndpointWhereUniqueInput | ProjectEndpointWhereUniqueInput[]
    update?: ProjectEndpointUpdateWithWhereUniqueWithoutProjectInput | ProjectEndpointUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectEndpointUpdateManyWithWhereWithoutProjectInput | ProjectEndpointUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectEndpointScalarWhereInput | ProjectEndpointScalarWhereInput[]
  }

  export type ApiKeyUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ApiKeyCreateWithoutProjectInput, ApiKeyUncheckedCreateWithoutProjectInput> | ApiKeyCreateWithoutProjectInput[] | ApiKeyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutProjectInput | ApiKeyCreateOrConnectWithoutProjectInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutProjectInput | ApiKeyUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ApiKeyCreateManyProjectInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutProjectInput | ApiKeyUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutProjectInput | ApiKeyUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type ApiKeyEndpointPermissionUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ApiKeyEndpointPermissionCreateWithoutProjectInput, ApiKeyEndpointPermissionUncheckedCreateWithoutProjectInput> | ApiKeyEndpointPermissionCreateWithoutProjectInput[] | ApiKeyEndpointPermissionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ApiKeyEndpointPermissionCreateOrConnectWithoutProjectInput | ApiKeyEndpointPermissionCreateOrConnectWithoutProjectInput[]
    upsert?: ApiKeyEndpointPermissionUpsertWithWhereUniqueWithoutProjectInput | ApiKeyEndpointPermissionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ApiKeyEndpointPermissionCreateManyProjectInputEnvelope
    set?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    disconnect?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    delete?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    connect?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    update?: ApiKeyEndpointPermissionUpdateWithWhereUniqueWithoutProjectInput | ApiKeyEndpointPermissionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ApiKeyEndpointPermissionUpdateManyWithWhereWithoutProjectInput | ApiKeyEndpointPermissionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ApiKeyEndpointPermissionScalarWhereInput | ApiKeyEndpointPermissionScalarWhereInput[]
  }

  export type UsageLogUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UsageLogCreateWithoutProjectInput, UsageLogUncheckedCreateWithoutProjectInput> | UsageLogCreateWithoutProjectInput[] | UsageLogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UsageLogCreateOrConnectWithoutProjectInput | UsageLogCreateOrConnectWithoutProjectInput[]
    upsert?: UsageLogUpsertWithWhereUniqueWithoutProjectInput | UsageLogUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UsageLogCreateManyProjectInputEnvelope
    set?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    disconnect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    delete?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    connect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    update?: UsageLogUpdateWithWhereUniqueWithoutProjectInput | UsageLogUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UsageLogUpdateManyWithWhereWithoutProjectInput | UsageLogUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UsageLogScalarWhereInput | UsageLogScalarWhereInput[]
  }

  export type ProjectEndpointUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectEndpointCreateWithoutProjectInput, ProjectEndpointUncheckedCreateWithoutProjectInput> | ProjectEndpointCreateWithoutProjectInput[] | ProjectEndpointUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectEndpointCreateOrConnectWithoutProjectInput | ProjectEndpointCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectEndpointUpsertWithWhereUniqueWithoutProjectInput | ProjectEndpointUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectEndpointCreateManyProjectInputEnvelope
    set?: ProjectEndpointWhereUniqueInput | ProjectEndpointWhereUniqueInput[]
    disconnect?: ProjectEndpointWhereUniqueInput | ProjectEndpointWhereUniqueInput[]
    delete?: ProjectEndpointWhereUniqueInput | ProjectEndpointWhereUniqueInput[]
    connect?: ProjectEndpointWhereUniqueInput | ProjectEndpointWhereUniqueInput[]
    update?: ProjectEndpointUpdateWithWhereUniqueWithoutProjectInput | ProjectEndpointUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectEndpointUpdateManyWithWhereWithoutProjectInput | ProjectEndpointUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectEndpointScalarWhereInput | ProjectEndpointScalarWhereInput[]
  }

  export type ApiKeyUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ApiKeyCreateWithoutProjectInput, ApiKeyUncheckedCreateWithoutProjectInput> | ApiKeyCreateWithoutProjectInput[] | ApiKeyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutProjectInput | ApiKeyCreateOrConnectWithoutProjectInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutProjectInput | ApiKeyUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ApiKeyCreateManyProjectInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutProjectInput | ApiKeyUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutProjectInput | ApiKeyUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type ApiKeyEndpointPermissionUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ApiKeyEndpointPermissionCreateWithoutProjectInput, ApiKeyEndpointPermissionUncheckedCreateWithoutProjectInput> | ApiKeyEndpointPermissionCreateWithoutProjectInput[] | ApiKeyEndpointPermissionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ApiKeyEndpointPermissionCreateOrConnectWithoutProjectInput | ApiKeyEndpointPermissionCreateOrConnectWithoutProjectInput[]
    upsert?: ApiKeyEndpointPermissionUpsertWithWhereUniqueWithoutProjectInput | ApiKeyEndpointPermissionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ApiKeyEndpointPermissionCreateManyProjectInputEnvelope
    set?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    disconnect?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    delete?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    connect?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    update?: ApiKeyEndpointPermissionUpdateWithWhereUniqueWithoutProjectInput | ApiKeyEndpointPermissionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ApiKeyEndpointPermissionUpdateManyWithWhereWithoutProjectInput | ApiKeyEndpointPermissionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ApiKeyEndpointPermissionScalarWhereInput | ApiKeyEndpointPermissionScalarWhereInput[]
  }

  export type UsageLogUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UsageLogCreateWithoutProjectInput, UsageLogUncheckedCreateWithoutProjectInput> | UsageLogCreateWithoutProjectInput[] | UsageLogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UsageLogCreateOrConnectWithoutProjectInput | UsageLogCreateOrConnectWithoutProjectInput[]
    upsert?: UsageLogUpsertWithWhereUniqueWithoutProjectInput | UsageLogUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UsageLogCreateManyProjectInputEnvelope
    set?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    disconnect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    delete?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    connect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    update?: UsageLogUpdateWithWhereUniqueWithoutProjectInput | UsageLogUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UsageLogUpdateManyWithWhereWithoutProjectInput | UsageLogUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UsageLogScalarWhereInput | UsageLogScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutEndpointsInput = {
    create?: XOR<ProjectCreateWithoutEndpointsInput, ProjectUncheckedCreateWithoutEndpointsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEndpointsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ApiKeyEndpointPermissionCreateNestedManyWithoutEndpointInput = {
    create?: XOR<ApiKeyEndpointPermissionCreateWithoutEndpointInput, ApiKeyEndpointPermissionUncheckedCreateWithoutEndpointInput> | ApiKeyEndpointPermissionCreateWithoutEndpointInput[] | ApiKeyEndpointPermissionUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: ApiKeyEndpointPermissionCreateOrConnectWithoutEndpointInput | ApiKeyEndpointPermissionCreateOrConnectWithoutEndpointInput[]
    createMany?: ApiKeyEndpointPermissionCreateManyEndpointInputEnvelope
    connect?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
  }

  export type UsageLogCreateNestedManyWithoutEndpointInput = {
    create?: XOR<UsageLogCreateWithoutEndpointInput, UsageLogUncheckedCreateWithoutEndpointInput> | UsageLogCreateWithoutEndpointInput[] | UsageLogUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: UsageLogCreateOrConnectWithoutEndpointInput | UsageLogCreateOrConnectWithoutEndpointInput[]
    createMany?: UsageLogCreateManyEndpointInputEnvelope
    connect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
  }

  export type ApiKeyEndpointPermissionUncheckedCreateNestedManyWithoutEndpointInput = {
    create?: XOR<ApiKeyEndpointPermissionCreateWithoutEndpointInput, ApiKeyEndpointPermissionUncheckedCreateWithoutEndpointInput> | ApiKeyEndpointPermissionCreateWithoutEndpointInput[] | ApiKeyEndpointPermissionUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: ApiKeyEndpointPermissionCreateOrConnectWithoutEndpointInput | ApiKeyEndpointPermissionCreateOrConnectWithoutEndpointInput[]
    createMany?: ApiKeyEndpointPermissionCreateManyEndpointInputEnvelope
    connect?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
  }

  export type UsageLogUncheckedCreateNestedManyWithoutEndpointInput = {
    create?: XOR<UsageLogCreateWithoutEndpointInput, UsageLogUncheckedCreateWithoutEndpointInput> | UsageLogCreateWithoutEndpointInput[] | UsageLogUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: UsageLogCreateOrConnectWithoutEndpointInput | UsageLogCreateOrConnectWithoutEndpointInput[]
    createMany?: UsageLogCreateManyEndpointInputEnvelope
    connect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
  }

  export type EnumEndpointMethodFieldUpdateOperationsInput = {
    set?: $Enums.EndpointMethod
  }

  export type EnumEndpointStatusFieldUpdateOperationsInput = {
    set?: $Enums.EndpointStatus
  }

  export type ProjectUpdateOneRequiredWithoutEndpointsNestedInput = {
    create?: XOR<ProjectCreateWithoutEndpointsInput, ProjectUncheckedCreateWithoutEndpointsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEndpointsInput
    upsert?: ProjectUpsertWithoutEndpointsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutEndpointsInput, ProjectUpdateWithoutEndpointsInput>, ProjectUncheckedUpdateWithoutEndpointsInput>
  }

  export type ApiKeyEndpointPermissionUpdateManyWithoutEndpointNestedInput = {
    create?: XOR<ApiKeyEndpointPermissionCreateWithoutEndpointInput, ApiKeyEndpointPermissionUncheckedCreateWithoutEndpointInput> | ApiKeyEndpointPermissionCreateWithoutEndpointInput[] | ApiKeyEndpointPermissionUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: ApiKeyEndpointPermissionCreateOrConnectWithoutEndpointInput | ApiKeyEndpointPermissionCreateOrConnectWithoutEndpointInput[]
    upsert?: ApiKeyEndpointPermissionUpsertWithWhereUniqueWithoutEndpointInput | ApiKeyEndpointPermissionUpsertWithWhereUniqueWithoutEndpointInput[]
    createMany?: ApiKeyEndpointPermissionCreateManyEndpointInputEnvelope
    set?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    disconnect?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    delete?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    connect?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    update?: ApiKeyEndpointPermissionUpdateWithWhereUniqueWithoutEndpointInput | ApiKeyEndpointPermissionUpdateWithWhereUniqueWithoutEndpointInput[]
    updateMany?: ApiKeyEndpointPermissionUpdateManyWithWhereWithoutEndpointInput | ApiKeyEndpointPermissionUpdateManyWithWhereWithoutEndpointInput[]
    deleteMany?: ApiKeyEndpointPermissionScalarWhereInput | ApiKeyEndpointPermissionScalarWhereInput[]
  }

  export type UsageLogUpdateManyWithoutEndpointNestedInput = {
    create?: XOR<UsageLogCreateWithoutEndpointInput, UsageLogUncheckedCreateWithoutEndpointInput> | UsageLogCreateWithoutEndpointInput[] | UsageLogUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: UsageLogCreateOrConnectWithoutEndpointInput | UsageLogCreateOrConnectWithoutEndpointInput[]
    upsert?: UsageLogUpsertWithWhereUniqueWithoutEndpointInput | UsageLogUpsertWithWhereUniqueWithoutEndpointInput[]
    createMany?: UsageLogCreateManyEndpointInputEnvelope
    set?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    disconnect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    delete?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    connect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    update?: UsageLogUpdateWithWhereUniqueWithoutEndpointInput | UsageLogUpdateWithWhereUniqueWithoutEndpointInput[]
    updateMany?: UsageLogUpdateManyWithWhereWithoutEndpointInput | UsageLogUpdateManyWithWhereWithoutEndpointInput[]
    deleteMany?: UsageLogScalarWhereInput | UsageLogScalarWhereInput[]
  }

  export type ApiKeyEndpointPermissionUncheckedUpdateManyWithoutEndpointNestedInput = {
    create?: XOR<ApiKeyEndpointPermissionCreateWithoutEndpointInput, ApiKeyEndpointPermissionUncheckedCreateWithoutEndpointInput> | ApiKeyEndpointPermissionCreateWithoutEndpointInput[] | ApiKeyEndpointPermissionUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: ApiKeyEndpointPermissionCreateOrConnectWithoutEndpointInput | ApiKeyEndpointPermissionCreateOrConnectWithoutEndpointInput[]
    upsert?: ApiKeyEndpointPermissionUpsertWithWhereUniqueWithoutEndpointInput | ApiKeyEndpointPermissionUpsertWithWhereUniqueWithoutEndpointInput[]
    createMany?: ApiKeyEndpointPermissionCreateManyEndpointInputEnvelope
    set?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    disconnect?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    delete?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    connect?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    update?: ApiKeyEndpointPermissionUpdateWithWhereUniqueWithoutEndpointInput | ApiKeyEndpointPermissionUpdateWithWhereUniqueWithoutEndpointInput[]
    updateMany?: ApiKeyEndpointPermissionUpdateManyWithWhereWithoutEndpointInput | ApiKeyEndpointPermissionUpdateManyWithWhereWithoutEndpointInput[]
    deleteMany?: ApiKeyEndpointPermissionScalarWhereInput | ApiKeyEndpointPermissionScalarWhereInput[]
  }

  export type UsageLogUncheckedUpdateManyWithoutEndpointNestedInput = {
    create?: XOR<UsageLogCreateWithoutEndpointInput, UsageLogUncheckedCreateWithoutEndpointInput> | UsageLogCreateWithoutEndpointInput[] | UsageLogUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: UsageLogCreateOrConnectWithoutEndpointInput | UsageLogCreateOrConnectWithoutEndpointInput[]
    upsert?: UsageLogUpsertWithWhereUniqueWithoutEndpointInput | UsageLogUpsertWithWhereUniqueWithoutEndpointInput[]
    createMany?: UsageLogCreateManyEndpointInputEnvelope
    set?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    disconnect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    delete?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    connect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    update?: UsageLogUpdateWithWhereUniqueWithoutEndpointInput | UsageLogUpdateWithWhereUniqueWithoutEndpointInput[]
    updateMany?: UsageLogUpdateManyWithWhereWithoutEndpointInput | UsageLogUpdateManyWithWhereWithoutEndpointInput[]
    deleteMany?: UsageLogScalarWhereInput | UsageLogScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<ProjectCreateWithoutApiKeysInput, ProjectUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutApiKeysInput
    connect?: ProjectWhereUniqueInput
  }

  export type ApiKeyEndpointPermissionCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<ApiKeyEndpointPermissionCreateWithoutApiKeyInput, ApiKeyEndpointPermissionUncheckedCreateWithoutApiKeyInput> | ApiKeyEndpointPermissionCreateWithoutApiKeyInput[] | ApiKeyEndpointPermissionUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiKeyEndpointPermissionCreateOrConnectWithoutApiKeyInput | ApiKeyEndpointPermissionCreateOrConnectWithoutApiKeyInput[]
    createMany?: ApiKeyEndpointPermissionCreateManyApiKeyInputEnvelope
    connect?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
  }

  export type UsageLogCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<UsageLogCreateWithoutApiKeyInput, UsageLogUncheckedCreateWithoutApiKeyInput> | UsageLogCreateWithoutApiKeyInput[] | UsageLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: UsageLogCreateOrConnectWithoutApiKeyInput | UsageLogCreateOrConnectWithoutApiKeyInput[]
    createMany?: UsageLogCreateManyApiKeyInputEnvelope
    connect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
  }

  export type ApiKeyEndpointPermissionUncheckedCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<ApiKeyEndpointPermissionCreateWithoutApiKeyInput, ApiKeyEndpointPermissionUncheckedCreateWithoutApiKeyInput> | ApiKeyEndpointPermissionCreateWithoutApiKeyInput[] | ApiKeyEndpointPermissionUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiKeyEndpointPermissionCreateOrConnectWithoutApiKeyInput | ApiKeyEndpointPermissionCreateOrConnectWithoutApiKeyInput[]
    createMany?: ApiKeyEndpointPermissionCreateManyApiKeyInputEnvelope
    connect?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
  }

  export type UsageLogUncheckedCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<UsageLogCreateWithoutApiKeyInput, UsageLogUncheckedCreateWithoutApiKeyInput> | UsageLogCreateWithoutApiKeyInput[] | UsageLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: UsageLogCreateOrConnectWithoutApiKeyInput | UsageLogCreateOrConnectWithoutApiKeyInput[]
    createMany?: UsageLogCreateManyApiKeyInputEnvelope
    connect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
  }

  export type EnumApiKeyStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApiKeyStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProjectUpdateOneRequiredWithoutApiKeysNestedInput = {
    create?: XOR<ProjectCreateWithoutApiKeysInput, ProjectUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutApiKeysInput
    upsert?: ProjectUpsertWithoutApiKeysInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutApiKeysInput, ProjectUpdateWithoutApiKeysInput>, ProjectUncheckedUpdateWithoutApiKeysInput>
  }

  export type ApiKeyEndpointPermissionUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<ApiKeyEndpointPermissionCreateWithoutApiKeyInput, ApiKeyEndpointPermissionUncheckedCreateWithoutApiKeyInput> | ApiKeyEndpointPermissionCreateWithoutApiKeyInput[] | ApiKeyEndpointPermissionUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiKeyEndpointPermissionCreateOrConnectWithoutApiKeyInput | ApiKeyEndpointPermissionCreateOrConnectWithoutApiKeyInput[]
    upsert?: ApiKeyEndpointPermissionUpsertWithWhereUniqueWithoutApiKeyInput | ApiKeyEndpointPermissionUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: ApiKeyEndpointPermissionCreateManyApiKeyInputEnvelope
    set?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    disconnect?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    delete?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    connect?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    update?: ApiKeyEndpointPermissionUpdateWithWhereUniqueWithoutApiKeyInput | ApiKeyEndpointPermissionUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: ApiKeyEndpointPermissionUpdateManyWithWhereWithoutApiKeyInput | ApiKeyEndpointPermissionUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: ApiKeyEndpointPermissionScalarWhereInput | ApiKeyEndpointPermissionScalarWhereInput[]
  }

  export type UsageLogUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<UsageLogCreateWithoutApiKeyInput, UsageLogUncheckedCreateWithoutApiKeyInput> | UsageLogCreateWithoutApiKeyInput[] | UsageLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: UsageLogCreateOrConnectWithoutApiKeyInput | UsageLogCreateOrConnectWithoutApiKeyInput[]
    upsert?: UsageLogUpsertWithWhereUniqueWithoutApiKeyInput | UsageLogUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: UsageLogCreateManyApiKeyInputEnvelope
    set?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    disconnect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    delete?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    connect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    update?: UsageLogUpdateWithWhereUniqueWithoutApiKeyInput | UsageLogUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: UsageLogUpdateManyWithWhereWithoutApiKeyInput | UsageLogUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: UsageLogScalarWhereInput | UsageLogScalarWhereInput[]
  }

  export type ApiKeyEndpointPermissionUncheckedUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<ApiKeyEndpointPermissionCreateWithoutApiKeyInput, ApiKeyEndpointPermissionUncheckedCreateWithoutApiKeyInput> | ApiKeyEndpointPermissionCreateWithoutApiKeyInput[] | ApiKeyEndpointPermissionUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiKeyEndpointPermissionCreateOrConnectWithoutApiKeyInput | ApiKeyEndpointPermissionCreateOrConnectWithoutApiKeyInput[]
    upsert?: ApiKeyEndpointPermissionUpsertWithWhereUniqueWithoutApiKeyInput | ApiKeyEndpointPermissionUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: ApiKeyEndpointPermissionCreateManyApiKeyInputEnvelope
    set?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    disconnect?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    delete?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    connect?: ApiKeyEndpointPermissionWhereUniqueInput | ApiKeyEndpointPermissionWhereUniqueInput[]
    update?: ApiKeyEndpointPermissionUpdateWithWhereUniqueWithoutApiKeyInput | ApiKeyEndpointPermissionUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: ApiKeyEndpointPermissionUpdateManyWithWhereWithoutApiKeyInput | ApiKeyEndpointPermissionUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: ApiKeyEndpointPermissionScalarWhereInput | ApiKeyEndpointPermissionScalarWhereInput[]
  }

  export type UsageLogUncheckedUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<UsageLogCreateWithoutApiKeyInput, UsageLogUncheckedCreateWithoutApiKeyInput> | UsageLogCreateWithoutApiKeyInput[] | UsageLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: UsageLogCreateOrConnectWithoutApiKeyInput | UsageLogCreateOrConnectWithoutApiKeyInput[]
    upsert?: UsageLogUpsertWithWhereUniqueWithoutApiKeyInput | UsageLogUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: UsageLogCreateManyApiKeyInputEnvelope
    set?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    disconnect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    delete?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    connect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    update?: UsageLogUpdateWithWhereUniqueWithoutApiKeyInput | UsageLogUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: UsageLogUpdateManyWithWhereWithoutApiKeyInput | UsageLogUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: UsageLogScalarWhereInput | UsageLogScalarWhereInput[]
  }

  export type ApiKeyCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<ApiKeyCreateWithoutPermissionsInput, ApiKeyUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutPermissionsInput
    connect?: ApiKeyWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutApiKeyEndpointPermissionsInput = {
    create?: XOR<ProjectCreateWithoutApiKeyEndpointPermissionsInput, ProjectUncheckedCreateWithoutApiKeyEndpointPermissionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutApiKeyEndpointPermissionsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectEndpointCreateNestedOneWithoutApiKeyPermissionsInput = {
    create?: XOR<ProjectEndpointCreateWithoutApiKeyPermissionsInput, ProjectEndpointUncheckedCreateWithoutApiKeyPermissionsInput>
    connectOrCreate?: ProjectEndpointCreateOrConnectWithoutApiKeyPermissionsInput
    connect?: ProjectEndpointWhereUniqueInput
  }

  export type ApiKeyUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<ApiKeyCreateWithoutPermissionsInput, ApiKeyUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutPermissionsInput
    upsert?: ApiKeyUpsertWithoutPermissionsInput
    connect?: ApiKeyWhereUniqueInput
    update?: XOR<XOR<ApiKeyUpdateToOneWithWhereWithoutPermissionsInput, ApiKeyUpdateWithoutPermissionsInput>, ApiKeyUncheckedUpdateWithoutPermissionsInput>
  }

  export type ProjectUpdateOneRequiredWithoutApiKeyEndpointPermissionsNestedInput = {
    create?: XOR<ProjectCreateWithoutApiKeyEndpointPermissionsInput, ProjectUncheckedCreateWithoutApiKeyEndpointPermissionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutApiKeyEndpointPermissionsInput
    upsert?: ProjectUpsertWithoutApiKeyEndpointPermissionsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutApiKeyEndpointPermissionsInput, ProjectUpdateWithoutApiKeyEndpointPermissionsInput>, ProjectUncheckedUpdateWithoutApiKeyEndpointPermissionsInput>
  }

  export type ProjectEndpointUpdateOneRequiredWithoutApiKeyPermissionsNestedInput = {
    create?: XOR<ProjectEndpointCreateWithoutApiKeyPermissionsInput, ProjectEndpointUncheckedCreateWithoutApiKeyPermissionsInput>
    connectOrCreate?: ProjectEndpointCreateOrConnectWithoutApiKeyPermissionsInput
    upsert?: ProjectEndpointUpsertWithoutApiKeyPermissionsInput
    connect?: ProjectEndpointWhereUniqueInput
    update?: XOR<XOR<ProjectEndpointUpdateToOneWithWhereWithoutApiKeyPermissionsInput, ProjectEndpointUpdateWithoutApiKeyPermissionsInput>, ProjectEndpointUncheckedUpdateWithoutApiKeyPermissionsInput>
  }

  export type ProjectCreateNestedOneWithoutUsageLogsInput = {
    create?: XOR<ProjectCreateWithoutUsageLogsInput, ProjectUncheckedCreateWithoutUsageLogsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUsageLogsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ApiKeyCreateNestedOneWithoutUsageLogsInput = {
    create?: XOR<ApiKeyCreateWithoutUsageLogsInput, ApiKeyUncheckedCreateWithoutUsageLogsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUsageLogsInput
    connect?: ApiKeyWhereUniqueInput
  }

  export type ProjectEndpointCreateNestedOneWithoutUsageLogsInput = {
    create?: XOR<ProjectEndpointCreateWithoutUsageLogsInput, ProjectEndpointUncheckedCreateWithoutUsageLogsInput>
    connectOrCreate?: ProjectEndpointCreateOrConnectWithoutUsageLogsInput
    connect?: ProjectEndpointWhereUniqueInput
  }

  export type EnumUsageLogOutcomeFieldUpdateOperationsInput = {
    set?: $Enums.UsageLogOutcome
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneWithoutUsageLogsNestedInput = {
    create?: XOR<ProjectCreateWithoutUsageLogsInput, ProjectUncheckedCreateWithoutUsageLogsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUsageLogsInput
    upsert?: ProjectUpsertWithoutUsageLogsInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutUsageLogsInput, ProjectUpdateWithoutUsageLogsInput>, ProjectUncheckedUpdateWithoutUsageLogsInput>
  }

  export type ApiKeyUpdateOneWithoutUsageLogsNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUsageLogsInput, ApiKeyUncheckedCreateWithoutUsageLogsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUsageLogsInput
    upsert?: ApiKeyUpsertWithoutUsageLogsInput
    disconnect?: ApiKeyWhereInput | boolean
    delete?: ApiKeyWhereInput | boolean
    connect?: ApiKeyWhereUniqueInput
    update?: XOR<XOR<ApiKeyUpdateToOneWithWhereWithoutUsageLogsInput, ApiKeyUpdateWithoutUsageLogsInput>, ApiKeyUncheckedUpdateWithoutUsageLogsInput>
  }

  export type ProjectEndpointUpdateOneWithoutUsageLogsNestedInput = {
    create?: XOR<ProjectEndpointCreateWithoutUsageLogsInput, ProjectEndpointUncheckedCreateWithoutUsageLogsInput>
    connectOrCreate?: ProjectEndpointCreateOrConnectWithoutUsageLogsInput
    upsert?: ProjectEndpointUpsertWithoutUsageLogsInput
    disconnect?: ProjectEndpointWhereInput | boolean
    delete?: ProjectEndpointWhereInput | boolean
    connect?: ProjectEndpointWhereUniqueInput
    update?: XOR<XOR<ProjectEndpointUpdateToOneWithWhereWithoutUsageLogsInput, ProjectEndpointUpdateWithoutUsageLogsInput>, ProjectEndpointUncheckedUpdateWithoutUsageLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEndpointMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.EndpointMethod | EnumEndpointMethodFieldRefInput<$PrismaModel>
    in?: $Enums.EndpointMethod[] | ListEnumEndpointMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.EndpointMethod[] | ListEnumEndpointMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumEndpointMethodFilter<$PrismaModel> | $Enums.EndpointMethod
  }

  export type NestedEnumEndpointStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EndpointStatus | EnumEndpointStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EndpointStatus[] | ListEnumEndpointStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EndpointStatus[] | ListEnumEndpointStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEndpointStatusFilter<$PrismaModel> | $Enums.EndpointStatus
  }

  export type NestedEnumEndpointMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EndpointMethod | EnumEndpointMethodFieldRefInput<$PrismaModel>
    in?: $Enums.EndpointMethod[] | ListEnumEndpointMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.EndpointMethod[] | ListEnumEndpointMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumEndpointMethodWithAggregatesFilter<$PrismaModel> | $Enums.EndpointMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEndpointMethodFilter<$PrismaModel>
    _max?: NestedEnumEndpointMethodFilter<$PrismaModel>
  }

  export type NestedEnumEndpointStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EndpointStatus | EnumEndpointStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EndpointStatus[] | ListEnumEndpointStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EndpointStatus[] | ListEnumEndpointStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEndpointStatusWithAggregatesFilter<$PrismaModel> | $Enums.EndpointStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEndpointStatusFilter<$PrismaModel>
    _max?: NestedEnumEndpointStatusFilter<$PrismaModel>
  }

  export type NestedEnumApiKeyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiKeyStatus | EnumApiKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApiKeyStatusFilter<$PrismaModel> | $Enums.ApiKeyStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumApiKeyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiKeyStatus | EnumApiKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiKeyStatus[] | ListEnumApiKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApiKeyStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApiKeyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApiKeyStatusFilter<$PrismaModel>
    _max?: NestedEnumApiKeyStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumUsageLogOutcomeFilter<$PrismaModel = never> = {
    equals?: $Enums.UsageLogOutcome | EnumUsageLogOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.UsageLogOutcome[] | ListEnumUsageLogOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UsageLogOutcome[] | ListEnumUsageLogOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumUsageLogOutcomeFilter<$PrismaModel> | $Enums.UsageLogOutcome
  }

  export type NestedEnumUsageLogOutcomeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UsageLogOutcome | EnumUsageLogOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.UsageLogOutcome[] | ListEnumUsageLogOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UsageLogOutcome[] | ListEnumUsageLogOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumUsageLogOutcomeWithAggregatesFilter<$PrismaModel> | $Enums.UsageLogOutcome
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUsageLogOutcomeFilter<$PrismaModel>
    _max?: NestedEnumUsageLogOutcomeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProjectCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    endpoints?: ProjectEndpointCreateNestedManyWithoutProjectInput
    apiKeys?: ApiKeyCreateNestedManyWithoutProjectInput
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionCreateNestedManyWithoutProjectInput
    usageLogs?: UsageLogCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    endpoints?: ProjectEndpointUncheckedCreateNestedManyWithoutProjectInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutProjectInput
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionUncheckedCreateNestedManyWithoutProjectInput
    usageLogs?: UsageLogUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectCreateManyOwnerInputEnvelope = {
    data: ProjectCreateManyOwnerInput | ProjectCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutOwnerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    ownerId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectEndpointCreateWithoutProjectInput = {
    id?: string
    method: $Enums.EndpointMethod
    path: string
    routeShape: string
    upstreamUrl: string
    status?: $Enums.EndpointStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKeyPermissions?: ApiKeyEndpointPermissionCreateNestedManyWithoutEndpointInput
    usageLogs?: UsageLogCreateNestedManyWithoutEndpointInput
  }

  export type ProjectEndpointUncheckedCreateWithoutProjectInput = {
    id?: string
    method: $Enums.EndpointMethod
    path: string
    routeShape: string
    upstreamUrl: string
    status?: $Enums.EndpointStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKeyPermissions?: ApiKeyEndpointPermissionUncheckedCreateNestedManyWithoutEndpointInput
    usageLogs?: UsageLogUncheckedCreateNestedManyWithoutEndpointInput
  }

  export type ProjectEndpointCreateOrConnectWithoutProjectInput = {
    where: ProjectEndpointWhereUniqueInput
    create: XOR<ProjectEndpointCreateWithoutProjectInput, ProjectEndpointUncheckedCreateWithoutProjectInput>
  }

  export type ProjectEndpointCreateManyProjectInputEnvelope = {
    data: ProjectEndpointCreateManyProjectInput | ProjectEndpointCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyCreateWithoutProjectInput = {
    id?: string
    name: string
    prefix: string
    keyHash: string
    status?: $Enums.ApiKeyStatus
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: ApiKeyEndpointPermissionCreateNestedManyWithoutApiKeyInput
    usageLogs?: UsageLogCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    prefix: string
    keyHash: string
    status?: $Enums.ApiKeyStatus
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: ApiKeyEndpointPermissionUncheckedCreateNestedManyWithoutApiKeyInput
    usageLogs?: UsageLogUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyCreateOrConnectWithoutProjectInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutProjectInput, ApiKeyUncheckedCreateWithoutProjectInput>
  }

  export type ApiKeyCreateManyProjectInputEnvelope = {
    data: ApiKeyCreateManyProjectInput | ApiKeyCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyEndpointPermissionCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    apiKey: ApiKeyCreateNestedOneWithoutPermissionsInput
    endpoint: ProjectEndpointCreateNestedOneWithoutApiKeyPermissionsInput
  }

  export type ApiKeyEndpointPermissionUncheckedCreateWithoutProjectInput = {
    id?: string
    apiKeyId: string
    endpointId: string
    createdAt?: Date | string
  }

  export type ApiKeyEndpointPermissionCreateOrConnectWithoutProjectInput = {
    where: ApiKeyEndpointPermissionWhereUniqueInput
    create: XOR<ApiKeyEndpointPermissionCreateWithoutProjectInput, ApiKeyEndpointPermissionUncheckedCreateWithoutProjectInput>
  }

  export type ApiKeyEndpointPermissionCreateManyProjectInputEnvelope = {
    data: ApiKeyEndpointPermissionCreateManyProjectInput | ApiKeyEndpointPermissionCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UsageLogCreateWithoutProjectInput = {
    id?: string
    requestMethod: $Enums.EndpointMethod
    requestPath: string
    queryString?: string | null
    outcome: $Enums.UsageLogOutcome
    gatewayStatusCode: number
    upstreamStatusCode?: number | null
    errorCode?: string | null
    durationMs: number
    clientIp?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    apiKey?: ApiKeyCreateNestedOneWithoutUsageLogsInput
    endpoint?: ProjectEndpointCreateNestedOneWithoutUsageLogsInput
  }

  export type UsageLogUncheckedCreateWithoutProjectInput = {
    id?: string
    apiKeyId?: string | null
    endpointId?: string | null
    requestMethod: $Enums.EndpointMethod
    requestPath: string
    queryString?: string | null
    outcome: $Enums.UsageLogOutcome
    gatewayStatusCode: number
    upstreamStatusCode?: number | null
    errorCode?: string | null
    durationMs: number
    clientIp?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type UsageLogCreateOrConnectWithoutProjectInput = {
    where: UsageLogWhereUniqueInput
    create: XOR<UsageLogCreateWithoutProjectInput, UsageLogUncheckedCreateWithoutProjectInput>
  }

  export type UsageLogCreateManyProjectInputEnvelope = {
    data: UsageLogCreateManyProjectInput | UsageLogCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEndpointUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectEndpointWhereUniqueInput
    update: XOR<ProjectEndpointUpdateWithoutProjectInput, ProjectEndpointUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectEndpointCreateWithoutProjectInput, ProjectEndpointUncheckedCreateWithoutProjectInput>
  }

  export type ProjectEndpointUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectEndpointWhereUniqueInput
    data: XOR<ProjectEndpointUpdateWithoutProjectInput, ProjectEndpointUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectEndpointUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectEndpointScalarWhereInput
    data: XOR<ProjectEndpointUpdateManyMutationInput, ProjectEndpointUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectEndpointScalarWhereInput = {
    AND?: ProjectEndpointScalarWhereInput | ProjectEndpointScalarWhereInput[]
    OR?: ProjectEndpointScalarWhereInput[]
    NOT?: ProjectEndpointScalarWhereInput | ProjectEndpointScalarWhereInput[]
    id?: StringFilter<"ProjectEndpoint"> | string
    projectId?: StringFilter<"ProjectEndpoint"> | string
    method?: EnumEndpointMethodFilter<"ProjectEndpoint"> | $Enums.EndpointMethod
    path?: StringFilter<"ProjectEndpoint"> | string
    routeShape?: StringFilter<"ProjectEndpoint"> | string
    upstreamUrl?: StringFilter<"ProjectEndpoint"> | string
    status?: EnumEndpointStatusFilter<"ProjectEndpoint"> | $Enums.EndpointStatus
    createdAt?: DateTimeFilter<"ProjectEndpoint"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectEndpoint"> | Date | string
  }

  export type ApiKeyUpsertWithWhereUniqueWithoutProjectInput = {
    where: ApiKeyWhereUniqueInput
    update: XOR<ApiKeyUpdateWithoutProjectInput, ApiKeyUncheckedUpdateWithoutProjectInput>
    create: XOR<ApiKeyCreateWithoutProjectInput, ApiKeyUncheckedCreateWithoutProjectInput>
  }

  export type ApiKeyUpdateWithWhereUniqueWithoutProjectInput = {
    where: ApiKeyWhereUniqueInput
    data: XOR<ApiKeyUpdateWithoutProjectInput, ApiKeyUncheckedUpdateWithoutProjectInput>
  }

  export type ApiKeyUpdateManyWithWhereWithoutProjectInput = {
    where: ApiKeyScalarWhereInput
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyWithoutProjectInput>
  }

  export type ApiKeyScalarWhereInput = {
    AND?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    OR?: ApiKeyScalarWhereInput[]
    NOT?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    projectId?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    prefix?: StringFilter<"ApiKey"> | string
    keyHash?: StringFilter<"ApiKey"> | string
    status?: EnumApiKeyStatusFilter<"ApiKey"> | $Enums.ApiKeyStatus
    revokedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
  }

  export type ApiKeyEndpointPermissionUpsertWithWhereUniqueWithoutProjectInput = {
    where: ApiKeyEndpointPermissionWhereUniqueInput
    update: XOR<ApiKeyEndpointPermissionUpdateWithoutProjectInput, ApiKeyEndpointPermissionUncheckedUpdateWithoutProjectInput>
    create: XOR<ApiKeyEndpointPermissionCreateWithoutProjectInput, ApiKeyEndpointPermissionUncheckedCreateWithoutProjectInput>
  }

  export type ApiKeyEndpointPermissionUpdateWithWhereUniqueWithoutProjectInput = {
    where: ApiKeyEndpointPermissionWhereUniqueInput
    data: XOR<ApiKeyEndpointPermissionUpdateWithoutProjectInput, ApiKeyEndpointPermissionUncheckedUpdateWithoutProjectInput>
  }

  export type ApiKeyEndpointPermissionUpdateManyWithWhereWithoutProjectInput = {
    where: ApiKeyEndpointPermissionScalarWhereInput
    data: XOR<ApiKeyEndpointPermissionUpdateManyMutationInput, ApiKeyEndpointPermissionUncheckedUpdateManyWithoutProjectInput>
  }

  export type ApiKeyEndpointPermissionScalarWhereInput = {
    AND?: ApiKeyEndpointPermissionScalarWhereInput | ApiKeyEndpointPermissionScalarWhereInput[]
    OR?: ApiKeyEndpointPermissionScalarWhereInput[]
    NOT?: ApiKeyEndpointPermissionScalarWhereInput | ApiKeyEndpointPermissionScalarWhereInput[]
    id?: StringFilter<"ApiKeyEndpointPermission"> | string
    apiKeyId?: StringFilter<"ApiKeyEndpointPermission"> | string
    projectId?: StringFilter<"ApiKeyEndpointPermission"> | string
    endpointId?: StringFilter<"ApiKeyEndpointPermission"> | string
    createdAt?: DateTimeFilter<"ApiKeyEndpointPermission"> | Date | string
  }

  export type UsageLogUpsertWithWhereUniqueWithoutProjectInput = {
    where: UsageLogWhereUniqueInput
    update: XOR<UsageLogUpdateWithoutProjectInput, UsageLogUncheckedUpdateWithoutProjectInput>
    create: XOR<UsageLogCreateWithoutProjectInput, UsageLogUncheckedCreateWithoutProjectInput>
  }

  export type UsageLogUpdateWithWhereUniqueWithoutProjectInput = {
    where: UsageLogWhereUniqueInput
    data: XOR<UsageLogUpdateWithoutProjectInput, UsageLogUncheckedUpdateWithoutProjectInput>
  }

  export type UsageLogUpdateManyWithWhereWithoutProjectInput = {
    where: UsageLogScalarWhereInput
    data: XOR<UsageLogUpdateManyMutationInput, UsageLogUncheckedUpdateManyWithoutProjectInput>
  }

  export type UsageLogScalarWhereInput = {
    AND?: UsageLogScalarWhereInput | UsageLogScalarWhereInput[]
    OR?: UsageLogScalarWhereInput[]
    NOT?: UsageLogScalarWhereInput | UsageLogScalarWhereInput[]
    id?: StringFilter<"UsageLog"> | string
    projectId?: StringNullableFilter<"UsageLog"> | string | null
    apiKeyId?: StringNullableFilter<"UsageLog"> | string | null
    endpointId?: StringNullableFilter<"UsageLog"> | string | null
    requestMethod?: EnumEndpointMethodFilter<"UsageLog"> | $Enums.EndpointMethod
    requestPath?: StringFilter<"UsageLog"> | string
    queryString?: StringNullableFilter<"UsageLog"> | string | null
    outcome?: EnumUsageLogOutcomeFilter<"UsageLog"> | $Enums.UsageLogOutcome
    gatewayStatusCode?: IntFilter<"UsageLog"> | number
    upstreamStatusCode?: IntNullableFilter<"UsageLog"> | number | null
    errorCode?: StringNullableFilter<"UsageLog"> | string | null
    durationMs?: IntFilter<"UsageLog"> | number
    clientIp?: StringNullableFilter<"UsageLog"> | string | null
    userAgent?: StringNullableFilter<"UsageLog"> | string | null
    createdAt?: DateTimeFilter<"UsageLog"> | Date | string
  }

  export type ProjectCreateWithoutEndpointsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutProjectsInput
    apiKeys?: ApiKeyCreateNestedManyWithoutProjectInput
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionCreateNestedManyWithoutProjectInput
    usageLogs?: UsageLogCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutEndpointsInput = {
    id?: string
    ownerId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutProjectInput
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionUncheckedCreateNestedManyWithoutProjectInput
    usageLogs?: UsageLogUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutEndpointsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutEndpointsInput, ProjectUncheckedCreateWithoutEndpointsInput>
  }

  export type ApiKeyEndpointPermissionCreateWithoutEndpointInput = {
    id?: string
    createdAt?: Date | string
    apiKey: ApiKeyCreateNestedOneWithoutPermissionsInput
    project: ProjectCreateNestedOneWithoutApiKeyEndpointPermissionsInput
  }

  export type ApiKeyEndpointPermissionUncheckedCreateWithoutEndpointInput = {
    id?: string
    apiKeyId: string
    projectId: string
    createdAt?: Date | string
  }

  export type ApiKeyEndpointPermissionCreateOrConnectWithoutEndpointInput = {
    where: ApiKeyEndpointPermissionWhereUniqueInput
    create: XOR<ApiKeyEndpointPermissionCreateWithoutEndpointInput, ApiKeyEndpointPermissionUncheckedCreateWithoutEndpointInput>
  }

  export type ApiKeyEndpointPermissionCreateManyEndpointInputEnvelope = {
    data: ApiKeyEndpointPermissionCreateManyEndpointInput | ApiKeyEndpointPermissionCreateManyEndpointInput[]
    skipDuplicates?: boolean
  }

  export type UsageLogCreateWithoutEndpointInput = {
    id?: string
    requestMethod: $Enums.EndpointMethod
    requestPath: string
    queryString?: string | null
    outcome: $Enums.UsageLogOutcome
    gatewayStatusCode: number
    upstreamStatusCode?: number | null
    errorCode?: string | null
    durationMs: number
    clientIp?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    project?: ProjectCreateNestedOneWithoutUsageLogsInput
    apiKey?: ApiKeyCreateNestedOneWithoutUsageLogsInput
  }

  export type UsageLogUncheckedCreateWithoutEndpointInput = {
    id?: string
    projectId?: string | null
    apiKeyId?: string | null
    requestMethod: $Enums.EndpointMethod
    requestPath: string
    queryString?: string | null
    outcome: $Enums.UsageLogOutcome
    gatewayStatusCode: number
    upstreamStatusCode?: number | null
    errorCode?: string | null
    durationMs: number
    clientIp?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type UsageLogCreateOrConnectWithoutEndpointInput = {
    where: UsageLogWhereUniqueInput
    create: XOR<UsageLogCreateWithoutEndpointInput, UsageLogUncheckedCreateWithoutEndpointInput>
  }

  export type UsageLogCreateManyEndpointInputEnvelope = {
    data: UsageLogCreateManyEndpointInput | UsageLogCreateManyEndpointInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutEndpointsInput = {
    update: XOR<ProjectUpdateWithoutEndpointsInput, ProjectUncheckedUpdateWithoutEndpointsInput>
    create: XOR<ProjectCreateWithoutEndpointsInput, ProjectUncheckedCreateWithoutEndpointsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutEndpointsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutEndpointsInput, ProjectUncheckedUpdateWithoutEndpointsInput>
  }

  export type ProjectUpdateWithoutEndpointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutProjectNestedInput
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionUpdateManyWithoutProjectNestedInput
    usageLogs?: UsageLogUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutEndpointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutProjectNestedInput
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionUncheckedUpdateManyWithoutProjectNestedInput
    usageLogs?: UsageLogUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ApiKeyEndpointPermissionUpsertWithWhereUniqueWithoutEndpointInput = {
    where: ApiKeyEndpointPermissionWhereUniqueInput
    update: XOR<ApiKeyEndpointPermissionUpdateWithoutEndpointInput, ApiKeyEndpointPermissionUncheckedUpdateWithoutEndpointInput>
    create: XOR<ApiKeyEndpointPermissionCreateWithoutEndpointInput, ApiKeyEndpointPermissionUncheckedCreateWithoutEndpointInput>
  }

  export type ApiKeyEndpointPermissionUpdateWithWhereUniqueWithoutEndpointInput = {
    where: ApiKeyEndpointPermissionWhereUniqueInput
    data: XOR<ApiKeyEndpointPermissionUpdateWithoutEndpointInput, ApiKeyEndpointPermissionUncheckedUpdateWithoutEndpointInput>
  }

  export type ApiKeyEndpointPermissionUpdateManyWithWhereWithoutEndpointInput = {
    where: ApiKeyEndpointPermissionScalarWhereInput
    data: XOR<ApiKeyEndpointPermissionUpdateManyMutationInput, ApiKeyEndpointPermissionUncheckedUpdateManyWithoutEndpointInput>
  }

  export type UsageLogUpsertWithWhereUniqueWithoutEndpointInput = {
    where: UsageLogWhereUniqueInput
    update: XOR<UsageLogUpdateWithoutEndpointInput, UsageLogUncheckedUpdateWithoutEndpointInput>
    create: XOR<UsageLogCreateWithoutEndpointInput, UsageLogUncheckedCreateWithoutEndpointInput>
  }

  export type UsageLogUpdateWithWhereUniqueWithoutEndpointInput = {
    where: UsageLogWhereUniqueInput
    data: XOR<UsageLogUpdateWithoutEndpointInput, UsageLogUncheckedUpdateWithoutEndpointInput>
  }

  export type UsageLogUpdateManyWithWhereWithoutEndpointInput = {
    where: UsageLogScalarWhereInput
    data: XOR<UsageLogUpdateManyMutationInput, UsageLogUncheckedUpdateManyWithoutEndpointInput>
  }

  export type ProjectCreateWithoutApiKeysInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutProjectsInput
    endpoints?: ProjectEndpointCreateNestedManyWithoutProjectInput
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionCreateNestedManyWithoutProjectInput
    usageLogs?: UsageLogCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutApiKeysInput = {
    id?: string
    ownerId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    endpoints?: ProjectEndpointUncheckedCreateNestedManyWithoutProjectInput
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionUncheckedCreateNestedManyWithoutProjectInput
    usageLogs?: UsageLogUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutApiKeysInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutApiKeysInput, ProjectUncheckedCreateWithoutApiKeysInput>
  }

  export type ApiKeyEndpointPermissionCreateWithoutApiKeyInput = {
    id?: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutApiKeyEndpointPermissionsInput
    endpoint: ProjectEndpointCreateNestedOneWithoutApiKeyPermissionsInput
  }

  export type ApiKeyEndpointPermissionUncheckedCreateWithoutApiKeyInput = {
    id?: string
    projectId: string
    endpointId: string
    createdAt?: Date | string
  }

  export type ApiKeyEndpointPermissionCreateOrConnectWithoutApiKeyInput = {
    where: ApiKeyEndpointPermissionWhereUniqueInput
    create: XOR<ApiKeyEndpointPermissionCreateWithoutApiKeyInput, ApiKeyEndpointPermissionUncheckedCreateWithoutApiKeyInput>
  }

  export type ApiKeyEndpointPermissionCreateManyApiKeyInputEnvelope = {
    data: ApiKeyEndpointPermissionCreateManyApiKeyInput | ApiKeyEndpointPermissionCreateManyApiKeyInput[]
    skipDuplicates?: boolean
  }

  export type UsageLogCreateWithoutApiKeyInput = {
    id?: string
    requestMethod: $Enums.EndpointMethod
    requestPath: string
    queryString?: string | null
    outcome: $Enums.UsageLogOutcome
    gatewayStatusCode: number
    upstreamStatusCode?: number | null
    errorCode?: string | null
    durationMs: number
    clientIp?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    project?: ProjectCreateNestedOneWithoutUsageLogsInput
    endpoint?: ProjectEndpointCreateNestedOneWithoutUsageLogsInput
  }

  export type UsageLogUncheckedCreateWithoutApiKeyInput = {
    id?: string
    projectId?: string | null
    endpointId?: string | null
    requestMethod: $Enums.EndpointMethod
    requestPath: string
    queryString?: string | null
    outcome: $Enums.UsageLogOutcome
    gatewayStatusCode: number
    upstreamStatusCode?: number | null
    errorCode?: string | null
    durationMs: number
    clientIp?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type UsageLogCreateOrConnectWithoutApiKeyInput = {
    where: UsageLogWhereUniqueInput
    create: XOR<UsageLogCreateWithoutApiKeyInput, UsageLogUncheckedCreateWithoutApiKeyInput>
  }

  export type UsageLogCreateManyApiKeyInputEnvelope = {
    data: UsageLogCreateManyApiKeyInput | UsageLogCreateManyApiKeyInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutApiKeysInput = {
    update: XOR<ProjectUpdateWithoutApiKeysInput, ProjectUncheckedUpdateWithoutApiKeysInput>
    create: XOR<ProjectCreateWithoutApiKeysInput, ProjectUncheckedCreateWithoutApiKeysInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutApiKeysInput, ProjectUncheckedUpdateWithoutApiKeysInput>
  }

  export type ProjectUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    endpoints?: ProjectEndpointUpdateManyWithoutProjectNestedInput
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionUpdateManyWithoutProjectNestedInput
    usageLogs?: UsageLogUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoints?: ProjectEndpointUncheckedUpdateManyWithoutProjectNestedInput
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionUncheckedUpdateManyWithoutProjectNestedInput
    usageLogs?: UsageLogUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ApiKeyEndpointPermissionUpsertWithWhereUniqueWithoutApiKeyInput = {
    where: ApiKeyEndpointPermissionWhereUniqueInput
    update: XOR<ApiKeyEndpointPermissionUpdateWithoutApiKeyInput, ApiKeyEndpointPermissionUncheckedUpdateWithoutApiKeyInput>
    create: XOR<ApiKeyEndpointPermissionCreateWithoutApiKeyInput, ApiKeyEndpointPermissionUncheckedCreateWithoutApiKeyInput>
  }

  export type ApiKeyEndpointPermissionUpdateWithWhereUniqueWithoutApiKeyInput = {
    where: ApiKeyEndpointPermissionWhereUniqueInput
    data: XOR<ApiKeyEndpointPermissionUpdateWithoutApiKeyInput, ApiKeyEndpointPermissionUncheckedUpdateWithoutApiKeyInput>
  }

  export type ApiKeyEndpointPermissionUpdateManyWithWhereWithoutApiKeyInput = {
    where: ApiKeyEndpointPermissionScalarWhereInput
    data: XOR<ApiKeyEndpointPermissionUpdateManyMutationInput, ApiKeyEndpointPermissionUncheckedUpdateManyWithoutApiKeyInput>
  }

  export type UsageLogUpsertWithWhereUniqueWithoutApiKeyInput = {
    where: UsageLogWhereUniqueInput
    update: XOR<UsageLogUpdateWithoutApiKeyInput, UsageLogUncheckedUpdateWithoutApiKeyInput>
    create: XOR<UsageLogCreateWithoutApiKeyInput, UsageLogUncheckedCreateWithoutApiKeyInput>
  }

  export type UsageLogUpdateWithWhereUniqueWithoutApiKeyInput = {
    where: UsageLogWhereUniqueInput
    data: XOR<UsageLogUpdateWithoutApiKeyInput, UsageLogUncheckedUpdateWithoutApiKeyInput>
  }

  export type UsageLogUpdateManyWithWhereWithoutApiKeyInput = {
    where: UsageLogScalarWhereInput
    data: XOR<UsageLogUpdateManyMutationInput, UsageLogUncheckedUpdateManyWithoutApiKeyInput>
  }

  export type ApiKeyCreateWithoutPermissionsInput = {
    id?: string
    name: string
    prefix: string
    keyHash: string
    status?: $Enums.ApiKeyStatus
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutApiKeysInput
    usageLogs?: UsageLogCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateWithoutPermissionsInput = {
    id?: string
    projectId: string
    name: string
    prefix: string
    keyHash: string
    status?: $Enums.ApiKeyStatus
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usageLogs?: UsageLogUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyCreateOrConnectWithoutPermissionsInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutPermissionsInput, ApiKeyUncheckedCreateWithoutPermissionsInput>
  }

  export type ProjectCreateWithoutApiKeyEndpointPermissionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutProjectsInput
    endpoints?: ProjectEndpointCreateNestedManyWithoutProjectInput
    apiKeys?: ApiKeyCreateNestedManyWithoutProjectInput
    usageLogs?: UsageLogCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutApiKeyEndpointPermissionsInput = {
    id?: string
    ownerId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    endpoints?: ProjectEndpointUncheckedCreateNestedManyWithoutProjectInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutProjectInput
    usageLogs?: UsageLogUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutApiKeyEndpointPermissionsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutApiKeyEndpointPermissionsInput, ProjectUncheckedCreateWithoutApiKeyEndpointPermissionsInput>
  }

  export type ProjectEndpointCreateWithoutApiKeyPermissionsInput = {
    id?: string
    method: $Enums.EndpointMethod
    path: string
    routeShape: string
    upstreamUrl: string
    status?: $Enums.EndpointStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutEndpointsInput
    usageLogs?: UsageLogCreateNestedManyWithoutEndpointInput
  }

  export type ProjectEndpointUncheckedCreateWithoutApiKeyPermissionsInput = {
    id?: string
    projectId: string
    method: $Enums.EndpointMethod
    path: string
    routeShape: string
    upstreamUrl: string
    status?: $Enums.EndpointStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    usageLogs?: UsageLogUncheckedCreateNestedManyWithoutEndpointInput
  }

  export type ProjectEndpointCreateOrConnectWithoutApiKeyPermissionsInput = {
    where: ProjectEndpointWhereUniqueInput
    create: XOR<ProjectEndpointCreateWithoutApiKeyPermissionsInput, ProjectEndpointUncheckedCreateWithoutApiKeyPermissionsInput>
  }

  export type ApiKeyUpsertWithoutPermissionsInput = {
    update: XOR<ApiKeyUpdateWithoutPermissionsInput, ApiKeyUncheckedUpdateWithoutPermissionsInput>
    create: XOR<ApiKeyCreateWithoutPermissionsInput, ApiKeyUncheckedCreateWithoutPermissionsInput>
    where?: ApiKeyWhereInput
  }

  export type ApiKeyUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: ApiKeyWhereInput
    data: XOR<ApiKeyUpdateWithoutPermissionsInput, ApiKeyUncheckedUpdateWithoutPermissionsInput>
  }

  export type ApiKeyUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutApiKeysNestedInput
    usageLogs?: UsageLogUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usageLogs?: UsageLogUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type ProjectUpsertWithoutApiKeyEndpointPermissionsInput = {
    update: XOR<ProjectUpdateWithoutApiKeyEndpointPermissionsInput, ProjectUncheckedUpdateWithoutApiKeyEndpointPermissionsInput>
    create: XOR<ProjectCreateWithoutApiKeyEndpointPermissionsInput, ProjectUncheckedCreateWithoutApiKeyEndpointPermissionsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutApiKeyEndpointPermissionsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutApiKeyEndpointPermissionsInput, ProjectUncheckedUpdateWithoutApiKeyEndpointPermissionsInput>
  }

  export type ProjectUpdateWithoutApiKeyEndpointPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    endpoints?: ProjectEndpointUpdateManyWithoutProjectNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutProjectNestedInput
    usageLogs?: UsageLogUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutApiKeyEndpointPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoints?: ProjectEndpointUncheckedUpdateManyWithoutProjectNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutProjectNestedInput
    usageLogs?: UsageLogUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectEndpointUpsertWithoutApiKeyPermissionsInput = {
    update: XOR<ProjectEndpointUpdateWithoutApiKeyPermissionsInput, ProjectEndpointUncheckedUpdateWithoutApiKeyPermissionsInput>
    create: XOR<ProjectEndpointCreateWithoutApiKeyPermissionsInput, ProjectEndpointUncheckedCreateWithoutApiKeyPermissionsInput>
    where?: ProjectEndpointWhereInput
  }

  export type ProjectEndpointUpdateToOneWithWhereWithoutApiKeyPermissionsInput = {
    where?: ProjectEndpointWhereInput
    data: XOR<ProjectEndpointUpdateWithoutApiKeyPermissionsInput, ProjectEndpointUncheckedUpdateWithoutApiKeyPermissionsInput>
  }

  export type ProjectEndpointUpdateWithoutApiKeyPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    path?: StringFieldUpdateOperationsInput | string
    routeShape?: StringFieldUpdateOperationsInput | string
    upstreamUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumEndpointStatusFieldUpdateOperationsInput | $Enums.EndpointStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutEndpointsNestedInput
    usageLogs?: UsageLogUpdateManyWithoutEndpointNestedInput
  }

  export type ProjectEndpointUncheckedUpdateWithoutApiKeyPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    method?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    path?: StringFieldUpdateOperationsInput | string
    routeShape?: StringFieldUpdateOperationsInput | string
    upstreamUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumEndpointStatusFieldUpdateOperationsInput | $Enums.EndpointStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usageLogs?: UsageLogUncheckedUpdateManyWithoutEndpointNestedInput
  }

  export type ProjectCreateWithoutUsageLogsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutProjectsInput
    endpoints?: ProjectEndpointCreateNestedManyWithoutProjectInput
    apiKeys?: ApiKeyCreateNestedManyWithoutProjectInput
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUsageLogsInput = {
    id?: string
    ownerId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    endpoints?: ProjectEndpointUncheckedCreateNestedManyWithoutProjectInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutProjectInput
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUsageLogsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUsageLogsInput, ProjectUncheckedCreateWithoutUsageLogsInput>
  }

  export type ApiKeyCreateWithoutUsageLogsInput = {
    id?: string
    name: string
    prefix: string
    keyHash: string
    status?: $Enums.ApiKeyStatus
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutApiKeysInput
    permissions?: ApiKeyEndpointPermissionCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateWithoutUsageLogsInput = {
    id?: string
    projectId: string
    name: string
    prefix: string
    keyHash: string
    status?: $Enums.ApiKeyStatus
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: ApiKeyEndpointPermissionUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyCreateOrConnectWithoutUsageLogsInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutUsageLogsInput, ApiKeyUncheckedCreateWithoutUsageLogsInput>
  }

  export type ProjectEndpointCreateWithoutUsageLogsInput = {
    id?: string
    method: $Enums.EndpointMethod
    path: string
    routeShape: string
    upstreamUrl: string
    status?: $Enums.EndpointStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutEndpointsInput
    apiKeyPermissions?: ApiKeyEndpointPermissionCreateNestedManyWithoutEndpointInput
  }

  export type ProjectEndpointUncheckedCreateWithoutUsageLogsInput = {
    id?: string
    projectId: string
    method: $Enums.EndpointMethod
    path: string
    routeShape: string
    upstreamUrl: string
    status?: $Enums.EndpointStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKeyPermissions?: ApiKeyEndpointPermissionUncheckedCreateNestedManyWithoutEndpointInput
  }

  export type ProjectEndpointCreateOrConnectWithoutUsageLogsInput = {
    where: ProjectEndpointWhereUniqueInput
    create: XOR<ProjectEndpointCreateWithoutUsageLogsInput, ProjectEndpointUncheckedCreateWithoutUsageLogsInput>
  }

  export type ProjectUpsertWithoutUsageLogsInput = {
    update: XOR<ProjectUpdateWithoutUsageLogsInput, ProjectUncheckedUpdateWithoutUsageLogsInput>
    create: XOR<ProjectCreateWithoutUsageLogsInput, ProjectUncheckedCreateWithoutUsageLogsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutUsageLogsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutUsageLogsInput, ProjectUncheckedUpdateWithoutUsageLogsInput>
  }

  export type ProjectUpdateWithoutUsageLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    endpoints?: ProjectEndpointUpdateManyWithoutProjectNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutProjectNestedInput
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUsageLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoints?: ProjectEndpointUncheckedUpdateManyWithoutProjectNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutProjectNestedInput
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ApiKeyUpsertWithoutUsageLogsInput = {
    update: XOR<ApiKeyUpdateWithoutUsageLogsInput, ApiKeyUncheckedUpdateWithoutUsageLogsInput>
    create: XOR<ApiKeyCreateWithoutUsageLogsInput, ApiKeyUncheckedCreateWithoutUsageLogsInput>
    where?: ApiKeyWhereInput
  }

  export type ApiKeyUpdateToOneWithWhereWithoutUsageLogsInput = {
    where?: ApiKeyWhereInput
    data: XOR<ApiKeyUpdateWithoutUsageLogsInput, ApiKeyUncheckedUpdateWithoutUsageLogsInput>
  }

  export type ApiKeyUpdateWithoutUsageLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutApiKeysNestedInput
    permissions?: ApiKeyEndpointPermissionUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutUsageLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: ApiKeyEndpointPermissionUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type ProjectEndpointUpsertWithoutUsageLogsInput = {
    update: XOR<ProjectEndpointUpdateWithoutUsageLogsInput, ProjectEndpointUncheckedUpdateWithoutUsageLogsInput>
    create: XOR<ProjectEndpointCreateWithoutUsageLogsInput, ProjectEndpointUncheckedCreateWithoutUsageLogsInput>
    where?: ProjectEndpointWhereInput
  }

  export type ProjectEndpointUpdateToOneWithWhereWithoutUsageLogsInput = {
    where?: ProjectEndpointWhereInput
    data: XOR<ProjectEndpointUpdateWithoutUsageLogsInput, ProjectEndpointUncheckedUpdateWithoutUsageLogsInput>
  }

  export type ProjectEndpointUpdateWithoutUsageLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    path?: StringFieldUpdateOperationsInput | string
    routeShape?: StringFieldUpdateOperationsInput | string
    upstreamUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumEndpointStatusFieldUpdateOperationsInput | $Enums.EndpointStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutEndpointsNestedInput
    apiKeyPermissions?: ApiKeyEndpointPermissionUpdateManyWithoutEndpointNestedInput
  }

  export type ProjectEndpointUncheckedUpdateWithoutUsageLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    method?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    path?: StringFieldUpdateOperationsInput | string
    routeShape?: StringFieldUpdateOperationsInput | string
    upstreamUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumEndpointStatusFieldUpdateOperationsInput | $Enums.EndpointStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeyPermissions?: ApiKeyEndpointPermissionUncheckedUpdateManyWithoutEndpointNestedInput
  }

  export type ProjectCreateManyOwnerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoints?: ProjectEndpointUpdateManyWithoutProjectNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutProjectNestedInput
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionUpdateManyWithoutProjectNestedInput
    usageLogs?: UsageLogUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoints?: ProjectEndpointUncheckedUpdateManyWithoutProjectNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutProjectNestedInput
    apiKeyEndpointPermissions?: ApiKeyEndpointPermissionUncheckedUpdateManyWithoutProjectNestedInput
    usageLogs?: UsageLogUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEndpointCreateManyProjectInput = {
    id?: string
    method: $Enums.EndpointMethod
    path: string
    routeShape: string
    upstreamUrl: string
    status?: $Enums.EndpointStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyCreateManyProjectInput = {
    id?: string
    name: string
    prefix: string
    keyHash: string
    status?: $Enums.ApiKeyStatus
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyEndpointPermissionCreateManyProjectInput = {
    id?: string
    apiKeyId: string
    endpointId: string
    createdAt?: Date | string
  }

  export type UsageLogCreateManyProjectInput = {
    id?: string
    apiKeyId?: string | null
    endpointId?: string | null
    requestMethod: $Enums.EndpointMethod
    requestPath: string
    queryString?: string | null
    outcome: $Enums.UsageLogOutcome
    gatewayStatusCode: number
    upstreamStatusCode?: number | null
    errorCode?: string | null
    durationMs: number
    clientIp?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ProjectEndpointUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    path?: StringFieldUpdateOperationsInput | string
    routeShape?: StringFieldUpdateOperationsInput | string
    upstreamUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumEndpointStatusFieldUpdateOperationsInput | $Enums.EndpointStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeyPermissions?: ApiKeyEndpointPermissionUpdateManyWithoutEndpointNestedInput
    usageLogs?: UsageLogUpdateManyWithoutEndpointNestedInput
  }

  export type ProjectEndpointUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    path?: StringFieldUpdateOperationsInput | string
    routeShape?: StringFieldUpdateOperationsInput | string
    upstreamUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumEndpointStatusFieldUpdateOperationsInput | $Enums.EndpointStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeyPermissions?: ApiKeyEndpointPermissionUncheckedUpdateManyWithoutEndpointNestedInput
    usageLogs?: UsageLogUncheckedUpdateManyWithoutEndpointNestedInput
  }

  export type ProjectEndpointUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    path?: StringFieldUpdateOperationsInput | string
    routeShape?: StringFieldUpdateOperationsInput | string
    upstreamUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumEndpointStatusFieldUpdateOperationsInput | $Enums.EndpointStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: ApiKeyEndpointPermissionUpdateManyWithoutApiKeyNestedInput
    usageLogs?: UsageLogUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: ApiKeyEndpointPermissionUncheckedUpdateManyWithoutApiKeyNestedInput
    usageLogs?: UsageLogUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumApiKeyStatusFieldUpdateOperationsInput | $Enums.ApiKeyStatus
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyEndpointPermissionUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: ApiKeyUpdateOneRequiredWithoutPermissionsNestedInput
    endpoint?: ProjectEndpointUpdateOneRequiredWithoutApiKeyPermissionsNestedInput
  }

  export type ApiKeyEndpointPermissionUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    endpointId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyEndpointPermissionUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    endpointId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageLogUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestMethod?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    requestPath?: StringFieldUpdateOperationsInput | string
    queryString?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: EnumUsageLogOutcomeFieldUpdateOperationsInput | $Enums.UsageLogOutcome
    gatewayStatusCode?: IntFieldUpdateOperationsInput | number
    upstreamStatusCode?: NullableIntFieldUpdateOperationsInput | number | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: ApiKeyUpdateOneWithoutUsageLogsNestedInput
    endpoint?: ProjectEndpointUpdateOneWithoutUsageLogsNestedInput
  }

  export type UsageLogUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
    endpointId?: NullableStringFieldUpdateOperationsInput | string | null
    requestMethod?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    requestPath?: StringFieldUpdateOperationsInput | string
    queryString?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: EnumUsageLogOutcomeFieldUpdateOperationsInput | $Enums.UsageLogOutcome
    gatewayStatusCode?: IntFieldUpdateOperationsInput | number
    upstreamStatusCode?: NullableIntFieldUpdateOperationsInput | number | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageLogUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
    endpointId?: NullableStringFieldUpdateOperationsInput | string | null
    requestMethod?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    requestPath?: StringFieldUpdateOperationsInput | string
    queryString?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: EnumUsageLogOutcomeFieldUpdateOperationsInput | $Enums.UsageLogOutcome
    gatewayStatusCode?: IntFieldUpdateOperationsInput | number
    upstreamStatusCode?: NullableIntFieldUpdateOperationsInput | number | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyEndpointPermissionCreateManyEndpointInput = {
    id?: string
    apiKeyId: string
    projectId: string
    createdAt?: Date | string
  }

  export type UsageLogCreateManyEndpointInput = {
    id?: string
    projectId?: string | null
    apiKeyId?: string | null
    requestMethod: $Enums.EndpointMethod
    requestPath: string
    queryString?: string | null
    outcome: $Enums.UsageLogOutcome
    gatewayStatusCode: number
    upstreamStatusCode?: number | null
    errorCode?: string | null
    durationMs: number
    clientIp?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ApiKeyEndpointPermissionUpdateWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: ApiKeyUpdateOneRequiredWithoutPermissionsNestedInput
    project?: ProjectUpdateOneRequiredWithoutApiKeyEndpointPermissionsNestedInput
  }

  export type ApiKeyEndpointPermissionUncheckedUpdateWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyEndpointPermissionUncheckedUpdateManyWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageLogUpdateWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestMethod?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    requestPath?: StringFieldUpdateOperationsInput | string
    queryString?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: EnumUsageLogOutcomeFieldUpdateOperationsInput | $Enums.UsageLogOutcome
    gatewayStatusCode?: IntFieldUpdateOperationsInput | number
    upstreamStatusCode?: NullableIntFieldUpdateOperationsInput | number | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneWithoutUsageLogsNestedInput
    apiKey?: ApiKeyUpdateOneWithoutUsageLogsNestedInput
  }

  export type UsageLogUncheckedUpdateWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
    requestMethod?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    requestPath?: StringFieldUpdateOperationsInput | string
    queryString?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: EnumUsageLogOutcomeFieldUpdateOperationsInput | $Enums.UsageLogOutcome
    gatewayStatusCode?: IntFieldUpdateOperationsInput | number
    upstreamStatusCode?: NullableIntFieldUpdateOperationsInput | number | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageLogUncheckedUpdateManyWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
    requestMethod?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    requestPath?: StringFieldUpdateOperationsInput | string
    queryString?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: EnumUsageLogOutcomeFieldUpdateOperationsInput | $Enums.UsageLogOutcome
    gatewayStatusCode?: IntFieldUpdateOperationsInput | number
    upstreamStatusCode?: NullableIntFieldUpdateOperationsInput | number | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyEndpointPermissionCreateManyApiKeyInput = {
    id?: string
    projectId: string
    endpointId: string
    createdAt?: Date | string
  }

  export type UsageLogCreateManyApiKeyInput = {
    id?: string
    projectId?: string | null
    endpointId?: string | null
    requestMethod: $Enums.EndpointMethod
    requestPath: string
    queryString?: string | null
    outcome: $Enums.UsageLogOutcome
    gatewayStatusCode: number
    upstreamStatusCode?: number | null
    errorCode?: string | null
    durationMs: number
    clientIp?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ApiKeyEndpointPermissionUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutApiKeyEndpointPermissionsNestedInput
    endpoint?: ProjectEndpointUpdateOneRequiredWithoutApiKeyPermissionsNestedInput
  }

  export type ApiKeyEndpointPermissionUncheckedUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    endpointId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyEndpointPermissionUncheckedUpdateManyWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    endpointId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageLogUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestMethod?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    requestPath?: StringFieldUpdateOperationsInput | string
    queryString?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: EnumUsageLogOutcomeFieldUpdateOperationsInput | $Enums.UsageLogOutcome
    gatewayStatusCode?: IntFieldUpdateOperationsInput | number
    upstreamStatusCode?: NullableIntFieldUpdateOperationsInput | number | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneWithoutUsageLogsNestedInput
    endpoint?: ProjectEndpointUpdateOneWithoutUsageLogsNestedInput
  }

  export type UsageLogUncheckedUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    endpointId?: NullableStringFieldUpdateOperationsInput | string | null
    requestMethod?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    requestPath?: StringFieldUpdateOperationsInput | string
    queryString?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: EnumUsageLogOutcomeFieldUpdateOperationsInput | $Enums.UsageLogOutcome
    gatewayStatusCode?: IntFieldUpdateOperationsInput | number
    upstreamStatusCode?: NullableIntFieldUpdateOperationsInput | number | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageLogUncheckedUpdateManyWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    endpointId?: NullableStringFieldUpdateOperationsInput | string | null
    requestMethod?: EnumEndpointMethodFieldUpdateOperationsInput | $Enums.EndpointMethod
    requestPath?: StringFieldUpdateOperationsInput | string
    queryString?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: EnumUsageLogOutcomeFieldUpdateOperationsInput | $Enums.UsageLogOutcome
    gatewayStatusCode?: IntFieldUpdateOperationsInput | number
    upstreamStatusCode?: NullableIntFieldUpdateOperationsInput | number | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}