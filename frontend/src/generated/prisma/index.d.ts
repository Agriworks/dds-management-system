
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
 * Model supervisors
 * 
 */
export type supervisors = $Result.DefaultSelection<Prisma.$supervisorsPayload>
/**
 * Model transactions
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type transactions = $Result.DefaultSelection<Prisma.$transactionsPayload>
/**
 * Model villages
 * 
 */
export type villages = $Result.DefaultSelection<Prisma.$villagesPayload>

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
 * // Fetch zero or more Mandals
 * const mandals = await prisma.mandals.findMany()
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
   * // Fetch zero or more Mandals
   * const mandals = await prisma.mandals.findMany()
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
   * `prisma.supervisors`: Exposes CRUD operations for the **supervisors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Supervisors
    * const supervisors = await prisma.supervisors.findMany()
    * ```
    */
  get supervisors(): Prisma.supervisorsDelegate<ExtArgs, ClientOptions>;

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
    mandals: 'mandals',
    members: 'members',
    supervisors: 'supervisors',
    transactions: 'transactions',
    villages: 'villages'
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
      modelProps: "mandals" | "members" | "supervisors" | "transactions" | "villages"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      supervisors: {
        payload: Prisma.$supervisorsPayload<ExtArgs>
        fields: Prisma.supervisorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.supervisorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.supervisorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorsPayload>
          }
          findFirst: {
            args: Prisma.supervisorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.supervisorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorsPayload>
          }
          findMany: {
            args: Prisma.supervisorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorsPayload>[]
          }
          create: {
            args: Prisma.supervisorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorsPayload>
          }
          createMany: {
            args: Prisma.supervisorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.supervisorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorsPayload>[]
          }
          delete: {
            args: Prisma.supervisorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorsPayload>
          }
          update: {
            args: Prisma.supervisorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorsPayload>
          }
          deleteMany: {
            args: Prisma.supervisorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.supervisorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.supervisorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorsPayload>[]
          }
          upsert: {
            args: Prisma.supervisorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorsPayload>
          }
          aggregate: {
            args: Prisma.SupervisorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupervisors>
          }
          groupBy: {
            args: Prisma.supervisorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupervisorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.supervisorsCountArgs<ExtArgs>
            result: $Utils.Optional<SupervisorsCountAggregateOutputType> | number
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
    mandals?: mandalsOmit
    members?: membersOmit
    supervisors?: supervisorsOmit
    transactions?: transactionsOmit
    villages?: villagesOmit
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
   * Count Type SupervisorsCountOutputType
   */

  export type SupervisorsCountOutputType = {
    transactions: number
  }

  export type SupervisorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | SupervisorsCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * SupervisorsCountOutputType without action
   */
  export type SupervisorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorsCountOutputType
     */
    select?: SupervisorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupervisorsCountOutputType without action
   */
  export type SupervisorsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Models
   */

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
   * Model supervisors
   */

  export type AggregateSupervisors = {
    _count: SupervisorsCountAggregateOutputType | null
    _min: SupervisorsMinAggregateOutputType | null
    _max: SupervisorsMaxAggregateOutputType | null
  }

  export type SupervisorsMinAggregateOutputType = {
    id: string | null
    full_name_english: string | null
    full_name_telugu: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SupervisorsMaxAggregateOutputType = {
    id: string | null
    full_name_english: string | null
    full_name_telugu: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SupervisorsCountAggregateOutputType = {
    id: number
    full_name_english: number
    full_name_telugu: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SupervisorsMinAggregateInputType = {
    id?: true
    full_name_english?: true
    full_name_telugu?: true
    created_at?: true
    updated_at?: true
  }

  export type SupervisorsMaxAggregateInputType = {
    id?: true
    full_name_english?: true
    full_name_telugu?: true
    created_at?: true
    updated_at?: true
  }

  export type SupervisorsCountAggregateInputType = {
    id?: true
    full_name_english?: true
    full_name_telugu?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SupervisorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supervisors to aggregate.
     */
    where?: supervisorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supervisors to fetch.
     */
    orderBy?: supervisorsOrderByWithRelationInput | supervisorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: supervisorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supervisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned supervisors
    **/
    _count?: true | SupervisorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupervisorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupervisorsMaxAggregateInputType
  }

  export type GetSupervisorsAggregateType<T extends SupervisorsAggregateArgs> = {
        [P in keyof T & keyof AggregateSupervisors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupervisors[P]>
      : GetScalarType<T[P], AggregateSupervisors[P]>
  }




  export type supervisorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: supervisorsWhereInput
    orderBy?: supervisorsOrderByWithAggregationInput | supervisorsOrderByWithAggregationInput[]
    by: SupervisorsScalarFieldEnum[] | SupervisorsScalarFieldEnum
    having?: supervisorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupervisorsCountAggregateInputType | true
    _min?: SupervisorsMinAggregateInputType
    _max?: SupervisorsMaxAggregateInputType
  }

  export type SupervisorsGroupByOutputType = {
    id: string
    full_name_english: string
    full_name_telugu: string
    created_at: Date
    updated_at: Date
    _count: SupervisorsCountAggregateOutputType | null
    _min: SupervisorsMinAggregateOutputType | null
    _max: SupervisorsMaxAggregateOutputType | null
  }

  type GetSupervisorsGroupByPayload<T extends supervisorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupervisorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupervisorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupervisorsGroupByOutputType[P]>
            : GetScalarType<T[P], SupervisorsGroupByOutputType[P]>
        }
      >
    >


  export type supervisorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name_english?: boolean
    full_name_telugu?: boolean
    created_at?: boolean
    updated_at?: boolean
    transactions?: boolean | supervisors$transactionsArgs<ExtArgs>
    _count?: boolean | SupervisorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supervisors"]>

  export type supervisorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name_english?: boolean
    full_name_telugu?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["supervisors"]>

  export type supervisorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name_english?: boolean
    full_name_telugu?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["supervisors"]>

  export type supervisorsSelectScalar = {
    id?: boolean
    full_name_english?: boolean
    full_name_telugu?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type supervisorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name_english" | "full_name_telugu" | "created_at" | "updated_at", ExtArgs["result"]["supervisors"]>
  export type supervisorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | supervisors$transactionsArgs<ExtArgs>
    _count?: boolean | SupervisorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type supervisorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type supervisorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $supervisorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "supervisors"
    objects: {
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      full_name_english: string
      full_name_telugu: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["supervisors"]>
    composites: {}
  }

  type supervisorsGetPayload<S extends boolean | null | undefined | supervisorsDefaultArgs> = $Result.GetResult<Prisma.$supervisorsPayload, S>

  type supervisorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<supervisorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupervisorsCountAggregateInputType | true
    }

  export interface supervisorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['supervisors'], meta: { name: 'supervisors' } }
    /**
     * Find zero or one Supervisors that matches the filter.
     * @param {supervisorsFindUniqueArgs} args - Arguments to find a Supervisors
     * @example
     * // Get one Supervisors
     * const supervisors = await prisma.supervisors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends supervisorsFindUniqueArgs>(args: SelectSubset<T, supervisorsFindUniqueArgs<ExtArgs>>): Prisma__supervisorsClient<$Result.GetResult<Prisma.$supervisorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supervisors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {supervisorsFindUniqueOrThrowArgs} args - Arguments to find a Supervisors
     * @example
     * // Get one Supervisors
     * const supervisors = await prisma.supervisors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends supervisorsFindUniqueOrThrowArgs>(args: SelectSubset<T, supervisorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__supervisorsClient<$Result.GetResult<Prisma.$supervisorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supervisors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supervisorsFindFirstArgs} args - Arguments to find a Supervisors
     * @example
     * // Get one Supervisors
     * const supervisors = await prisma.supervisors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends supervisorsFindFirstArgs>(args?: SelectSubset<T, supervisorsFindFirstArgs<ExtArgs>>): Prisma__supervisorsClient<$Result.GetResult<Prisma.$supervisorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supervisors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supervisorsFindFirstOrThrowArgs} args - Arguments to find a Supervisors
     * @example
     * // Get one Supervisors
     * const supervisors = await prisma.supervisors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends supervisorsFindFirstOrThrowArgs>(args?: SelectSubset<T, supervisorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__supervisorsClient<$Result.GetResult<Prisma.$supervisorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Supervisors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supervisorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Supervisors
     * const supervisors = await prisma.supervisors.findMany()
     * 
     * // Get first 10 Supervisors
     * const supervisors = await prisma.supervisors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supervisorsWithIdOnly = await prisma.supervisors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends supervisorsFindManyArgs>(args?: SelectSubset<T, supervisorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supervisorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supervisors.
     * @param {supervisorsCreateArgs} args - Arguments to create a Supervisors.
     * @example
     * // Create one Supervisors
     * const Supervisors = await prisma.supervisors.create({
     *   data: {
     *     // ... data to create a Supervisors
     *   }
     * })
     * 
     */
    create<T extends supervisorsCreateArgs>(args: SelectSubset<T, supervisorsCreateArgs<ExtArgs>>): Prisma__supervisorsClient<$Result.GetResult<Prisma.$supervisorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Supervisors.
     * @param {supervisorsCreateManyArgs} args - Arguments to create many Supervisors.
     * @example
     * // Create many Supervisors
     * const supervisors = await prisma.supervisors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends supervisorsCreateManyArgs>(args?: SelectSubset<T, supervisorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Supervisors and returns the data saved in the database.
     * @param {supervisorsCreateManyAndReturnArgs} args - Arguments to create many Supervisors.
     * @example
     * // Create many Supervisors
     * const supervisors = await prisma.supervisors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Supervisors and only return the `id`
     * const supervisorsWithIdOnly = await prisma.supervisors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends supervisorsCreateManyAndReturnArgs>(args?: SelectSubset<T, supervisorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supervisorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supervisors.
     * @param {supervisorsDeleteArgs} args - Arguments to delete one Supervisors.
     * @example
     * // Delete one Supervisors
     * const Supervisors = await prisma.supervisors.delete({
     *   where: {
     *     // ... filter to delete one Supervisors
     *   }
     * })
     * 
     */
    delete<T extends supervisorsDeleteArgs>(args: SelectSubset<T, supervisorsDeleteArgs<ExtArgs>>): Prisma__supervisorsClient<$Result.GetResult<Prisma.$supervisorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supervisors.
     * @param {supervisorsUpdateArgs} args - Arguments to update one Supervisors.
     * @example
     * // Update one Supervisors
     * const supervisors = await prisma.supervisors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends supervisorsUpdateArgs>(args: SelectSubset<T, supervisorsUpdateArgs<ExtArgs>>): Prisma__supervisorsClient<$Result.GetResult<Prisma.$supervisorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Supervisors.
     * @param {supervisorsDeleteManyArgs} args - Arguments to filter Supervisors to delete.
     * @example
     * // Delete a few Supervisors
     * const { count } = await prisma.supervisors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends supervisorsDeleteManyArgs>(args?: SelectSubset<T, supervisorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supervisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supervisorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Supervisors
     * const supervisors = await prisma.supervisors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends supervisorsUpdateManyArgs>(args: SelectSubset<T, supervisorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supervisors and returns the data updated in the database.
     * @param {supervisorsUpdateManyAndReturnArgs} args - Arguments to update many Supervisors.
     * @example
     * // Update many Supervisors
     * const supervisors = await prisma.supervisors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Supervisors and only return the `id`
     * const supervisorsWithIdOnly = await prisma.supervisors.updateManyAndReturn({
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
    updateManyAndReturn<T extends supervisorsUpdateManyAndReturnArgs>(args: SelectSubset<T, supervisorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supervisorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supervisors.
     * @param {supervisorsUpsertArgs} args - Arguments to update or create a Supervisors.
     * @example
     * // Update or create a Supervisors
     * const supervisors = await prisma.supervisors.upsert({
     *   create: {
     *     // ... data to create a Supervisors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supervisors we want to update
     *   }
     * })
     */
    upsert<T extends supervisorsUpsertArgs>(args: SelectSubset<T, supervisorsUpsertArgs<ExtArgs>>): Prisma__supervisorsClient<$Result.GetResult<Prisma.$supervisorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Supervisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supervisorsCountArgs} args - Arguments to filter Supervisors to count.
     * @example
     * // Count the number of Supervisors
     * const count = await prisma.supervisors.count({
     *   where: {
     *     // ... the filter for the Supervisors we want to count
     *   }
     * })
    **/
    count<T extends supervisorsCountArgs>(
      args?: Subset<T, supervisorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupervisorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supervisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupervisorsAggregateArgs>(args: Subset<T, SupervisorsAggregateArgs>): Prisma.PrismaPromise<GetSupervisorsAggregateType<T>>

    /**
     * Group by Supervisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supervisorsGroupByArgs} args - Group by arguments.
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
      T extends supervisorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: supervisorsGroupByArgs['orderBy'] }
        : { orderBy?: supervisorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, supervisorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupervisorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the supervisors model
   */
  readonly fields: supervisorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for supervisors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__supervisorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends supervisors$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, supervisors$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the supervisors model
   */
  interface supervisorsFieldRefs {
    readonly id: FieldRef<"supervisors", 'String'>
    readonly full_name_english: FieldRef<"supervisors", 'String'>
    readonly full_name_telugu: FieldRef<"supervisors", 'String'>
    readonly created_at: FieldRef<"supervisors", 'DateTime'>
    readonly updated_at: FieldRef<"supervisors", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * supervisors findUnique
   */
  export type supervisorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisors
     */
    select?: supervisorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supervisors
     */
    omit?: supervisorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorsInclude<ExtArgs> | null
    /**
     * Filter, which supervisors to fetch.
     */
    where: supervisorsWhereUniqueInput
  }

  /**
   * supervisors findUniqueOrThrow
   */
  export type supervisorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisors
     */
    select?: supervisorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supervisors
     */
    omit?: supervisorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorsInclude<ExtArgs> | null
    /**
     * Filter, which supervisors to fetch.
     */
    where: supervisorsWhereUniqueInput
  }

  /**
   * supervisors findFirst
   */
  export type supervisorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisors
     */
    select?: supervisorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supervisors
     */
    omit?: supervisorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorsInclude<ExtArgs> | null
    /**
     * Filter, which supervisors to fetch.
     */
    where?: supervisorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supervisors to fetch.
     */
    orderBy?: supervisorsOrderByWithRelationInput | supervisorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for supervisors.
     */
    cursor?: supervisorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supervisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of supervisors.
     */
    distinct?: SupervisorsScalarFieldEnum | SupervisorsScalarFieldEnum[]
  }

  /**
   * supervisors findFirstOrThrow
   */
  export type supervisorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisors
     */
    select?: supervisorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supervisors
     */
    omit?: supervisorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorsInclude<ExtArgs> | null
    /**
     * Filter, which supervisors to fetch.
     */
    where?: supervisorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supervisors to fetch.
     */
    orderBy?: supervisorsOrderByWithRelationInput | supervisorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for supervisors.
     */
    cursor?: supervisorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supervisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of supervisors.
     */
    distinct?: SupervisorsScalarFieldEnum | SupervisorsScalarFieldEnum[]
  }

  /**
   * supervisors findMany
   */
  export type supervisorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisors
     */
    select?: supervisorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supervisors
     */
    omit?: supervisorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorsInclude<ExtArgs> | null
    /**
     * Filter, which supervisors to fetch.
     */
    where?: supervisorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supervisors to fetch.
     */
    orderBy?: supervisorsOrderByWithRelationInput | supervisorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing supervisors.
     */
    cursor?: supervisorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supervisors.
     */
    skip?: number
    distinct?: SupervisorsScalarFieldEnum | SupervisorsScalarFieldEnum[]
  }

  /**
   * supervisors create
   */
  export type supervisorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisors
     */
    select?: supervisorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supervisors
     */
    omit?: supervisorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorsInclude<ExtArgs> | null
    /**
     * The data needed to create a supervisors.
     */
    data: XOR<supervisorsCreateInput, supervisorsUncheckedCreateInput>
  }

  /**
   * supervisors createMany
   */
  export type supervisorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many supervisors.
     */
    data: supervisorsCreateManyInput | supervisorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * supervisors createManyAndReturn
   */
  export type supervisorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisors
     */
    select?: supervisorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the supervisors
     */
    omit?: supervisorsOmit<ExtArgs> | null
    /**
     * The data used to create many supervisors.
     */
    data: supervisorsCreateManyInput | supervisorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * supervisors update
   */
  export type supervisorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisors
     */
    select?: supervisorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supervisors
     */
    omit?: supervisorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorsInclude<ExtArgs> | null
    /**
     * The data needed to update a supervisors.
     */
    data: XOR<supervisorsUpdateInput, supervisorsUncheckedUpdateInput>
    /**
     * Choose, which supervisors to update.
     */
    where: supervisorsWhereUniqueInput
  }

  /**
   * supervisors updateMany
   */
  export type supervisorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update supervisors.
     */
    data: XOR<supervisorsUpdateManyMutationInput, supervisorsUncheckedUpdateManyInput>
    /**
     * Filter which supervisors to update
     */
    where?: supervisorsWhereInput
    /**
     * Limit how many supervisors to update.
     */
    limit?: number
  }

  /**
   * supervisors updateManyAndReturn
   */
  export type supervisorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisors
     */
    select?: supervisorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the supervisors
     */
    omit?: supervisorsOmit<ExtArgs> | null
    /**
     * The data used to update supervisors.
     */
    data: XOR<supervisorsUpdateManyMutationInput, supervisorsUncheckedUpdateManyInput>
    /**
     * Filter which supervisors to update
     */
    where?: supervisorsWhereInput
    /**
     * Limit how many supervisors to update.
     */
    limit?: number
  }

  /**
   * supervisors upsert
   */
  export type supervisorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisors
     */
    select?: supervisorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supervisors
     */
    omit?: supervisorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorsInclude<ExtArgs> | null
    /**
     * The filter to search for the supervisors to update in case it exists.
     */
    where: supervisorsWhereUniqueInput
    /**
     * In case the supervisors found by the `where` argument doesn't exist, create a new supervisors with this data.
     */
    create: XOR<supervisorsCreateInput, supervisorsUncheckedCreateInput>
    /**
     * In case the supervisors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<supervisorsUpdateInput, supervisorsUncheckedUpdateInput>
  }

  /**
   * supervisors delete
   */
  export type supervisorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisors
     */
    select?: supervisorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supervisors
     */
    omit?: supervisorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorsInclude<ExtArgs> | null
    /**
     * Filter which supervisors to delete.
     */
    where: supervisorsWhereUniqueInput
  }

  /**
   * supervisors deleteMany
   */
  export type supervisorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supervisors to delete
     */
    where?: supervisorsWhereInput
    /**
     * Limit how many supervisors to delete.
     */
    limit?: number
  }

  /**
   * supervisors.transactions
   */
  export type supervisors$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * supervisors without action
   */
  export type supervisorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisors
     */
    select?: supervisorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supervisors
     */
    omit?: supervisorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorsInclude<ExtArgs> | null
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
    type: $Enums.transaction_type_enum | null
    amount: number | null
    comments: string | null
    loan_type: $Enums.loan_type_enum | null
    fund_type: $Enums.fund_type_enum | null
    transaction_date: Date | null
    recipet_number: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: string | null
    supervised_by: string | null
    member: string | null
    type: $Enums.transaction_type_enum | null
    amount: number | null
    comments: string | null
    loan_type: $Enums.loan_type_enum | null
    fund_type: $Enums.fund_type_enum | null
    transaction_date: Date | null
    recipet_number: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    supervised_by: number
    member: number
    type: number
    amount: number
    comments: number
    loan_type: number
    fund_type: number
    transaction_date: number
    recipet_number: number
    created_at: number
    updated_at: number
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
    type?: true
    amount?: true
    comments?: true
    loan_type?: true
    fund_type?: true
    transaction_date?: true
    recipet_number?: true
    created_at?: true
    updated_at?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    supervised_by?: true
    member?: true
    type?: true
    amount?: true
    comments?: true
    loan_type?: true
    fund_type?: true
    transaction_date?: true
    recipet_number?: true
    created_at?: true
    updated_at?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    supervised_by?: true
    member?: true
    type?: true
    amount?: true
    comments?: true
    loan_type?: true
    fund_type?: true
    transaction_date?: true
    recipet_number?: true
    created_at?: true
    updated_at?: true
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
    type: $Enums.transaction_type_enum
    amount: number
    comments: string | null
    loan_type: $Enums.loan_type_enum | null
    fund_type: $Enums.fund_type_enum | null
    transaction_date: Date
    recipet_number: string
    created_at: Date
    updated_at: Date
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
    type?: boolean
    amount?: boolean
    comments?: boolean
    loan_type?: boolean
    fund_type?: boolean
    transaction_date?: boolean
    recipet_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    members?: boolean | membersDefaultArgs<ExtArgs>
    supervisors?: boolean | supervisorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supervised_by?: boolean
    member?: boolean
    type?: boolean
    amount?: boolean
    comments?: boolean
    loan_type?: boolean
    fund_type?: boolean
    transaction_date?: boolean
    recipet_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    members?: boolean | membersDefaultArgs<ExtArgs>
    supervisors?: boolean | supervisorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supervised_by?: boolean
    member?: boolean
    type?: boolean
    amount?: boolean
    comments?: boolean
    loan_type?: boolean
    fund_type?: boolean
    transaction_date?: boolean
    recipet_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    members?: boolean | membersDefaultArgs<ExtArgs>
    supervisors?: boolean | supervisorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectScalar = {
    id?: boolean
    supervised_by?: boolean
    member?: boolean
    type?: boolean
    amount?: boolean
    comments?: boolean
    loan_type?: boolean
    fund_type?: boolean
    transaction_date?: boolean
    recipet_number?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type transactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supervised_by" | "member" | "type" | "amount" | "comments" | "loan_type" | "fund_type" | "transaction_date" | "recipet_number" | "created_at" | "updated_at", ExtArgs["result"]["transactions"]>
  export type transactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | membersDefaultArgs<ExtArgs>
    supervisors?: boolean | supervisorsDefaultArgs<ExtArgs>
  }
  export type transactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | membersDefaultArgs<ExtArgs>
    supervisors?: boolean | supervisorsDefaultArgs<ExtArgs>
  }
  export type transactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | membersDefaultArgs<ExtArgs>
    supervisors?: boolean | supervisorsDefaultArgs<ExtArgs>
  }

  export type $transactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transactions"
    objects: {
      members: Prisma.$membersPayload<ExtArgs>
      supervisors: Prisma.$supervisorsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supervised_by: string
      member: string
      type: $Enums.transaction_type_enum
      amount: number
      comments: string | null
      loan_type: $Enums.loan_type_enum | null
      fund_type: $Enums.fund_type_enum | null
      transaction_date: Date
      recipet_number: string
      created_at: Date
      updated_at: Date
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
    supervisors<T extends supervisorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, supervisorsDefaultArgs<ExtArgs>>): Prisma__supervisorsClient<$Result.GetResult<Prisma.$supervisorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly type: FieldRef<"transactions", 'transaction_type_enum'>
    readonly amount: FieldRef<"transactions", 'Int'>
    readonly comments: FieldRef<"transactions", 'String'>
    readonly loan_type: FieldRef<"transactions", 'loan_type_enum'>
    readonly fund_type: FieldRef<"transactions", 'fund_type_enum'>
    readonly transaction_date: FieldRef<"transactions", 'DateTime'>
    readonly recipet_number: FieldRef<"transactions", 'String'>
    readonly created_at: FieldRef<"transactions", 'DateTime'>
    readonly updated_at: FieldRef<"transactions", 'DateTime'>
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


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


  export const SupervisorsScalarFieldEnum: {
    id: 'id',
    full_name_english: 'full_name_english',
    full_name_telugu: 'full_name_telugu',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SupervisorsScalarFieldEnum = (typeof SupervisorsScalarFieldEnum)[keyof typeof SupervisorsScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    id: 'id',
    supervised_by: 'supervised_by',
    member: 'member',
    type: 'type',
    amount: 'amount',
    comments: 'comments',
    loan_type: 'loan_type',
    fund_type: 'fund_type',
    transaction_date: 'transaction_date',
    recipet_number: 'recipet_number',
    created_at: 'created_at',
    updated_at: 'updated_at'
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
   * Reference to a field of type 'transaction_type_enum'
   */
  export type Enumtransaction_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transaction_type_enum'>
    


  /**
   * Reference to a field of type 'transaction_type_enum[]'
   */
  export type ListEnumtransaction_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transaction_type_enum[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'loan_type_enum'
   */
  export type Enumloan_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'loan_type_enum'>
    


  /**
   * Reference to a field of type 'loan_type_enum[]'
   */
  export type ListEnumloan_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'loan_type_enum[]'>
    


  /**
   * Reference to a field of type 'fund_type_enum'
   */
  export type Enumfund_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'fund_type_enum'>
    


  /**
   * Reference to a field of type 'fund_type_enum[]'
   */
  export type ListEnumfund_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'fund_type_enum[]'>
    


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

  export type supervisorsWhereInput = {
    AND?: supervisorsWhereInput | supervisorsWhereInput[]
    OR?: supervisorsWhereInput[]
    NOT?: supervisorsWhereInput | supervisorsWhereInput[]
    id?: UuidFilter<"supervisors"> | string
    full_name_english?: StringFilter<"supervisors"> | string
    full_name_telugu?: StringFilter<"supervisors"> | string
    created_at?: DateTimeFilter<"supervisors"> | Date | string
    updated_at?: DateTimeFilter<"supervisors"> | Date | string
    transactions?: TransactionsListRelationFilter
  }

  export type supervisorsOrderByWithRelationInput = {
    id?: SortOrder
    full_name_english?: SortOrder
    full_name_telugu?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    transactions?: transactionsOrderByRelationAggregateInput
  }

  export type supervisorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: supervisorsWhereInput | supervisorsWhereInput[]
    OR?: supervisorsWhereInput[]
    NOT?: supervisorsWhereInput | supervisorsWhereInput[]
    full_name_english?: StringFilter<"supervisors"> | string
    full_name_telugu?: StringFilter<"supervisors"> | string
    created_at?: DateTimeFilter<"supervisors"> | Date | string
    updated_at?: DateTimeFilter<"supervisors"> | Date | string
    transactions?: TransactionsListRelationFilter
  }, "id">

  export type supervisorsOrderByWithAggregationInput = {
    id?: SortOrder
    full_name_english?: SortOrder
    full_name_telugu?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: supervisorsCountOrderByAggregateInput
    _max?: supervisorsMaxOrderByAggregateInput
    _min?: supervisorsMinOrderByAggregateInput
  }

  export type supervisorsScalarWhereWithAggregatesInput = {
    AND?: supervisorsScalarWhereWithAggregatesInput | supervisorsScalarWhereWithAggregatesInput[]
    OR?: supervisorsScalarWhereWithAggregatesInput[]
    NOT?: supervisorsScalarWhereWithAggregatesInput | supervisorsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"supervisors"> | string
    full_name_english?: StringWithAggregatesFilter<"supervisors"> | string
    full_name_telugu?: StringWithAggregatesFilter<"supervisors"> | string
    created_at?: DateTimeWithAggregatesFilter<"supervisors"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"supervisors"> | Date | string
  }

  export type transactionsWhereInput = {
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    id?: UuidFilter<"transactions"> | string
    supervised_by?: UuidFilter<"transactions"> | string
    member?: UuidFilter<"transactions"> | string
    type?: Enumtransaction_type_enumFilter<"transactions"> | $Enums.transaction_type_enum
    amount?: IntFilter<"transactions"> | number
    comments?: StringNullableFilter<"transactions"> | string | null
    loan_type?: Enumloan_type_enumNullableFilter<"transactions"> | $Enums.loan_type_enum | null
    fund_type?: Enumfund_type_enumNullableFilter<"transactions"> | $Enums.fund_type_enum | null
    transaction_date?: DateTimeFilter<"transactions"> | Date | string
    recipet_number?: StringFilter<"transactions"> | string
    created_at?: DateTimeFilter<"transactions"> | Date | string
    updated_at?: DateTimeFilter<"transactions"> | Date | string
    members?: XOR<MembersScalarRelationFilter, membersWhereInput>
    supervisors?: XOR<SupervisorsScalarRelationFilter, supervisorsWhereInput>
  }

  export type transactionsOrderByWithRelationInput = {
    id?: SortOrder
    supervised_by?: SortOrder
    member?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    comments?: SortOrderInput | SortOrder
    loan_type?: SortOrderInput | SortOrder
    fund_type?: SortOrderInput | SortOrder
    transaction_date?: SortOrder
    recipet_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    members?: membersOrderByWithRelationInput
    supervisors?: supervisorsOrderByWithRelationInput
  }

  export type transactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    supervised_by?: UuidFilter<"transactions"> | string
    member?: UuidFilter<"transactions"> | string
    type?: Enumtransaction_type_enumFilter<"transactions"> | $Enums.transaction_type_enum
    amount?: IntFilter<"transactions"> | number
    comments?: StringNullableFilter<"transactions"> | string | null
    loan_type?: Enumloan_type_enumNullableFilter<"transactions"> | $Enums.loan_type_enum | null
    fund_type?: Enumfund_type_enumNullableFilter<"transactions"> | $Enums.fund_type_enum | null
    transaction_date?: DateTimeFilter<"transactions"> | Date | string
    recipet_number?: StringFilter<"transactions"> | string
    created_at?: DateTimeFilter<"transactions"> | Date | string
    updated_at?: DateTimeFilter<"transactions"> | Date | string
    members?: XOR<MembersScalarRelationFilter, membersWhereInput>
    supervisors?: XOR<SupervisorsScalarRelationFilter, supervisorsWhereInput>
  }, "id">

  export type transactionsOrderByWithAggregationInput = {
    id?: SortOrder
    supervised_by?: SortOrder
    member?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    comments?: SortOrderInput | SortOrder
    loan_type?: SortOrderInput | SortOrder
    fund_type?: SortOrderInput | SortOrder
    transaction_date?: SortOrder
    recipet_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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
    type?: Enumtransaction_type_enumWithAggregatesFilter<"transactions"> | $Enums.transaction_type_enum
    amount?: IntWithAggregatesFilter<"transactions"> | number
    comments?: StringNullableWithAggregatesFilter<"transactions"> | string | null
    loan_type?: Enumloan_type_enumNullableWithAggregatesFilter<"transactions"> | $Enums.loan_type_enum | null
    fund_type?: Enumfund_type_enumNullableWithAggregatesFilter<"transactions"> | $Enums.fund_type_enum | null
    transaction_date?: DateTimeWithAggregatesFilter<"transactions"> | Date | string
    recipet_number?: StringWithAggregatesFilter<"transactions"> | string
    created_at?: DateTimeWithAggregatesFilter<"transactions"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"transactions"> | Date | string
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

  export type supervisorsCreateInput = {
    id: string
    full_name_english: string
    full_name_telugu: string
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: transactionsCreateNestedManyWithoutSupervisorsInput
  }

  export type supervisorsUncheckedCreateInput = {
    id: string
    full_name_english: string
    full_name_telugu: string
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: transactionsUncheckedCreateNestedManyWithoutSupervisorsInput
  }

  export type supervisorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_english?: StringFieldUpdateOperationsInput | string
    full_name_telugu?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUpdateManyWithoutSupervisorsNestedInput
  }

  export type supervisorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_english?: StringFieldUpdateOperationsInput | string
    full_name_telugu?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUncheckedUpdateManyWithoutSupervisorsNestedInput
  }

  export type supervisorsCreateManyInput = {
    id: string
    full_name_english: string
    full_name_telugu: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type supervisorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_english?: StringFieldUpdateOperationsInput | string
    full_name_telugu?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type supervisorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_english?: StringFieldUpdateOperationsInput | string
    full_name_telugu?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsCreateInput = {
    id: string
    type: $Enums.transaction_type_enum
    amount: number
    comments?: string | null
    loan_type?: $Enums.loan_type_enum | null
    fund_type?: $Enums.fund_type_enum | null
    transaction_date: Date | string
    recipet_number: string
    created_at?: Date | string
    updated_at?: Date | string
    members: membersCreateNestedOneWithoutTransactionsInput
    supervisors: supervisorsCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateInput = {
    id: string
    supervised_by: string
    member: string
    type: $Enums.transaction_type_enum
    amount: number
    comments?: string | null
    loan_type?: $Enums.loan_type_enum | null
    fund_type?: $Enums.fund_type_enum | null
    transaction_date: Date | string
    recipet_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type transactionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: Enumtransaction_type_enumFieldUpdateOperationsInput | $Enums.transaction_type_enum
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    loan_type?: NullableEnumloan_type_enumFieldUpdateOperationsInput | $Enums.loan_type_enum | null
    fund_type?: NullableEnumfund_type_enumFieldUpdateOperationsInput | $Enums.fund_type_enum | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    recipet_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: membersUpdateOneRequiredWithoutTransactionsNestedInput
    supervisors?: supervisorsUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supervised_by?: StringFieldUpdateOperationsInput | string
    member?: StringFieldUpdateOperationsInput | string
    type?: Enumtransaction_type_enumFieldUpdateOperationsInput | $Enums.transaction_type_enum
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    loan_type?: NullableEnumloan_type_enumFieldUpdateOperationsInput | $Enums.loan_type_enum | null
    fund_type?: NullableEnumfund_type_enumFieldUpdateOperationsInput | $Enums.fund_type_enum | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    recipet_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsCreateManyInput = {
    id: string
    supervised_by: string
    member: string
    type: $Enums.transaction_type_enum
    amount: number
    comments?: string | null
    loan_type?: $Enums.loan_type_enum | null
    fund_type?: $Enums.fund_type_enum | null
    transaction_date: Date | string
    recipet_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type transactionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: Enumtransaction_type_enumFieldUpdateOperationsInput | $Enums.transaction_type_enum
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    loan_type?: NullableEnumloan_type_enumFieldUpdateOperationsInput | $Enums.loan_type_enum | null
    fund_type?: NullableEnumfund_type_enumFieldUpdateOperationsInput | $Enums.fund_type_enum | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    recipet_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supervised_by?: StringFieldUpdateOperationsInput | string
    member?: StringFieldUpdateOperationsInput | string
    type?: Enumtransaction_type_enumFieldUpdateOperationsInput | $Enums.transaction_type_enum
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    loan_type?: NullableEnumloan_type_enumFieldUpdateOperationsInput | $Enums.loan_type_enum | null
    fund_type?: NullableEnumfund_type_enumFieldUpdateOperationsInput | $Enums.fund_type_enum | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    recipet_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type VillagesScalarRelationFilter = {
    is?: villagesWhereInput
    isNot?: villagesWhereInput
  }

  export type TransactionsListRelationFilter = {
    every?: transactionsWhereInput
    some?: transactionsWhereInput
    none?: transactionsWhereInput
  }

  export type transactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type supervisorsCountOrderByAggregateInput = {
    id?: SortOrder
    full_name_english?: SortOrder
    full_name_telugu?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type supervisorsMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name_english?: SortOrder
    full_name_telugu?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type supervisorsMinOrderByAggregateInput = {
    id?: SortOrder
    full_name_english?: SortOrder
    full_name_telugu?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Enumtransaction_type_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_type_enum | Enumtransaction_type_enumFieldRefInput<$PrismaModel>
    in?: $Enums.transaction_type_enum[] | ListEnumtransaction_type_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.transaction_type_enum[] | ListEnumtransaction_type_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumtransaction_type_enumFilter<$PrismaModel> | $Enums.transaction_type_enum
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

  export type Enumloan_type_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.loan_type_enum | Enumloan_type_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.loan_type_enum[] | ListEnumloan_type_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.loan_type_enum[] | ListEnumloan_type_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumloan_type_enumNullableFilter<$PrismaModel> | $Enums.loan_type_enum | null
  }

  export type Enumfund_type_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.fund_type_enum | Enumfund_type_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.fund_type_enum[] | ListEnumfund_type_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.fund_type_enum[] | ListEnumfund_type_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumfund_type_enumNullableFilter<$PrismaModel> | $Enums.fund_type_enum | null
  }

  export type MembersScalarRelationFilter = {
    is?: membersWhereInput
    isNot?: membersWhereInput
  }

  export type SupervisorsScalarRelationFilter = {
    is?: supervisorsWhereInput
    isNot?: supervisorsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type transactionsCountOrderByAggregateInput = {
    id?: SortOrder
    supervised_by?: SortOrder
    member?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    comments?: SortOrder
    loan_type?: SortOrder
    fund_type?: SortOrder
    transaction_date?: SortOrder
    recipet_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type transactionsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type transactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    supervised_by?: SortOrder
    member?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    comments?: SortOrder
    loan_type?: SortOrder
    fund_type?: SortOrder
    transaction_date?: SortOrder
    recipet_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type transactionsMinOrderByAggregateInput = {
    id?: SortOrder
    supervised_by?: SortOrder
    member?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    comments?: SortOrder
    loan_type?: SortOrder
    fund_type?: SortOrder
    transaction_date?: SortOrder
    recipet_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type transactionsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type Enumtransaction_type_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_type_enum | Enumtransaction_type_enumFieldRefInput<$PrismaModel>
    in?: $Enums.transaction_type_enum[] | ListEnumtransaction_type_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.transaction_type_enum[] | ListEnumtransaction_type_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumtransaction_type_enumWithAggregatesFilter<$PrismaModel> | $Enums.transaction_type_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransaction_type_enumFilter<$PrismaModel>
    _max?: NestedEnumtransaction_type_enumFilter<$PrismaModel>
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

  export type Enumloan_type_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.loan_type_enum | Enumloan_type_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.loan_type_enum[] | ListEnumloan_type_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.loan_type_enum[] | ListEnumloan_type_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumloan_type_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.loan_type_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumloan_type_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumloan_type_enumNullableFilter<$PrismaModel>
  }

  export type Enumfund_type_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.fund_type_enum | Enumfund_type_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.fund_type_enum[] | ListEnumfund_type_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.fund_type_enum[] | ListEnumfund_type_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumfund_type_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.fund_type_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumfund_type_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumfund_type_enumNullableFilter<$PrismaModel>
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type transactionsCreateNestedManyWithoutSupervisorsInput = {
    create?: XOR<transactionsCreateWithoutSupervisorsInput, transactionsUncheckedCreateWithoutSupervisorsInput> | transactionsCreateWithoutSupervisorsInput[] | transactionsUncheckedCreateWithoutSupervisorsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutSupervisorsInput | transactionsCreateOrConnectWithoutSupervisorsInput[]
    createMany?: transactionsCreateManySupervisorsInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutSupervisorsInput = {
    create?: XOR<transactionsCreateWithoutSupervisorsInput, transactionsUncheckedCreateWithoutSupervisorsInput> | transactionsCreateWithoutSupervisorsInput[] | transactionsUncheckedCreateWithoutSupervisorsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutSupervisorsInput | transactionsCreateOrConnectWithoutSupervisorsInput[]
    createMany?: transactionsCreateManySupervisorsInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type transactionsUpdateManyWithoutSupervisorsNestedInput = {
    create?: XOR<transactionsCreateWithoutSupervisorsInput, transactionsUncheckedCreateWithoutSupervisorsInput> | transactionsCreateWithoutSupervisorsInput[] | transactionsUncheckedCreateWithoutSupervisorsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutSupervisorsInput | transactionsCreateOrConnectWithoutSupervisorsInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutSupervisorsInput | transactionsUpsertWithWhereUniqueWithoutSupervisorsInput[]
    createMany?: transactionsCreateManySupervisorsInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutSupervisorsInput | transactionsUpdateWithWhereUniqueWithoutSupervisorsInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutSupervisorsInput | transactionsUpdateManyWithWhereWithoutSupervisorsInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type transactionsUncheckedUpdateManyWithoutSupervisorsNestedInput = {
    create?: XOR<transactionsCreateWithoutSupervisorsInput, transactionsUncheckedCreateWithoutSupervisorsInput> | transactionsCreateWithoutSupervisorsInput[] | transactionsUncheckedCreateWithoutSupervisorsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutSupervisorsInput | transactionsCreateOrConnectWithoutSupervisorsInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutSupervisorsInput | transactionsUpsertWithWhereUniqueWithoutSupervisorsInput[]
    createMany?: transactionsCreateManySupervisorsInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutSupervisorsInput | transactionsUpdateWithWhereUniqueWithoutSupervisorsInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutSupervisorsInput | transactionsUpdateManyWithWhereWithoutSupervisorsInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type membersCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<membersCreateWithoutTransactionsInput, membersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: membersCreateOrConnectWithoutTransactionsInput
    connect?: membersWhereUniqueInput
  }

  export type supervisorsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<supervisorsCreateWithoutTransactionsInput, supervisorsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: supervisorsCreateOrConnectWithoutTransactionsInput
    connect?: supervisorsWhereUniqueInput
  }

  export type Enumtransaction_type_enumFieldUpdateOperationsInput = {
    set?: $Enums.transaction_type_enum
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumloan_type_enumFieldUpdateOperationsInput = {
    set?: $Enums.loan_type_enum | null
  }

  export type NullableEnumfund_type_enumFieldUpdateOperationsInput = {
    set?: $Enums.fund_type_enum | null
  }

  export type membersUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<membersCreateWithoutTransactionsInput, membersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: membersCreateOrConnectWithoutTransactionsInput
    upsert?: membersUpsertWithoutTransactionsInput
    connect?: membersWhereUniqueInput
    update?: XOR<XOR<membersUpdateToOneWithWhereWithoutTransactionsInput, membersUpdateWithoutTransactionsInput>, membersUncheckedUpdateWithoutTransactionsInput>
  }

  export type supervisorsUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<supervisorsCreateWithoutTransactionsInput, supervisorsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: supervisorsCreateOrConnectWithoutTransactionsInput
    upsert?: supervisorsUpsertWithoutTransactionsInput
    connect?: supervisorsWhereUniqueInput
    update?: XOR<XOR<supervisorsUpdateToOneWithWhereWithoutTransactionsInput, supervisorsUpdateWithoutTransactionsInput>, supervisorsUncheckedUpdateWithoutTransactionsInput>
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

  export type NestedEnumtransaction_type_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_type_enum | Enumtransaction_type_enumFieldRefInput<$PrismaModel>
    in?: $Enums.transaction_type_enum[] | ListEnumtransaction_type_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.transaction_type_enum[] | ListEnumtransaction_type_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumtransaction_type_enumFilter<$PrismaModel> | $Enums.transaction_type_enum
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

  export type NestedEnumloan_type_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.loan_type_enum | Enumloan_type_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.loan_type_enum[] | ListEnumloan_type_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.loan_type_enum[] | ListEnumloan_type_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumloan_type_enumNullableFilter<$PrismaModel> | $Enums.loan_type_enum | null
  }

  export type NestedEnumfund_type_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.fund_type_enum | Enumfund_type_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.fund_type_enum[] | ListEnumfund_type_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.fund_type_enum[] | ListEnumfund_type_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumfund_type_enumNullableFilter<$PrismaModel> | $Enums.fund_type_enum | null
  }

  export type NestedEnumtransaction_type_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_type_enum | Enumtransaction_type_enumFieldRefInput<$PrismaModel>
    in?: $Enums.transaction_type_enum[] | ListEnumtransaction_type_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.transaction_type_enum[] | ListEnumtransaction_type_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumtransaction_type_enumWithAggregatesFilter<$PrismaModel> | $Enums.transaction_type_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransaction_type_enumFilter<$PrismaModel>
    _max?: NestedEnumtransaction_type_enumFilter<$PrismaModel>
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

  export type NestedEnumloan_type_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.loan_type_enum | Enumloan_type_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.loan_type_enum[] | ListEnumloan_type_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.loan_type_enum[] | ListEnumloan_type_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumloan_type_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.loan_type_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumloan_type_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumloan_type_enumNullableFilter<$PrismaModel>
  }

  export type NestedEnumfund_type_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.fund_type_enum | Enumfund_type_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.fund_type_enum[] | ListEnumfund_type_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.fund_type_enum[] | ListEnumfund_type_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumfund_type_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.fund_type_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumfund_type_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumfund_type_enumNullableFilter<$PrismaModel>
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
    id: string
    type: $Enums.transaction_type_enum
    amount: number
    comments?: string | null
    loan_type?: $Enums.loan_type_enum | null
    fund_type?: $Enums.fund_type_enum | null
    transaction_date: Date | string
    recipet_number: string
    created_at?: Date | string
    updated_at?: Date | string
    supervisors: supervisorsCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutMembersInput = {
    id: string
    supervised_by: string
    type: $Enums.transaction_type_enum
    amount: number
    comments?: string | null
    loan_type?: $Enums.loan_type_enum | null
    fund_type?: $Enums.fund_type_enum | null
    transaction_date: Date | string
    recipet_number: string
    created_at?: Date | string
    updated_at?: Date | string
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

  export type transactionsScalarWhereInput = {
    AND?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
    OR?: transactionsScalarWhereInput[]
    NOT?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
    id?: UuidFilter<"transactions"> | string
    supervised_by?: UuidFilter<"transactions"> | string
    member?: UuidFilter<"transactions"> | string
    type?: Enumtransaction_type_enumFilter<"transactions"> | $Enums.transaction_type_enum
    amount?: IntFilter<"transactions"> | number
    comments?: StringNullableFilter<"transactions"> | string | null
    loan_type?: Enumloan_type_enumNullableFilter<"transactions"> | $Enums.loan_type_enum | null
    fund_type?: Enumfund_type_enumNullableFilter<"transactions"> | $Enums.fund_type_enum | null
    transaction_date?: DateTimeFilter<"transactions"> | Date | string
    recipet_number?: StringFilter<"transactions"> | string
    created_at?: DateTimeFilter<"transactions"> | Date | string
    updated_at?: DateTimeFilter<"transactions"> | Date | string
  }

  export type transactionsCreateWithoutSupervisorsInput = {
    id: string
    type: $Enums.transaction_type_enum
    amount: number
    comments?: string | null
    loan_type?: $Enums.loan_type_enum | null
    fund_type?: $Enums.fund_type_enum | null
    transaction_date: Date | string
    recipet_number: string
    created_at?: Date | string
    updated_at?: Date | string
    members: membersCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutSupervisorsInput = {
    id: string
    member: string
    type: $Enums.transaction_type_enum
    amount: number
    comments?: string | null
    loan_type?: $Enums.loan_type_enum | null
    fund_type?: $Enums.fund_type_enum | null
    transaction_date: Date | string
    recipet_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type transactionsCreateOrConnectWithoutSupervisorsInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutSupervisorsInput, transactionsUncheckedCreateWithoutSupervisorsInput>
  }

  export type transactionsCreateManySupervisorsInputEnvelope = {
    data: transactionsCreateManySupervisorsInput | transactionsCreateManySupervisorsInput[]
    skipDuplicates?: boolean
  }

  export type transactionsUpsertWithWhereUniqueWithoutSupervisorsInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutSupervisorsInput, transactionsUncheckedUpdateWithoutSupervisorsInput>
    create: XOR<transactionsCreateWithoutSupervisorsInput, transactionsUncheckedCreateWithoutSupervisorsInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutSupervisorsInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutSupervisorsInput, transactionsUncheckedUpdateWithoutSupervisorsInput>
  }

  export type transactionsUpdateManyWithWhereWithoutSupervisorsInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutSupervisorsInput>
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

  export type supervisorsCreateWithoutTransactionsInput = {
    id: string
    full_name_english: string
    full_name_telugu: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type supervisorsUncheckedCreateWithoutTransactionsInput = {
    id: string
    full_name_english: string
    full_name_telugu: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type supervisorsCreateOrConnectWithoutTransactionsInput = {
    where: supervisorsWhereUniqueInput
    create: XOR<supervisorsCreateWithoutTransactionsInput, supervisorsUncheckedCreateWithoutTransactionsInput>
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

  export type supervisorsUpsertWithoutTransactionsInput = {
    update: XOR<supervisorsUpdateWithoutTransactionsInput, supervisorsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<supervisorsCreateWithoutTransactionsInput, supervisorsUncheckedCreateWithoutTransactionsInput>
    where?: supervisorsWhereInput
  }

  export type supervisorsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: supervisorsWhereInput
    data: XOR<supervisorsUpdateWithoutTransactionsInput, supervisorsUncheckedUpdateWithoutTransactionsInput>
  }

  export type supervisorsUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_english?: StringFieldUpdateOperationsInput | string
    full_name_telugu?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type supervisorsUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_english?: StringFieldUpdateOperationsInput | string
    full_name_telugu?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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
    id: string
    supervised_by: string
    type: $Enums.transaction_type_enum
    amount: number
    comments?: string | null
    loan_type?: $Enums.loan_type_enum | null
    fund_type?: $Enums.fund_type_enum | null
    transaction_date: Date | string
    recipet_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type transactionsUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: Enumtransaction_type_enumFieldUpdateOperationsInput | $Enums.transaction_type_enum
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    loan_type?: NullableEnumloan_type_enumFieldUpdateOperationsInput | $Enums.loan_type_enum | null
    fund_type?: NullableEnumfund_type_enumFieldUpdateOperationsInput | $Enums.fund_type_enum | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    recipet_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisors?: supervisorsUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    supervised_by?: StringFieldUpdateOperationsInput | string
    type?: Enumtransaction_type_enumFieldUpdateOperationsInput | $Enums.transaction_type_enum
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    loan_type?: NullableEnumloan_type_enumFieldUpdateOperationsInput | $Enums.loan_type_enum | null
    fund_type?: NullableEnumfund_type_enumFieldUpdateOperationsInput | $Enums.fund_type_enum | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    recipet_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateManyWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    supervised_by?: StringFieldUpdateOperationsInput | string
    type?: Enumtransaction_type_enumFieldUpdateOperationsInput | $Enums.transaction_type_enum
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    loan_type?: NullableEnumloan_type_enumFieldUpdateOperationsInput | $Enums.loan_type_enum | null
    fund_type?: NullableEnumfund_type_enumFieldUpdateOperationsInput | $Enums.fund_type_enum | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    recipet_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsCreateManySupervisorsInput = {
    id: string
    member: string
    type: $Enums.transaction_type_enum
    amount: number
    comments?: string | null
    loan_type?: $Enums.loan_type_enum | null
    fund_type?: $Enums.fund_type_enum | null
    transaction_date: Date | string
    recipet_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type transactionsUpdateWithoutSupervisorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: Enumtransaction_type_enumFieldUpdateOperationsInput | $Enums.transaction_type_enum
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    loan_type?: NullableEnumloan_type_enumFieldUpdateOperationsInput | $Enums.loan_type_enum | null
    fund_type?: NullableEnumfund_type_enumFieldUpdateOperationsInput | $Enums.fund_type_enum | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    recipet_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: membersUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutSupervisorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    member?: StringFieldUpdateOperationsInput | string
    type?: Enumtransaction_type_enumFieldUpdateOperationsInput | $Enums.transaction_type_enum
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    loan_type?: NullableEnumloan_type_enumFieldUpdateOperationsInput | $Enums.loan_type_enum | null
    fund_type?: NullableEnumfund_type_enumFieldUpdateOperationsInput | $Enums.fund_type_enum | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    recipet_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateManyWithoutSupervisorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    member?: StringFieldUpdateOperationsInput | string
    type?: Enumtransaction_type_enumFieldUpdateOperationsInput | $Enums.transaction_type_enum
    amount?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    loan_type?: NullableEnumloan_type_enumFieldUpdateOperationsInput | $Enums.loan_type_enum | null
    fund_type?: NullableEnumfund_type_enumFieldUpdateOperationsInput | $Enums.fund_type_enum | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    recipet_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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