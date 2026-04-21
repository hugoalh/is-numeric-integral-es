# Is Numeric Integral (ES)

[**⚖️** MIT](./LICENSE.md)

🔗
[GitHub](https://github.com/hugoalh/is-numeric-integral-es)
[JSR](https://jsr.io/@hugoalh/is-numeric-integral)
[NPM](https://www.npmjs.com/package/@hugoalh/is-numeric-integral)

An ECMAScript module to determine whether the numeric is integral.

## 🎯 Targets

| **Runtime \\ Source** | **GitHub Raw** | **JSR** | **NPM** |
|:--|:-:|:-:|:-:|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❌ | ✔️ | ✔️ |
| **[Deno](https://deno.land/)** >= v2.1.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v20.9.0 | ❌ | ✔️ | ✔️ |

## 🛡️ Runtime Permissions

This does not request any runtime permission.

## #️⃣ Sources

- GitHub Raw
  ```
  https://raw.githubusercontent.com/hugoalh/is-numeric-integral-es/{Tag}/mod.ts
  ```
- JSR
  ```
  jsr:@hugoalh/is-numeric-integral[@{Tag}]
  ```
- NPM
  ```
  npm:@hugoalh/is-numeric-integral[@{Tag}]
  ```

> [!NOTE]
> - It is recommended to include tag for immutability.
> - These are not part of the public APIs hence should not be used:
>   - Benchmark/Test file (e.g.: `example.bench.ts`, `example.test.ts`).
>   - Entrypoint name or path include any underscore prefix (e.g.: `_example.ts`, `foo/_example.ts`).
>   - Identifier/Namespace/Symbol include any underscore prefix (e.g.: `_example`, `Foo._example`).

## ⤵️ Entrypoints

| **Name** | **Path** | **Description** |
|:--|:--|:--|
| `.` | `./mod.ts` | Default. |

## 🧩 APIs

- ```ts
  function isNumericIntegral(typeName: NumericIntegralType | NumericIntegralTypeExtend, item: bigint | number): boolean;
  ```

> [!NOTE]
> - For the full or prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/doc/)
>   - [JSR](https://jsr.io/@hugoalh/is-numeric-integral)

## ✍️ Examples

- ```ts
  isNumericIntegral("Byte", 9876);
  //=> false
  ```
- ```ts
  isNumericIntegral("UInt8", 256);
  //=> false
  ```
- ```ts
  isNumericIntegral("Byte", 8n);
  //=> true
  ```
