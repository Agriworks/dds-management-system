
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model roles
 * 
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model user_roles_mapping
 * 
 */
export type user_roles_mapping = $Result.DefaultSelection<Prisma.$user_roles_mappingPayload>
/**
 * Model mandals
 * 
 */
export type mandals = $Result.DefaultSelection<Prisma.$mandalsPayload>
/**
 * Model members
 * 
 */
export type members = $Result.DefaultSelection<Prisma.$membersPayload>
/**
 * Model transactions
 * 
 */
export type transactions = $Result.DefaultSelection<Prisma.$transactionsPayload>
/**
 * Model villages
 * 
 */
export type villages = $Result.DefaultSelection<Prisma.$villagesPayload>
/**
 * Model transaction_types
 * 
 */
export type transaction_types = $Result.DefaultSelection<Prisma.$transaction_typesPayload>
/**
 * Model endpointaccess
 * 
 */
export type endpointaccess = $Result.DefaultSelection<Prisma.$endpointaccessPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const fund_type_enum: {
  DDS_FUNDS: 'DDS_FUNDS',
  PROJECT_FUNDS: 'PROJECT_FUNDS'
};

export type fund_type_enum = (typeof fund_type_enum)[keyof typeof fund_type_enum]


export const loan_type_enum: {
  LIVESTOCK: 'LIVESTOCK',
  INDIVIDUAL: 'INDIVIDUAL',
  LAAGODI: 'LAAGODI'
};

export type loan_type_enum = (typeof loan_type_enum)[keyof typeof loan_type_enum]


export const transaction_type_enum: {
  DEPOSIT: 'DEPOSIT',
  WITHDRAWL: 'WITHDRAWL',
  LOAN: 'LOAN',
  PAYBACK: 'PAYBACK'
};

export type transaction_type_enum = (typeof transaction_type_enum)[keyof typeof transaction_type_enum]

}

export type fund_type_enum = $Enums.fund_type_enum

export const fund_type_enum: typeof $Enums.fund_type_enum

export type loan_type_enum = $Enums.loan_type_enum

export const loan_type_enum: typeof $Enums.loan_type_enum

export type transaction_type_enum = $Enums.transaction_type_enum

export const transaction_type_enum: typeof $Enums.transaction_type_enum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * const users = await prisma.users.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_roles_mapping`: Exposes CRUD operations for the **user_roles_mapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_roles_mappings
    * const user_roles_mappings = await prisma.user_roles_mapping.findMany()
    * ```
    */
  get user_roles_mapping(): Prisma.user_roles_mappingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mandals`: Exposes CRUD operations for the **mandals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mandals
    * const mandals = await prisma.mandals.findMany()
    * ```
    */
  get mandals(): Prisma.mandalsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.members`: Exposes CRUD operations for the **members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.members.findMany()
    * ```
    */
  get members(): Prisma.membersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.transactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.villages`: Exposes CRUD operations for the **villages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Villages
    * const villages = await prisma.villages.findMany()
    * ```
    */
  get villages(): Prisma.villagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction_types`: Exposes CRUD operations for the **transaction_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaction_types
    * const transaction_types = await prisma.transaction_types.findMany()
    * ```
    */
  get transaction_types(): Prisma.transaction_typesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endpointaccess`: Exposes CRUD operations for the **endpointaccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Endpointaccesses
    * const endpointaccesses = await prisma.endpointaccess.findMany()
    * ```
    */
  get endpointaccess(): Prisma.endpointaccessDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    users: 'users',
    roles: 'roles',
    user_roles_mapping: 'user_roles_mapping',
    mandals: 'mandals',
    members: 'members',
    transactions: 'transactions',
    villages: 'villages',
    transaction_types: 'transaction_types',
    endpointaccess: 'endpointaccess'
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
      modelProps: "users" | "roles" | "user_roles_mapping" | "mandals" | "members" | "transactions" | "villages" | "transaction_types" | "endpointaccess"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      user_roles_mapping: {
        payload: Prisma.$user_roles_mappingPayload<ExtArgs>
        fields: Prisma.user_roles_mappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_roles_mappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_mappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_roles_mappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_mappingPayload>
          }
          findFirst: {
            args: Prisma.user_roles_mappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_mappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_roles_mappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_mappingPayload>
          }
          findMany: {
            args: Prisma.user_roles_mappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_mappingPayload>[]
          }
          create: {
            args: Prisma.user_roles_mappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_mappingPayload>
          }
          createMany: {
            args: Prisma.user_roles_mappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_roles_mappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_mappingPayload>[]
          }
          delete: {
            args: Prisma.user_roles_mappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_mappingPayload>
          }
          update: {
            args: Prisma.user_roles_mappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_mappingPayload>
          }
          deleteMany: {
            args: Prisma.user_roles_mappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_roles_mappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_roles_mappingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_mappingPayload>[]
          }
          upsert: {
            args: Prisma.user_roles_mappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_mappingPayload>
          }
          aggregate: {
            args: Prisma.User_roles_mappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_roles_mapping>
          }
          groupBy: {
            args: Prisma.user_roles_mappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_roles_mappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_roles_mappingCountArgs<ExtArgs>
            result: $Utils.Optional<User_roles_mappingCountAggregateOutputType> | number
          }
        }
      }
      mandals: {
        payload: Prisma.$mandalsPayload<ExtArgs>
        fields: Prisma.mandalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mandalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mandalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mandalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mandalsPayload>
          }
          findFirst: {
            args: Prisma.mandalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mandalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mandalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mandalsPayload>
          }
          findMany: {
            args: Prisma.mandalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mandalsPayload>[]
          }
          create: {
            args: Prisma.mandalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mandalsPayload>
          }
          createMany: {
            args: Prisma.mandalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mandalsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mandalsPayload>[]
          }
          delete: {
            args: Prisma.mandalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mandalsPayload>
          }
          update: {
            args: Prisma.mandalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mandalsPayload>
          }
          deleteMany: {
            args: Prisma.mandalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mandalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mandalsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mandalsPayload>[]
          }
          upsert: {
            args: Prisma.mandalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mandalsPayload>
          }
          aggregate: {
            args: Prisma.MandalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMandals>
          }
          groupBy: {
            args: Prisma.mandalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MandalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.mandalsCountArgs<ExtArgs>
            result: $Utils.Optional<MandalsCountAggregateOutputType> | number
          }
        }
      }
      members: {
        payload: Prisma.$membersPayload<ExtArgs>
        fields: Prisma.membersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.membersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.membersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>
          }
          findFirst: {
            args: Prisma.membersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.membersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>
          }
          findMany: {
            args: Prisma.membersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>[]
          }
          create: {
            args: Prisma.membersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>
          }
          createMany: {
            args: Prisma.membersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.membersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>[]
          }
          delete: {
            args: Prisma.membersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>
          }
          update: {
            args: Prisma.membersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>
          }
          deleteMany: {
            args: Prisma.membersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.membersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.membersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>[]
          }
          upsert: {
            args: Prisma.membersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>
          }
          aggregate: {
            args: Prisma.MembersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembers>
          }
          groupBy: {
            args: Prisma.membersGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.membersCountArgs<ExtArgs>
            result: $Utils.Optional<MembersCountAggregateOutputType> | number
          }
        }
      }
      transactions: {
        payload: Prisma.$transactionsPayload<ExtArgs>
        fields: Prisma.transactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findFirst: {
            args: Prisma.transactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findMany: {
            args: Prisma.transactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          create: {
            args: Prisma.transactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          createMany: {
            args: Prisma.transactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          delete: {
            args: Prisma.transactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          update: {
            args: Prisma.transactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          deleteMany: {
            args: Prisma.transactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          upsert: {
            args: Prisma.transactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.transactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
      villages: {
        payload: Prisma.$villagesPayload<ExtArgs>
        fields: Prisma.villagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.villagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$villagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.villagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$villagesPayload>
          }
          findFirst: {
            args: Prisma.villagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$villagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.villagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$villagesPayload>
          }
          findMany: {
            args: Prisma.villagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$villagesPayload>[]
          }
          create: {
            args: Prisma.villagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$villagesPayload>
          }
          createMany: {
            args: Prisma.villagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.villagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$villagesPayload>[]
          }
          delete: {
            args: Prisma.villagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$villagesPayload>
          }
          update: {
            args: Prisma.villagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$villagesPayload>
          }
          deleteMany: {
            args: Prisma.villagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.villagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.villagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$villagesPayload>[]
          }
          upsert: {
            args: Prisma.villagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$villagesPayload>
          }
          aggregate: {
            args: Prisma.VillagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVillages>
          }
          groupBy: {
            args: Prisma.villagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VillagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.villagesCountArgs<ExtArgs>
            result: $Utils.Optional<VillagesCountAggregateOutputType> | number
          }
        }
      }
      transaction_types: {
        payload: Prisma.$transaction_typesPayload<ExtArgs>
        fields: Prisma.transaction_typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaction_typesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaction_typesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_typesPayload>
          }
          findFirst: {
            args: Prisma.transaction_typesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaction_typesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_typesPayload>
          }
          findMany: {
            args: Prisma.transaction_typesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_typesPayload>[]
          }
          create: {
            args: Prisma.transaction_typesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_typesPayload>
          }
          createMany: {
            args: Prisma.transaction_typesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transaction_typesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_typesPayload>[]
          }
          delete: {
            args: Prisma.transaction_typesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_typesPayload>
          }
          update: {
            args: Prisma.transaction_typesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_typesPayload>
          }
          deleteMany: {
            args: Prisma.transaction_typesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transaction_typesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transaction_typesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_typesPayload>[]
          }
          upsert: {
            args: Prisma.transaction_typesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_typesPayload>
          }
          aggregate: {
            args: Prisma.Transaction_typesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction_types>
          }
          groupBy: {
            args: Prisma.transaction_typesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Transaction_typesGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaction_typesCountArgs<ExtArgs>
            result: $Utils.Optional<Transaction_typesCountAggregateOutputType> | number
          }
        }
      }
      endpointaccess: {
        payload: Prisma.$endpointaccessPayload<ExtArgs>
        fields: Prisma.endpointaccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.endpointaccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointaccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.endpointaccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointaccessPayload>
          }
          findFirst: {
            args: Prisma.endpointaccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointaccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.endpointaccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointaccessPayload>
          }
          findMany: {
            args: Prisma.endpointaccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointaccessPayload>[]
          }
          create: {
            args: Prisma.endpointaccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointaccessPayload>
          }
          createMany: {
            args: Prisma.endpointaccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.endpointaccessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointaccessPayload>[]
          }
          delete: {
            args: Prisma.endpointaccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointaccessPayload>
          }
          update: {
            args: Prisma.endpointaccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointaccessPayload>
          }
          deleteMany: {
            args: Prisma.endpointaccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.endpointaccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.endpointaccessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointaccessPayload>[]
          }
          upsert: {
            args: Prisma.endpointaccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endpointaccessPayload>
          }
          aggregate: {
            args: Prisma.EndpointaccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndpointaccess>
          }
          groupBy: {
            args: Prisma.endpointaccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<EndpointaccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.endpointaccessCountArgs<ExtArgs>
            result: $Utils.Optional<EndpointaccessCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    users?: usersOmit
    roles?: rolesOmit
    user_roles_mapping?: user_roles_mappingOmit
    mandals?: mandalsOmit
    members?: membersOmit
    transactions?: transactionsOmit
    villages?: villagesOmit
    transaction_types?: transaction_typesOmit
    endpointaccess?: endpointaccessOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    transactions: number
    assigned_roles: number
    user_roles: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | UsersCountOutputTypeCountTransactionsArgs
    assigned_roles?: boolean | UsersCountOutputTypeCountAssigned_rolesArgs
    user_roles?: boolean | UsersCountOutputTypeCountUser_rolesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAssigned_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roles_mappingWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roles_mappingWhereInput
  }


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    user_roles: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_roles?: boolean | RolesCountOutputTypeCountUser_rolesArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUser_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roles_mappingWhereInput
  }


  /**
   * Count Type MandalsCountOutputType
   */

  export type MandalsCountOutputType = {
    villages: number
  }

  export type MandalsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villages?: boolean | MandalsCountOutputTypeCountVillagesArgs
  }

  // Custom InputTypes
  /**
   * MandalsCountOutputType without action
   */
  export type MandalsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MandalsCountOutputType
     */
    select?: MandalsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MandalsCountOutputType without action
   */
  export type MandalsCountOutputTypeCountVillagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: villagesWhereInput
  }


  /**
   * Count Type MembersCountOutputType
   */

  export type MembersCountOutputType = {
    transactions: number
  }

  export type MembersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | MembersCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * MembersCountOutputType without action
   */
  export type MembersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembersCountOutputType
     */
    select?: MembersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MembersCountOutputType without action
   */
  export type MembersCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }


  /**
   * Count Type VillagesCountOutputType
   */

  export type VillagesCountOutputType = {
    members: number
  }

  export type VillagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | VillagesCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * VillagesCountOutputType without action
   */
  export type VillagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillagesCountOutputType
     */
    select?: VillagesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VillagesCountOutputType without action
   */
  export type VillagesCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: membersWhereInput
  }


  /**
   * Count Type Transaction_typesCountOutputType
   */

  export type Transaction_typesCountOutputType = {
    children: number
    transactions: number
  }

  export type Transaction_typesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | Transaction_typesCountOutputTypeCountChildrenArgs
    transactions?: boolean | Transaction_typesCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * Transaction_typesCountOutputType without action
   */
  export type Transaction_typesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction_typesCountOutputType
     */
    select?: Transaction_typesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Transaction_typesCountOutputType without action
   */
  export type Transaction_typesCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_typesWhereInput
  }

  /**
   * Transaction_typesCountOutputType without action
   */
  export type Transaction_typesCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    external_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    external_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    external_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    external_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    external_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    external_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string
    email: string
    external_id: string
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    external_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    transactions?: boolean | users$transactionsArgs<ExtArgs>
    assigned_roles?: boolean | users$assigned_rolesArgs<ExtArgs>
    user_roles?: boolean | users$user_rolesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    external_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    external_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    external_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "external_id" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | users$transactionsArgs<ExtArgs>
    assigned_roles?: boolean | users$assigned_rolesArgs<ExtArgs>
    user_roles?: boolean | users$user_rolesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
      assigned_roles: Prisma.$user_roles_mappingPayload<ExtArgs>[]
      user_roles: Prisma.$user_roles_mappingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      external_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends users$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, users$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assigned_roles<T extends users$assigned_rolesArgs<ExtArgs> = {}>(args?: Subset<T, users$assigned_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_roles_mappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_roles<T extends users$user_rolesArgs<ExtArgs> = {}>(args?: Subset<T, users$user_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_roles_mappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly external_id: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.transactions
   */
  export type users$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * users.assigned_roles
   */
  export type users$assigned_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_mapping
     */
    select?: user_roles_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_mapping
     */
    omit?: user_roles_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_mappingInclude<ExtArgs> | null
    where?: user_roles_mappingWhereInput
    orderBy?: user_roles_mappingOrderByWithRelationInput | user_roles_mappingOrderByWithRelationInput[]
    cursor?: user_roles_mappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_roles_mappingScalarFieldEnum | User_roles_mappingScalarFieldEnum[]
  }

  /**
   * users.user_roles
   */
  export type users$user_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_mapping
     */
    select?: user_roles_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_mapping
     */
    omit?: user_roles_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_mappingInclude<ExtArgs> | null
    where?: user_roles_mappingWhereInput
    orderBy?: user_roles_mappingOrderByWithRelationInput | user_roles_mappingOrderByWithRelationInput[]
    cursor?: user_roles_mappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_roles_mappingScalarFieldEnum | User_roles_mappingScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: string
    name: string
    description: string | null
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_roles?: boolean | roles$user_rolesArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["roles"]>
  export type rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_roles?: boolean | roles$user_rolesArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type rolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {
      user_roles: Prisma.$user_roles_mappingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolesFindUniqueArgs>(args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolesFindFirstArgs>(args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rolesFindManyArgs>(args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends rolesCreateArgs>(args: SelectSubset<T, rolesCreateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolesCreateManyArgs>(args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {rolesCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rolesCreateManyAndReturnArgs>(args?: SelectSubset<T, rolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends rolesDeleteArgs>(args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolesUpdateArgs>(args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolesDeleteManyArgs>(args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolesUpdateManyArgs>(args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {rolesUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.updateManyAndReturn({
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
    updateManyAndReturn<T extends rolesUpdateManyAndReturnArgs>(args: SelectSubset<T, rolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends rolesUpsertArgs>(args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
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
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_roles<T extends roles$user_rolesArgs<ExtArgs> = {}>(args?: Subset<T, roles$user_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_roles_mappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the roles model
   */
  interface rolesFieldRefs {
    readonly id: FieldRef<"roles", 'String'>
    readonly name: FieldRef<"roles", 'String'>
    readonly description: FieldRef<"roles", 'String'>
    readonly is_active: FieldRef<"roles", 'Boolean'>
    readonly created_at: FieldRef<"roles", 'DateTime'>
    readonly updated_at: FieldRef<"roles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }

  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles createManyAndReturn
   */
  export type rolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles updateManyAndReturn
   */
  export type rolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }

  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * roles.user_roles
   */
  export type roles$user_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_mapping
     */
    select?: user_roles_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_mapping
     */
    omit?: user_roles_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_mappingInclude<ExtArgs> | null
    where?: user_roles_mappingWhereInput
    orderBy?: user_roles_mappingOrderByWithRelationInput | user_roles_mappingOrderByWithRelationInput[]
    cursor?: user_roles_mappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_roles_mappingScalarFieldEnum | User_roles_mappingScalarFieldEnum[]
  }

  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
  }


  /**
   * Model user_roles_mapping
   */

  export type AggregateUser_roles_mapping = {
    _count: User_roles_mappingCountAggregateOutputType | null
    _min: User_roles_mappingMinAggregateOutputType | null
    _max: User_roles_mappingMaxAggregateOutputType | null
  }

  export type User_roles_mappingMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    role_id: string | null
    assigned_by: string | null
    assigned_at: Date | null
    is_active: boolean | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_roles_mappingMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    role_id: string | null
    assigned_by: string | null
    assigned_at: Date | null
    is_active: boolean | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_roles_mappingCountAggregateOutputType = {
    id: number
    user_id: number
    role_id: number
    assigned_by: number
    assigned_at: number
    is_active: number
    expires_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type User_roles_mappingMinAggregateInputType = {
    id?: true
    user_id?: true
    role_id?: true
    assigned_by?: true
    assigned_at?: true
    is_active?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type User_roles_mappingMaxAggregateInputType = {
    id?: true
    user_id?: true
    role_id?: true
    assigned_by?: true
    assigned_at?: true
    is_active?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type User_roles_mappingCountAggregateInputType = {
    id?: true
    user_id?: true
    role_id?: true
    assigned_by?: true
    assigned_at?: true
    is_active?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type User_roles_mappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_roles_mapping to aggregate.
     */
    where?: user_roles_mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles_mappings to fetch.
     */
    orderBy?: user_roles_mappingOrderByWithRelationInput | user_roles_mappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_roles_mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles_mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles_mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_roles_mappings
    **/
    _count?: true | User_roles_mappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_roles_mappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_roles_mappingMaxAggregateInputType
  }

  export type GetUser_roles_mappingAggregateType<T extends User_roles_mappingAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_roles_mapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_roles_mapping[P]>
      : GetScalarType<T[P], AggregateUser_roles_mapping[P]>
  }




  export type user_roles_mappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roles_mappingWhereInput
    orderBy?: user_roles_mappingOrderByWithAggregationInput | user_roles_mappingOrderByWithAggregationInput[]
    by: User_roles_mappingScalarFieldEnum[] | User_roles_mappingScalarFieldEnum
    having?: user_roles_mappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_roles_mappingCountAggregateInputType | true
    _min?: User_roles_mappingMinAggregateInputType
    _max?: User_roles_mappingMaxAggregateInputType
  }

  export type User_roles_mappingGroupByOutputType = {
    id: string
    user_id: string
    role_id: string
    assigned_by: string | null
    assigned_at: Date
    is_active: boolean
    expires_at: Date | null
    created_at: Date
    updated_at: Date
    _count: User_roles_mappingCountAggregateOutputType | null
    _min: User_roles_mappingMinAggregateOutputType | null
    _max: User_roles_mappingMaxAggregateOutputType | null
  }

  type GetUser_roles_mappingGroupByPayload<T extends user_roles_mappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_roles_mappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_roles_mappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_roles_mappingGroupByOutputType[P]>
            : GetScalarType<T[P], User_roles_mappingGroupByOutputType[P]>
        }
      >
    >


  export type user_roles_mappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    role_id?: boolean
    assigned_by?: boolean
    assigned_at?: boolean
    is_active?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    assigned_by_user?: boolean | user_roles_mapping$assigned_by_userArgs<ExtArgs>
    role?: boolean | rolesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_roles_mapping"]>

  export type user_roles_mappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    role_id?: boolean
    assigned_by?: boolean
    assigned_at?: boolean
    is_active?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    assigned_by_user?: boolean | user_roles_mapping$assigned_by_userArgs<ExtArgs>
    role?: boolean | rolesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_roles_mapping"]>

  export type user_roles_mappingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    role_id?: boolean
    assigned_by?: boolean
    assigned_at?: boolean
    is_active?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    assigned_by_user?: boolean | user_roles_mapping$assigned_by_userArgs<ExtArgs>
    role?: boolean | rolesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_roles_mapping"]>

  export type user_roles_mappingSelectScalar = {
    id?: boolean
    user_id?: boolean
    role_id?: boolean
    assigned_by?: boolean
    assigned_at?: boolean
    is_active?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type user_roles_mappingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "role_id" | "assigned_by" | "assigned_at" | "is_active" | "expires_at" | "created_at" | "updated_at", ExtArgs["result"]["user_roles_mapping"]>
  export type user_roles_mappingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assigned_by_user?: boolean | user_roles_mapping$assigned_by_userArgs<ExtArgs>
    role?: boolean | rolesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_roles_mappingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assigned_by_user?: boolean | user_roles_mapping$assigned_by_userArgs<ExtArgs>
    role?: boolean | rolesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_roles_mappingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assigned_by_user?: boolean | user_roles_mapping$assigned_by_userArgs<ExtArgs>
    role?: boolean | rolesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_roles_mappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_roles_mapping"
    objects: {
      assigned_by_user: Prisma.$usersPayload<ExtArgs> | null
      role: Prisma.$rolesPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      role_id: string
      assigned_by: string | null
      assigned_at: Date
      is_active: boolean
      expires_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user_roles_mapping"]>
    composites: {}
  }

  type user_roles_mappingGetPayload<S extends boolean | null | undefined | user_roles_mappingDefaultArgs> = $Result.GetResult<Prisma.$user_roles_mappingPayload, S>

  type user_roles_mappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_roles_mappingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_roles_mappingCountAggregateInputType | true
    }

  export interface user_roles_mappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_roles_mapping'], meta: { name: 'user_roles_mapping' } }
    /**
     * Find zero or one User_roles_mapping that matches the filter.
     * @param {user_roles_mappingFindUniqueArgs} args - Arguments to find a User_roles_mapping
     * @example
     * // Get one User_roles_mapping
     * const user_roles_mapping = await prisma.user_roles_mapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_roles_mappingFindUniqueArgs>(args: SelectSubset<T, user_roles_mappingFindUniqueArgs<ExtArgs>>): Prisma__user_roles_mappingClient<$Result.GetResult<Prisma.$user_roles_mappingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_roles_mapping that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_roles_mappingFindUniqueOrThrowArgs} args - Arguments to find a User_roles_mapping
     * @example
     * // Get one User_roles_mapping
     * const user_roles_mapping = await prisma.user_roles_mapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_roles_mappingFindUniqueOrThrowArgs>(args: SelectSubset<T, user_roles_mappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_roles_mappingClient<$Result.GetResult<Prisma.$user_roles_mappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_roles_mapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roles_mappingFindFirstArgs} args - Arguments to find a User_roles_mapping
     * @example
     * // Get one User_roles_mapping
     * const user_roles_mapping = await prisma.user_roles_mapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_roles_mappingFindFirstArgs>(args?: SelectSubset<T, user_roles_mappingFindFirstArgs<ExtArgs>>): Prisma__user_roles_mappingClient<$Result.GetResult<Prisma.$user_roles_mappingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_roles_mapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roles_mappingFindFirstOrThrowArgs} args - Arguments to find a User_roles_mapping
     * @example
     * // Get one User_roles_mapping
     * const user_roles_mapping = await prisma.user_roles_mapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_roles_mappingFindFirstOrThrowArgs>(args?: SelectSubset<T, user_roles_mappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_roles_mappingClient<$Result.GetResult<Prisma.$user_roles_mappingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_roles_mappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roles_mappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_roles_mappings
     * const user_roles_mappings = await prisma.user_roles_mapping.findMany()
     * 
     * // Get first 10 User_roles_mappings
     * const user_roles_mappings = await prisma.user_roles_mapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_roles_mappingWithIdOnly = await prisma.user_roles_mapping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_roles_mappingFindManyArgs>(args?: SelectSubset<T, user_roles_mappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_roles_mappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_roles_mapping.
     * @param {user_roles_mappingCreateArgs} args - Arguments to create a User_roles_mapping.
     * @example
     * // Create one User_roles_mapping
     * const User_roles_mapping = await prisma.user_roles_mapping.create({
     *   data: {
     *     // ... data to create a User_roles_mapping
     *   }
     * })
     * 
     */
    create<T extends user_roles_mappingCreateArgs>(args: SelectSubset<T, user_roles_mappingCreateArgs<ExtArgs>>): Prisma__user_roles_mappingClient<$Result.GetResult<Prisma.$user_roles_mappingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_roles_mappings.
     * @param {user_roles_mappingCreateManyArgs} args - Arguments to create many User_roles_mappings.
     * @example
     * // Create many User_roles_mappings
     * const user_roles_mapping = await prisma.user_roles_mapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_roles_mappingCreateManyArgs>(args?: SelectSubset<T, user_roles_mappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_roles_mappings and returns the data saved in the database.
     * @param {user_roles_mappingCreateManyAndReturnArgs} args - Arguments to create many User_roles_mappings.
     * @example
     * // Create many User_roles_mappings
     * const user_roles_mapping = await prisma.user_roles_mapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_roles_mappings and only return the `id`
     * const user_roles_mappingWithIdOnly = await prisma.user_roles_mapping.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_roles_mappingCreateManyAndReturnArgs>(args?: SelectSubset<T, user_roles_mappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_roles_mappingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_roles_mapping.
     * @param {user_roles_mappingDeleteArgs} args - Arguments to delete one User_roles_mapping.
     * @example
     * // Delete one User_roles_mapping
     * const User_roles_mapping = await prisma.user_roles_mapping.delete({
     *   where: {
     *     // ... filter to delete one User_roles_mapping
     *   }
     * })
     * 
     */
    delete<T extends user_roles_mappingDeleteArgs>(args: SelectSubset<T, user_roles_mappingDeleteArgs<ExtArgs>>): Prisma__user_roles_mappingClient<$Result.GetResult<Prisma.$user_roles_mappingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_roles_mapping.
     * @param {user_roles_mappingUpdateArgs} args - Arguments to update one User_roles_mapping.
     * @example
     * // Update one User_roles_mapping
     * const user_roles_mapping = await prisma.user_roles_mapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_roles_mappingUpdateArgs>(args: SelectSubset<T, user_roles_mappingUpdateArgs<ExtArgs>>): Prisma__user_roles_mappingClient<$Result.GetResult<Prisma.$user_roles_mappingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_roles_mappings.
     * @param {user_roles_mappingDeleteManyArgs} args - Arguments to filter User_roles_mappings to delete.
     * @example
     * // Delete a few User_roles_mappings
     * const { count } = await prisma.user_roles_mapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_roles_mappingDeleteManyArgs>(args?: SelectSubset<T, user_roles_mappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_roles_mappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roles_mappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_roles_mappings
     * const user_roles_mapping = await prisma.user_roles_mapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_roles_mappingUpdateManyArgs>(args: SelectSubset<T, user_roles_mappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_roles_mappings and returns the data updated in the database.
     * @param {user_roles_mappingUpdateManyAndReturnArgs} args - Arguments to update many User_roles_mappings.
     * @example
     * // Update many User_roles_mappings
     * const user_roles_mapping = await prisma.user_roles_mapping.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_roles_mappings and only return the `id`
     * const user_roles_mappingWithIdOnly = await prisma.user_roles_mapping.updateManyAndReturn({
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
    updateManyAndReturn<T extends user_roles_mappingUpdateManyAndReturnArgs>(args: SelectSubset<T, user_roles_mappingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_roles_mappingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_roles_mapping.
     * @param {user_roles_mappingUpsertArgs} args - Arguments to update or create a User_roles_mapping.
     * @example
     * // Update or create a User_roles_mapping
     * const user_roles_mapping = await prisma.user_roles_mapping.upsert({
     *   create: {
     *     // ... data to create a User_roles_mapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_roles_mapping we want to update
     *   }
     * })
     */
    upsert<T extends user_roles_mappingUpsertArgs>(args: SelectSubset<T, user_roles_mappingUpsertArgs<ExtArgs>>): Prisma__user_roles_mappingClient<$Result.GetResult<Prisma.$user_roles_mappingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_roles_mappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roles_mappingCountArgs} args - Arguments to filter User_roles_mappings to count.
     * @example
     * // Count the number of User_roles_mappings
     * const count = await prisma.user_roles_mapping.count({
     *   where: {
     *     // ... the filter for the User_roles_mappings we want to count
     *   }
     * })
    **/
    count<T extends user_roles_mappingCountArgs>(
      args?: Subset<T, user_roles_mappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_roles_mappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_roles_mapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_roles_mappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_roles_mappingAggregateArgs>(args: Subset<T, User_roles_mappingAggregateArgs>): Prisma.PrismaPromise<GetUser_roles_mappingAggregateType<T>>

    /**
     * Group by User_roles_mapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roles_mappingGroupByArgs} args - Group by arguments.
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
      T extends user_roles_mappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_roles_mappingGroupByArgs['orderBy'] }
        : { orderBy?: user_roles_mappingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_roles_mappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_roles_mappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_roles_mapping model
   */
  readonly fields: user_roles_mappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_roles_mapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_roles_mappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assigned_by_user<T extends user_roles_mapping$assigned_by_userArgs<ExtArgs> = {}>(args?: Subset<T, user_roles_mapping$assigned_by_userArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    role<T extends rolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolesDefaultArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_roles_mapping model
   */
  interface user_roles_mappingFieldRefs {
    readonly id: FieldRef<"user_roles_mapping", 'String'>
    readonly user_id: FieldRef<"user_roles_mapping", 'String'>
    readonly role_id: FieldRef<"user_roles_mapping", 'String'>
    readonly assigned_by: FieldRef<"user_roles_mapping", 'String'>
    readonly assigned_at: FieldRef<"user_roles_mapping", 'DateTime'>
    readonly is_active: FieldRef<"user_roles_mapping", 'Boolean'>
    readonly expires_at: FieldRef<"user_roles_mapping", 'DateTime'>
    readonly created_at: FieldRef<"user_roles_mapping", 'DateTime'>
    readonly updated_at: FieldRef<"user_roles_mapping", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_roles_mapping findUnique
   */
  export type user_roles_mappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_mapping
     */
    select?: user_roles_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_mapping
     */
    omit?: user_roles_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_mappingInclude<ExtArgs> | null
    /**
     * Filter, which user_roles_mapping to fetch.
     */
    where: user_roles_mappingWhereUniqueInput
  }

  /**
   * user_roles_mapping findUniqueOrThrow
   */
  export type user_roles_mappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_mapping
     */
    select?: user_roles_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_mapping
     */
    omit?: user_roles_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_mappingInclude<ExtArgs> | null
    /**
     * Filter, which user_roles_mapping to fetch.
     */
    where: user_roles_mappingWhereUniqueInput
  }

  /**
   * user_roles_mapping findFirst
   */
  export type user_roles_mappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_mapping
     */
    select?: user_roles_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_mapping
     */
    omit?: user_roles_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_mappingInclude<ExtArgs> | null
    /**
     * Filter, which user_roles_mapping to fetch.
     */
    where?: user_roles_mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles_mappings to fetch.
     */
    orderBy?: user_roles_mappingOrderByWithRelationInput | user_roles_mappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles_mappings.
     */
    cursor?: user_roles_mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles_mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles_mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles_mappings.
     */
    distinct?: User_roles_mappingScalarFieldEnum | User_roles_mappingScalarFieldEnum[]
  }

  /**
   * user_roles_mapping findFirstOrThrow
   */
  export type user_roles_mappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_mapping
     */
    select?: user_roles_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_mapping
     */
    omit?: user_roles_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_mappingInclude<ExtArgs> | null
    /**
     * Filter, which user_roles_mapping to fetch.
     */
    where?: user_roles_mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles_mappings to fetch.
     */
    orderBy?: user_roles_mappingOrderByWithRelationInput | user_roles_mappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles_mappings.
     */
    cursor?: user_roles_mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles_mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles_mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles_mappings.
     */
    distinct?: User_roles_mappingScalarFieldEnum | User_roles_mappingScalarFieldEnum[]
  }

  /**
   * user_roles_mapping findMany
   */
  export type user_roles_mappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_mapping
     */
    select?: user_roles_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_mapping
     */
    omit?: user_roles_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_mappingInclude<ExtArgs> | null
    /**
     * Filter, which user_roles_mappings to fetch.
     */
    where?: user_roles_mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles_mappings to fetch.
     */
    orderBy?: user_roles_mappingOrderByWithRelationInput | user_roles_mappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_roles_mappings.
     */
    cursor?: user_roles_mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles_mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles_mappings.
     */
    skip?: number
    distinct?: User_roles_mappingScalarFieldEnum | User_roles_mappingScalarFieldEnum[]
  }

  /**
   * user_roles_mapping create
   */
  export type user_roles_mappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_mapping
     */
    select?: user_roles_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_mapping
     */
    omit?: user_roles_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_mappingInclude<ExtArgs> | null
    /**
     * The data needed to create a user_roles_mapping.
     */
    data: XOR<user_roles_mappingCreateInput, user_roles_mappingUncheckedCreateInput>
  }

  /**
   * user_roles_mapping createMany
   */
  export type user_roles_mappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_roles_mappings.
     */
    data: user_roles_mappingCreateManyInput | user_roles_mappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_roles_mapping createManyAndReturn
   */
  export type user_roles_mappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_mapping
     */
    select?: user_roles_mappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_mapping
     */
    omit?: user_roles_mappingOmit<ExtArgs> | null
    /**
     * The data used to create many user_roles_mappings.
     */
    data: user_roles_mappingCreateManyInput | user_roles_mappingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_mappingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_roles_mapping update
   */
  export type user_roles_mappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_mapping
     */
    select?: user_roles_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_mapping
     */
    omit?: user_roles_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_mappingInclude<ExtArgs> | null
    /**
     * The data needed to update a user_roles_mapping.
     */
    data: XOR<user_roles_mappingUpdateInput, user_roles_mappingUncheckedUpdateInput>
    /**
     * Choose, which user_roles_mapping to update.
     */
    where: user_roles_mappingWhereUniqueInput
  }

  /**
   * user_roles_mapping updateMany
   */
  export type user_roles_mappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_roles_mappings.
     */
    data: XOR<user_roles_mappingUpdateManyMutationInput, user_roles_mappingUncheckedUpdateManyInput>
    /**
     * Filter which user_roles_mappings to update
     */
    where?: user_roles_mappingWhereInput
    /**
     * Limit how many user_roles_mappings to update.
     */
    limit?: number
  }

  /**
   * user_roles_mapping updateManyAndReturn
   */
  export type user_roles_mappingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_mapping
     */
    select?: user_roles_mappingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_mapping
     */
    omit?: user_roles_mappingOmit<ExtArgs> | null
    /**
     * The data used to update user_roles_mappings.
     */
    data: XOR<user_roles_mappingUpdateManyMutationInput, user_roles_mappingUncheckedUpdateManyInput>
    /**
     * Filter which user_roles_mappings to update
     */
    where?: user_roles_mappingWhereInput
    /**
     * Limit how many user_roles_mappings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_mappingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_roles_mapping upsert
   */
  export type user_roles_mappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_mapping
     */
    select?: user_roles_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_mapping
     */
    omit?: user_roles_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_mappingInclude<ExtArgs> | null
    /**
     * The filter to search for the user_roles_mapping to update in case it exists.
     */
    where: user_roles_mappingWhereUniqueInput
    /**
     * In case the user_roles_mapping found by the `where` argument doesn't exist, create a new user_roles_mapping with this data.
     */
    create: XOR<user_roles_mappingCreateInput, user_roles_mappingUncheckedCreateInput>
    /**
     * In case the user_roles_mapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_roles_mappingUpdateInput, user_roles_mappingUncheckedUpdateInput>
  }

  /**
   * user_roles_mapping delete
   */
  export type user_roles_mappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_mapping
     */
    select?: user_roles_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_mapping
     */
    omit?: user_roles_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_mappingInclude<ExtArgs> | null
    /**
     * Filter which user_roles_mapping to delete.
     */
    where: user_roles_mappingWhereUniqueInput
  }

  /**
   * user_roles_mapping deleteMany
   */
  export type user_roles_mappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_roles_mappings to delete
     */
    where?: user_roles_mappingWhereInput
    /**
     * Limit how many user_roles_mappings to delete.
     */
    limit?: number
  }

  /**
   * user_roles_mapping.assigned_by_user
   */
  export type user_roles_mapping$assigned_by_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * user_roles_mapping without action
   */
  export type user_roles_mappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_mapping
     */
    select?: user_roles_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_mapping
     */
    omit?: user_roles_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_mappingInclude<ExtArgs> | null
  }


  /**
   * Model mandals
   */

  export type AggregateMandals = {
    _count: MandalsCountAggregateOutputType | null
    _min: MandalsMinAggregateOutputType | null
    _max: MandalsMaxAggregateOutputType | null
  }

  export type MandalsMinAggregateOutputType = {
    id: string | null
    label_english: string | null
    label_telugu: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MandalsMaxAggregateOutputType = {
    id: string | null
    label_english: string | null
    label_telugu: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MandalsCountAggregateOutputType = {
    id: number
    label_english: number
    label_telugu: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MandalsMinAggregateInputType = {
    id?: true
    label_english?: true
    label_telugu?: true
    created_at?: true
    updated_at?: true
  }

  export type MandalsMaxAggregateInputType = {
    id?: true
    label_english?: true
    label_telugu?: true
    created_at?: true
    updated_at?: true
  }

  export type MandalsCountAggregateInputType = {
    id?: true
    label_english?: true
    label_telugu?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MandalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mandals to aggregate.
     */
    where?: mandalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mandals to fetch.
     */
    orderBy?: mandalsOrderByWithRelationInput | mandalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mandalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mandals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mandals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mandals
    **/
    _count?: true | MandalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MandalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MandalsMaxAggregateInputType
  }

  export type GetMandalsAggregateType<T extends MandalsAggregateArgs> = {
        [P in keyof T & keyof AggregateMandals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMandals[P]>
      : GetScalarType<T[P], AggregateMandals[P]>
  }




  export type mandalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mandalsWhereInput
    orderBy?: mandalsOrderByWithAggregationInput | mandalsOrderByWithAggregationInput[]
    by: MandalsScalarFieldEnum[] | MandalsScalarFieldEnum
    having?: mandalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MandalsCountAggregateInputType | true
    _min?: MandalsMinAggregateInputType
    _max?: MandalsMaxAggregateInputType
  }

  export type MandalsGroupByOutputType = {
    id: string
    label_english: string
    label_telugu: string
    created_at: Date
    updated_at: Date
    _count: MandalsCountAggregateOutputType | null
    _min: MandalsMinAggregateOutputType | null
    _max: MandalsMaxAggregateOutputType | null
  }

  type GetMandalsGroupByPayload<T extends mandalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MandalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MandalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MandalsGroupByOutputType[P]>
            : GetScalarType<T[P], MandalsGroupByOutputType[P]>
        }
      >
    >


  export type mandalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label_english?: boolean
    label_telugu?: boolean
    created_at?: boolean
    updated_at?: boolean
    villages?: boolean | mandals$villagesArgs<ExtArgs>
    _count?: boolean | MandalsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mandals"]>

  export type mandalsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label_english?: boolean
    label_telugu?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["mandals"]>

  export type mandalsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label_english?: boolean
    label_telugu?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["mandals"]>

  export type mandalsSelectScalar = {
    id?: boolean
    label_english?: boolean
    label_telugu?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type mandalsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label_english" | "label_telugu" | "created_at" | "updated_at", ExtArgs["result"]["mandals"]>
  export type mandalsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villages?: boolean | mandals$villagesArgs<ExtArgs>
    _count?: boolean | MandalsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type mandalsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type mandalsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $mandalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mandals"
    objects: {
      villages: Prisma.$villagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label_english: string
      label_telugu: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["mandals"]>
    composites: {}
  }

  type mandalsGetPayload<S extends boolean | null | undefined | mandalsDefaultArgs> = $Result.GetResult<Prisma.$mandalsPayload, S>

  type mandalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mandalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MandalsCountAggregateInputType | true
    }

  export interface mandalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mandals'], meta: { name: 'mandals' } }
    /**
     * Find zero or one Mandals that matches the filter.
     * @param {mandalsFindUniqueArgs} args - Arguments to find a Mandals
     * @example
     * // Get one Mandals
     * const mandals = await prisma.mandals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mandalsFindUniqueArgs>(args: SelectSubset<T, mandalsFindUniqueArgs<ExtArgs>>): Prisma__mandalsClient<$Result.GetResult<Prisma.$mandalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mandals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mandalsFindUniqueOrThrowArgs} args - Arguments to find a Mandals
     * @example
     * // Get one Mandals
     * const mandals = await prisma.mandals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mandalsFindUniqueOrThrowArgs>(args: SelectSubset<T, mandalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mandalsClient<$Result.GetResult<Prisma.$mandalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mandals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mandalsFindFirstArgs} args - Arguments to find a Mandals
     * @example
     * // Get one Mandals
     * const mandals = await prisma.mandals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mandalsFindFirstArgs>(args?: SelectSubset<T, mandalsFindFirstArgs<ExtArgs>>): Prisma__mandalsClient<$Result.GetResult<Prisma.$mandalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mandals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mandalsFindFirstOrThrowArgs} args - Arguments to find a Mandals
     * @example
     * // Get one Mandals
     * const mandals = await prisma.mandals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mandalsFindFirstOrThrowArgs>(args?: SelectSubset<T, mandalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__mandalsClient<$Result.GetResult<Prisma.$mandalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mandals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mandalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mandals
     * const mandals = await prisma.mandals.findMany()
     * 
     * // Get first 10 Mandals
     * const mandals = await prisma.mandals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mandalsWithIdOnly = await prisma.mandals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mandalsFindManyArgs>(args?: SelectSubset<T, mandalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mandalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mandals.
     * @param {mandalsCreateArgs} args - Arguments to create a Mandals.
     * @example
     * // Create one Mandals
     * const Mandals = await prisma.mandals.create({
     *   data: {
     *     // ... data to create a Mandals
     *   }
     * })
     * 
     */
    create<T extends mandalsCreateArgs>(args: SelectSubset<T, mandalsCreateArgs<ExtArgs>>): Prisma__mandalsClient<$Result.GetResult<Prisma.$mandalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mandals.
     * @param {mandalsCreateManyArgs} args - Arguments to create many Mandals.
     * @example
     * // Create many Mandals
     * const mandals = await prisma.mandals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mandalsCreateManyArgs>(args?: SelectSubset<T, mandalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mandals and returns the data saved in the database.
     * @param {mandalsCreateManyAndReturnArgs} args - Arguments to create many Mandals.
     * @example
     * // Create many Mandals
     * const mandals = await prisma.mandals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mandals and only return the `id`
     * const mandalsWithIdOnly = await prisma.mandals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mandalsCreateManyAndReturnArgs>(args?: SelectSubset<T, mandalsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mandalsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mandals.
     * @param {mandalsDeleteArgs} args - Arguments to delete one Mandals.
     * @example
     * // Delete one Mandals
     * const Mandals = await prisma.mandals.delete({
     *   where: {
     *     // ... filter to delete one Mandals
     *   }
     * })
     * 
     */
    delete<T extends mandalsDeleteArgs>(args: SelectSubset<T, mandalsDeleteArgs<ExtArgs>>): Prisma__mandalsClient<$Result.GetResult<Prisma.$mandalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mandals.
     * @param {mandalsUpdateArgs} args - Arguments to update one Mandals.
     * @example
     * // Update one Mandals
     * const mandals = await prisma.mandals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mandalsUpdateArgs>(args: SelectSubset<T, mandalsUpdateArgs<ExtArgs>>): Prisma__mandalsClient<$Result.GetResult<Prisma.$mandalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mandals.
     * @param {mandalsDeleteManyArgs} args - Arguments to filter Mandals to delete.
     * @example
     * // Delete a few Mandals
     * const { count } = await prisma.mandals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mandalsDeleteManyArgs>(args?: SelectSubset<T, mandalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mandals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mandalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mandals
     * const mandals = await prisma.mandals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mandalsUpdateManyArgs>(args: SelectSubset<T, mandalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mandals and returns the data updated in the database.
     * @param {mandalsUpdateManyAndReturnArgs} args - Arguments to update many Mandals.
     * @example
     * // Update many Mandals
     * const mandals = await prisma.mandals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mandals and only return the `id`
     * const mandalsWithIdOnly = await prisma.mandals.updateManyAndReturn({
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
    updateManyAndReturn<T extends mandalsUpdateManyAndReturnArgs>(args: SelectSubset<T, mandalsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mandalsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mandals.
     * @param {mandalsUpsertArgs} args - Arguments to update or create a Mandals.
     * @example
     * // Update or create a Mandals
     * const mandals = await prisma.mandals.upsert({
     *   create: {
     *     // ... data to create a Mandals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mandals we want to update
     *   }
     * })
     */
    upsert<T extends mandalsUpsertArgs>(args: SelectSubset<T, mandalsUpsertArgs<ExtArgs>>): Prisma__mandalsClient<$Result.GetResult<Prisma.$mandalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mandals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mandalsCountArgs} args - Arguments to filter Mandals to count.
     * @example
     * // Count the number of Mandals
     * const count = await prisma.mandals.count({
     *   where: {
     *     // ... the filter for the Mandals we want to count
     *   }
     * })
    **/
    count<T extends mandalsCountArgs>(
      args?: Subset<T, mandalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MandalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mandals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MandalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MandalsAggregateArgs>(args: Subset<T, MandalsAggregateArgs>): Prisma.PrismaPromise<GetMandalsAggregateType<T>>

    /**
     * Group by Mandals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mandalsGroupByArgs} args - Group by arguments.
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
      T extends mandalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mandalsGroupByArgs['orderBy'] }
        : { orderBy?: mandalsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mandalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMandalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mandals model
   */
  readonly fields: mandalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mandals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mandalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    villages<T extends mandals$villagesArgs<ExtArgs> = {}>(args?: Subset<T, mandals$villagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$villagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the mandals model
   */
  interface mandalsFieldRefs {
    readonly id: FieldRef<"mandals", 'String'>
    readonly label_english: FieldRef<"mandals", 'String'>
    readonly label_telugu: FieldRef<"mandals", 'String'>
    readonly created_at: FieldRef<"mandals", 'DateTime'>
    readonly updated_at: FieldRef<"mandals", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * mandals findUnique
   */
  export type mandalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mandals
     */
    select?: mandalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mandals
     */
    omit?: mandalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mandalsInclude<ExtArgs> | null
    /**
     * Filter, which mandals to fetch.
     */
    where: mandalsWhereUniqueInput
  }

  /**
   * mandals findUniqueOrThrow
   */
  export type mandalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mandals
     */
    select?: mandalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mandals
     */
    omit?: mandalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mandalsInclude<ExtArgs> | null
    /**
     * Filter, which mandals to fetch.
     */
    where: mandalsWhereUniqueInput
  }

  /**
   * mandals findFirst
   */
  export type mandalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mandals
     */
    select?: mandalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mandals
     */
    omit?: mandalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mandalsInclude<ExtArgs> | null
    /**
     * Filter, which mandals to fetch.
     */
    where?: mandalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mandals to fetch.
     */
    orderBy?: mandalsOrderByWithRelationInput | mandalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mandals.
     */
    cursor?: mandalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mandals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mandals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mandals.
     */
    distinct?: MandalsScalarFieldEnum | MandalsScalarFieldEnum[]
  }

  /**
   * mandals findFirstOrThrow
   */
  export type mandalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mandals
     */
    select?: mandalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mandals
     */
    omit?: mandalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mandalsInclude<ExtArgs> | null
    /**
     * Filter, which mandals to fetch.
     */
    where?: mandalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mandals to fetch.
     */
    orderBy?: mandalsOrderByWithRelationInput | mandalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mandals.
     */
    cursor?: mandalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mandals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mandals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mandals.
     */
    distinct?: MandalsScalarFieldEnum | MandalsScalarFieldEnum[]
  }

  /**
   * mandals findMany
   */
  export type mandalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mandals
     */
    select?: mandalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mandals
     */
    omit?: mandalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mandalsInclude<ExtArgs> | null
    /**
     * Filter, which mandals to fetch.
     */
    where?: mandalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mandals to fetch.
     */
    orderBy?: mandalsOrderByWithRelationInput | mandalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mandals.
     */
    cursor?: mandalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mandals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mandals.
     */
    skip?: number
    distinct?: MandalsScalarFieldEnum | MandalsScalarFieldEnum[]
  }

  /**
   * mandals create
   */
  export type mandalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mandals
     */
    select?: mandalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mandals
     */
    omit?: mandalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mandalsInclude<ExtArgs> | null
    /**
     * The data needed to create a mandals.
     */
    data: XOR<mandalsCreateInput, mandalsUncheckedCreateInput>
  }

  /**
   * mandals createMany
   */
  export type mandalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mandals.
     */
    data: mandalsCreateManyInput | mandalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mandals createManyAndReturn
   */
  export type mandalsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mandals
     */
    select?: mandalsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mandals
     */
    omit?: mandalsOmit<ExtArgs> | null
    /**
     * The data used to create many mandals.
     */
    data: mandalsCreateManyInput | mandalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mandals update
   */
  export type mandalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mandals
     */
    select?: mandalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mandals
     */
    omit?: mandalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mandalsInclude<ExtArgs> | null
    /**
     * The data needed to update a mandals.
     */
    data: XOR<mandalsUpdateInput, mandalsUncheckedUpdateInput>
    /**
     * Choose, which mandals to update.
     */
    where: mandalsWhereUniqueInput
  }

  /**
   * mandals updateMany
   */
  export type mandalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mandals.
     */
    data: XOR<mandalsUpdateManyMutationInput, mandalsUncheckedUpdateManyInput>
    /**
     * Filter which mandals to update
     */
    where?: mandalsWhereInput
    /**
     * Limit how many mandals to update.
     */
    limit?: number
  }

  /**
   * mandals updateManyAndReturn
   */
  export type mandalsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mandals
     */
    select?: mandalsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mandals
     */
    omit?: mandalsOmit<ExtArgs> | null
    /**
     * The data used to update mandals.
     */
    data: XOR<mandalsUpdateManyMutationInput, mandalsUncheckedUpdateManyInput>
    /**
     * Filter which mandals to update
     */
    where?: mandalsWhereInput
    /**
     * Limit how many mandals to update.
     */
    limit?: number
  }

  /**
   * mandals upsert
   */
  export type mandalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mandals
     */
    select?: mandalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mandals
     */
    omit?: mandalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mandalsInclude<ExtArgs> | null
    /**
     * The filter to search for the mandals to update in case it exists.
     */
    where: mandalsWhereUniqueInput
    /**
     * In case the mandals found by the `where` argument doesn't exist, create a new mandals with this data.
     */
    create: XOR<mandalsCreateInput, mandalsUncheckedCreateInput>
    /**
     * In case the mandals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mandalsUpdateInput, mandalsUncheckedUpdateInput>
  }

  /**
   * mandals delete
   */
  export type mandalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mandals
     */
    select?: mandalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mandals
     */
    omit?: mandalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mandalsInclude<ExtArgs> | null
    /**
     * Filter which mandals to delete.
     */
    where: mandalsWhereUniqueInput
  }

  /**
   * mandals deleteMany
   */
  export type mandalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mandals to delete
     */
    where?: mandalsWhereInput
    /**
     * Limit how many mandals to delete.
     */
    limit?: number
  }

  /**
   * mandals.villages
   */
  export type mandals$villagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the villages
     */
    select?: villagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the villages
     */
    omit?: villagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villagesInclude<ExtArgs> | null
    where?: villagesWhereInput
    orderBy?: villagesOrderByWithRelationInput | villagesOrderByWithRelationInput[]
    cursor?: villagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VillagesScalarFieldEnum | VillagesScalarFieldEnum[]
  }

  /**
   * mandals without action
   */
  export type mandalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mandals
     */
    select?: mandalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mandals
     */
    omit?: mandalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mandalsInclude<ExtArgs> | null
  }


  /**
   * Model members
   */

  export type AggregateMembers = {
    _count: MembersCountAggregateOutputType | null
    _min: MembersMinAggregateOutputType | null
    _max: MembersMaxAggregateOutputType | null
  }

  export type MembersMinAggregateOutputType = {
    id: string | null
    full_name_english: string | null
    village_id: string | null
    house_number: string | null
    phone_number: string | null
    husband_or_father_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MembersMaxAggregateOutputType = {
    id: string | null
    full_name_english: string | null
    village_id: string | null
    house_number: string | null
    phone_number: string | null
    husband_or_father_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MembersCountAggregateOutputType = {
    id: number
    full_name_english: number
    village_id: number
    house_number: number
    phone_number: number
    husband_or_father_name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MembersMinAggregateInputType = {
    id?: true
    full_name_english?: true
    village_id?: true
    house_number?: true
    phone_number?: true
    husband_or_father_name?: true
    created_at?: true
    updated_at?: true
  }

  export type MembersMaxAggregateInputType = {
    id?: true
    full_name_english?: true
    village_id?: true
    house_number?: true
    phone_number?: true
    husband_or_father_name?: true
    created_at?: true
    updated_at?: true
  }

  export type MembersCountAggregateInputType = {
    id?: true
    full_name_english?: true
    village_id?: true
    house_number?: true
    phone_number?: true
    husband_or_father_name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which members to aggregate.
     */
    where?: membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: membersOrderByWithRelationInput | membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned members
    **/
    _count?: true | MembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembersMaxAggregateInputType
  }

  export type GetMembersAggregateType<T extends MembersAggregateArgs> = {
        [P in keyof T & keyof AggregateMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembers[P]>
      : GetScalarType<T[P], AggregateMembers[P]>
  }




  export type membersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: membersWhereInput
    orderBy?: membersOrderByWithAggregationInput | membersOrderByWithAggregationInput[]
    by: MembersScalarFieldEnum[] | MembersScalarFieldEnum
    having?: membersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembersCountAggregateInputType | true
    _min?: MembersMinAggregateInputType
    _max?: MembersMaxAggregateInputType
  }

  export type MembersGroupByOutputType = {
    id: string
    full_name_english: string
    village_id: string
    house_number: string
    phone_number: string
    husband_or_father_name: string
    created_at: Date
    updated_at: Date
    _count: MembersCountAggregateOutputType | null
    _min: MembersMinAggregateOutputType | null
    _max: MembersMaxAggregateOutputType | null
  }

  type GetMembersGroupByPayload<T extends membersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembersGroupByOutputType[P]>
            : GetScalarType<T[P], MembersGroupByOutputType[P]>
        }
      >
    >


  export type membersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name_english?: boolean
    village_id?: boolean
    house_number?: boolean
    phone_number?: boolean
    husband_or_father_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    villages?: boolean | villagesDefaultArgs<ExtArgs>
    transactions?: boolean | members$transactionsArgs<ExtArgs>
    _count?: boolean | MembersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["members"]>

  export type membersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name_english?: boolean
    village_id?: boolean
    house_number?: boolean
    phone_number?: boolean
    husband_or_father_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    villages?: boolean | villagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["members"]>

  export type membersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name_english?: boolean
    village_id?: boolean
    house_number?: boolean
    phone_number?: boolean
    husband_or_father_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    villages?: boolean | villagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["members"]>

  export type membersSelectScalar = {
    id?: boolean
    full_name_english?: boolean
    village_id?: boolean
    house_number?: boolean
    phone_number?: boolean
    husband_or_father_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type membersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name_english" | "village_id" | "house_number" | "phone_number" | "husband_or_father_name" | "created_at" | "updated_at", ExtArgs["result"]["members"]>
  export type membersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villages?: boolean | villagesDefaultArgs<ExtArgs>
    transactions?: boolean | members$transactionsArgs<ExtArgs>
    _count?: boolean | MembersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type membersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villages?: boolean | villagesDefaultArgs<ExtArgs>
  }
  export type membersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    villages?: boolean | villagesDefaultArgs<ExtArgs>
  }

  export type $membersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "members"
    objects: {
      villages: Prisma.$villagesPayload<ExtArgs>
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      full_name_english: string
      village_id: string
      house_number: string
      phone_number: string
      husband_or_father_name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["members"]>
    composites: {}
  }

  type membersGetPayload<S extends boolean | null | undefined | membersDefaultArgs> = $Result.GetResult<Prisma.$membersPayload, S>

  type membersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<membersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembersCountAggregateInputType | true
    }

  export interface membersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['members'], meta: { name: 'members' } }
    /**
     * Find zero or one Members that matches the filter.
     * @param {membersFindUniqueArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends membersFindUniqueArgs>(args: SelectSubset<T, membersFindUniqueArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Members that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {membersFindUniqueOrThrowArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends membersFindUniqueOrThrowArgs>(args: SelectSubset<T, membersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersFindFirstArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends membersFindFirstArgs>(args?: SelectSubset<T, membersFindFirstArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Members that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersFindFirstOrThrowArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends membersFindFirstOrThrowArgs>(args?: SelectSubset<T, membersFindFirstOrThrowArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.members.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.members.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membersWithIdOnly = await prisma.members.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends membersFindManyArgs>(args?: SelectSubset<T, membersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Members.
     * @param {membersCreateArgs} args - Arguments to create a Members.
     * @example
     * // Create one Members
     * const Members = await prisma.members.create({
     *   data: {
     *     // ... data to create a Members
     *   }
     * })
     * 
     */
    create<T extends membersCreateArgs>(args: SelectSubset<T, membersCreateArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {membersCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const members = await prisma.members.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends membersCreateManyArgs>(args?: SelectSubset<T, membersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {membersCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const members = await prisma.members.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const membersWithIdOnly = await prisma.members.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends membersCreateManyAndReturnArgs>(args?: SelectSubset<T, membersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Members.
     * @param {membersDeleteArgs} args - Arguments to delete one Members.
     * @example
     * // Delete one Members
     * const Members = await prisma.members.delete({
     *   where: {
     *     // ... filter to delete one Members
     *   }
     * })
     * 
     */
    delete<T extends membersDeleteArgs>(args: SelectSubset<T, membersDeleteArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Members.
     * @param {membersUpdateArgs} args - Arguments to update one Members.
     * @example
     * // Update one Members
     * const members = await prisma.members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends membersUpdateArgs>(args: SelectSubset<T, membersUpdateArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {membersDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends membersDeleteManyArgs>(args?: SelectSubset<T, membersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const members = await prisma.members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends membersUpdateManyArgs>(args: SelectSubset<T, membersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {membersUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const members = await prisma.members.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `id`
     * const membersWithIdOnly = await prisma.members.updateManyAndReturn({
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
    updateManyAndReturn<T extends membersUpdateManyAndReturnArgs>(args: SelectSubset<T, membersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Members.
     * @param {membersUpsertArgs} args - Arguments to update or create a Members.
     * @example
     * // Update or create a Members
     * const members = await prisma.members.upsert({
     *   create: {
     *     // ... data to create a Members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Members we want to update
     *   }
     * })
     */
    upsert<T extends membersUpsertArgs>(args: SelectSubset<T, membersUpsertArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.members.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends membersCountArgs>(
      args?: Subset<T, membersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MembersAggregateArgs>(args: Subset<T, MembersAggregateArgs>): Prisma.PrismaPromise<GetMembersAggregateType<T>>

    /**
     * Group by Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersGroupByArgs} args - Group by arguments.
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
      T extends membersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: membersGroupByArgs['orderBy'] }
        : { orderBy?: membersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, membersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the members model
   */
  readonly fields: membersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__membersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    villages<T extends villagesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, villagesDefaultArgs<ExtArgs>>): Prisma__villagesClient<$Result.GetResult<Prisma.$villagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends members$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, members$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the members model
   */
  interface membersFieldRefs {
    readonly id: FieldRef<"members", 'String'>
    readonly full_name_english: FieldRef<"members", 'String'>
    readonly village_id: FieldRef<"members", 'String'>
    readonly house_number: FieldRef<"members", 'String'>
    readonly phone_number: FieldRef<"members", 'String'>
    readonly husband_or_father_name: FieldRef<"members", 'String'>
    readonly created_at: FieldRef<"members", 'DateTime'>
    readonly updated_at: FieldRef<"members", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * members findUnique
   */
  export type membersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where: membersWhereUniqueInput
  }

  /**
   * members findUniqueOrThrow
   */
  export type membersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where: membersWhereUniqueInput
  }

  /**
   * members findFirst
   */
  export type membersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where?: membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: membersOrderByWithRelationInput | membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * members findFirstOrThrow
   */
  export type membersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where?: membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: membersOrderByWithRelationInput | membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * members findMany
   */
  export type membersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where?: membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: membersOrderByWithRelationInput | membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing members.
     */
    cursor?: membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * members create
   */
  export type membersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
    /**
     * The data needed to create a members.
     */
    data: XOR<membersCreateInput, membersUncheckedCreateInput>
  }

  /**
   * members createMany
   */
  export type membersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many members.
     */
    data: membersCreateManyInput | membersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * members createManyAndReturn
   */
  export type membersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * The data used to create many members.
     */
    data: membersCreateManyInput | membersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * members update
   */
  export type membersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
    /**
     * The data needed to update a members.
     */
    data: XOR<membersUpdateInput, membersUncheckedUpdateInput>
    /**
     * Choose, which members to update.
     */
    where: membersWhereUniqueInput
  }

  /**
   * members updateMany
   */
  export type membersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update members.
     */
    data: XOR<membersUpdateManyMutationInput, membersUncheckedUpdateManyInput>
    /**
     * Filter which members to update
     */
    where?: membersWhereInput
    /**
     * Limit how many members to update.
     */
    limit?: number
  }

  /**
   * members updateManyAndReturn
   */
  export type membersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * The data used to update members.
     */
    data: XOR<membersUpdateManyMutationInput, membersUncheckedUpdateManyInput>
    /**
     * Filter which members to update
     */
    where?: membersWhereInput
    /**
     * Limit how many members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * members upsert
   */
  export type membersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
    /**
     * The filter to search for the members to update in case it exists.
     */
    where: membersWhereUniqueInput
    /**
     * In case the members found by the `where` argument doesn't exist, create a new members with this data.
     */
    create: XOR<membersCreateInput, membersUncheckedCreateInput>
    /**
     * In case the members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<membersUpdateInput, membersUncheckedUpdateInput>
  }

  /**
   * members delete
   */
  export type membersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
    /**
     * Filter which members to delete.
     */
    where: membersWhereUniqueInput
  }

  /**
   * members deleteMany
   */
  export type membersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which members to delete
     */
    where?: membersWhereInput
    /**
     * Limit how many members to delete.
     */
    limit?: number
  }

  /**
   * members.transactions
   */
  export type members$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * members without action
   */
  export type membersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
  }


  /**
   * Model transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionsMinAggregateOutputType = {
    id: string | null
    supervised_by: string | null
    member: string | null
    amount: number | null
    comments: string | null
    transaction_date: Date | null
    receipt_number: string | null
    created_at: Date | null
    updated_at: Date | null
    transaction_type_id: string | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: string | null
    supervised_by: string | null
    member: string | null
    amount: number | null
    comments: string | null
    transaction_date: Date | null
    receipt_number: string | null
    created_at: Date | null
    updated_at: Date | null
    transaction_type_id: string | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    supervised_by: number
    member: number
    amount: number
    comments: number
    transaction_date: number
    receipt_number: number
    created_at: number
    updated_at: number
    transaction_type_id: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionsSumAggregateInputType = {
    amount?: true
  }

  export type TransactionsMinAggregateInputType = {
    id?: true
    supervised_by?: true
    member?: true
    amount?: true
    comments?: true
    transaction_date?: true
    receipt_number?: true
    created_at?: true
    updated_at?: true
    transaction_type_id?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    supervised_by?: true
    member?: true
    amount?: true
    comments?: true
    transaction_date?: true
    receipt_number?: true
    created_at?: true
    updated_at?: true
    transaction_type_id?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    supervised_by?: true
    member?: true
    amount?: true
    comments?: true
    transaction_date?: true
    receipt_number?: true
    created_at?: true
    updated_at?: true
    transaction_type_id?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to aggregate.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type transactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithAggregationInput | transactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: transactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    id: string
    supervised_by: string
    member: string
    amount: number
    comments: string | null
    transaction_date: Date
    receipt_number: string
    created_at: Date
    updated_at: Date
    transaction_type_id: string
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends transactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type transactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supervised_by?: boolean
    member?: boolean
    amount?: boolean
    comments?: boolean
    transaction_date?: boolean
    receipt_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    transaction_type_id?: boolean
    members?: boolean | membersDefaultArgs<ExtArgs>
    transaction_type?: boolean | transaction_typesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supervised_by?: boolean
    member?: boolean
    amount?: boolean
    comments?: boolean
    transaction_date?: boolean
    receipt_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    transaction_type_id?: boolean
    members?: boolean | membersDefaultArgs<ExtArgs>
    transaction_type?: boolean | transaction_typesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supervised_by?: boolean
    member?: boolean
    amount?: boolean
    comments?: boolean
    transaction_date?: boolean
    receipt_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    transaction_type_id?: boolean
    members?: boolean | membersDefaultArgs<ExtArgs>
    transaction_type?: boolean | transaction_typesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectScalar = {
    id?: boolean
    supervised_by?: boolean
    member?: boolean
    amount?: boolean
    comments?: boolean
    transaction_date?: boolean
    receipt_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    transaction_type_id?: boolean
  }

  export type transactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supervised_by" | "member" | "amount" | "comments" | "transaction_date" | "receipt_number" | "created_at" | "updated_at" | "transaction_type_id", ExtArgs["result"]["transactions"]>
  export type transactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | membersDefaultArgs<ExtArgs>
    transaction_type?: boolean | transaction_typesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type transactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | membersDefaultArgs<ExtArgs>
    transaction_type?: boolean | transaction_typesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type transactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | membersDefaultArgs<ExtArgs>
    transaction_type?: boolean | transaction_typesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $transactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transactions"
    objects: {
      members: Prisma.$membersPayload<ExtArgs>
      transaction_type: Prisma.$transaction_typesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supervised_by: string
      member: string
      amount: number
      comments: string | null
      transaction_date: Date
      receipt_number: string
      created_at: Date
      updated_at: Date
      transaction_type_id: string
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type transactionsGetPayload<S extends boolean | null | undefined | transactionsDefaultArgs> = $Result.GetResult<Prisma.$transactionsPayload, S>

  type transactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface transactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transactions'], meta: { name: 'transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {transactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionsFindUniqueArgs>(args: SelectSubset<T, transactionsFindUniqueArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionsFindFirstArgs>(args?: SelectSubset<T, transactionsFindFirstArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transactionsFindManyArgs>(args?: SelectSubset<T, transactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transactions.
     * @param {transactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends transactionsCreateArgs>(args: SelectSubset<T, transactionsCreateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionsCreateManyArgs>(args?: SelectSubset<T, transactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, transactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transactions.
     * @param {transactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends transactionsDeleteArgs>(args: SelectSubset<T, transactionsDeleteArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transactions.
     * @param {transactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionsUpdateArgs>(args: SelectSubset<T, transactionsUpdateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionsDeleteManyArgs>(args?: SelectSubset<T, transactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionsUpdateManyArgs>(args: SelectSubset<T, transactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {transactionsUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.updateManyAndReturn({
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
    updateManyAndReturn<T extends transactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, transactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transactions.
     * @param {transactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends transactionsUpsertArgs>(args: SelectSubset<T, transactionsUpsertArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionsCountArgs>(
      args?: Subset<T, transactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsGroupByArgs} args - Group by arguments.
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
      T extends transactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionsGroupByArgs['orderBy'] }
        : { orderBy?: transactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transactions model
   */
  readonly fields: transactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends membersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, membersDefaultArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction_type<T extends transaction_typesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, transaction_typesDefaultArgs<ExtArgs>>): Prisma__transaction_typesClient<$Result.GetResult<Prisma.$transaction_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the transactions model
   */
  interface transactionsFieldRefs {
    readonly id: FieldRef<"transactions", 'String'>
    readonly supervised_by: FieldRef<"transactions", 'String'>
    readonly member: FieldRef<"transactions", 'String'>
    readonly amount: FieldRef<"transactions", 'Int'>
    readonly comments: FieldRef<"transactions", 'String'>
    readonly transaction_date: FieldRef<"transactions", 'DateTime'>
    readonly receipt_number: FieldRef<"transactions", 'String'>
    readonly created_at: FieldRef<"transactions", 'DateTime'>
    readonly updated_at: FieldRef<"transactions", 'DateTime'>
    readonly transaction_type_id: FieldRef<"transactions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * transactions findUnique
   */
  export type transactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findUniqueOrThrow
   */
  export type transactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findFirst
   */
  export type transactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findFirstOrThrow
   */
  export type transactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findMany
   */
  export type transactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions create
   */
  export type transactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a transactions.
     */
    data: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
  }

  /**
   * transactions createMany
   */
  export type transactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transactions createManyAndReturn
   */
  export type transactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transactions update
   */
  export type transactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a transactions.
     */
    data: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
    /**
     * Choose, which transactions to update.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions updateMany
   */
  export type transactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transactions updateManyAndReturn
   */
  export type transactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transactions upsert
   */
  export type transactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the transactions to update in case it exists.
     */
    where: transactionsWhereUniqueInput
    /**
     * In case the transactions found by the `where` argument doesn't exist, create a new transactions with this data.
     */
    create: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
    /**
     * In case the transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
  }

  /**
   * transactions delete
   */
  export type transactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter which transactions to delete.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions deleteMany
   */
  export type transactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transactions without action
   */
  export type transactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
  }


  /**
   * Model villages
   */

  export type AggregateVillages = {
    _count: VillagesCountAggregateOutputType | null
    _min: VillagesMinAggregateOutputType | null
    _max: VillagesMaxAggregateOutputType | null
  }

  export type VillagesMinAggregateOutputType = {
    id: string | null
    label_english: string | null
    label_telugu: string | null
    created_at: Date | null
    updated_at: Date | null
    mandal: string | null
  }

  export type VillagesMaxAggregateOutputType = {
    id: string | null
    label_english: string | null
    label_telugu: string | null
    created_at: Date | null
    updated_at: Date | null
    mandal: string | null
  }

  export type VillagesCountAggregateOutputType = {
    id: number
    label_english: number
    label_telugu: number
    created_at: number
    updated_at: number
    mandal: number
    _all: number
  }


  export type VillagesMinAggregateInputType = {
    id?: true
    label_english?: true
    label_telugu?: true
    created_at?: true
    updated_at?: true
    mandal?: true
  }

  export type VillagesMaxAggregateInputType = {
    id?: true
    label_english?: true
    label_telugu?: true
    created_at?: true
    updated_at?: true
    mandal?: true
  }

  export type VillagesCountAggregateInputType = {
    id?: true
    label_english?: true
    label_telugu?: true
    created_at?: true
    updated_at?: true
    mandal?: true
    _all?: true
  }

  export type VillagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which villages to aggregate.
     */
    where?: villagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of villages to fetch.
     */
    orderBy?: villagesOrderByWithRelationInput | villagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: villagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` villages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` villages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned villages
    **/
    _count?: true | VillagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VillagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VillagesMaxAggregateInputType
  }

  export type GetVillagesAggregateType<T extends VillagesAggregateArgs> = {
        [P in keyof T & keyof AggregateVillages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVillages[P]>
      : GetScalarType<T[P], AggregateVillages[P]>
  }




  export type villagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: villagesWhereInput
    orderBy?: villagesOrderByWithAggregationInput | villagesOrderByWithAggregationInput[]
    by: VillagesScalarFieldEnum[] | VillagesScalarFieldEnum
    having?: villagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VillagesCountAggregateInputType | true
    _min?: VillagesMinAggregateInputType
    _max?: VillagesMaxAggregateInputType
  }

  export type VillagesGroupByOutputType = {
    id: string
    label_english: string
    label_telugu: string
    created_at: Date
    updated_at: Date
    mandal: string
    _count: VillagesCountAggregateOutputType | null
    _min: VillagesMinAggregateOutputType | null
    _max: VillagesMaxAggregateOutputType | null
  }

  type GetVillagesGroupByPayload<T extends villagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VillagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VillagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VillagesGroupByOutputType[P]>
            : GetScalarType<T[P], VillagesGroupByOutputType[P]>
        }
      >
    >


  export type villagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label_english?: boolean
    label_telugu?: boolean
    created_at?: boolean
    updated_at?: boolean
    mandal?: boolean
    members?: boolean | villages$membersArgs<ExtArgs>
    mandals?: boolean | mandalsDefaultArgs<ExtArgs>
    _count?: boolean | VillagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["villages"]>

  export type villagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label_english?: boolean
    label_telugu?: boolean
    created_at?: boolean
    updated_at?: boolean
    mandal?: boolean
    mandals?: boolean | mandalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["villages"]>

  export type villagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label_english?: boolean
    label_telugu?: boolean
    created_at?: boolean
    updated_at?: boolean
    mandal?: boolean
    mandals?: boolean | mandalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["villages"]>

  export type villagesSelectScalar = {
    id?: boolean
    label_english?: boolean
    label_telugu?: boolean
    created_at?: boolean
    updated_at?: boolean
    mandal?: boolean
  }

  export type villagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label_english" | "label_telugu" | "created_at" | "updated_at" | "mandal", ExtArgs["result"]["villages"]>
  export type villagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | villages$membersArgs<ExtArgs>
    mandals?: boolean | mandalsDefaultArgs<ExtArgs>
    _count?: boolean | VillagesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type villagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mandals?: boolean | mandalsDefaultArgs<ExtArgs>
  }
  export type villagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mandals?: boolean | mandalsDefaultArgs<ExtArgs>
  }

  export type $villagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "villages"
    objects: {
      members: Prisma.$membersPayload<ExtArgs>[]
      mandals: Prisma.$mandalsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label_english: string
      label_telugu: string
      created_at: Date
      updated_at: Date
      mandal: string
    }, ExtArgs["result"]["villages"]>
    composites: {}
  }

  type villagesGetPayload<S extends boolean | null | undefined | villagesDefaultArgs> = $Result.GetResult<Prisma.$villagesPayload, S>

  type villagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<villagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VillagesCountAggregateInputType | true
    }

  export interface villagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['villages'], meta: { name: 'villages' } }
    /**
     * Find zero or one Villages that matches the filter.
     * @param {villagesFindUniqueArgs} args - Arguments to find a Villages
     * @example
     * // Get one Villages
     * const villages = await prisma.villages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends villagesFindUniqueArgs>(args: SelectSubset<T, villagesFindUniqueArgs<ExtArgs>>): Prisma__villagesClient<$Result.GetResult<Prisma.$villagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Villages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {villagesFindUniqueOrThrowArgs} args - Arguments to find a Villages
     * @example
     * // Get one Villages
     * const villages = await prisma.villages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends villagesFindUniqueOrThrowArgs>(args: SelectSubset<T, villagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__villagesClient<$Result.GetResult<Prisma.$villagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Villages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {villagesFindFirstArgs} args - Arguments to find a Villages
     * @example
     * // Get one Villages
     * const villages = await prisma.villages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends villagesFindFirstArgs>(args?: SelectSubset<T, villagesFindFirstArgs<ExtArgs>>): Prisma__villagesClient<$Result.GetResult<Prisma.$villagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Villages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {villagesFindFirstOrThrowArgs} args - Arguments to find a Villages
     * @example
     * // Get one Villages
     * const villages = await prisma.villages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends villagesFindFirstOrThrowArgs>(args?: SelectSubset<T, villagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__villagesClient<$Result.GetResult<Prisma.$villagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Villages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {villagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Villages
     * const villages = await prisma.villages.findMany()
     * 
     * // Get first 10 Villages
     * const villages = await prisma.villages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const villagesWithIdOnly = await prisma.villages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends villagesFindManyArgs>(args?: SelectSubset<T, villagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$villagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Villages.
     * @param {villagesCreateArgs} args - Arguments to create a Villages.
     * @example
     * // Create one Villages
     * const Villages = await prisma.villages.create({
     *   data: {
     *     // ... data to create a Villages
     *   }
     * })
     * 
     */
    create<T extends villagesCreateArgs>(args: SelectSubset<T, villagesCreateArgs<ExtArgs>>): Prisma__villagesClient<$Result.GetResult<Prisma.$villagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Villages.
     * @param {villagesCreateManyArgs} args - Arguments to create many Villages.
     * @example
     * // Create many Villages
     * const villages = await prisma.villages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends villagesCreateManyArgs>(args?: SelectSubset<T, villagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Villages and returns the data saved in the database.
     * @param {villagesCreateManyAndReturnArgs} args - Arguments to create many Villages.
     * @example
     * // Create many Villages
     * const villages = await prisma.villages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Villages and only return the `id`
     * const villagesWithIdOnly = await prisma.villages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends villagesCreateManyAndReturnArgs>(args?: SelectSubset<T, villagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$villagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Villages.
     * @param {villagesDeleteArgs} args - Arguments to delete one Villages.
     * @example
     * // Delete one Villages
     * const Villages = await prisma.villages.delete({
     *   where: {
     *     // ... filter to delete one Villages
     *   }
     * })
     * 
     */
    delete<T extends villagesDeleteArgs>(args: SelectSubset<T, villagesDeleteArgs<ExtArgs>>): Prisma__villagesClient<$Result.GetResult<Prisma.$villagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Villages.
     * @param {villagesUpdateArgs} args - Arguments to update one Villages.
     * @example
     * // Update one Villages
     * const villages = await prisma.villages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends villagesUpdateArgs>(args: SelectSubset<T, villagesUpdateArgs<ExtArgs>>): Prisma__villagesClient<$Result.GetResult<Prisma.$villagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Villages.
     * @param {villagesDeleteManyArgs} args - Arguments to filter Villages to delete.
     * @example
     * // Delete a few Villages
     * const { count } = await prisma.villages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends villagesDeleteManyArgs>(args?: SelectSubset<T, villagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Villages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {villagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Villages
     * const villages = await prisma.villages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends villagesUpdateManyArgs>(args: SelectSubset<T, villagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Villages and returns the data updated in the database.
     * @param {villagesUpdateManyAndReturnArgs} args - Arguments to update many Villages.
     * @example
     * // Update many Villages
     * const villages = await prisma.villages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Villages and only return the `id`
     * const villagesWithIdOnly = await prisma.villages.updateManyAndReturn({
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
    updateManyAndReturn<T extends villagesUpdateManyAndReturnArgs>(args: SelectSubset<T, villagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$villagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Villages.
     * @param {villagesUpsertArgs} args - Arguments to update or create a Villages.
     * @example
     * // Update or create a Villages
     * const villages = await prisma.villages.upsert({
     *   create: {
     *     // ... data to create a Villages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Villages we want to update
     *   }
     * })
     */
    upsert<T extends villagesUpsertArgs>(args: SelectSubset<T, villagesUpsertArgs<ExtArgs>>): Prisma__villagesClient<$Result.GetResult<Prisma.$villagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Villages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {villagesCountArgs} args - Arguments to filter Villages to count.
     * @example
     * // Count the number of Villages
     * const count = await prisma.villages.count({
     *   where: {
     *     // ... the filter for the Villages we want to count
     *   }
     * })
    **/
    count<T extends villagesCountArgs>(
      args?: Subset<T, villagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VillagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Villages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VillagesAggregateArgs>(args: Subset<T, VillagesAggregateArgs>): Prisma.PrismaPromise<GetVillagesAggregateType<T>>

    /**
     * Group by Villages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {villagesGroupByArgs} args - Group by arguments.
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
      T extends villagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: villagesGroupByArgs['orderBy'] }
        : { orderBy?: villagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, villagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVillagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the villages model
   */
  readonly fields: villagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for villages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__villagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends villages$membersArgs<ExtArgs> = {}>(args?: Subset<T, villages$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mandals<T extends mandalsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mandalsDefaultArgs<ExtArgs>>): Prisma__mandalsClient<$Result.GetResult<Prisma.$mandalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the villages model
   */
  interface villagesFieldRefs {
    readonly id: FieldRef<"villages", 'String'>
    readonly label_english: FieldRef<"villages", 'String'>
    readonly label_telugu: FieldRef<"villages", 'String'>
    readonly created_at: FieldRef<"villages", 'DateTime'>
    readonly updated_at: FieldRef<"villages", 'DateTime'>
    readonly mandal: FieldRef<"villages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * villages findUnique
   */
  export type villagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the villages
     */
    select?: villagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the villages
     */
    omit?: villagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villagesInclude<ExtArgs> | null
    /**
     * Filter, which villages to fetch.
     */
    where: villagesWhereUniqueInput
  }

  /**
   * villages findUniqueOrThrow
   */
  export type villagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the villages
     */
    select?: villagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the villages
     */
    omit?: villagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villagesInclude<ExtArgs> | null
    /**
     * Filter, which villages to fetch.
     */
    where: villagesWhereUniqueInput
  }

  /**
   * villages findFirst
   */
  export type villagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the villages
     */
    select?: villagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the villages
     */
    omit?: villagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villagesInclude<ExtArgs> | null
    /**
     * Filter, which villages to fetch.
     */
    where?: villagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of villages to fetch.
     */
    orderBy?: villagesOrderByWithRelationInput | villagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for villages.
     */
    cursor?: villagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` villages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` villages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of villages.
     */
    distinct?: VillagesScalarFieldEnum | VillagesScalarFieldEnum[]
  }

  /**
   * villages findFirstOrThrow
   */
  export type villagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the villages
     */
    select?: villagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the villages
     */
    omit?: villagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villagesInclude<ExtArgs> | null
    /**
     * Filter, which villages to fetch.
     */
    where?: villagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of villages to fetch.
     */
    orderBy?: villagesOrderByWithRelationInput | villagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for villages.
     */
    cursor?: villagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` villages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` villages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of villages.
     */
    distinct?: VillagesScalarFieldEnum | VillagesScalarFieldEnum[]
  }

  /**
   * villages findMany
   */
  export type villagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the villages
     */
    select?: villagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the villages
     */
    omit?: villagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villagesInclude<ExtArgs> | null
    /**
     * Filter, which villages to fetch.
     */
    where?: villagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of villages to fetch.
     */
    orderBy?: villagesOrderByWithRelationInput | villagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing villages.
     */
    cursor?: villagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` villages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` villages.
     */
    skip?: number
    distinct?: VillagesScalarFieldEnum | VillagesScalarFieldEnum[]
  }

  /**
   * villages create
   */
  export type villagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the villages
     */
    select?: villagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the villages
     */
    omit?: villagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villagesInclude<ExtArgs> | null
    /**
     * The data needed to create a villages.
     */
    data: XOR<villagesCreateInput, villagesUncheckedCreateInput>
  }

  /**
   * villages createMany
   */
  export type villagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many villages.
     */
    data: villagesCreateManyInput | villagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * villages createManyAndReturn
   */
  export type villagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the villages
     */
    select?: villagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the villages
     */
    omit?: villagesOmit<ExtArgs> | null
    /**
     * The data used to create many villages.
     */
    data: villagesCreateManyInput | villagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * villages update
   */
  export type villagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the villages
     */
    select?: villagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the villages
     */
    omit?: villagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villagesInclude<ExtArgs> | null
    /**
     * The data needed to update a villages.
     */
    data: XOR<villagesUpdateInput, villagesUncheckedUpdateInput>
    /**
     * Choose, which villages to update.
     */
    where: villagesWhereUniqueInput
  }

  /**
   * villages updateMany
   */
  export type villagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update villages.
     */
    data: XOR<villagesUpdateManyMutationInput, villagesUncheckedUpdateManyInput>
    /**
     * Filter which villages to update
     */
    where?: villagesWhereInput
    /**
     * Limit how many villages to update.
     */
    limit?: number
  }

  /**
   * villages updateManyAndReturn
   */
  export type villagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the villages
     */
    select?: villagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the villages
     */
    omit?: villagesOmit<ExtArgs> | null
    /**
     * The data used to update villages.
     */
    data: XOR<villagesUpdateManyMutationInput, villagesUncheckedUpdateManyInput>
    /**
     * Filter which villages to update
     */
    where?: villagesWhereInput
    /**
     * Limit how many villages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * villages upsert
   */
  export type villagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the villages
     */
    select?: villagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the villages
     */
    omit?: villagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villagesInclude<ExtArgs> | null
    /**
     * The filter to search for the villages to update in case it exists.
     */
    where: villagesWhereUniqueInput
    /**
     * In case the villages found by the `where` argument doesn't exist, create a new villages with this data.
     */
    create: XOR<villagesCreateInput, villagesUncheckedCreateInput>
    /**
     * In case the villages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<villagesUpdateInput, villagesUncheckedUpdateInput>
  }

  /**
   * villages delete
   */
  export type villagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the villages
     */
    select?: villagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the villages
     */
    omit?: villagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villagesInclude<ExtArgs> | null
    /**
     * Filter which villages to delete.
     */
    where: villagesWhereUniqueInput
  }

  /**
   * villages deleteMany
   */
  export type villagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which villages to delete
     */
    where?: villagesWhereInput
    /**
     * Limit how many villages to delete.
     */
    limit?: number
  }

  /**
   * villages.members
   */
  export type villages$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membersInclude<ExtArgs> | null
    where?: membersWhereInput
    orderBy?: membersOrderByWithRelationInput | membersOrderByWithRelationInput[]
    cursor?: membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * villages without action
   */
  export type villagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the villages
     */
    select?: villagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the villages
     */
    omit?: villagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villagesInclude<ExtArgs> | null
  }


  /**
   * Model transaction_types
   */

  export type AggregateTransaction_types = {
    _count: Transaction_typesCountAggregateOutputType | null
    _min: Transaction_typesMinAggregateOutputType | null
    _max: Transaction_typesMaxAggregateOutputType | null
  }

  export type Transaction_typesMinAggregateOutputType = {
    id: string | null
    name: string | null
    label_english: string | null
    label_telugu: string | null
    description: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    parent_id: string | null
  }

  export type Transaction_typesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    label_english: string | null
    label_telugu: string | null
    description: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    parent_id: string | null
  }

  export type Transaction_typesCountAggregateOutputType = {
    id: number
    name: number
    label_english: number
    label_telugu: number
    description: number
    is_active: number
    created_at: number
    updated_at: number
    parent_id: number
    _all: number
  }


  export type Transaction_typesMinAggregateInputType = {
    id?: true
    name?: true
    label_english?: true
    label_telugu?: true
    description?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    parent_id?: true
  }

  export type Transaction_typesMaxAggregateInputType = {
    id?: true
    name?: true
    label_english?: true
    label_telugu?: true
    description?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    parent_id?: true
  }

  export type Transaction_typesCountAggregateInputType = {
    id?: true
    name?: true
    label_english?: true
    label_telugu?: true
    description?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    parent_id?: true
    _all?: true
  }

  export type Transaction_typesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_types to aggregate.
     */
    where?: transaction_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_types to fetch.
     */
    orderBy?: transaction_typesOrderByWithRelationInput | transaction_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaction_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaction_types
    **/
    _count?: true | Transaction_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Transaction_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Transaction_typesMaxAggregateInputType
  }

  export type GetTransaction_typesAggregateType<T extends Transaction_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction_types[P]>
      : GetScalarType<T[P], AggregateTransaction_types[P]>
  }




  export type transaction_typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_typesWhereInput
    orderBy?: transaction_typesOrderByWithAggregationInput | transaction_typesOrderByWithAggregationInput[]
    by: Transaction_typesScalarFieldEnum[] | Transaction_typesScalarFieldEnum
    having?: transaction_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Transaction_typesCountAggregateInputType | true
    _min?: Transaction_typesMinAggregateInputType
    _max?: Transaction_typesMaxAggregateInputType
  }

  export type Transaction_typesGroupByOutputType = {
    id: string
    name: string
    label_english: string
    label_telugu: string
    description: string | null
    is_active: boolean
    created_at: Date
    updated_at: Date
    parent_id: string | null
    _count: Transaction_typesCountAggregateOutputType | null
    _min: Transaction_typesMinAggregateOutputType | null
    _max: Transaction_typesMaxAggregateOutputType | null
  }

  type GetTransaction_typesGroupByPayload<T extends transaction_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Transaction_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Transaction_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Transaction_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Transaction_typesGroupByOutputType[P]>
        }
      >
    >


  export type transaction_typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label_english?: boolean
    label_telugu?: boolean
    description?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    parent_id?: boolean
    parent?: boolean | transaction_types$parentArgs<ExtArgs>
    children?: boolean | transaction_types$childrenArgs<ExtArgs>
    transactions?: boolean | transaction_types$transactionsArgs<ExtArgs>
    _count?: boolean | Transaction_typesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction_types"]>

  export type transaction_typesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label_english?: boolean
    label_telugu?: boolean
    description?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    parent_id?: boolean
    parent?: boolean | transaction_types$parentArgs<ExtArgs>
  }, ExtArgs["result"]["transaction_types"]>

  export type transaction_typesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label_english?: boolean
    label_telugu?: boolean
    description?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    parent_id?: boolean
    parent?: boolean | transaction_types$parentArgs<ExtArgs>
  }, ExtArgs["result"]["transaction_types"]>

  export type transaction_typesSelectScalar = {
    id?: boolean
    name?: boolean
    label_english?: boolean
    label_telugu?: boolean
    description?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    parent_id?: boolean
  }

  export type transaction_typesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "label_english" | "label_telugu" | "description" | "is_active" | "created_at" | "updated_at" | "parent_id", ExtArgs["result"]["transaction_types"]>
  export type transaction_typesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | transaction_types$parentArgs<ExtArgs>
    children?: boolean | transaction_types$childrenArgs<ExtArgs>
    transactions?: boolean | transaction_types$transactionsArgs<ExtArgs>
    _count?: boolean | Transaction_typesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type transaction_typesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | transaction_types$parentArgs<ExtArgs>
  }
  export type transaction_typesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | transaction_types$parentArgs<ExtArgs>
  }

  export type $transaction_typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction_types"
    objects: {
      parent: Prisma.$transaction_typesPayload<ExtArgs> | null
      children: Prisma.$transaction_typesPayload<ExtArgs>[]
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      label_english: string
      label_telugu: string
      description: string | null
      is_active: boolean
      created_at: Date
      updated_at: Date
      parent_id: string | null
    }, ExtArgs["result"]["transaction_types"]>
    composites: {}
  }

  type transaction_typesGetPayload<S extends boolean | null | undefined | transaction_typesDefaultArgs> = $Result.GetResult<Prisma.$transaction_typesPayload, S>

  type transaction_typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transaction_typesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Transaction_typesCountAggregateInputType | true
    }

  export interface transaction_typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction_types'], meta: { name: 'transaction_types' } }
    /**
     * Find zero or one Transaction_types that matches the filter.
     * @param {transaction_typesFindUniqueArgs} args - Arguments to find a Transaction_types
     * @example
     * // Get one Transaction_types
     * const transaction_types = await prisma.transaction_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transaction_typesFindUniqueArgs>(args: SelectSubset<T, transaction_typesFindUniqueArgs<ExtArgs>>): Prisma__transaction_typesClient<$Result.GetResult<Prisma.$transaction_typesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction_types that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transaction_typesFindUniqueOrThrowArgs} args - Arguments to find a Transaction_types
     * @example
     * // Get one Transaction_types
     * const transaction_types = await prisma.transaction_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transaction_typesFindUniqueOrThrowArgs>(args: SelectSubset<T, transaction_typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transaction_typesClient<$Result.GetResult<Prisma.$transaction_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_typesFindFirstArgs} args - Arguments to find a Transaction_types
     * @example
     * // Get one Transaction_types
     * const transaction_types = await prisma.transaction_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transaction_typesFindFirstArgs>(args?: SelectSubset<T, transaction_typesFindFirstArgs<ExtArgs>>): Prisma__transaction_typesClient<$Result.GetResult<Prisma.$transaction_typesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction_types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_typesFindFirstOrThrowArgs} args - Arguments to find a Transaction_types
     * @example
     * // Get one Transaction_types
     * const transaction_types = await prisma.transaction_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transaction_typesFindFirstOrThrowArgs>(args?: SelectSubset<T, transaction_typesFindFirstOrThrowArgs<ExtArgs>>): Prisma__transaction_typesClient<$Result.GetResult<Prisma.$transaction_typesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transaction_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_typesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaction_types
     * const transaction_types = await prisma.transaction_types.findMany()
     * 
     * // Get first 10 Transaction_types
     * const transaction_types = await prisma.transaction_types.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaction_typesWithIdOnly = await prisma.transaction_types.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transaction_typesFindManyArgs>(args?: SelectSubset<T, transaction_typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction_types.
     * @param {transaction_typesCreateArgs} args - Arguments to create a Transaction_types.
     * @example
     * // Create one Transaction_types
     * const Transaction_types = await prisma.transaction_types.create({
     *   data: {
     *     // ... data to create a Transaction_types
     *   }
     * })
     * 
     */
    create<T extends transaction_typesCreateArgs>(args: SelectSubset<T, transaction_typesCreateArgs<ExtArgs>>): Prisma__transaction_typesClient<$Result.GetResult<Prisma.$transaction_typesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transaction_types.
     * @param {transaction_typesCreateManyArgs} args - Arguments to create many Transaction_types.
     * @example
     * // Create many Transaction_types
     * const transaction_types = await prisma.transaction_types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transaction_typesCreateManyArgs>(args?: SelectSubset<T, transaction_typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transaction_types and returns the data saved in the database.
     * @param {transaction_typesCreateManyAndReturnArgs} args - Arguments to create many Transaction_types.
     * @example
     * // Create many Transaction_types
     * const transaction_types = await prisma.transaction_types.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transaction_types and only return the `id`
     * const transaction_typesWithIdOnly = await prisma.transaction_types.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transaction_typesCreateManyAndReturnArgs>(args?: SelectSubset<T, transaction_typesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_typesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction_types.
     * @param {transaction_typesDeleteArgs} args - Arguments to delete one Transaction_types.
     * @example
     * // Delete one Transaction_types
     * const Transaction_types = await prisma.transaction_types.delete({
     *   where: {
     *     // ... filter to delete one Transaction_types
     *   }
     * })
     * 
     */
    delete<T extends transaction_typesDeleteArgs>(args: SelectSubset<T, transaction_typesDeleteArgs<ExtArgs>>): Prisma__transaction_typesClient<$Result.GetResult<Prisma.$transaction_typesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction_types.
     * @param {transaction_typesUpdateArgs} args - Arguments to update one Transaction_types.
     * @example
     * // Update one Transaction_types
     * const transaction_types = await prisma.transaction_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transaction_typesUpdateArgs>(args: SelectSubset<T, transaction_typesUpdateArgs<ExtArgs>>): Prisma__transaction_typesClient<$Result.GetResult<Prisma.$transaction_typesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transaction_types.
     * @param {transaction_typesDeleteManyArgs} args - Arguments to filter Transaction_types to delete.
     * @example
     * // Delete a few Transaction_types
     * const { count } = await prisma.transaction_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transaction_typesDeleteManyArgs>(args?: SelectSubset<T, transaction_typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaction_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaction_types
     * const transaction_types = await prisma.transaction_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transaction_typesUpdateManyArgs>(args: SelectSubset<T, transaction_typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaction_types and returns the data updated in the database.
     * @param {transaction_typesUpdateManyAndReturnArgs} args - Arguments to update many Transaction_types.
     * @example
     * // Update many Transaction_types
     * const transaction_types = await prisma.transaction_types.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transaction_types and only return the `id`
     * const transaction_typesWithIdOnly = await prisma.transaction_types.updateManyAndReturn({
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
    updateManyAndReturn<T extends transaction_typesUpdateManyAndReturnArgs>(args: SelectSubset<T, transaction_typesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_typesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction_types.
     * @param {transaction_typesUpsertArgs} args - Arguments to update or create a Transaction_types.
     * @example
     * // Update or create a Transaction_types
     * const transaction_types = await prisma.transaction_types.upsert({
     *   create: {
     *     // ... data to create a Transaction_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction_types we want to update
     *   }
     * })
     */
    upsert<T extends transaction_typesUpsertArgs>(args: SelectSubset<T, transaction_typesUpsertArgs<ExtArgs>>): Prisma__transaction_typesClient<$Result.GetResult<Prisma.$transaction_typesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transaction_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_typesCountArgs} args - Arguments to filter Transaction_types to count.
     * @example
     * // Count the number of Transaction_types
     * const count = await prisma.transaction_types.count({
     *   where: {
     *     // ... the filter for the Transaction_types we want to count
     *   }
     * })
    **/
    count<T extends transaction_typesCountArgs>(
      args?: Subset<T, transaction_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Transaction_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaction_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Transaction_typesAggregateArgs>(args: Subset<T, Transaction_typesAggregateArgs>): Prisma.PrismaPromise<GetTransaction_typesAggregateType<T>>

    /**
     * Group by Transaction_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_typesGroupByArgs} args - Group by arguments.
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
      T extends transaction_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaction_typesGroupByArgs['orderBy'] }
        : { orderBy?: transaction_typesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transaction_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaction_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction_types model
   */
  readonly fields: transaction_typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaction_typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends transaction_types$parentArgs<ExtArgs> = {}>(args?: Subset<T, transaction_types$parentArgs<ExtArgs>>): Prisma__transaction_typesClient<$Result.GetResult<Prisma.$transaction_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends transaction_types$childrenArgs<ExtArgs> = {}>(args?: Subset<T, transaction_types$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends transaction_types$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, transaction_types$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the transaction_types model
   */
  interface transaction_typesFieldRefs {
    readonly id: FieldRef<"transaction_types", 'String'>
    readonly name: FieldRef<"transaction_types", 'String'>
    readonly label_english: FieldRef<"transaction_types", 'String'>
    readonly label_telugu: FieldRef<"transaction_types", 'String'>
    readonly description: FieldRef<"transaction_types", 'String'>
    readonly is_active: FieldRef<"transaction_types", 'Boolean'>
    readonly created_at: FieldRef<"transaction_types", 'DateTime'>
    readonly updated_at: FieldRef<"transaction_types", 'DateTime'>
    readonly parent_id: FieldRef<"transaction_types", 'String'>
  }
    

  // Custom InputTypes
  /**
   * transaction_types findUnique
   */
  export type transaction_typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_types
     */
    select?: transaction_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_types
     */
    omit?: transaction_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_typesInclude<ExtArgs> | null
    /**
     * Filter, which transaction_types to fetch.
     */
    where: transaction_typesWhereUniqueInput
  }

  /**
   * transaction_types findUniqueOrThrow
   */
  export type transaction_typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_types
     */
    select?: transaction_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_types
     */
    omit?: transaction_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_typesInclude<ExtArgs> | null
    /**
     * Filter, which transaction_types to fetch.
     */
    where: transaction_typesWhereUniqueInput
  }

  /**
   * transaction_types findFirst
   */
  export type transaction_typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_types
     */
    select?: transaction_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_types
     */
    omit?: transaction_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_typesInclude<ExtArgs> | null
    /**
     * Filter, which transaction_types to fetch.
     */
    where?: transaction_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_types to fetch.
     */
    orderBy?: transaction_typesOrderByWithRelationInput | transaction_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaction_types.
     */
    cursor?: transaction_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaction_types.
     */
    distinct?: Transaction_typesScalarFieldEnum | Transaction_typesScalarFieldEnum[]
  }

  /**
   * transaction_types findFirstOrThrow
   */
  export type transaction_typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_types
     */
    select?: transaction_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_types
     */
    omit?: transaction_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_typesInclude<ExtArgs> | null
    /**
     * Filter, which transaction_types to fetch.
     */
    where?: transaction_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_types to fetch.
     */
    orderBy?: transaction_typesOrderByWithRelationInput | transaction_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaction_types.
     */
    cursor?: transaction_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaction_types.
     */
    distinct?: Transaction_typesScalarFieldEnum | Transaction_typesScalarFieldEnum[]
  }

  /**
   * transaction_types findMany
   */
  export type transaction_typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_types
     */
    select?: transaction_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_types
     */
    omit?: transaction_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_typesInclude<ExtArgs> | null
    /**
     * Filter, which transaction_types to fetch.
     */
    where?: transaction_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_types to fetch.
     */
    orderBy?: transaction_typesOrderByWithRelationInput | transaction_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaction_types.
     */
    cursor?: transaction_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_types.
     */
    skip?: number
    distinct?: Transaction_typesScalarFieldEnum | Transaction_typesScalarFieldEnum[]
  }

  /**
   * transaction_types create
   */
  export type transaction_typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_types
     */
    select?: transaction_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_types
     */
    omit?: transaction_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_typesInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction_types.
     */
    data: XOR<transaction_typesCreateInput, transaction_typesUncheckedCreateInput>
  }

  /**
   * transaction_types createMany
   */
  export type transaction_typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaction_types.
     */
    data: transaction_typesCreateManyInput | transaction_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction_types createManyAndReturn
   */
  export type transaction_typesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_types
     */
    select?: transaction_typesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_types
     */
    omit?: transaction_typesOmit<ExtArgs> | null
    /**
     * The data used to create many transaction_types.
     */
    data: transaction_typesCreateManyInput | transaction_typesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_typesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction_types update
   */
  export type transaction_typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_types
     */
    select?: transaction_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_types
     */
    omit?: transaction_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_typesInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction_types.
     */
    data: XOR<transaction_typesUpdateInput, transaction_typesUncheckedUpdateInput>
    /**
     * Choose, which transaction_types to update.
     */
    where: transaction_typesWhereUniqueInput
  }

  /**
   * transaction_types updateMany
   */
  export type transaction_typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaction_types.
     */
    data: XOR<transaction_typesUpdateManyMutationInput, transaction_typesUncheckedUpdateManyInput>
    /**
     * Filter which transaction_types to update
     */
    where?: transaction_typesWhereInput
    /**
     * Limit how many transaction_types to update.
     */
    limit?: number
  }

  /**
   * transaction_types updateManyAndReturn
   */
  export type transaction_typesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_types
     */
    select?: transaction_typesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_types
     */
    omit?: transaction_typesOmit<ExtArgs> | null
    /**
     * The data used to update transaction_types.
     */
    data: XOR<transaction_typesUpdateManyMutationInput, transaction_typesUncheckedUpdateManyInput>
    /**
     * Filter which transaction_types to update
     */
    where?: transaction_typesWhereInput
    /**
     * Limit how many transaction_types to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_typesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction_types upsert
   */
  export type transaction_typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_types
     */
    select?: transaction_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_types
     */
    omit?: transaction_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_typesInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction_types to update in case it exists.
     */
    where: transaction_typesWhereUniqueInput
    /**
     * In case the transaction_types found by the `where` argument doesn't exist, create a new transaction_types with this data.
     */
    create: XOR<transaction_typesCreateInput, transaction_typesUncheckedCreateInput>
    /**
     * In case the transaction_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaction_typesUpdateInput, transaction_typesUncheckedUpdateInput>
  }

  /**
   * transaction_types delete
   */
  export type transaction_typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_types
     */
    select?: transaction_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_types
     */
    omit?: transaction_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_typesInclude<ExtArgs> | null
    /**
     * Filter which transaction_types to delete.
     */
    where: transaction_typesWhereUniqueInput
  }

  /**
   * transaction_types deleteMany
   */
  export type transaction_typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_types to delete
     */
    where?: transaction_typesWhereInput
    /**
     * Limit how many transaction_types to delete.
     */
    limit?: number
  }

  /**
   * transaction_types.parent
   */
  export type transaction_types$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_types
     */
    select?: transaction_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_types
     */
    omit?: transaction_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_typesInclude<ExtArgs> | null
    where?: transaction_typesWhereInput
  }

  /**
   * transaction_types.children
   */
  export type transaction_types$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_types
     */
    select?: transaction_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_types
     */
    omit?: transaction_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_typesInclude<ExtArgs> | null
    where?: transaction_typesWhereInput
    orderBy?: transaction_typesOrderByWithRelationInput | transaction_typesOrderByWithRelationInput[]
    cursor?: transaction_typesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Transaction_typesScalarFieldEnum | Transaction_typesScalarFieldEnum[]
  }

  /**
   * transaction_types.transactions
   */
  export type transaction_types$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transaction_types without action
   */
  export type transaction_typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_types
     */
    select?: transaction_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_types
     */
    omit?: transaction_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_typesInclude<ExtArgs> | null
  }


  /**
   * Model endpointaccess
   */

  export type AggregateEndpointaccess = {
    _count: EndpointaccessCountAggregateOutputType | null
    _avg: EndpointaccessAvgAggregateOutputType | null
    _sum: EndpointaccessSumAggregateOutputType | null
    _min: EndpointaccessMinAggregateOutputType | null
    _max: EndpointaccessMaxAggregateOutputType | null
  }

  export type EndpointaccessAvgAggregateOutputType = {
    id: number | null
  }

  export type EndpointaccessSumAggregateOutputType = {
    id: bigint | null
  }

  export type EndpointaccessMinAggregateOutputType = {
    id: bigint | null
    role: string | null
    endpoint: string | null
    viewer: boolean | null
    contributor: boolean | null
    admin: boolean | null
    created_time: Date | null
  }

  export type EndpointaccessMaxAggregateOutputType = {
    id: bigint | null
    role: string | null
    endpoint: string | null
    viewer: boolean | null
    contributor: boolean | null
    admin: boolean | null
    created_time: Date | null
  }

  export type EndpointaccessCountAggregateOutputType = {
    id: number
    role: number
    endpoint: number
    viewer: number
    contributor: number
    admin: number
    created_time: number
    _all: number
  }


  export type EndpointaccessAvgAggregateInputType = {
    id?: true
  }

  export type EndpointaccessSumAggregateInputType = {
    id?: true
  }

  export type EndpointaccessMinAggregateInputType = {
    id?: true
    role?: true
    endpoint?: true
    viewer?: true
    contributor?: true
    admin?: true
    created_time?: true
  }

  export type EndpointaccessMaxAggregateInputType = {
    id?: true
    role?: true
    endpoint?: true
    viewer?: true
    contributor?: true
    admin?: true
    created_time?: true
  }

  export type EndpointaccessCountAggregateInputType = {
    id?: true
    role?: true
    endpoint?: true
    viewer?: true
    contributor?: true
    admin?: true
    created_time?: true
    _all?: true
  }

  export type EndpointaccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which endpointaccess to aggregate.
     */
    where?: endpointaccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of endpointaccesses to fetch.
     */
    orderBy?: endpointaccessOrderByWithRelationInput | endpointaccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: endpointaccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` endpointaccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` endpointaccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned endpointaccesses
    **/
    _count?: true | EndpointaccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EndpointaccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EndpointaccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EndpointaccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EndpointaccessMaxAggregateInputType
  }

  export type GetEndpointaccessAggregateType<T extends EndpointaccessAggregateArgs> = {
        [P in keyof T & keyof AggregateEndpointaccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndpointaccess[P]>
      : GetScalarType<T[P], AggregateEndpointaccess[P]>
  }




  export type endpointaccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: endpointaccessWhereInput
    orderBy?: endpointaccessOrderByWithAggregationInput | endpointaccessOrderByWithAggregationInput[]
    by: EndpointaccessScalarFieldEnum[] | EndpointaccessScalarFieldEnum
    having?: endpointaccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EndpointaccessCountAggregateInputType | true
    _avg?: EndpointaccessAvgAggregateInputType
    _sum?: EndpointaccessSumAggregateInputType
    _min?: EndpointaccessMinAggregateInputType
    _max?: EndpointaccessMaxAggregateInputType
  }

  export type EndpointaccessGroupByOutputType = {
    id: bigint
    role: string
    endpoint: string
    viewer: boolean | null
    contributor: boolean | null
    admin: boolean | null
    created_time: Date
    _count: EndpointaccessCountAggregateOutputType | null
    _avg: EndpointaccessAvgAggregateOutputType | null
    _sum: EndpointaccessSumAggregateOutputType | null
    _min: EndpointaccessMinAggregateOutputType | null
    _max: EndpointaccessMaxAggregateOutputType | null
  }

  type GetEndpointaccessGroupByPayload<T extends endpointaccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EndpointaccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EndpointaccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EndpointaccessGroupByOutputType[P]>
            : GetScalarType<T[P], EndpointaccessGroupByOutputType[P]>
        }
      >
    >


  export type endpointaccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    endpoint?: boolean
    viewer?: boolean
    contributor?: boolean
    admin?: boolean
    created_time?: boolean
  }, ExtArgs["result"]["endpointaccess"]>

  export type endpointaccessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    endpoint?: boolean
    viewer?: boolean
    contributor?: boolean
    admin?: boolean
    created_time?: boolean
  }, ExtArgs["result"]["endpointaccess"]>

  export type endpointaccessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    endpoint?: boolean
    viewer?: boolean
    contributor?: boolean
    admin?: boolean
    created_time?: boolean
  }, ExtArgs["result"]["endpointaccess"]>

  export type endpointaccessSelectScalar = {
    id?: boolean
    role?: boolean
    endpoint?: boolean
    viewer?: boolean
    contributor?: boolean
    admin?: boolean
    created_time?: boolean
  }

  export type endpointaccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "endpoint" | "viewer" | "contributor" | "admin" | "created_time", ExtArgs["result"]["endpointaccess"]>

  export type $endpointaccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "endpointaccess"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      role: string
      endpoint: string
      viewer: boolean | null
      contributor: boolean | null
      admin: boolean | null
      created_time: Date
    }, ExtArgs["result"]["endpointaccess"]>
    composites: {}
  }

  type endpointaccessGetPayload<S extends boolean | null | undefined | endpointaccessDefaultArgs> = $Result.GetResult<Prisma.$endpointaccessPayload, S>

  type endpointaccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<endpointaccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EndpointaccessCountAggregateInputType | true
    }

  export interface endpointaccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['endpointaccess'], meta: { name: 'endpointaccess' } }
    /**
     * Find zero or one Endpointaccess that matches the filter.
     * @param {endpointaccessFindUniqueArgs} args - Arguments to find a Endpointaccess
     * @example
     * // Get one Endpointaccess
     * const endpointaccess = await prisma.endpointaccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends endpointaccessFindUniqueArgs>(args: SelectSubset<T, endpointaccessFindUniqueArgs<ExtArgs>>): Prisma__endpointaccessClient<$Result.GetResult<Prisma.$endpointaccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endpointaccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {endpointaccessFindUniqueOrThrowArgs} args - Arguments to find a Endpointaccess
     * @example
     * // Get one Endpointaccess
     * const endpointaccess = await prisma.endpointaccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends endpointaccessFindUniqueOrThrowArgs>(args: SelectSubset<T, endpointaccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__endpointaccessClient<$Result.GetResult<Prisma.$endpointaccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endpointaccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endpointaccessFindFirstArgs} args - Arguments to find a Endpointaccess
     * @example
     * // Get one Endpointaccess
     * const endpointaccess = await prisma.endpointaccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends endpointaccessFindFirstArgs>(args?: SelectSubset<T, endpointaccessFindFirstArgs<ExtArgs>>): Prisma__endpointaccessClient<$Result.GetResult<Prisma.$endpointaccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endpointaccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endpointaccessFindFirstOrThrowArgs} args - Arguments to find a Endpointaccess
     * @example
     * // Get one Endpointaccess
     * const endpointaccess = await prisma.endpointaccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends endpointaccessFindFirstOrThrowArgs>(args?: SelectSubset<T, endpointaccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__endpointaccessClient<$Result.GetResult<Prisma.$endpointaccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Endpointaccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endpointaccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Endpointaccesses
     * const endpointaccesses = await prisma.endpointaccess.findMany()
     * 
     * // Get first 10 Endpointaccesses
     * const endpointaccesses = await prisma.endpointaccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const endpointaccessWithIdOnly = await prisma.endpointaccess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends endpointaccessFindManyArgs>(args?: SelectSubset<T, endpointaccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$endpointaccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endpointaccess.
     * @param {endpointaccessCreateArgs} args - Arguments to create a Endpointaccess.
     * @example
     * // Create one Endpointaccess
     * const Endpointaccess = await prisma.endpointaccess.create({
     *   data: {
     *     // ... data to create a Endpointaccess
     *   }
     * })
     * 
     */
    create<T extends endpointaccessCreateArgs>(args: SelectSubset<T, endpointaccessCreateArgs<ExtArgs>>): Prisma__endpointaccessClient<$Result.GetResult<Prisma.$endpointaccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Endpointaccesses.
     * @param {endpointaccessCreateManyArgs} args - Arguments to create many Endpointaccesses.
     * @example
     * // Create many Endpointaccesses
     * const endpointaccess = await prisma.endpointaccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends endpointaccessCreateManyArgs>(args?: SelectSubset<T, endpointaccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Endpointaccesses and returns the data saved in the database.
     * @param {endpointaccessCreateManyAndReturnArgs} args - Arguments to create many Endpointaccesses.
     * @example
     * // Create many Endpointaccesses
     * const endpointaccess = await prisma.endpointaccess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Endpointaccesses and only return the `id`
     * const endpointaccessWithIdOnly = await prisma.endpointaccess.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends endpointaccessCreateManyAndReturnArgs>(args?: SelectSubset<T, endpointaccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$endpointaccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Endpointaccess.
     * @param {endpointaccessDeleteArgs} args - Arguments to delete one Endpointaccess.
     * @example
     * // Delete one Endpointaccess
     * const Endpointaccess = await prisma.endpointaccess.delete({
     *   where: {
     *     // ... filter to delete one Endpointaccess
     *   }
     * })
     * 
     */
    delete<T extends endpointaccessDeleteArgs>(args: SelectSubset<T, endpointaccessDeleteArgs<ExtArgs>>): Prisma__endpointaccessClient<$Result.GetResult<Prisma.$endpointaccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endpointaccess.
     * @param {endpointaccessUpdateArgs} args - Arguments to update one Endpointaccess.
     * @example
     * // Update one Endpointaccess
     * const endpointaccess = await prisma.endpointaccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends endpointaccessUpdateArgs>(args: SelectSubset<T, endpointaccessUpdateArgs<ExtArgs>>): Prisma__endpointaccessClient<$Result.GetResult<Prisma.$endpointaccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Endpointaccesses.
     * @param {endpointaccessDeleteManyArgs} args - Arguments to filter Endpointaccesses to delete.
     * @example
     * // Delete a few Endpointaccesses
     * const { count } = await prisma.endpointaccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends endpointaccessDeleteManyArgs>(args?: SelectSubset<T, endpointaccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Endpointaccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endpointaccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Endpointaccesses
     * const endpointaccess = await prisma.endpointaccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends endpointaccessUpdateManyArgs>(args: SelectSubset<T, endpointaccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Endpointaccesses and returns the data updated in the database.
     * @param {endpointaccessUpdateManyAndReturnArgs} args - Arguments to update many Endpointaccesses.
     * @example
     * // Update many Endpointaccesses
     * const endpointaccess = await prisma.endpointaccess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Endpointaccesses and only return the `id`
     * const endpointaccessWithIdOnly = await prisma.endpointaccess.updateManyAndReturn({
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
    updateManyAndReturn<T extends endpointaccessUpdateManyAndReturnArgs>(args: SelectSubset<T, endpointaccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$endpointaccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Endpointaccess.
     * @param {endpointaccessUpsertArgs} args - Arguments to update or create a Endpointaccess.
     * @example
     * // Update or create a Endpointaccess
     * const endpointaccess = await prisma.endpointaccess.upsert({
     *   create: {
     *     // ... data to create a Endpointaccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endpointaccess we want to update
     *   }
     * })
     */
    upsert<T extends endpointaccessUpsertArgs>(args: SelectSubset<T, endpointaccessUpsertArgs<ExtArgs>>): Prisma__endpointaccessClient<$Result.GetResult<Prisma.$endpointaccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Endpointaccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endpointaccessCountArgs} args - Arguments to filter Endpointaccesses to count.
     * @example
     * // Count the number of Endpointaccesses
     * const count = await prisma.endpointaccess.count({
     *   where: {
     *     // ... the filter for the Endpointaccesses we want to count
     *   }
     * })
    **/
    count<T extends endpointaccessCountArgs>(
      args?: Subset<T, endpointaccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EndpointaccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endpointaccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointaccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EndpointaccessAggregateArgs>(args: Subset<T, EndpointaccessAggregateArgs>): Prisma.PrismaPromise<GetEndpointaccessAggregateType<T>>

    /**
     * Group by Endpointaccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endpointaccessGroupByArgs} args - Group by arguments.
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
      T extends endpointaccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: endpointaccessGroupByArgs['orderBy'] }
        : { orderBy?: endpointaccessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, endpointaccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEndpointaccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the endpointaccess model
   */
  readonly fields: endpointaccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for endpointaccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__endpointaccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the endpointaccess model
   */
  interface endpointaccessFieldRefs {
    readonly id: FieldRef<"endpointaccess", 'BigInt'>
    readonly role: FieldRef<"endpointaccess", 'String'>
    readonly endpoint: FieldRef<"endpointaccess", 'String'>
    readonly viewer: FieldRef<"endpointaccess", 'Boolean'>
    readonly contributor: FieldRef<"endpointaccess", 'Boolean'>
    readonly admin: FieldRef<"endpointaccess", 'Boolean'>
    readonly created_time: FieldRef<"endpointaccess", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * endpointaccess findUnique
   */
  export type endpointaccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpointaccess
     */
    select?: endpointaccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpointaccess
     */
    omit?: endpointaccessOmit<ExtArgs> | null
    /**
     * Filter, which endpointaccess to fetch.
     */
    where: endpointaccessWhereUniqueInput
  }

  /**
   * endpointaccess findUniqueOrThrow
   */
  export type endpointaccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpointaccess
     */
    select?: endpointaccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpointaccess
     */
    omit?: endpointaccessOmit<ExtArgs> | null
    /**
     * Filter, which endpointaccess to fetch.
     */
    where: endpointaccessWhereUniqueInput
  }

  /**
   * endpointaccess findFirst
   */
  export type endpointaccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpointaccess
     */
    select?: endpointaccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpointaccess
     */
    omit?: endpointaccessOmit<ExtArgs> | null
    /**
     * Filter, which endpointaccess to fetch.
     */
    where?: endpointaccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of endpointaccesses to fetch.
     */
    orderBy?: endpointaccessOrderByWithRelationInput | endpointaccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for endpointaccesses.
     */
    cursor?: endpointaccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` endpointaccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` endpointaccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of endpointaccesses.
     */
    distinct?: EndpointaccessScalarFieldEnum | EndpointaccessScalarFieldEnum[]
  }

  /**
   * endpointaccess findFirstOrThrow
   */
  export type endpointaccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpointaccess
     */
    select?: endpointaccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpointaccess
     */
    omit?: endpointaccessOmit<ExtArgs> | null
    /**
     * Filter, which endpointaccess to fetch.
     */
    where?: endpointaccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of endpointaccesses to fetch.
     */
    orderBy?: endpointaccessOrderByWithRelationInput | endpointaccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for endpointaccesses.
     */
    cursor?: endpointaccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` endpointaccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` endpointaccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of endpointaccesses.
     */
    distinct?: EndpointaccessScalarFieldEnum | EndpointaccessScalarFieldEnum[]
  }

  /**
   * endpointaccess findMany
   */
  export type endpointaccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpointaccess
     */
    select?: endpointaccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpointaccess
     */
    omit?: endpointaccessOmit<ExtArgs> | null
    /**
     * Filter, which endpointaccesses to fetch.
     */
    where?: endpointaccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of endpointaccesses to fetch.
     */
    orderBy?: endpointaccessOrderByWithRelationInput | endpointaccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing endpointaccesses.
     */
    cursor?: endpointaccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` endpointaccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` endpointaccesses.
     */
    skip?: number
    distinct?: EndpointaccessScalarFieldEnum | EndpointaccessScalarFieldEnum[]
  }

  /**
   * endpointaccess create
   */
  export type endpointaccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpointaccess
     */
    select?: endpointaccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpointaccess
     */
    omit?: endpointaccessOmit<ExtArgs> | null
    /**
     * The data needed to create a endpointaccess.
     */
    data: XOR<endpointaccessCreateInput, endpointaccessUncheckedCreateInput>
  }

  /**
   * endpointaccess createMany
   */
  export type endpointaccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many endpointaccesses.
     */
    data: endpointaccessCreateManyInput | endpointaccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * endpointaccess createManyAndReturn
   */
  export type endpointaccessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpointaccess
     */
    select?: endpointaccessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the endpointaccess
     */
    omit?: endpointaccessOmit<ExtArgs> | null
    /**
     * The data used to create many endpointaccesses.
     */
    data: endpointaccessCreateManyInput | endpointaccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * endpointaccess update
   */
  export type endpointaccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpointaccess
     */
    select?: endpointaccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpointaccess
     */
    omit?: endpointaccessOmit<ExtArgs> | null
    /**
     * The data needed to update a endpointaccess.
     */
    data: XOR<endpointaccessUpdateInput, endpointaccessUncheckedUpdateInput>
    /**
     * Choose, which endpointaccess to update.
     */
    where: endpointaccessWhereUniqueInput
  }

  /**
   * endpointaccess updateMany
   */
  export type endpointaccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update endpointaccesses.
     */
    data: XOR<endpointaccessUpdateManyMutationInput, endpointaccessUncheckedUpdateManyInput>
    /**
     * Filter which endpointaccesses to update
     */
    where?: endpointaccessWhereInput
    /**
     * Limit how many endpointaccesses to update.
     */
    limit?: number
  }

  /**
   * endpointaccess updateManyAndReturn
   */
  export type endpointaccessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpointaccess
     */
    select?: endpointaccessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the endpointaccess
     */
    omit?: endpointaccessOmit<ExtArgs> | null
    /**
     * The data used to update endpointaccesses.
     */
    data: XOR<endpointaccessUpdateManyMutationInput, endpointaccessUncheckedUpdateManyInput>
    /**
     * Filter which endpointaccesses to update
     */
    where?: endpointaccessWhereInput
    /**
     * Limit how many endpointaccesses to update.
     */
    limit?: number
  }

  /**
   * endpointaccess upsert
   */
  export type endpointaccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpointaccess
     */
    select?: endpointaccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpointaccess
     */
    omit?: endpointaccessOmit<ExtArgs> | null
    /**
     * The filter to search for the endpointaccess to update in case it exists.
     */
    where: endpointaccessWhereUniqueInput
    /**
     * In case the endpointaccess found by the `where` argument doesn't exist, create a new endpointaccess with this data.
     */
    create: XOR<endpointaccessCreateInput, endpointaccessUncheckedCreateInput>
    /**
     * In case the endpointaccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<endpointaccessUpdateInput, endpointaccessUncheckedUpdateInput>
  }

  /**
   * endpointaccess delete
   */
  export type endpointaccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpointaccess
     */
    select?: endpointaccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpointaccess
     */
    omit?: endpointaccessOmit<ExtArgs> | null
    /**
     * Filter which endpointaccess to delete.
     */
    where: endpointaccessWhereUniqueInput
  }

  /**
   * endpointaccess deleteMany
   */
  export type endpointaccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which endpointaccesses to delete
     */
    where?: endpointaccessWhereInput
    /**
     * Limit how many endpointaccesses to delete.
     */
    limit?: number
  }

  /**
   * endpointaccess without action
   */
  export type endpointaccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endpointaccess
     */
    select?: endpointaccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endpointaccess
     */
    omit?: endpointaccessOmit<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    external_id: 'external_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const User_roles_mappingScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    role_id: 'role_id',
    assigned_by: 'assigned_by',
    assigned_at: 'assigned_at',
    is_active: 'is_active',
    expires_at: 'expires_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type User_roles_mappingScalarFieldEnum = (typeof User_roles_mappingScalarFieldEnum)[keyof typeof User_roles_mappingScalarFieldEnum]


  export const MandalsScalarFieldEnum: {
    id: 'id',
    label_english: 'label_english',
    label_telugu: 'label_telugu',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MandalsScalarFieldEnum = (typeof MandalsScalarFieldEnum)[keyof typeof MandalsScalarFieldEnum]


  export const MembersScalarFieldEnum: {
    id: 'id',
    full_name_english: 'full_name_english',
    village_id: 'village_id',
    house_number: 'house_number',
    phone_number: 'phone_number',
    husband_or_father_name: 'husband_or_father_name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MembersScalarFieldEnum = (typeof MembersScalarFieldEnum)[keyof typeof MembersScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    id: 'id',
    supervised_by: 'supervised_by',
    member: 'member',
    amount: 'amount',
    comments: 'comments',
    transaction_date: 'transaction_date',
    receipt_number: 'receipt_number',
    created_at: 'created_at',
    updated_at: 'updated_at',
    transaction_type_id: 'transaction_type_id'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const VillagesScalarFieldEnum: {
    id: 'id',
    label_english: 'label_english',
    label_telugu: 'label_telugu',
    created_at: 'created_at',
    updated_at: 'updated_at',
    mandal: 'mandal'
  };

  export type VillagesScalarFieldEnum = (typeof VillagesScalarFieldEnum)[keyof typeof VillagesScalarFieldEnum]


  export const Transaction_typesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    label_english: 'label_english',
    label_telugu: 'label_telugu',
    description: 'description',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at',
    parent_id: 'parent_id'
  };

  export type Transaction_typesScalarFieldEnum = (typeof Transaction_typesScalarFieldEnum)[keyof typeof Transaction_typesScalarFieldEnum]


  export const EndpointaccessScalarFieldEnum: {
    id: 'id',
    role: 'role',
    endpoint: 'endpoint',
    viewer: 'viewer',
    contributor: 'contributor',
    admin: 'admin',
    created_time: 'created_time'
  };

  export type EndpointaccessScalarFieldEnum = (typeof EndpointaccessScalarFieldEnum)[keyof typeof EndpointaccessScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


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


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    external_id?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    transactions?: TransactionsListRelationFilter
    assigned_roles?: User_roles_mappingListRelationFilter
    user_roles?: User_roles_mappingListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    external_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    transactions?: transactionsOrderByRelationAggregateInput
    assigned_roles?: user_roles_mappingOrderByRelationAggregateInput
    user_roles?: user_roles_mappingOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    external_id?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    transactions?: TransactionsListRelationFilter
    assigned_roles?: User_roles_mappingListRelationFilter
    user_roles?: User_roles_mappingListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    external_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    external_id?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    id?: UuidFilter<"roles"> | string
    name?: StringFilter<"roles"> | string
    description?: StringNullableFilter<"roles"> | string | null
    is_active?: BoolFilter<"roles"> | boolean
    created_at?: DateTimeFilter<"roles"> | Date | string
    updated_at?: DateTimeFilter<"roles"> | Date | string
    user_roles?: User_roles_mappingListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_roles?: user_roles_mappingOrderByRelationAggregateInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    description?: StringNullableFilter<"roles"> | string | null
    is_active?: BoolFilter<"roles"> | boolean
    created_at?: DateTimeFilter<"roles"> | Date | string
    updated_at?: DateTimeFilter<"roles"> | Date | string
    user_roles?: User_roles_mappingListRelationFilter
  }, "id" | "name">

  export type rolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: rolesCountOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"roles"> | string
    name?: StringWithAggregatesFilter<"roles"> | string
    description?: StringNullableWithAggregatesFilter<"roles"> | string | null
    is_active?: BoolWithAggregatesFilter<"roles"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"roles"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"roles"> | Date | string
  }

  export type user_roles_mappingWhereInput = {
    AND?: user_roles_mappingWhereInput | user_roles_mappingWhereInput[]
    OR?: user_roles_mappingWhereInput[]
    NOT?: user_roles_mappingWhereInput | user_roles_mappingWhereInput[]
    id?: UuidFilter<"user_roles_mapping"> | string
    user_id?: UuidFilter<"user_roles_mapping"> | string
    role_id?: UuidFilter<"user_roles_mapping"> | string
    assigned_by?: UuidNullableFilter<"user_roles_mapping"> | string | null
    assigned_at?: DateTimeFilter<"user_roles_mapping"> | Date | string
    is_active?: BoolFilter<"user_roles_mapping"> | boolean
    expires_at?: DateTimeNullableFilter<"user_roles_mapping"> | Date | string | null
    created_at?: DateTimeFilter<"user_roles_mapping"> | Date | string
    updated_at?: DateTimeFilter<"user_roles_mapping"> | Date | string
    assigned_by_user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    role?: XOR<RolesScalarRelationFilter, rolesWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_roles_mappingOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    assigned_by?: SortOrderInput | SortOrder
    assigned_at?: SortOrder
    is_active?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    assigned_by_user?: usersOrderByWithRelationInput
    role?: rolesOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
  }

  export type user_roles_mappingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_role_unique?: user_roles_mappingUser_role_uniqueCompoundUniqueInput
    AND?: user_roles_mappingWhereInput | user_roles_mappingWhereInput[]
    OR?: user_roles_mappingWhereInput[]
    NOT?: user_roles_mappingWhereInput | user_roles_mappingWhereInput[]
    user_id?: UuidFilter<"user_roles_mapping"> | string
    role_id?: UuidFilter<"user_roles_mapping"> | string
    assigned_by?: UuidNullableFilter<"user_roles_mapping"> | string | null
    assigned_at?: DateTimeFilter<"user_roles_mapping"> | Date | string
    is_active?: BoolFilter<"user_roles_mapping"> | boolean
    expires_at?: DateTimeNullableFilter<"user_roles_mapping"> | Date | string | null
    created_at?: DateTimeFilter<"user_roles_mapping"> | Date | string
    updated_at?: DateTimeFilter<"user_roles_mapping"> | Date | string
    assigned_by_user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    role?: XOR<RolesScalarRelationFilter, rolesWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "user_role_unique">

  export type user_roles_mappingOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    assigned_by?: SortOrderInput | SortOrder
    assigned_at?: SortOrder
    is_active?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: user_roles_mappingCountOrderByAggregateInput
    _max?: user_roles_mappingMaxOrderByAggregateInput
    _min?: user_roles_mappingMinOrderByAggregateInput
  }

  export type user_roles_mappingScalarWhereWithAggregatesInput = {
    AND?: user_roles_mappingScalarWhereWithAggregatesInput | user_roles_mappingScalarWhereWithAggregatesInput[]
    OR?: user_roles_mappingScalarWhereWithAggregatesInput[]
    NOT?: user_roles_mappingScalarWhereWithAggregatesInput | user_roles_mappingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"user_roles_mapping"> | string
    user_id?: UuidWithAggregatesFilter<"user_roles_mapping"> | string
    role_id?: UuidWithAggregatesFilter<"user_roles_mapping"> | string
    assigned_by?: UuidNullableWithAggregatesFilter<"user_roles_mapping"> | string | null
    assigned_at?: DateTimeWithAggregatesFilter<"user_roles_mapping"> | Date | string
    is_active?: BoolWithAggregatesFilter<"user_roles_mapping"> | boolean
    expires_at?: DateTimeNullableWithAggregatesFilter<"user_roles_mapping"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"user_roles_mapping"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"user_roles_mapping"> | Date | string
  }

  export type mandalsWhereInput = {
    AND?: mandalsWhereInput | mandalsWhereInput[]
    OR?: mandalsWhereInput[]
    NOT?: mandalsWhereInput | mandalsWhereInput[]
    id?: UuidFilter<"mandals"> | string
    label_english?: StringFilter<"mandals"> | string
    label_telugu?: StringFilter<"mandals"> | string
    created_at?: DateTimeFilter<"mandals"> | Date | string
    updated_at?: DateTimeFilter<"mandals"> | Date | string
    villages?: VillagesListRelationFilter
  }

  export type mandalsOrderByWithRelationInput = {
    id?: SortOrder
    label_english?: SortOrder
    label_telugu?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    villages?: villagesOrderByRelationAggregateInput
  }

  export type mandalsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: mandalsWhereInput | mandalsWhereInput[]
    OR?: mandalsWhereInput[]
    NOT?: mandalsWhereInput | mandalsWhereInput[]
    label_english?: StringFilter<"mandals"> | string
    label_telugu?: StringFilter<"mandals"> | string
    created_at?: DateTimeFilter<"mandals"> | Date | string
    updated_at?: DateTimeFilter<"mandals"> | Date | string
    villages?: VillagesListRelationFilter
  }, "id">

  export type mandalsOrderByWithAggregationInput = {
    id?: SortOrder
    label_english?: SortOrder
    label_telugu?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: mandalsCountOrderByAggregateInput
    _max?: mandalsMaxOrderByAggregateInput
    _min?: mandalsMinOrderByAggregateInput
  }

  export type mandalsScalarWhereWithAggregatesInput = {
    AND?: mandalsScalarWhereWithAggregatesInput | mandalsScalarWhereWithAggregatesInput[]
    OR?: mandalsScalarWhereWithAggregatesInput[]
    NOT?: mandalsScalarWhereWithAggregatesInput | mandalsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"mandals"> | string
    label_english?: StringWithAggregatesFilter<"mandals"> | string
    label_telugu?: StringWithAggregatesFilter<"mandals"> | string
    created_at?: DateTimeWithAggregatesFilter<"mandals"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"mandals"> | Date | string
  }

  export type membersWhereInput = {
    AND?: membersWhereInput | membersWhereInput[]
    OR?: membersWhereInput[]
    NOT?: membersWhereInput | membersWhereInput[]
    id?: UuidFilter<"members"> | string
    full_name_english?: StringFilter<"members"> | string
    village_id?: UuidFilter<"members"> | string
    house_number?: StringFilter<"members"> | string
    phone_number?: StringFilter<"members"> | string
    husband_or_father_name?: StringFilter<"members"> | string
    created_at?: DateTimeFilter<"members"> | Date | string
    updated_at?: DateTimeFilter<"members"> | Date | string
    villages?: XOR<VillagesScalarRelationFilter, villagesWhereInput>
    transactions?: TransactionsListRelationFilter
  }

  export type membersOrderByWithRelationInput = {
    id?: SortOrder
    full_name_english?: SortOrder
    village_id?: SortOrder
    house_number?: SortOrder
    phone_number?: SortOrder
    husband_or_father_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    villages?: villagesOrderByWithRelationInput
    transactions?: transactionsOrderByRelationAggregateInput
  }

  export type membersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: membersWhereInput | membersWhereInput[]
    OR?: membersWhereInput[]
    NOT?: membersWhereInput | membersWhereInput[]
    full_name_english?: StringFilter<"members"> | string
    village_id?: UuidFilter<"members"> | string
    house_number?: StringFilter<"members"> | string
    phone_number?: StringFilter<"members"> | string
    husband_or_father_name?: StringFilter<"members"> | string
    created_at?: DateTimeFilter<"members"> | Date | string
    updated_at?: DateTimeFilter<"members"> | Date | string
    villages?: XOR<VillagesScalarRelationFilter, villagesWhereInput>
    transactions?: TransactionsListRelationFilter
  }, "id">

  export type membersOrderByWithAggregationInput = {
    id?: SortOrder
    full_name_english?: SortOrder
    village_id?: SortOrder
    house_number?: SortOrder
    phone_number?: SortOrder
    husband_or_father_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: membersCountOrderByAggregateInput
    _max?: membersMaxOrderByAggregateInput
    _min?: membersMinOrderByAggregateInput
  }

  export type membersScalarWhereWithAggregatesInput = {
    AND?: membersScalarWhereWithAggregatesInput | membersScalarWhereWithAggregatesInput[]
    OR?: membersScalarWhereWithAggregatesInput[]
    NOT?: membersScalarWhereWithAggregatesInput | membersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"members"> | string
    full_name_english?: StringWithAggregatesFilter<"members"> | string
    village_id?: UuidWithAggregatesFilter<"members"> | string
    house_number?: StringWithAggregatesFilter<"members"> | string
    phone_number?: StringWithAggregatesFilter<"members"> | string
    husband_or_father_name?: StringWithAggregatesFilter<"members"> | string
    created_at?: DateTimeWithAggregatesFilter<"members"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"members"> | Date | string
  }

  export type transactionsWhereInput = {
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    id?: UuidFilter<"transactions"> | string
    supervised_by?: UuidFilter<"transactions"> | string
    member?: UuidFilter<"transactions"> | string
    amount?: IntFilter<"transactions"> | number
    comments?: StringNullableFilter<"transactions"> | string | null
    transaction_date?: DateTimeFilter<"transactions"> | Date | string
    receipt_number?: StringFilter<"transactions"> | string
    created_at?: DateTimeFilter<"transactions"> | Date | string
    updated_at?: DateTimeFilter<"transactions"> | Date | string
    transaction_type_id?: UuidFilter<"transactions"> | string
    members?: XOR<MembersScalarRelationFilter, membersWhereInput>
    transaction_type?: XOR<Transaction_typesScalarRelationFilter, transaction_typesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type transactionsOrderByWithRelationInput = {
    id?: SortOrder
    supervised_by?: SortOrder
    member?: SortOrder
    amount?: SortOrder
    comments?: SortOrderInput | SortOrder
    transaction_date?: SortOrder
    receipt_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    transaction_type_id?: SortOrder
    members?: membersOrderByWithRelationInput
    transaction_type?: transaction_typesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type transactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    supervised_by?: UuidFilter<"transactions"> | string
    member?: UuidFilter<"transactions"> | string
    amount?: IntFilter<"transactions"> | number
    comments?: StringNullableFilter<"transactions"> | string | null
    transaction_date?: DateTimeFilter<"transactions"> | Date | string
    receipt_number?: StringFilter<"transactions"> | string
    created_at?: DateTimeFilter<"transactions"> | Date | string
    updated_at?: DateTimeFilter<"transactions"> | Date | string
    transaction_type_id?: UuidFilter<"transactions"> | string
    members?: XOR<MembersScalarRelationFilter, membersWhereInput>
    transaction_type?: XOR<Transaction_typesScalarRelationFilter, transaction_typesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type transactionsOrderByWithAggregationInput = {
    id?: SortOrder
    supervised_by?: SortOrder
    member?: SortOrder
    amount?: SortOrder
    comments?: SortOrderInput | SortOrder
    transaction_date?: SortOrder
    receipt_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    transaction_type_id?: SortOrder
    _count?: transactionsCountOrderByAggregateInput
    _avg?: transactionsAvgOrderByAggregateInput
    _max?: transactionsMaxOrderByAggregateInput
    _min?: transactionsMinOrderByAggregateInput
    _sum?: transactionsSumOrderByAggregateInput
  }

  export type transactionsScalarWhereWithAggregatesInput = {
    AND?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    OR?: transactionsScalarWhereWithAggregatesInput[]
    NOT?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"transactions"> | string
    supervised_by?: UuidWithAggregatesFilter<"transactions"> | string
    member?: UuidWithAggregatesFilter<"transactions"> | string
    amount?: IntWithAggregatesFilter<"transactions"> | number
    comments?: StringNullableWithAggregatesFilter<"transactions"> | string | null
    transaction_date?: DateTimeWithAggregatesFilter<"transactions"> | Date | string
    receipt_number?: StringWithAggregatesFilter<"transactions"> | string
    created_at?: DateTimeWithAggregatesFilter<"transactions"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"transactions"> | Date | string
    transaction_type_id?: UuidWithAggregatesFilter<"transactions"> | string
  }

  export type villagesWhereInput = {
    AND?: villagesWhereInput | villagesWhereInput[]
    OR?: villagesWhereInput[]
    NOT?: villagesWhereInput | villagesWhereInput[]
    id?: UuidFilter<"villages"> | string
    label_english?: StringFilter<"villages"> | string
    label_telugu?: StringFilter<"villages"> | string
    created_at?: DateTimeFilter<"villages"> | Date | string
    updated_at?: DateTimeFilter<"villages"> | Date | string
    mandal?: UuidFilter<"villages"> | string
    members?: MembersListRelationFilter
    mandals?: XOR<MandalsScalarRelationFilter, mandalsWhereInput>
  }

  export type villagesOrderByWithRelationInput = {
    id?: SortOrder
    label_english?: SortOrder
    label_telugu?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    mandal?: SortOrder
    members?: membersOrderByRelationAggregateInput
    mandals?: mandalsOrderByWithRelationInput
  }

  export type villagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: villagesWhereInput | villagesWhereInput[]
    OR?: villagesWhereInput[]
    NOT?: villagesWhereInput | villagesWhereInput[]
    label_english?: StringFilter<"villages"> | string
    label_telugu?: StringFilter<"villages"> | string
    created_at?: DateTimeFilter<"villages"> | Date | string
    updated_at?: DateTimeFilter<"villages"> | Date | string
    mandal?: UuidFilter<"villages"> | string
    members?: MembersListRelationFilter
    mandals?: XOR<MandalsScalarRelationFilter, mandalsWhereInput>
  }, "id">

  export type villagesOrderByWithAggregationInput = {
    id?: SortOrder
    label_english?: SortOrder
    label_telugu?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    mandal?: SortOrder
    _count?: villagesCountOrderByAggregateInput
    _max?: villagesMaxOrderByAggregateInput
    _min?: villagesMinOrderByAggregateInput
  }

  export type villagesScalarWhereWithAggregatesInput = {
    AND?: villagesScalarWhereWithAggregatesInput | villagesScalarWhereWithAggregatesInput[]
    OR?: villagesScalarWhereWithAggregatesInput[]
    NOT?: villagesScalarWhereWithAggregatesInput | villagesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"villages"> | string
    label_english?: StringWithAggregatesFilter<"villages"> | string
    label_telugu?: StringWithAggregatesFilter<"villages"> | string
    created_at?: DateTimeWithAggregatesFilter<"villages"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"villages"> | Date | string
    mandal?: UuidWithAggregatesFilter<"villages"> | string
  }

  export type transaction_typesWhereInput = {
    AND?: transaction_typesWhereInput | transaction_typesWhereInput[]
    OR?: transaction_typesWhereInput[]
    NOT?: transaction_typesWhereInput | transaction_typesWhereInput[]
    id?: UuidFilter<"transaction_types"> | string
    name?: StringFilter<"transaction_types"> | string
    label_english?: StringFilter<"transaction_types"> | string
    label_telugu?: StringFilter<"transaction_types"> | string
    description?: StringNullableFilter<"transaction_types"> | string | null
    is_active?: BoolFilter<"transaction_types"> | boolean
    created_at?: DateTimeFilter<"transaction_types"> | Date | string
    updated_at?: DateTimeFilter<"transaction_types"> | Date | string
    parent_id?: UuidNullableFilter<"transaction_types"> | string | null
    parent?: XOR<Transaction_typesNullableScalarRelationFilter, transaction_typesWhereInput> | null
    children?: Transaction_typesListRelationFilter
    transactions?: TransactionsListRelationFilter
  }

  export type transaction_typesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    label_english?: SortOrder
    label_telugu?: SortOrder
    description?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    parent?: transaction_typesOrderByWithRelationInput
    children?: transaction_typesOrderByRelationAggregateInput
    transactions?: transactionsOrderByRelationAggregateInput
  }

  export type transaction_typesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: transaction_typesWhereInput | transaction_typesWhereInput[]
    OR?: transaction_typesWhereInput[]
    NOT?: transaction_typesWhereInput | transaction_typesWhereInput[]
    label_english?: StringFilter<"transaction_types"> | string
    label_telugu?: StringFilter<"transaction_types"> | string
    description?: StringNullableFilter<"transaction_types"> | string | null
    is_active?: BoolFilter<"transaction_types"> | boolean
    created_at?: DateTimeFilter<"transaction_types"> | Date | string
    updated_at?: DateTimeFilter<"transaction_types"> | Date | string
    parent_id?: UuidNullableFilter<"transaction_types"> | string | null
    parent?: XOR<Transaction_typesNullableScalarRelationFilter, transaction_typesWhereInput> | null
    children?: Transaction_typesListRelationFilter
    transactions?: TransactionsListRelationFilter
  }, "id" | "name">

  export type transaction_typesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    label_english?: SortOrder
    label_telugu?: SortOrder
    description?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    _count?: transaction_typesCountOrderByAggregateInput
    _max?: transaction_typesMaxOrderByAggregateInput
    _min?: transaction_typesMinOrderByAggregateInput
  }

  export type transaction_typesScalarWhereWithAggregatesInput = {
    AND?: transaction_typesScalarWhereWithAggregatesInput | transaction_typesScalarWhereWithAggregatesInput[]
    OR?: transaction_typesScalarWhereWithAggregatesInput[]
    NOT?: transaction_typesScalarWhereWithAggregatesInput | transaction_typesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"transaction_types"> | string
    name?: StringWithAggregatesFilter<"transaction_types"> | string
    label_english?: StringWithAggregatesFilter<"transaction_types"> | string
    label_telugu?: StringWithAggregatesFilter<"transaction_types"> | string
    description?: StringNullableWithAggregatesFilter<"transaction_types"> | string | null
    is_active?: BoolWithAggregatesFilter<"transaction_types"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"transaction_types"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"transaction_types"> | Date | string
    parent_id?: UuidNullableWithAggregatesFilter<"transaction_types"> | string | null
  }

  export type endpointaccessWhereInput = {
    AND?: endpointaccessWhereInput | endpointaccessWhereInput[]
    OR?: endpointaccessWhereInput[]
    NOT?: endpointaccessWhereInput | endpointaccessWhereInput[]
    id?: BigIntFilter<"endpointaccess"> | bigint | number
    role?: StringFilter<"endpointaccess"> | string
    endpoint?: StringFilter<"endpointaccess"> | string
    viewer?: BoolNullableFilter<"endpointaccess"> | boolean | null
    contributor?: BoolNullableFilter<"endpointaccess"> | boolean | null
    admin?: BoolNullableFilter<"endpointaccess"> | boolean | null
    created_time?: DateTimeFilter<"endpointaccess"> | Date | string
  }

  export type endpointaccessOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    endpoint?: SortOrder
    viewer?: SortOrderInput | SortOrder
    contributor?: SortOrderInput | SortOrder
    admin?: SortOrderInput | SortOrder
    created_time?: SortOrder
  }

  export type endpointaccessWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    role_endpoint?: endpointaccessRoleEndpointCompoundUniqueInput
    AND?: endpointaccessWhereInput | endpointaccessWhereInput[]
    OR?: endpointaccessWhereInput[]
    NOT?: endpointaccessWhereInput | endpointaccessWhereInput[]
    role?: StringFilter<"endpointaccess"> | string
    endpoint?: StringFilter<"endpointaccess"> | string
    viewer?: BoolNullableFilter<"endpointaccess"> | boolean | null
    contributor?: BoolNullableFilter<"endpointaccess"> | boolean | null
    admin?: BoolNullableFilter<"endpointaccess"> | boolean | null
    created_time?: DateTimeFilter<"endpointaccess"> | Date | string
  }, "id" | "role_endpoint">

  export type endpointaccessOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    endpoint?: SortOrder
    viewer?: SortOrderInput | SortOrder
    contributor?: SortOrderInput | SortOrder
    admin?: SortOrderInput | SortOrder
    created_time?: SortOrder
    _count?: endpointaccessCountOrderByAggregateInput
    _avg?: endpointaccessAvgOrderByAggregateInput
    _max?: endpointaccessMaxOrderByAggregateInput
    _min?: endpointaccessMinOrderByAggregateInput
    _sum?: endpointaccessSumOrderByAggregateInput
  }

  export type endpointaccessScalarWhereWithAggregatesInput = {
    AND?: endpointaccessScalarWhereWithAggregatesInput | endpointaccessScalarWhereWithAggregatesInput[]
    OR?: endpointaccessScalarWhereWithAggregatesInput[]
    NOT?: endpointaccessScalarWhereWithAggregatesInput | endpointaccessScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"endpointaccess"> | bigint | number
    role?: StringWithAggregatesFilter<"endpointaccess"> | string
    endpoint?: StringWithAggregatesFilter<"endpointaccess"> | string
    viewer?: BoolNullableWithAggregatesFilter<"endpointaccess"> | boolean | null
    contributor?: BoolNullableWithAggregatesFilter<"endpointaccess"> | boolean | null
    admin?: BoolNullableWithAggregatesFilter<"endpointaccess"> | boolean | null
    created_time?: DateTimeWithAggregatesFilter<"endpointaccess"> | Date | string
  }

  export type usersCreateInput = {
    id: string
    name: string
    email: string
    external_id: string
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: transactionsCreateNestedManyWithoutUsersInput
    assigned_roles?: user_roles_mappingCreateNestedManyWithoutAssigned_by_userInput
    user_roles?: user_roles_mappingCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id: string
    name: string
    email: string
    external_id: string
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
    assigned_roles?: user_roles_mappingUncheckedCreateNestedManyWithoutAssigned_by_userInput
    user_roles?: user_roles_mappingUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
    assigned_roles?: user_roles_mappingUpdateManyWithoutAssigned_by_userNestedInput
    user_roles?: user_roles_mappingUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
    assigned_roles?: user_roles_mappingUncheckedUpdateManyWithoutAssigned_by_userNestedInput
    user_roles?: user_roles_mappingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id: string
    name: string
    email: string
    external_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rolesCreateInput = {
    id?: string
    name: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_roles?: user_roles_mappingCreateNestedManyWithoutRoleInput
  }

  export type rolesUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_roles?: user_roles_mappingUncheckedCreateNestedManyWithoutRoleInput
  }

  export type rolesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_roles?: user_roles_mappingUpdateManyWithoutRoleNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_roles?: user_roles_mappingUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type rolesCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type rolesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rolesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_roles_mappingCreateInput = {
    id?: string
    assigned_at?: Date | string
    is_active?: boolean
    expires_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    assigned_by_user?: usersCreateNestedOneWithoutAssigned_rolesInput
    role: rolesCreateNestedOneWithoutUser_rolesInput
    user: usersCreateNestedOneWithoutUser_rolesInput
  }

  export type user_roles_mappingUncheckedCreateInput = {
    id?: string
    user_id: string
    role_id: string
    assigned_by?: string | null
    assigned_at?: Date | string
    is_active?: boolean
    expires_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_roles_mappingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_by_user?: usersUpdateOneWithoutAssigned_rolesNestedInput
    role?: rolesUpdateOneRequiredWithoutUser_rolesNestedInput
    user?: usersUpdateOneRequiredWithoutUser_rolesNestedInput
  }

  export type user_roles_mappingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    assigned_by?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_roles_mappingCreateManyInput = {
    id?: string
    user_id: string
    role_id: string
    assigned_by?: string | null
    assigned_at?: Date | string
    is_active?: boolean
    expires_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_roles_mappingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_roles_mappingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    assigned_by?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mandalsCreateInput = {
    id: string
    label_english: string
    label_telugu: string
    created_at?: Date | string
    updated_at?: Date | string
    villages?: villagesCreateNestedManyWithoutMandalsInput
  }

  export type mandalsUncheckedCreateInput = {
    id: string
    label_english: string
    label_telugu: string
    created_at?: Date | string
    updated_at?: Date | string
    villages?: villagesUncheckedCreateNestedManyWithoutMandalsInput
  }

  export type mandalsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    villages?: villagesUpdateManyWithoutMandalsNestedInput
  }

  export type mandalsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    villages?: villagesUncheckedUpdateManyWithoutMandalsNestedInput
  }

  export type mandalsCreateManyInput = {
    id: string
    label_english: string
    label_telugu: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type mandalsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mandalsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type membersCreateInput = {
    id: string
    full_name_english: string
    house_number: string
    phone_number: string
    husband_or_father_name: string
    created_at?: Date | string
    updated_at?: Date | string
    villages: villagesCreateNestedOneWithoutMembersInput
    transactions?: transactionsCreateNestedManyWithoutMembersInput
  }

  export type membersUncheckedCreateInput = {
    id: string
    full_name_english: string
    village_id: string
    house_number: string
    phone_number: string
    husband_or_father_name: string
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: transactionsUncheckedCreateNestedManyWithoutMembersInput
  }

  export type membersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_english?: StringFieldUpdateOperationsInput | string
    house_number?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    husband_or_father_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    villages?: villagesUpdateOneRequiredWithoutMembersNestedInput
    transactions?: transactionsUpdateManyWithoutMembersNestedInput
  }

  export type membersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_english?: StringFieldUpdateOperationsInput | string
    village_id?: StringFieldUpdateOperationsInput | string
    house_number?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    husband_or_father_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type membersCreateManyInput = {
    id: string
    full_name_english: string
    village_id: string
    house_number: string
    phone_number: string
    husband_or_father_name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type membersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_english?: StringFieldUpdateOperationsInput | string
    house_number?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    husband_or_father_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type membersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_english?: StringFieldUpdateOperationsInput | string
    village_id?: StringFieldUpdateOperationsInput | string
    house_number?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    husband_or_father_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsCreateInput = {
    id?: string
    amount: number
    comments?: string | null
    transaction_date: Date | string
    receipt_number: string
    created_at?: Date | string
    updated_at?: Date | string
    members: membersCreateNestedOneWithoutTransactionsInput
    transaction_type: transaction_typesCreateNestedOneWithoutTransactionsInput
    users: usersCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateInput = {
    id?: string
    supervised_by: string
    member: string
    amount: number
    comments?: string | null
    transaction_date: Date | string
    receipt_number: string
    created_at?: Date | string
    updated_at?: Date | string
    transaction_type_id: string
  }

  export type transactionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: membersUpdateOneRequiredWithoutTransactionsNestedInput
    transaction_type?: transaction_typesUpdateOneRequiredWithoutTransactionsNestedInput
    users?: usersUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supervised_by?: StringFieldUpdateOperationsInput | string
    member?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type_id?: StringFieldUpdateOperationsInput | string
  }

  export type transactionsCreateManyInput = {
    id?: string
    supervised_by: string
    member: string
    amount: number
    comments?: string | null
    transaction_date: Date | string
    receipt_number: string
    created_at?: Date | string
    updated_at?: Date | string
    transaction_type_id: string
  }

  export type transactionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supervised_by?: StringFieldUpdateOperationsInput | string
    member?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type_id?: StringFieldUpdateOperationsInput | string
  }

  export type villagesCreateInput = {
    id: string
    label_english: string
    label_telugu: string
    created_at?: Date | string
    updated_at?: Date | string
    members?: membersCreateNestedManyWithoutVillagesInput
    mandals: mandalsCreateNestedOneWithoutVillagesInput
  }

  export type villagesUncheckedCreateInput = {
    id: string
    label_english: string
    label_telugu: string
    created_at?: Date | string
    updated_at?: Date | string
    mandal: string
    members?: membersUncheckedCreateNestedManyWithoutVillagesInput
  }

  export type villagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: membersUpdateManyWithoutVillagesNestedInput
    mandals?: mandalsUpdateOneRequiredWithoutVillagesNestedInput
  }

  export type villagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mandal?: StringFieldUpdateOperationsInput | string
    members?: membersUncheckedUpdateManyWithoutVillagesNestedInput
  }

  export type villagesCreateManyInput = {
    id: string
    label_english: string
    label_telugu: string
    created_at?: Date | string
    updated_at?: Date | string
    mandal: string
  }

  export type villagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type villagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mandal?: StringFieldUpdateOperationsInput | string
  }

  export type transaction_typesCreateInput = {
    id?: string
    name: string
    label_english: string
    label_telugu: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    parent?: transaction_typesCreateNestedOneWithoutChildrenInput
    children?: transaction_typesCreateNestedManyWithoutParentInput
    transactions?: transactionsCreateNestedManyWithoutTransaction_typeInput
  }

  export type transaction_typesUncheckedCreateInput = {
    id?: string
    name: string
    label_english: string
    label_telugu: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    parent_id?: string | null
    children?: transaction_typesUncheckedCreateNestedManyWithoutParentInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutTransaction_typeInput
  }

  export type transaction_typesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: transaction_typesUpdateOneWithoutChildrenNestedInput
    children?: transaction_typesUpdateManyWithoutParentNestedInput
    transactions?: transactionsUpdateManyWithoutTransaction_typeNestedInput
  }

  export type transaction_typesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    children?: transaction_typesUncheckedUpdateManyWithoutParentNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutTransaction_typeNestedInput
  }

  export type transaction_typesCreateManyInput = {
    id?: string
    name: string
    label_english: string
    label_telugu: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    parent_id?: string | null
  }

  export type transaction_typesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transaction_typesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type endpointaccessCreateInput = {
    id?: bigint | number
    role: string
    endpoint: string
    viewer?: boolean | null
    contributor?: boolean | null
    admin?: boolean | null
    created_time?: Date | string
  }

  export type endpointaccessUncheckedCreateInput = {
    id?: bigint | number
    role: string
    endpoint: string
    viewer?: boolean | null
    contributor?: boolean | null
    admin?: boolean | null
    created_time?: Date | string
  }

  export type endpointaccessUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    viewer?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contributor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type endpointaccessUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    viewer?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contributor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type endpointaccessCreateManyInput = {
    id?: bigint | number
    role: string
    endpoint: string
    viewer?: boolean | null
    contributor?: boolean | null
    admin?: boolean | null
    created_time?: Date | string
  }

  export type endpointaccessUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    viewer?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contributor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type endpointaccessUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    viewer?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contributor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type TransactionsListRelationFilter = {
    every?: transactionsWhereInput
    some?: transactionsWhereInput
    none?: transactionsWhereInput
  }

  export type User_roles_mappingListRelationFilter = {
    every?: user_roles_mappingWhereInput
    some?: user_roles_mappingWhereInput
    none?: user_roles_mappingWhereInput
  }

  export type transactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_roles_mappingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    external_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    external_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    external_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type rolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type RolesScalarRelationFilter = {
    is?: rolesWhereInput
    isNot?: rolesWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type user_roles_mappingUser_role_uniqueCompoundUniqueInput = {
    user_id: string
    role_id: string
  }

  export type user_roles_mappingCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    assigned_by?: SortOrder
    assigned_at?: SortOrder
    is_active?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_roles_mappingMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    assigned_by?: SortOrder
    assigned_at?: SortOrder
    is_active?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_roles_mappingMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    assigned_by?: SortOrder
    assigned_at?: SortOrder
    is_active?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type VillagesListRelationFilter = {
    every?: villagesWhereInput
    some?: villagesWhereInput
    none?: villagesWhereInput
  }

  export type villagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mandalsCountOrderByAggregateInput = {
    id?: SortOrder
    label_english?: SortOrder
    label_telugu?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type mandalsMaxOrderByAggregateInput = {
    id?: SortOrder
    label_english?: SortOrder
    label_telugu?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type mandalsMinOrderByAggregateInput = {
    id?: SortOrder
    label_english?: SortOrder
    label_telugu?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type VillagesScalarRelationFilter = {
    is?: villagesWhereInput
    isNot?: villagesWhereInput
  }

  export type membersCountOrderByAggregateInput = {
    id?: SortOrder
    full_name_english?: SortOrder
    village_id?: SortOrder
    house_number?: SortOrder
    phone_number?: SortOrder
    husband_or_father_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type membersMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name_english?: SortOrder
    village_id?: SortOrder
    house_number?: SortOrder
    phone_number?: SortOrder
    husband_or_father_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type membersMinOrderByAggregateInput = {
    id?: SortOrder
    full_name_english?: SortOrder
    village_id?: SortOrder
    house_number?: SortOrder
    phone_number?: SortOrder
    husband_or_father_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type MembersScalarRelationFilter = {
    is?: membersWhereInput
    isNot?: membersWhereInput
  }

  export type Transaction_typesScalarRelationFilter = {
    is?: transaction_typesWhereInput
    isNot?: transaction_typesWhereInput
  }

  export type transactionsCountOrderByAggregateInput = {
    id?: SortOrder
    supervised_by?: SortOrder
    member?: SortOrder
    amount?: SortOrder
    comments?: SortOrder
    transaction_date?: SortOrder
    receipt_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    transaction_type_id?: SortOrder
  }

  export type transactionsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type transactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    supervised_by?: SortOrder
    member?: SortOrder
    amount?: SortOrder
    comments?: SortOrder
    transaction_date?: SortOrder
    receipt_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    transaction_type_id?: SortOrder
  }

  export type transactionsMinOrderByAggregateInput = {
    id?: SortOrder
    supervised_by?: SortOrder
    member?: SortOrder
    amount?: SortOrder
    comments?: SortOrder
    transaction_date?: SortOrder
    receipt_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    transaction_type_id?: SortOrder
  }

  export type transactionsSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type MembersListRelationFilter = {
    every?: membersWhereInput
    some?: membersWhereInput
    none?: membersWhereInput
  }

  export type MandalsScalarRelationFilter = {
    is?: mandalsWhereInput
    isNot?: mandalsWhereInput
  }

  export type membersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type villagesCountOrderByAggregateInput = {
    id?: SortOrder
    label_english?: SortOrder
    label_telugu?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    mandal?: SortOrder
  }

  export type villagesMaxOrderByAggregateInput = {
    id?: SortOrder
    label_english?: SortOrder
    label_telugu?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    mandal?: SortOrder
  }

  export type villagesMinOrderByAggregateInput = {
    id?: SortOrder
    label_english?: SortOrder
    label_telugu?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    mandal?: SortOrder
  }

  export type Transaction_typesNullableScalarRelationFilter = {
    is?: transaction_typesWhereInput | null
    isNot?: transaction_typesWhereInput | null
  }

  export type Transaction_typesListRelationFilter = {
    every?: transaction_typesWhereInput
    some?: transaction_typesWhereInput
    none?: transaction_typesWhereInput
  }

  export type transaction_typesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transaction_typesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label_english?: SortOrder
    label_telugu?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    parent_id?: SortOrder
  }

  export type transaction_typesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label_english?: SortOrder
    label_telugu?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    parent_id?: SortOrder
  }

  export type transaction_typesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label_english?: SortOrder
    label_telugu?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    parent_id?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type endpointaccessRoleEndpointCompoundUniqueInput = {
    role: string
    endpoint: string
  }

  export type endpointaccessCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    endpoint?: SortOrder
    viewer?: SortOrder
    contributor?: SortOrder
    admin?: SortOrder
    created_time?: SortOrder
  }

  export type endpointaccessAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type endpointaccessMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    endpoint?: SortOrder
    viewer?: SortOrder
    contributor?: SortOrder
    admin?: SortOrder
    created_time?: SortOrder
  }

  export type endpointaccessMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    endpoint?: SortOrder
    viewer?: SortOrder
    contributor?: SortOrder
    admin?: SortOrder
    created_time?: SortOrder
  }

  export type endpointaccessSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type transactionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput> | transactionsCreateWithoutUsersInput[] | transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput | transactionsCreateOrConnectWithoutUsersInput[]
    createMany?: transactionsCreateManyUsersInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type user_roles_mappingCreateNestedManyWithoutAssigned_by_userInput = {
    create?: XOR<user_roles_mappingCreateWithoutAssigned_by_userInput, user_roles_mappingUncheckedCreateWithoutAssigned_by_userInput> | user_roles_mappingCreateWithoutAssigned_by_userInput[] | user_roles_mappingUncheckedCreateWithoutAssigned_by_userInput[]
    connectOrCreate?: user_roles_mappingCreateOrConnectWithoutAssigned_by_userInput | user_roles_mappingCreateOrConnectWithoutAssigned_by_userInput[]
    createMany?: user_roles_mappingCreateManyAssigned_by_userInputEnvelope
    connect?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
  }

  export type user_roles_mappingCreateNestedManyWithoutUserInput = {
    create?: XOR<user_roles_mappingCreateWithoutUserInput, user_roles_mappingUncheckedCreateWithoutUserInput> | user_roles_mappingCreateWithoutUserInput[] | user_roles_mappingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_roles_mappingCreateOrConnectWithoutUserInput | user_roles_mappingCreateOrConnectWithoutUserInput[]
    createMany?: user_roles_mappingCreateManyUserInputEnvelope
    connect?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput> | transactionsCreateWithoutUsersInput[] | transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput | transactionsCreateOrConnectWithoutUsersInput[]
    createMany?: transactionsCreateManyUsersInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type user_roles_mappingUncheckedCreateNestedManyWithoutAssigned_by_userInput = {
    create?: XOR<user_roles_mappingCreateWithoutAssigned_by_userInput, user_roles_mappingUncheckedCreateWithoutAssigned_by_userInput> | user_roles_mappingCreateWithoutAssigned_by_userInput[] | user_roles_mappingUncheckedCreateWithoutAssigned_by_userInput[]
    connectOrCreate?: user_roles_mappingCreateOrConnectWithoutAssigned_by_userInput | user_roles_mappingCreateOrConnectWithoutAssigned_by_userInput[]
    createMany?: user_roles_mappingCreateManyAssigned_by_userInputEnvelope
    connect?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
  }

  export type user_roles_mappingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_roles_mappingCreateWithoutUserInput, user_roles_mappingUncheckedCreateWithoutUserInput> | user_roles_mappingCreateWithoutUserInput[] | user_roles_mappingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_roles_mappingCreateOrConnectWithoutUserInput | user_roles_mappingCreateOrConnectWithoutUserInput[]
    createMany?: user_roles_mappingCreateManyUserInputEnvelope
    connect?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type transactionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput> | transactionsCreateWithoutUsersInput[] | transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput | transactionsCreateOrConnectWithoutUsersInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutUsersInput | transactionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: transactionsCreateManyUsersInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutUsersInput | transactionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutUsersInput | transactionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type user_roles_mappingUpdateManyWithoutAssigned_by_userNestedInput = {
    create?: XOR<user_roles_mappingCreateWithoutAssigned_by_userInput, user_roles_mappingUncheckedCreateWithoutAssigned_by_userInput> | user_roles_mappingCreateWithoutAssigned_by_userInput[] | user_roles_mappingUncheckedCreateWithoutAssigned_by_userInput[]
    connectOrCreate?: user_roles_mappingCreateOrConnectWithoutAssigned_by_userInput | user_roles_mappingCreateOrConnectWithoutAssigned_by_userInput[]
    upsert?: user_roles_mappingUpsertWithWhereUniqueWithoutAssigned_by_userInput | user_roles_mappingUpsertWithWhereUniqueWithoutAssigned_by_userInput[]
    createMany?: user_roles_mappingCreateManyAssigned_by_userInputEnvelope
    set?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    disconnect?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    delete?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    connect?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    update?: user_roles_mappingUpdateWithWhereUniqueWithoutAssigned_by_userInput | user_roles_mappingUpdateWithWhereUniqueWithoutAssigned_by_userInput[]
    updateMany?: user_roles_mappingUpdateManyWithWhereWithoutAssigned_by_userInput | user_roles_mappingUpdateManyWithWhereWithoutAssigned_by_userInput[]
    deleteMany?: user_roles_mappingScalarWhereInput | user_roles_mappingScalarWhereInput[]
  }

  export type user_roles_mappingUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_roles_mappingCreateWithoutUserInput, user_roles_mappingUncheckedCreateWithoutUserInput> | user_roles_mappingCreateWithoutUserInput[] | user_roles_mappingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_roles_mappingCreateOrConnectWithoutUserInput | user_roles_mappingCreateOrConnectWithoutUserInput[]
    upsert?: user_roles_mappingUpsertWithWhereUniqueWithoutUserInput | user_roles_mappingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_roles_mappingCreateManyUserInputEnvelope
    set?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    disconnect?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    delete?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    connect?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    update?: user_roles_mappingUpdateWithWhereUniqueWithoutUserInput | user_roles_mappingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_roles_mappingUpdateManyWithWhereWithoutUserInput | user_roles_mappingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_roles_mappingScalarWhereInput | user_roles_mappingScalarWhereInput[]
  }

  export type transactionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput> | transactionsCreateWithoutUsersInput[] | transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput | transactionsCreateOrConnectWithoutUsersInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutUsersInput | transactionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: transactionsCreateManyUsersInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutUsersInput | transactionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutUsersInput | transactionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type user_roles_mappingUncheckedUpdateManyWithoutAssigned_by_userNestedInput = {
    create?: XOR<user_roles_mappingCreateWithoutAssigned_by_userInput, user_roles_mappingUncheckedCreateWithoutAssigned_by_userInput> | user_roles_mappingCreateWithoutAssigned_by_userInput[] | user_roles_mappingUncheckedCreateWithoutAssigned_by_userInput[]
    connectOrCreate?: user_roles_mappingCreateOrConnectWithoutAssigned_by_userInput | user_roles_mappingCreateOrConnectWithoutAssigned_by_userInput[]
    upsert?: user_roles_mappingUpsertWithWhereUniqueWithoutAssigned_by_userInput | user_roles_mappingUpsertWithWhereUniqueWithoutAssigned_by_userInput[]
    createMany?: user_roles_mappingCreateManyAssigned_by_userInputEnvelope
    set?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    disconnect?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    delete?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    connect?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    update?: user_roles_mappingUpdateWithWhereUniqueWithoutAssigned_by_userInput | user_roles_mappingUpdateWithWhereUniqueWithoutAssigned_by_userInput[]
    updateMany?: user_roles_mappingUpdateManyWithWhereWithoutAssigned_by_userInput | user_roles_mappingUpdateManyWithWhereWithoutAssigned_by_userInput[]
    deleteMany?: user_roles_mappingScalarWhereInput | user_roles_mappingScalarWhereInput[]
  }

  export type user_roles_mappingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_roles_mappingCreateWithoutUserInput, user_roles_mappingUncheckedCreateWithoutUserInput> | user_roles_mappingCreateWithoutUserInput[] | user_roles_mappingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_roles_mappingCreateOrConnectWithoutUserInput | user_roles_mappingCreateOrConnectWithoutUserInput[]
    upsert?: user_roles_mappingUpsertWithWhereUniqueWithoutUserInput | user_roles_mappingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_roles_mappingCreateManyUserInputEnvelope
    set?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    disconnect?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    delete?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    connect?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    update?: user_roles_mappingUpdateWithWhereUniqueWithoutUserInput | user_roles_mappingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_roles_mappingUpdateManyWithWhereWithoutUserInput | user_roles_mappingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_roles_mappingScalarWhereInput | user_roles_mappingScalarWhereInput[]
  }

  export type user_roles_mappingCreateNestedManyWithoutRoleInput = {
    create?: XOR<user_roles_mappingCreateWithoutRoleInput, user_roles_mappingUncheckedCreateWithoutRoleInput> | user_roles_mappingCreateWithoutRoleInput[] | user_roles_mappingUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: user_roles_mappingCreateOrConnectWithoutRoleInput | user_roles_mappingCreateOrConnectWithoutRoleInput[]
    createMany?: user_roles_mappingCreateManyRoleInputEnvelope
    connect?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
  }

  export type user_roles_mappingUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<user_roles_mappingCreateWithoutRoleInput, user_roles_mappingUncheckedCreateWithoutRoleInput> | user_roles_mappingCreateWithoutRoleInput[] | user_roles_mappingUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: user_roles_mappingCreateOrConnectWithoutRoleInput | user_roles_mappingCreateOrConnectWithoutRoleInput[]
    createMany?: user_roles_mappingCreateManyRoleInputEnvelope
    connect?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type user_roles_mappingUpdateManyWithoutRoleNestedInput = {
    create?: XOR<user_roles_mappingCreateWithoutRoleInput, user_roles_mappingUncheckedCreateWithoutRoleInput> | user_roles_mappingCreateWithoutRoleInput[] | user_roles_mappingUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: user_roles_mappingCreateOrConnectWithoutRoleInput | user_roles_mappingCreateOrConnectWithoutRoleInput[]
    upsert?: user_roles_mappingUpsertWithWhereUniqueWithoutRoleInput | user_roles_mappingUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: user_roles_mappingCreateManyRoleInputEnvelope
    set?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    disconnect?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    delete?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    connect?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    update?: user_roles_mappingUpdateWithWhereUniqueWithoutRoleInput | user_roles_mappingUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: user_roles_mappingUpdateManyWithWhereWithoutRoleInput | user_roles_mappingUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: user_roles_mappingScalarWhereInput | user_roles_mappingScalarWhereInput[]
  }

  export type user_roles_mappingUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<user_roles_mappingCreateWithoutRoleInput, user_roles_mappingUncheckedCreateWithoutRoleInput> | user_roles_mappingCreateWithoutRoleInput[] | user_roles_mappingUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: user_roles_mappingCreateOrConnectWithoutRoleInput | user_roles_mappingCreateOrConnectWithoutRoleInput[]
    upsert?: user_roles_mappingUpsertWithWhereUniqueWithoutRoleInput | user_roles_mappingUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: user_roles_mappingCreateManyRoleInputEnvelope
    set?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    disconnect?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    delete?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    connect?: user_roles_mappingWhereUniqueInput | user_roles_mappingWhereUniqueInput[]
    update?: user_roles_mappingUpdateWithWhereUniqueWithoutRoleInput | user_roles_mappingUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: user_roles_mappingUpdateManyWithWhereWithoutRoleInput | user_roles_mappingUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: user_roles_mappingScalarWhereInput | user_roles_mappingScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutAssigned_rolesInput = {
    create?: XOR<usersCreateWithoutAssigned_rolesInput, usersUncheckedCreateWithoutAssigned_rolesInput>
    connectOrCreate?: usersCreateOrConnectWithoutAssigned_rolesInput
    connect?: usersWhereUniqueInput
  }

  export type rolesCreateNestedOneWithoutUser_rolesInput = {
    create?: XOR<rolesCreateWithoutUser_rolesInput, rolesUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUser_rolesInput
    connect?: rolesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_rolesInput = {
    create?: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_rolesInput
    connect?: usersWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneWithoutAssigned_rolesNestedInput = {
    create?: XOR<usersCreateWithoutAssigned_rolesInput, usersUncheckedCreateWithoutAssigned_rolesInput>
    connectOrCreate?: usersCreateOrConnectWithoutAssigned_rolesInput
    upsert?: usersUpsertWithoutAssigned_rolesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAssigned_rolesInput, usersUpdateWithoutAssigned_rolesInput>, usersUncheckedUpdateWithoutAssigned_rolesInput>
  }

  export type rolesUpdateOneRequiredWithoutUser_rolesNestedInput = {
    create?: XOR<rolesCreateWithoutUser_rolesInput, rolesUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUser_rolesInput
    upsert?: rolesUpsertWithoutUser_rolesInput
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutUser_rolesInput, rolesUpdateWithoutUser_rolesInput>, rolesUncheckedUpdateWithoutUser_rolesInput>
  }

  export type usersUpdateOneRequiredWithoutUser_rolesNestedInput = {
    create?: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_rolesInput
    upsert?: usersUpsertWithoutUser_rolesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_rolesInput, usersUpdateWithoutUser_rolesInput>, usersUncheckedUpdateWithoutUser_rolesInput>
  }

  export type villagesCreateNestedManyWithoutMandalsInput = {
    create?: XOR<villagesCreateWithoutMandalsInput, villagesUncheckedCreateWithoutMandalsInput> | villagesCreateWithoutMandalsInput[] | villagesUncheckedCreateWithoutMandalsInput[]
    connectOrCreate?: villagesCreateOrConnectWithoutMandalsInput | villagesCreateOrConnectWithoutMandalsInput[]
    createMany?: villagesCreateManyMandalsInputEnvelope
    connect?: villagesWhereUniqueInput | villagesWhereUniqueInput[]
  }

  export type villagesUncheckedCreateNestedManyWithoutMandalsInput = {
    create?: XOR<villagesCreateWithoutMandalsInput, villagesUncheckedCreateWithoutMandalsInput> | villagesCreateWithoutMandalsInput[] | villagesUncheckedCreateWithoutMandalsInput[]
    connectOrCreate?: villagesCreateOrConnectWithoutMandalsInput | villagesCreateOrConnectWithoutMandalsInput[]
    createMany?: villagesCreateManyMandalsInputEnvelope
    connect?: villagesWhereUniqueInput | villagesWhereUniqueInput[]
  }

  export type villagesUpdateManyWithoutMandalsNestedInput = {
    create?: XOR<villagesCreateWithoutMandalsInput, villagesUncheckedCreateWithoutMandalsInput> | villagesCreateWithoutMandalsInput[] | villagesUncheckedCreateWithoutMandalsInput[]
    connectOrCreate?: villagesCreateOrConnectWithoutMandalsInput | villagesCreateOrConnectWithoutMandalsInput[]
    upsert?: villagesUpsertWithWhereUniqueWithoutMandalsInput | villagesUpsertWithWhereUniqueWithoutMandalsInput[]
    createMany?: villagesCreateManyMandalsInputEnvelope
    set?: villagesWhereUniqueInput | villagesWhereUniqueInput[]
    disconnect?: villagesWhereUniqueInput | villagesWhereUniqueInput[]
    delete?: villagesWhereUniqueInput | villagesWhereUniqueInput[]
    connect?: villagesWhereUniqueInput | villagesWhereUniqueInput[]
    update?: villagesUpdateWithWhereUniqueWithoutMandalsInput | villagesUpdateWithWhereUniqueWithoutMandalsInput[]
    updateMany?: villagesUpdateManyWithWhereWithoutMandalsInput | villagesUpdateManyWithWhereWithoutMandalsInput[]
    deleteMany?: villagesScalarWhereInput | villagesScalarWhereInput[]
  }

  export type villagesUncheckedUpdateManyWithoutMandalsNestedInput = {
    create?: XOR<villagesCreateWithoutMandalsInput, villagesUncheckedCreateWithoutMandalsInput> | villagesCreateWithoutMandalsInput[] | villagesUncheckedCreateWithoutMandalsInput[]
    connectOrCreate?: villagesCreateOrConnectWithoutMandalsInput | villagesCreateOrConnectWithoutMandalsInput[]
    upsert?: villagesUpsertWithWhereUniqueWithoutMandalsInput | villagesUpsertWithWhereUniqueWithoutMandalsInput[]
    createMany?: villagesCreateManyMandalsInputEnvelope
    set?: villagesWhereUniqueInput | villagesWhereUniqueInput[]
    disconnect?: villagesWhereUniqueInput | villagesWhereUniqueInput[]
    delete?: villagesWhereUniqueInput | villagesWhereUniqueInput[]
    connect?: villagesWhereUniqueInput | villagesWhereUniqueInput[]
    update?: villagesUpdateWithWhereUniqueWithoutMandalsInput | villagesUpdateWithWhereUniqueWithoutMandalsInput[]
    updateMany?: villagesUpdateManyWithWhereWithoutMandalsInput | villagesUpdateManyWithWhereWithoutMandalsInput[]
    deleteMany?: villagesScalarWhereInput | villagesScalarWhereInput[]
  }

  export type villagesCreateNestedOneWithoutMembersInput = {
    create?: XOR<villagesCreateWithoutMembersInput, villagesUncheckedCreateWithoutMembersInput>
    connectOrCreate?: villagesCreateOrConnectWithoutMembersInput
    connect?: villagesWhereUniqueInput
  }

  export type transactionsCreateNestedManyWithoutMembersInput = {
    create?: XOR<transactionsCreateWithoutMembersInput, transactionsUncheckedCreateWithoutMembersInput> | transactionsCreateWithoutMembersInput[] | transactionsUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutMembersInput | transactionsCreateOrConnectWithoutMembersInput[]
    createMany?: transactionsCreateManyMembersInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<transactionsCreateWithoutMembersInput, transactionsUncheckedCreateWithoutMembersInput> | transactionsCreateWithoutMembersInput[] | transactionsUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutMembersInput | transactionsCreateOrConnectWithoutMembersInput[]
    createMany?: transactionsCreateManyMembersInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type villagesUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<villagesCreateWithoutMembersInput, villagesUncheckedCreateWithoutMembersInput>
    connectOrCreate?: villagesCreateOrConnectWithoutMembersInput
    upsert?: villagesUpsertWithoutMembersInput
    connect?: villagesWhereUniqueInput
    update?: XOR<XOR<villagesUpdateToOneWithWhereWithoutMembersInput, villagesUpdateWithoutMembersInput>, villagesUncheckedUpdateWithoutMembersInput>
  }

  export type transactionsUpdateManyWithoutMembersNestedInput = {
    create?: XOR<transactionsCreateWithoutMembersInput, transactionsUncheckedCreateWithoutMembersInput> | transactionsCreateWithoutMembersInput[] | transactionsUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutMembersInput | transactionsCreateOrConnectWithoutMembersInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutMembersInput | transactionsUpsertWithWhereUniqueWithoutMembersInput[]
    createMany?: transactionsCreateManyMembersInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutMembersInput | transactionsUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutMembersInput | transactionsUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type transactionsUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<transactionsCreateWithoutMembersInput, transactionsUncheckedCreateWithoutMembersInput> | transactionsCreateWithoutMembersInput[] | transactionsUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutMembersInput | transactionsCreateOrConnectWithoutMembersInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutMembersInput | transactionsUpsertWithWhereUniqueWithoutMembersInput[]
    createMany?: transactionsCreateManyMembersInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutMembersInput | transactionsUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutMembersInput | transactionsUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type membersCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<membersCreateWithoutTransactionsInput, membersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: membersCreateOrConnectWithoutTransactionsInput
    connect?: membersWhereUniqueInput
  }

  export type transaction_typesCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<transaction_typesCreateWithoutTransactionsInput, transaction_typesUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: transaction_typesCreateOrConnectWithoutTransactionsInput
    connect?: transaction_typesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransactionsInput
    connect?: usersWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type membersUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<membersCreateWithoutTransactionsInput, membersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: membersCreateOrConnectWithoutTransactionsInput
    upsert?: membersUpsertWithoutTransactionsInput
    connect?: membersWhereUniqueInput
    update?: XOR<XOR<membersUpdateToOneWithWhereWithoutTransactionsInput, membersUpdateWithoutTransactionsInput>, membersUncheckedUpdateWithoutTransactionsInput>
  }

  export type transaction_typesUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<transaction_typesCreateWithoutTransactionsInput, transaction_typesUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: transaction_typesCreateOrConnectWithoutTransactionsInput
    upsert?: transaction_typesUpsertWithoutTransactionsInput
    connect?: transaction_typesWhereUniqueInput
    update?: XOR<XOR<transaction_typesUpdateToOneWithWhereWithoutTransactionsInput, transaction_typesUpdateWithoutTransactionsInput>, transaction_typesUncheckedUpdateWithoutTransactionsInput>
  }

  export type usersUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransactionsInput
    upsert?: usersUpsertWithoutTransactionsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTransactionsInput, usersUpdateWithoutTransactionsInput>, usersUncheckedUpdateWithoutTransactionsInput>
  }

  export type membersCreateNestedManyWithoutVillagesInput = {
    create?: XOR<membersCreateWithoutVillagesInput, membersUncheckedCreateWithoutVillagesInput> | membersCreateWithoutVillagesInput[] | membersUncheckedCreateWithoutVillagesInput[]
    connectOrCreate?: membersCreateOrConnectWithoutVillagesInput | membersCreateOrConnectWithoutVillagesInput[]
    createMany?: membersCreateManyVillagesInputEnvelope
    connect?: membersWhereUniqueInput | membersWhereUniqueInput[]
  }

  export type mandalsCreateNestedOneWithoutVillagesInput = {
    create?: XOR<mandalsCreateWithoutVillagesInput, mandalsUncheckedCreateWithoutVillagesInput>
    connectOrCreate?: mandalsCreateOrConnectWithoutVillagesInput
    connect?: mandalsWhereUniqueInput
  }

  export type membersUncheckedCreateNestedManyWithoutVillagesInput = {
    create?: XOR<membersCreateWithoutVillagesInput, membersUncheckedCreateWithoutVillagesInput> | membersCreateWithoutVillagesInput[] | membersUncheckedCreateWithoutVillagesInput[]
    connectOrCreate?: membersCreateOrConnectWithoutVillagesInput | membersCreateOrConnectWithoutVillagesInput[]
    createMany?: membersCreateManyVillagesInputEnvelope
    connect?: membersWhereUniqueInput | membersWhereUniqueInput[]
  }

  export type membersUpdateManyWithoutVillagesNestedInput = {
    create?: XOR<membersCreateWithoutVillagesInput, membersUncheckedCreateWithoutVillagesInput> | membersCreateWithoutVillagesInput[] | membersUncheckedCreateWithoutVillagesInput[]
    connectOrCreate?: membersCreateOrConnectWithoutVillagesInput | membersCreateOrConnectWithoutVillagesInput[]
    upsert?: membersUpsertWithWhereUniqueWithoutVillagesInput | membersUpsertWithWhereUniqueWithoutVillagesInput[]
    createMany?: membersCreateManyVillagesInputEnvelope
    set?: membersWhereUniqueInput | membersWhereUniqueInput[]
    disconnect?: membersWhereUniqueInput | membersWhereUniqueInput[]
    delete?: membersWhereUniqueInput | membersWhereUniqueInput[]
    connect?: membersWhereUniqueInput | membersWhereUniqueInput[]
    update?: membersUpdateWithWhereUniqueWithoutVillagesInput | membersUpdateWithWhereUniqueWithoutVillagesInput[]
    updateMany?: membersUpdateManyWithWhereWithoutVillagesInput | membersUpdateManyWithWhereWithoutVillagesInput[]
    deleteMany?: membersScalarWhereInput | membersScalarWhereInput[]
  }

  export type mandalsUpdateOneRequiredWithoutVillagesNestedInput = {
    create?: XOR<mandalsCreateWithoutVillagesInput, mandalsUncheckedCreateWithoutVillagesInput>
    connectOrCreate?: mandalsCreateOrConnectWithoutVillagesInput
    upsert?: mandalsUpsertWithoutVillagesInput
    connect?: mandalsWhereUniqueInput
    update?: XOR<XOR<mandalsUpdateToOneWithWhereWithoutVillagesInput, mandalsUpdateWithoutVillagesInput>, mandalsUncheckedUpdateWithoutVillagesInput>
  }

  export type membersUncheckedUpdateManyWithoutVillagesNestedInput = {
    create?: XOR<membersCreateWithoutVillagesInput, membersUncheckedCreateWithoutVillagesInput> | membersCreateWithoutVillagesInput[] | membersUncheckedCreateWithoutVillagesInput[]
    connectOrCreate?: membersCreateOrConnectWithoutVillagesInput | membersCreateOrConnectWithoutVillagesInput[]
    upsert?: membersUpsertWithWhereUniqueWithoutVillagesInput | membersUpsertWithWhereUniqueWithoutVillagesInput[]
    createMany?: membersCreateManyVillagesInputEnvelope
    set?: membersWhereUniqueInput | membersWhereUniqueInput[]
    disconnect?: membersWhereUniqueInput | membersWhereUniqueInput[]
    delete?: membersWhereUniqueInput | membersWhereUniqueInput[]
    connect?: membersWhereUniqueInput | membersWhereUniqueInput[]
    update?: membersUpdateWithWhereUniqueWithoutVillagesInput | membersUpdateWithWhereUniqueWithoutVillagesInput[]
    updateMany?: membersUpdateManyWithWhereWithoutVillagesInput | membersUpdateManyWithWhereWithoutVillagesInput[]
    deleteMany?: membersScalarWhereInput | membersScalarWhereInput[]
  }

  export type transaction_typesCreateNestedOneWithoutChildrenInput = {
    create?: XOR<transaction_typesCreateWithoutChildrenInput, transaction_typesUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: transaction_typesCreateOrConnectWithoutChildrenInput
    connect?: transaction_typesWhereUniqueInput
  }

  export type transaction_typesCreateNestedManyWithoutParentInput = {
    create?: XOR<transaction_typesCreateWithoutParentInput, transaction_typesUncheckedCreateWithoutParentInput> | transaction_typesCreateWithoutParentInput[] | transaction_typesUncheckedCreateWithoutParentInput[]
    connectOrCreate?: transaction_typesCreateOrConnectWithoutParentInput | transaction_typesCreateOrConnectWithoutParentInput[]
    createMany?: transaction_typesCreateManyParentInputEnvelope
    connect?: transaction_typesWhereUniqueInput | transaction_typesWhereUniqueInput[]
  }

  export type transactionsCreateNestedManyWithoutTransaction_typeInput = {
    create?: XOR<transactionsCreateWithoutTransaction_typeInput, transactionsUncheckedCreateWithoutTransaction_typeInput> | transactionsCreateWithoutTransaction_typeInput[] | transactionsUncheckedCreateWithoutTransaction_typeInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutTransaction_typeInput | transactionsCreateOrConnectWithoutTransaction_typeInput[]
    createMany?: transactionsCreateManyTransaction_typeInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type transaction_typesUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<transaction_typesCreateWithoutParentInput, transaction_typesUncheckedCreateWithoutParentInput> | transaction_typesCreateWithoutParentInput[] | transaction_typesUncheckedCreateWithoutParentInput[]
    connectOrCreate?: transaction_typesCreateOrConnectWithoutParentInput | transaction_typesCreateOrConnectWithoutParentInput[]
    createMany?: transaction_typesCreateManyParentInputEnvelope
    connect?: transaction_typesWhereUniqueInput | transaction_typesWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutTransaction_typeInput = {
    create?: XOR<transactionsCreateWithoutTransaction_typeInput, transactionsUncheckedCreateWithoutTransaction_typeInput> | transactionsCreateWithoutTransaction_typeInput[] | transactionsUncheckedCreateWithoutTransaction_typeInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutTransaction_typeInput | transactionsCreateOrConnectWithoutTransaction_typeInput[]
    createMany?: transactionsCreateManyTransaction_typeInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type transaction_typesUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<transaction_typesCreateWithoutChildrenInput, transaction_typesUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: transaction_typesCreateOrConnectWithoutChildrenInput
    upsert?: transaction_typesUpsertWithoutChildrenInput
    disconnect?: transaction_typesWhereInput | boolean
    delete?: transaction_typesWhereInput | boolean
    connect?: transaction_typesWhereUniqueInput
    update?: XOR<XOR<transaction_typesUpdateToOneWithWhereWithoutChildrenInput, transaction_typesUpdateWithoutChildrenInput>, transaction_typesUncheckedUpdateWithoutChildrenInput>
  }

  export type transaction_typesUpdateManyWithoutParentNestedInput = {
    create?: XOR<transaction_typesCreateWithoutParentInput, transaction_typesUncheckedCreateWithoutParentInput> | transaction_typesCreateWithoutParentInput[] | transaction_typesUncheckedCreateWithoutParentInput[]
    connectOrCreate?: transaction_typesCreateOrConnectWithoutParentInput | transaction_typesCreateOrConnectWithoutParentInput[]
    upsert?: transaction_typesUpsertWithWhereUniqueWithoutParentInput | transaction_typesUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: transaction_typesCreateManyParentInputEnvelope
    set?: transaction_typesWhereUniqueInput | transaction_typesWhereUniqueInput[]
    disconnect?: transaction_typesWhereUniqueInput | transaction_typesWhereUniqueInput[]
    delete?: transaction_typesWhereUniqueInput | transaction_typesWhereUniqueInput[]
    connect?: transaction_typesWhereUniqueInput | transaction_typesWhereUniqueInput[]
    update?: transaction_typesUpdateWithWhereUniqueWithoutParentInput | transaction_typesUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: transaction_typesUpdateManyWithWhereWithoutParentInput | transaction_typesUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: transaction_typesScalarWhereInput | transaction_typesScalarWhereInput[]
  }

  export type transactionsUpdateManyWithoutTransaction_typeNestedInput = {
    create?: XOR<transactionsCreateWithoutTransaction_typeInput, transactionsUncheckedCreateWithoutTransaction_typeInput> | transactionsCreateWithoutTransaction_typeInput[] | transactionsUncheckedCreateWithoutTransaction_typeInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutTransaction_typeInput | transactionsCreateOrConnectWithoutTransaction_typeInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutTransaction_typeInput | transactionsUpsertWithWhereUniqueWithoutTransaction_typeInput[]
    createMany?: transactionsCreateManyTransaction_typeInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutTransaction_typeInput | transactionsUpdateWithWhereUniqueWithoutTransaction_typeInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutTransaction_typeInput | transactionsUpdateManyWithWhereWithoutTransaction_typeInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type transaction_typesUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<transaction_typesCreateWithoutParentInput, transaction_typesUncheckedCreateWithoutParentInput> | transaction_typesCreateWithoutParentInput[] | transaction_typesUncheckedCreateWithoutParentInput[]
    connectOrCreate?: transaction_typesCreateOrConnectWithoutParentInput | transaction_typesCreateOrConnectWithoutParentInput[]
    upsert?: transaction_typesUpsertWithWhereUniqueWithoutParentInput | transaction_typesUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: transaction_typesCreateManyParentInputEnvelope
    set?: transaction_typesWhereUniqueInput | transaction_typesWhereUniqueInput[]
    disconnect?: transaction_typesWhereUniqueInput | transaction_typesWhereUniqueInput[]
    delete?: transaction_typesWhereUniqueInput | transaction_typesWhereUniqueInput[]
    connect?: transaction_typesWhereUniqueInput | transaction_typesWhereUniqueInput[]
    update?: transaction_typesUpdateWithWhereUniqueWithoutParentInput | transaction_typesUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: transaction_typesUpdateManyWithWhereWithoutParentInput | transaction_typesUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: transaction_typesScalarWhereInput | transaction_typesScalarWhereInput[]
  }

  export type transactionsUncheckedUpdateManyWithoutTransaction_typeNestedInput = {
    create?: XOR<transactionsCreateWithoutTransaction_typeInput, transactionsUncheckedCreateWithoutTransaction_typeInput> | transactionsCreateWithoutTransaction_typeInput[] | transactionsUncheckedCreateWithoutTransaction_typeInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutTransaction_typeInput | transactionsCreateOrConnectWithoutTransaction_typeInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutTransaction_typeInput | transactionsUpsertWithWhereUniqueWithoutTransaction_typeInput[]
    createMany?: transactionsCreateManyTransaction_typeInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutTransaction_typeInput | transactionsUpdateWithWhereUniqueWithoutTransaction_typeInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutTransaction_typeInput | transactionsUpdateManyWithWhereWithoutTransaction_typeInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type transactionsCreateWithoutUsersInput = {
    id?: string
    amount: number
    comments?: string | null
    transaction_date: Date | string
    receipt_number: string
    created_at?: Date | string
    updated_at?: Date | string
    members: membersCreateNestedOneWithoutTransactionsInput
    transaction_type: transaction_typesCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutUsersInput = {
    id?: string
    member: string
    amount: number
    comments?: string | null
    transaction_date: Date | string
    receipt_number: string
    created_at?: Date | string
    updated_at?: Date | string
    transaction_type_id: string
  }

  export type transactionsCreateOrConnectWithoutUsersInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput>
  }

  export type transactionsCreateManyUsersInputEnvelope = {
    data: transactionsCreateManyUsersInput | transactionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_roles_mappingCreateWithoutAssigned_by_userInput = {
    id?: string
    assigned_at?: Date | string
    is_active?: boolean
    expires_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    role: rolesCreateNestedOneWithoutUser_rolesInput
    user: usersCreateNestedOneWithoutUser_rolesInput
  }

  export type user_roles_mappingUncheckedCreateWithoutAssigned_by_userInput = {
    id?: string
    user_id: string
    role_id: string
    assigned_at?: Date | string
    is_active?: boolean
    expires_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_roles_mappingCreateOrConnectWithoutAssigned_by_userInput = {
    where: user_roles_mappingWhereUniqueInput
    create: XOR<user_roles_mappingCreateWithoutAssigned_by_userInput, user_roles_mappingUncheckedCreateWithoutAssigned_by_userInput>
  }

  export type user_roles_mappingCreateManyAssigned_by_userInputEnvelope = {
    data: user_roles_mappingCreateManyAssigned_by_userInput | user_roles_mappingCreateManyAssigned_by_userInput[]
    skipDuplicates?: boolean
  }

  export type user_roles_mappingCreateWithoutUserInput = {
    id?: string
    assigned_at?: Date | string
    is_active?: boolean
    expires_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    assigned_by_user?: usersCreateNestedOneWithoutAssigned_rolesInput
    role: rolesCreateNestedOneWithoutUser_rolesInput
  }

  export type user_roles_mappingUncheckedCreateWithoutUserInput = {
    id?: string
    role_id: string
    assigned_by?: string | null
    assigned_at?: Date | string
    is_active?: boolean
    expires_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_roles_mappingCreateOrConnectWithoutUserInput = {
    where: user_roles_mappingWhereUniqueInput
    create: XOR<user_roles_mappingCreateWithoutUserInput, user_roles_mappingUncheckedCreateWithoutUserInput>
  }

  export type user_roles_mappingCreateManyUserInputEnvelope = {
    data: user_roles_mappingCreateManyUserInput | user_roles_mappingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type transactionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutUsersInput, transactionsUncheckedUpdateWithoutUsersInput>
    create: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutUsersInput, transactionsUncheckedUpdateWithoutUsersInput>
  }

  export type transactionsUpdateManyWithWhereWithoutUsersInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type transactionsScalarWhereInput = {
    AND?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
    OR?: transactionsScalarWhereInput[]
    NOT?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
    id?: UuidFilter<"transactions"> | string
    supervised_by?: UuidFilter<"transactions"> | string
    member?: UuidFilter<"transactions"> | string
    amount?: IntFilter<"transactions"> | number
    comments?: StringNullableFilter<"transactions"> | string | null
    transaction_date?: DateTimeFilter<"transactions"> | Date | string
    receipt_number?: StringFilter<"transactions"> | string
    created_at?: DateTimeFilter<"transactions"> | Date | string
    updated_at?: DateTimeFilter<"transactions"> | Date | string
    transaction_type_id?: UuidFilter<"transactions"> | string
  }

  export type user_roles_mappingUpsertWithWhereUniqueWithoutAssigned_by_userInput = {
    where: user_roles_mappingWhereUniqueInput
    update: XOR<user_roles_mappingUpdateWithoutAssigned_by_userInput, user_roles_mappingUncheckedUpdateWithoutAssigned_by_userInput>
    create: XOR<user_roles_mappingCreateWithoutAssigned_by_userInput, user_roles_mappingUncheckedCreateWithoutAssigned_by_userInput>
  }

  export type user_roles_mappingUpdateWithWhereUniqueWithoutAssigned_by_userInput = {
    where: user_roles_mappingWhereUniqueInput
    data: XOR<user_roles_mappingUpdateWithoutAssigned_by_userInput, user_roles_mappingUncheckedUpdateWithoutAssigned_by_userInput>
  }

  export type user_roles_mappingUpdateManyWithWhereWithoutAssigned_by_userInput = {
    where: user_roles_mappingScalarWhereInput
    data: XOR<user_roles_mappingUpdateManyMutationInput, user_roles_mappingUncheckedUpdateManyWithoutAssigned_by_userInput>
  }

  export type user_roles_mappingScalarWhereInput = {
    AND?: user_roles_mappingScalarWhereInput | user_roles_mappingScalarWhereInput[]
    OR?: user_roles_mappingScalarWhereInput[]
    NOT?: user_roles_mappingScalarWhereInput | user_roles_mappingScalarWhereInput[]
    id?: UuidFilter<"user_roles_mapping"> | string
    user_id?: UuidFilter<"user_roles_mapping"> | string
    role_id?: UuidFilter<"user_roles_mapping"> | string
    assigned_by?: UuidNullableFilter<"user_roles_mapping"> | string | null
    assigned_at?: DateTimeFilter<"user_roles_mapping"> | Date | string
    is_active?: BoolFilter<"user_roles_mapping"> | boolean
    expires_at?: DateTimeNullableFilter<"user_roles_mapping"> | Date | string | null
    created_at?: DateTimeFilter<"user_roles_mapping"> | Date | string
    updated_at?: DateTimeFilter<"user_roles_mapping"> | Date | string
  }

  export type user_roles_mappingUpsertWithWhereUniqueWithoutUserInput = {
    where: user_roles_mappingWhereUniqueInput
    update: XOR<user_roles_mappingUpdateWithoutUserInput, user_roles_mappingUncheckedUpdateWithoutUserInput>
    create: XOR<user_roles_mappingCreateWithoutUserInput, user_roles_mappingUncheckedCreateWithoutUserInput>
  }

  export type user_roles_mappingUpdateWithWhereUniqueWithoutUserInput = {
    where: user_roles_mappingWhereUniqueInput
    data: XOR<user_roles_mappingUpdateWithoutUserInput, user_roles_mappingUncheckedUpdateWithoutUserInput>
  }

  export type user_roles_mappingUpdateManyWithWhereWithoutUserInput = {
    where: user_roles_mappingScalarWhereInput
    data: XOR<user_roles_mappingUpdateManyMutationInput, user_roles_mappingUncheckedUpdateManyWithoutUserInput>
  }

  export type user_roles_mappingCreateWithoutRoleInput = {
    id?: string
    assigned_at?: Date | string
    is_active?: boolean
    expires_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    assigned_by_user?: usersCreateNestedOneWithoutAssigned_rolesInput
    user: usersCreateNestedOneWithoutUser_rolesInput
  }

  export type user_roles_mappingUncheckedCreateWithoutRoleInput = {
    id?: string
    user_id: string
    assigned_by?: string | null
    assigned_at?: Date | string
    is_active?: boolean
    expires_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_roles_mappingCreateOrConnectWithoutRoleInput = {
    where: user_roles_mappingWhereUniqueInput
    create: XOR<user_roles_mappingCreateWithoutRoleInput, user_roles_mappingUncheckedCreateWithoutRoleInput>
  }

  export type user_roles_mappingCreateManyRoleInputEnvelope = {
    data: user_roles_mappingCreateManyRoleInput | user_roles_mappingCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type user_roles_mappingUpsertWithWhereUniqueWithoutRoleInput = {
    where: user_roles_mappingWhereUniqueInput
    update: XOR<user_roles_mappingUpdateWithoutRoleInput, user_roles_mappingUncheckedUpdateWithoutRoleInput>
    create: XOR<user_roles_mappingCreateWithoutRoleInput, user_roles_mappingUncheckedCreateWithoutRoleInput>
  }

  export type user_roles_mappingUpdateWithWhereUniqueWithoutRoleInput = {
    where: user_roles_mappingWhereUniqueInput
    data: XOR<user_roles_mappingUpdateWithoutRoleInput, user_roles_mappingUncheckedUpdateWithoutRoleInput>
  }

  export type user_roles_mappingUpdateManyWithWhereWithoutRoleInput = {
    where: user_roles_mappingScalarWhereInput
    data: XOR<user_roles_mappingUpdateManyMutationInput, user_roles_mappingUncheckedUpdateManyWithoutRoleInput>
  }

  export type usersCreateWithoutAssigned_rolesInput = {
    id: string
    name: string
    email: string
    external_id: string
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: transactionsCreateNestedManyWithoutUsersInput
    user_roles?: user_roles_mappingCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutAssigned_rolesInput = {
    id: string
    name: string
    email: string
    external_id: string
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
    user_roles?: user_roles_mappingUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutAssigned_rolesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAssigned_rolesInput, usersUncheckedCreateWithoutAssigned_rolesInput>
  }

  export type rolesCreateWithoutUser_rolesInput = {
    id?: string
    name: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type rolesUncheckedCreateWithoutUser_rolesInput = {
    id?: string
    name: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type rolesCreateOrConnectWithoutUser_rolesInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUser_rolesInput, rolesUncheckedCreateWithoutUser_rolesInput>
  }

  export type usersCreateWithoutUser_rolesInput = {
    id: string
    name: string
    email: string
    external_id: string
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: transactionsCreateNestedManyWithoutUsersInput
    assigned_roles?: user_roles_mappingCreateNestedManyWithoutAssigned_by_userInput
  }

  export type usersUncheckedCreateWithoutUser_rolesInput = {
    id: string
    name: string
    email: string
    external_id: string
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
    assigned_roles?: user_roles_mappingUncheckedCreateNestedManyWithoutAssigned_by_userInput
  }

  export type usersCreateOrConnectWithoutUser_rolesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
  }

  export type usersUpsertWithoutAssigned_rolesInput = {
    update: XOR<usersUpdateWithoutAssigned_rolesInput, usersUncheckedUpdateWithoutAssigned_rolesInput>
    create: XOR<usersCreateWithoutAssigned_rolesInput, usersUncheckedCreateWithoutAssigned_rolesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAssigned_rolesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAssigned_rolesInput, usersUncheckedUpdateWithoutAssigned_rolesInput>
  }

  export type usersUpdateWithoutAssigned_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
    user_roles?: user_roles_mappingUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutAssigned_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
    user_roles?: user_roles_mappingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type rolesUpsertWithoutUser_rolesInput = {
    update: XOR<rolesUpdateWithoutUser_rolesInput, rolesUncheckedUpdateWithoutUser_rolesInput>
    create: XOR<rolesCreateWithoutUser_rolesInput, rolesUncheckedCreateWithoutUser_rolesInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutUser_rolesInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutUser_rolesInput, rolesUncheckedUpdateWithoutUser_rolesInput>
  }

  export type rolesUpdateWithoutUser_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rolesUncheckedUpdateWithoutUser_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUpsertWithoutUser_rolesInput = {
    update: XOR<usersUpdateWithoutUser_rolesInput, usersUncheckedUpdateWithoutUser_rolesInput>
    create: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_rolesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_rolesInput, usersUncheckedUpdateWithoutUser_rolesInput>
  }

  export type usersUpdateWithoutUser_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
    assigned_roles?: user_roles_mappingUpdateManyWithoutAssigned_by_userNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
    assigned_roles?: user_roles_mappingUncheckedUpdateManyWithoutAssigned_by_userNestedInput
  }

  export type villagesCreateWithoutMandalsInput = {
    id: string
    label_english: string
    label_telugu: string
    created_at?: Date | string
    updated_at?: Date | string
    members?: membersCreateNestedManyWithoutVillagesInput
  }

  export type villagesUncheckedCreateWithoutMandalsInput = {
    id: string
    label_english: string
    label_telugu: string
    created_at?: Date | string
    updated_at?: Date | string
    members?: membersUncheckedCreateNestedManyWithoutVillagesInput
  }

  export type villagesCreateOrConnectWithoutMandalsInput = {
    where: villagesWhereUniqueInput
    create: XOR<villagesCreateWithoutMandalsInput, villagesUncheckedCreateWithoutMandalsInput>
  }

  export type villagesCreateManyMandalsInputEnvelope = {
    data: villagesCreateManyMandalsInput | villagesCreateManyMandalsInput[]
    skipDuplicates?: boolean
  }

  export type villagesUpsertWithWhereUniqueWithoutMandalsInput = {
    where: villagesWhereUniqueInput
    update: XOR<villagesUpdateWithoutMandalsInput, villagesUncheckedUpdateWithoutMandalsInput>
    create: XOR<villagesCreateWithoutMandalsInput, villagesUncheckedCreateWithoutMandalsInput>
  }

  export type villagesUpdateWithWhereUniqueWithoutMandalsInput = {
    where: villagesWhereUniqueInput
    data: XOR<villagesUpdateWithoutMandalsInput, villagesUncheckedUpdateWithoutMandalsInput>
  }

  export type villagesUpdateManyWithWhereWithoutMandalsInput = {
    where: villagesScalarWhereInput
    data: XOR<villagesUpdateManyMutationInput, villagesUncheckedUpdateManyWithoutMandalsInput>
  }

  export type villagesScalarWhereInput = {
    AND?: villagesScalarWhereInput | villagesScalarWhereInput[]
    OR?: villagesScalarWhereInput[]
    NOT?: villagesScalarWhereInput | villagesScalarWhereInput[]
    id?: UuidFilter<"villages"> | string
    label_english?: StringFilter<"villages"> | string
    label_telugu?: StringFilter<"villages"> | string
    created_at?: DateTimeFilter<"villages"> | Date | string
    updated_at?: DateTimeFilter<"villages"> | Date | string
    mandal?: UuidFilter<"villages"> | string
  }

  export type villagesCreateWithoutMembersInput = {
    id: string
    label_english: string
    label_telugu: string
    created_at?: Date | string
    updated_at?: Date | string
    mandals: mandalsCreateNestedOneWithoutVillagesInput
  }

  export type villagesUncheckedCreateWithoutMembersInput = {
    id: string
    label_english: string
    label_telugu: string
    created_at?: Date | string
    updated_at?: Date | string
    mandal: string
  }

  export type villagesCreateOrConnectWithoutMembersInput = {
    where: villagesWhereUniqueInput
    create: XOR<villagesCreateWithoutMembersInput, villagesUncheckedCreateWithoutMembersInput>
  }

  export type transactionsCreateWithoutMembersInput = {
    id?: string
    amount: number
    comments?: string | null
    transaction_date: Date | string
    receipt_number: string
    created_at?: Date | string
    updated_at?: Date | string
    transaction_type: transaction_typesCreateNestedOneWithoutTransactionsInput
    users: usersCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutMembersInput = {
    id?: string
    supervised_by: string
    amount: number
    comments?: string | null
    transaction_date: Date | string
    receipt_number: string
    created_at?: Date | string
    updated_at?: Date | string
    transaction_type_id: string
  }

  export type transactionsCreateOrConnectWithoutMembersInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutMembersInput, transactionsUncheckedCreateWithoutMembersInput>
  }

  export type transactionsCreateManyMembersInputEnvelope = {
    data: transactionsCreateManyMembersInput | transactionsCreateManyMembersInput[]
    skipDuplicates?: boolean
  }

  export type villagesUpsertWithoutMembersInput = {
    update: XOR<villagesUpdateWithoutMembersInput, villagesUncheckedUpdateWithoutMembersInput>
    create: XOR<villagesCreateWithoutMembersInput, villagesUncheckedCreateWithoutMembersInput>
    where?: villagesWhereInput
  }

  export type villagesUpdateToOneWithWhereWithoutMembersInput = {
    where?: villagesWhereInput
    data: XOR<villagesUpdateWithoutMembersInput, villagesUncheckedUpdateWithoutMembersInput>
  }

  export type villagesUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mandals?: mandalsUpdateOneRequiredWithoutVillagesNestedInput
  }

  export type villagesUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mandal?: StringFieldUpdateOperationsInput | string
  }

  export type transactionsUpsertWithWhereUniqueWithoutMembersInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutMembersInput, transactionsUncheckedUpdateWithoutMembersInput>
    create: XOR<transactionsCreateWithoutMembersInput, transactionsUncheckedCreateWithoutMembersInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutMembersInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutMembersInput, transactionsUncheckedUpdateWithoutMembersInput>
  }

  export type transactionsUpdateManyWithWhereWithoutMembersInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutMembersInput>
  }

  export type membersCreateWithoutTransactionsInput = {
    id: string
    full_name_english: string
    house_number: string
    phone_number: string
    husband_or_father_name: string
    created_at?: Date | string
    updated_at?: Date | string
    villages: villagesCreateNestedOneWithoutMembersInput
  }

  export type membersUncheckedCreateWithoutTransactionsInput = {
    id: string
    full_name_english: string
    village_id: string
    house_number: string
    phone_number: string
    husband_or_father_name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type membersCreateOrConnectWithoutTransactionsInput = {
    where: membersWhereUniqueInput
    create: XOR<membersCreateWithoutTransactionsInput, membersUncheckedCreateWithoutTransactionsInput>
  }

  export type transaction_typesCreateWithoutTransactionsInput = {
    id?: string
    name: string
    label_english: string
    label_telugu: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    parent?: transaction_typesCreateNestedOneWithoutChildrenInput
    children?: transaction_typesCreateNestedManyWithoutParentInput
  }

  export type transaction_typesUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    label_english: string
    label_telugu: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    parent_id?: string | null
    children?: transaction_typesUncheckedCreateNestedManyWithoutParentInput
  }

  export type transaction_typesCreateOrConnectWithoutTransactionsInput = {
    where: transaction_typesWhereUniqueInput
    create: XOR<transaction_typesCreateWithoutTransactionsInput, transaction_typesUncheckedCreateWithoutTransactionsInput>
  }

  export type usersCreateWithoutTransactionsInput = {
    id: string
    name: string
    email: string
    external_id: string
    created_at?: Date | string
    updated_at?: Date | string
    assigned_roles?: user_roles_mappingCreateNestedManyWithoutAssigned_by_userInput
    user_roles?: user_roles_mappingCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutTransactionsInput = {
    id: string
    name: string
    email: string
    external_id: string
    created_at?: Date | string
    updated_at?: Date | string
    assigned_roles?: user_roles_mappingUncheckedCreateNestedManyWithoutAssigned_by_userInput
    user_roles?: user_roles_mappingUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutTransactionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
  }

  export type membersUpsertWithoutTransactionsInput = {
    update: XOR<membersUpdateWithoutTransactionsInput, membersUncheckedUpdateWithoutTransactionsInput>
    create: XOR<membersCreateWithoutTransactionsInput, membersUncheckedCreateWithoutTransactionsInput>
    where?: membersWhereInput
  }

  export type membersUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: membersWhereInput
    data: XOR<membersUpdateWithoutTransactionsInput, membersUncheckedUpdateWithoutTransactionsInput>
  }

  export type membersUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_english?: StringFieldUpdateOperationsInput | string
    house_number?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    husband_or_father_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    villages?: villagesUpdateOneRequiredWithoutMembersNestedInput
  }

  export type membersUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_english?: StringFieldUpdateOperationsInput | string
    village_id?: StringFieldUpdateOperationsInput | string
    house_number?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    husband_or_father_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transaction_typesUpsertWithoutTransactionsInput = {
    update: XOR<transaction_typesUpdateWithoutTransactionsInput, transaction_typesUncheckedUpdateWithoutTransactionsInput>
    create: XOR<transaction_typesCreateWithoutTransactionsInput, transaction_typesUncheckedCreateWithoutTransactionsInput>
    where?: transaction_typesWhereInput
  }

  export type transaction_typesUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: transaction_typesWhereInput
    data: XOR<transaction_typesUpdateWithoutTransactionsInput, transaction_typesUncheckedUpdateWithoutTransactionsInput>
  }

  export type transaction_typesUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: transaction_typesUpdateOneWithoutChildrenNestedInput
    children?: transaction_typesUpdateManyWithoutParentNestedInput
  }

  export type transaction_typesUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    children?: transaction_typesUncheckedUpdateManyWithoutParentNestedInput
  }

  export type usersUpsertWithoutTransactionsInput = {
    update: XOR<usersUpdateWithoutTransactionsInput, usersUncheckedUpdateWithoutTransactionsInput>
    create: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTransactionsInput, usersUncheckedUpdateWithoutTransactionsInput>
  }

  export type usersUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_roles?: user_roles_mappingUpdateManyWithoutAssigned_by_userNestedInput
    user_roles?: user_roles_mappingUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_roles?: user_roles_mappingUncheckedUpdateManyWithoutAssigned_by_userNestedInput
    user_roles?: user_roles_mappingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type membersCreateWithoutVillagesInput = {
    id: string
    full_name_english: string
    house_number: string
    phone_number: string
    husband_or_father_name: string
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: transactionsCreateNestedManyWithoutMembersInput
  }

  export type membersUncheckedCreateWithoutVillagesInput = {
    id: string
    full_name_english: string
    house_number: string
    phone_number: string
    husband_or_father_name: string
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: transactionsUncheckedCreateNestedManyWithoutMembersInput
  }

  export type membersCreateOrConnectWithoutVillagesInput = {
    where: membersWhereUniqueInput
    create: XOR<membersCreateWithoutVillagesInput, membersUncheckedCreateWithoutVillagesInput>
  }

  export type membersCreateManyVillagesInputEnvelope = {
    data: membersCreateManyVillagesInput | membersCreateManyVillagesInput[]
    skipDuplicates?: boolean
  }

  export type mandalsCreateWithoutVillagesInput = {
    id: string
    label_english: string
    label_telugu: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type mandalsUncheckedCreateWithoutVillagesInput = {
    id: string
    label_english: string
    label_telugu: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type mandalsCreateOrConnectWithoutVillagesInput = {
    where: mandalsWhereUniqueInput
    create: XOR<mandalsCreateWithoutVillagesInput, mandalsUncheckedCreateWithoutVillagesInput>
  }

  export type membersUpsertWithWhereUniqueWithoutVillagesInput = {
    where: membersWhereUniqueInput
    update: XOR<membersUpdateWithoutVillagesInput, membersUncheckedUpdateWithoutVillagesInput>
    create: XOR<membersCreateWithoutVillagesInput, membersUncheckedCreateWithoutVillagesInput>
  }

  export type membersUpdateWithWhereUniqueWithoutVillagesInput = {
    where: membersWhereUniqueInput
    data: XOR<membersUpdateWithoutVillagesInput, membersUncheckedUpdateWithoutVillagesInput>
  }

  export type membersUpdateManyWithWhereWithoutVillagesInput = {
    where: membersScalarWhereInput
    data: XOR<membersUpdateManyMutationInput, membersUncheckedUpdateManyWithoutVillagesInput>
  }

  export type membersScalarWhereInput = {
    AND?: membersScalarWhereInput | membersScalarWhereInput[]
    OR?: membersScalarWhereInput[]
    NOT?: membersScalarWhereInput | membersScalarWhereInput[]
    id?: UuidFilter<"members"> | string
    full_name_english?: StringFilter<"members"> | string
    village_id?: UuidFilter<"members"> | string
    house_number?: StringFilter<"members"> | string
    phone_number?: StringFilter<"members"> | string
    husband_or_father_name?: StringFilter<"members"> | string
    created_at?: DateTimeFilter<"members"> | Date | string
    updated_at?: DateTimeFilter<"members"> | Date | string
  }

  export type mandalsUpsertWithoutVillagesInput = {
    update: XOR<mandalsUpdateWithoutVillagesInput, mandalsUncheckedUpdateWithoutVillagesInput>
    create: XOR<mandalsCreateWithoutVillagesInput, mandalsUncheckedCreateWithoutVillagesInput>
    where?: mandalsWhereInput
  }

  export type mandalsUpdateToOneWithWhereWithoutVillagesInput = {
    where?: mandalsWhereInput
    data: XOR<mandalsUpdateWithoutVillagesInput, mandalsUncheckedUpdateWithoutVillagesInput>
  }

  export type mandalsUpdateWithoutVillagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mandalsUncheckedUpdateWithoutVillagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transaction_typesCreateWithoutChildrenInput = {
    id?: string
    name: string
    label_english: string
    label_telugu: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    parent?: transaction_typesCreateNestedOneWithoutChildrenInput
    transactions?: transactionsCreateNestedManyWithoutTransaction_typeInput
  }

  export type transaction_typesUncheckedCreateWithoutChildrenInput = {
    id?: string
    name: string
    label_english: string
    label_telugu: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    parent_id?: string | null
    transactions?: transactionsUncheckedCreateNestedManyWithoutTransaction_typeInput
  }

  export type transaction_typesCreateOrConnectWithoutChildrenInput = {
    where: transaction_typesWhereUniqueInput
    create: XOR<transaction_typesCreateWithoutChildrenInput, transaction_typesUncheckedCreateWithoutChildrenInput>
  }

  export type transaction_typesCreateWithoutParentInput = {
    id?: string
    name: string
    label_english: string
    label_telugu: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    children?: transaction_typesCreateNestedManyWithoutParentInput
    transactions?: transactionsCreateNestedManyWithoutTransaction_typeInput
  }

  export type transaction_typesUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    label_english: string
    label_telugu: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    children?: transaction_typesUncheckedCreateNestedManyWithoutParentInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutTransaction_typeInput
  }

  export type transaction_typesCreateOrConnectWithoutParentInput = {
    where: transaction_typesWhereUniqueInput
    create: XOR<transaction_typesCreateWithoutParentInput, transaction_typesUncheckedCreateWithoutParentInput>
  }

  export type transaction_typesCreateManyParentInputEnvelope = {
    data: transaction_typesCreateManyParentInput | transaction_typesCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type transactionsCreateWithoutTransaction_typeInput = {
    id?: string
    amount: number
    comments?: string | null
    transaction_date: Date | string
    receipt_number: string
    created_at?: Date | string
    updated_at?: Date | string
    members: membersCreateNestedOneWithoutTransactionsInput
    users: usersCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutTransaction_typeInput = {
    id?: string
    supervised_by: string
    member: string
    amount: number
    comments?: string | null
    transaction_date: Date | string
    receipt_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type transactionsCreateOrConnectWithoutTransaction_typeInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutTransaction_typeInput, transactionsUncheckedCreateWithoutTransaction_typeInput>
  }

  export type transactionsCreateManyTransaction_typeInputEnvelope = {
    data: transactionsCreateManyTransaction_typeInput | transactionsCreateManyTransaction_typeInput[]
    skipDuplicates?: boolean
  }

  export type transaction_typesUpsertWithoutChildrenInput = {
    update: XOR<transaction_typesUpdateWithoutChildrenInput, transaction_typesUncheckedUpdateWithoutChildrenInput>
    create: XOR<transaction_typesCreateWithoutChildrenInput, transaction_typesUncheckedCreateWithoutChildrenInput>
    where?: transaction_typesWhereInput
  }

  export type transaction_typesUpdateToOneWithWhereWithoutChildrenInput = {
    where?: transaction_typesWhereInput
    data: XOR<transaction_typesUpdateWithoutChildrenInput, transaction_typesUncheckedUpdateWithoutChildrenInput>
  }

  export type transaction_typesUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: transaction_typesUpdateOneWithoutChildrenNestedInput
    transactions?: transactionsUpdateManyWithoutTransaction_typeNestedInput
  }

  export type transaction_typesUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    transactions?: transactionsUncheckedUpdateManyWithoutTransaction_typeNestedInput
  }

  export type transaction_typesUpsertWithWhereUniqueWithoutParentInput = {
    where: transaction_typesWhereUniqueInput
    update: XOR<transaction_typesUpdateWithoutParentInput, transaction_typesUncheckedUpdateWithoutParentInput>
    create: XOR<transaction_typesCreateWithoutParentInput, transaction_typesUncheckedCreateWithoutParentInput>
  }

  export type transaction_typesUpdateWithWhereUniqueWithoutParentInput = {
    where: transaction_typesWhereUniqueInput
    data: XOR<transaction_typesUpdateWithoutParentInput, transaction_typesUncheckedUpdateWithoutParentInput>
  }

  export type transaction_typesUpdateManyWithWhereWithoutParentInput = {
    where: transaction_typesScalarWhereInput
    data: XOR<transaction_typesUpdateManyMutationInput, transaction_typesUncheckedUpdateManyWithoutParentInput>
  }

  export type transaction_typesScalarWhereInput = {
    AND?: transaction_typesScalarWhereInput | transaction_typesScalarWhereInput[]
    OR?: transaction_typesScalarWhereInput[]
    NOT?: transaction_typesScalarWhereInput | transaction_typesScalarWhereInput[]
    id?: UuidFilter<"transaction_types"> | string
    name?: StringFilter<"transaction_types"> | string
    label_english?: StringFilter<"transaction_types"> | string
    label_telugu?: StringFilter<"transaction_types"> | string
    description?: StringNullableFilter<"transaction_types"> | string | null
    is_active?: BoolFilter<"transaction_types"> | boolean
    created_at?: DateTimeFilter<"transaction_types"> | Date | string
    updated_at?: DateTimeFilter<"transaction_types"> | Date | string
    parent_id?: UuidNullableFilter<"transaction_types"> | string | null
  }

  export type transactionsUpsertWithWhereUniqueWithoutTransaction_typeInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutTransaction_typeInput, transactionsUncheckedUpdateWithoutTransaction_typeInput>
    create: XOR<transactionsCreateWithoutTransaction_typeInput, transactionsUncheckedCreateWithoutTransaction_typeInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutTransaction_typeInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutTransaction_typeInput, transactionsUncheckedUpdateWithoutTransaction_typeInput>
  }

  export type transactionsUpdateManyWithWhereWithoutTransaction_typeInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutTransaction_typeInput>
  }

  export type transactionsCreateManyUsersInput = {
    id?: string
    member: string
    amount: number
    comments?: string | null
    transaction_date: Date | string
    receipt_number: string
    created_at?: Date | string
    updated_at?: Date | string
    transaction_type_id: string
  }

  export type user_roles_mappingCreateManyAssigned_by_userInput = {
    id?: string
    user_id: string
    role_id: string
    assigned_at?: Date | string
    is_active?: boolean
    expires_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_roles_mappingCreateManyUserInput = {
    id?: string
    role_id: string
    assigned_by?: string | null
    assigned_at?: Date | string
    is_active?: boolean
    expires_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type transactionsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: membersUpdateOneRequiredWithoutTransactionsNestedInput
    transaction_type?: transaction_typesUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    member?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type_id?: StringFieldUpdateOperationsInput | string
  }

  export type transactionsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    member?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type_id?: StringFieldUpdateOperationsInput | string
  }

  export type user_roles_mappingUpdateWithoutAssigned_by_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneRequiredWithoutUser_rolesNestedInput
    user?: usersUpdateOneRequiredWithoutUser_rolesNestedInput
  }

  export type user_roles_mappingUncheckedUpdateWithoutAssigned_by_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_roles_mappingUncheckedUpdateManyWithoutAssigned_by_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_roles_mappingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_by_user?: usersUpdateOneWithoutAssigned_rolesNestedInput
    role?: rolesUpdateOneRequiredWithoutUser_rolesNestedInput
  }

  export type user_roles_mappingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    assigned_by?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_roles_mappingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    assigned_by?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_roles_mappingCreateManyRoleInput = {
    id?: string
    user_id: string
    assigned_by?: string | null
    assigned_at?: Date | string
    is_active?: boolean
    expires_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_roles_mappingUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_by_user?: usersUpdateOneWithoutAssigned_rolesNestedInput
    user?: usersUpdateOneRequiredWithoutUser_rolesNestedInput
  }

  export type user_roles_mappingUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    assigned_by?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_roles_mappingUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    assigned_by?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type villagesCreateManyMandalsInput = {
    id: string
    label_english: string
    label_telugu: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type villagesUpdateWithoutMandalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: membersUpdateManyWithoutVillagesNestedInput
  }

  export type villagesUncheckedUpdateWithoutMandalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: membersUncheckedUpdateManyWithoutVillagesNestedInput
  }

  export type villagesUncheckedUpdateManyWithoutMandalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsCreateManyMembersInput = {
    id?: string
    supervised_by: string
    amount: number
    comments?: string | null
    transaction_date: Date | string
    receipt_number: string
    created_at?: Date | string
    updated_at?: Date | string
    transaction_type_id: string
  }

  export type transactionsUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type?: transaction_typesUpdateOneRequiredWithoutTransactionsNestedInput
    users?: usersUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    supervised_by?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type_id?: StringFieldUpdateOperationsInput | string
  }

  export type transactionsUncheckedUpdateManyWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    supervised_by?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type_id?: StringFieldUpdateOperationsInput | string
  }

  export type membersCreateManyVillagesInput = {
    id: string
    full_name_english: string
    house_number: string
    phone_number: string
    husband_or_father_name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type membersUpdateWithoutVillagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_english?: StringFieldUpdateOperationsInput | string
    house_number?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    husband_or_father_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUpdateManyWithoutMembersNestedInput
  }

  export type membersUncheckedUpdateWithoutVillagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_english?: StringFieldUpdateOperationsInput | string
    house_number?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    husband_or_father_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type membersUncheckedUpdateManyWithoutVillagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_english?: StringFieldUpdateOperationsInput | string
    house_number?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    husband_or_father_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transaction_typesCreateManyParentInput = {
    id?: string
    name: string
    label_english: string
    label_telugu: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type transactionsCreateManyTransaction_typeInput = {
    id?: string
    supervised_by: string
    member: string
    amount: number
    comments?: string | null
    transaction_date: Date | string
    receipt_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type transaction_typesUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: transaction_typesUpdateManyWithoutParentNestedInput
    transactions?: transactionsUpdateManyWithoutTransaction_typeNestedInput
  }

  export type transaction_typesUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: transaction_typesUncheckedUpdateManyWithoutParentNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutTransaction_typeNestedInput
  }

  export type transaction_typesUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label_english?: StringFieldUpdateOperationsInput | string
    label_telugu?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUpdateWithoutTransaction_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: membersUpdateOneRequiredWithoutTransactionsNestedInput
    users?: usersUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutTransaction_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    supervised_by?: StringFieldUpdateOperationsInput | string
    member?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateManyWithoutTransaction_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    supervised_by?: StringFieldUpdateOperationsInput | string
    member?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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