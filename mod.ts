interface NumericIntegralTypeRange {
	maximum: bigint;
	minimum: bigint;
}
function resolveNumericIntegralTypeRange(signable: boolean, base: bigint): NumericIntegralTypeRange {
	if (signable) {
		const gridHalf: bigint = (2n ** base) / 2n;
		return {
			maximum: gridHalf - 1n,
			minimum: -gridHalf
		};
	}
	return {
		maximum: (2n ** base) - 1n,
		minimum: 0n
	};
}
export type NumericIntegralType =
	| "int8"
	| "int16"
	| "int32"
	| "int64"
	| "int128"
	| "uint8"
	| "uint16"
	| "uint32"
	| "uint64"
	| "uint128";
export type NumericIntegralTypeExtend =
	| "bigint"
	| "bigInt"
	| "Bigint"
	| "BigInt"
	| "biguint"
	| "bigUint"
	| "bigUInt"
	| "BigUint"
	| "BigUInt"
	| "byte"
	| "Byte"
	| "char"
	| "Char"
	| "i128"
	| "I128"
	| "i16"
	| "I16"
	| "i32"
	| "I32"
	| "i64"
	| "I64"
	| "i8"
	| "I8"
	| "Int128"
	| "Int16"
	| "Int32"
	| "Int64"
	| "Int8"
	| "integer"
	| "Integer"
	| "long"
	| "Long"
	| "rune"
	| "Rune"
	| "short"
	| "Short"
	| "smallint"
	| "smallInt"
	| "SmallInt"
	| "smalluint"
	| "smallUint"
	| "smallUInt"
	| "SmallUint"
	| "SmallUInt"
	| "tinyint"
	| "tinyInt"
	| "TinyInt"
	| "tinyuint"
	| "tinyUint"
	| "tinyUInt"
	| "TinyUint"
	| "TinyUInt"
	| "u128"
	| "U128"
	| "u16"
	| "U16"
	| "u32"
	| "U32"
	| "u64"
	| "U64"
	| "u8"
	| "U8"
	| "uchar"
	| "uChar"
	| "Uchar"
	| "UChar"
	| "uInt128"
	| "Uint128"
	| "UInt128"
	| "uInt16"
	| "Uint16"
	| "UInt16"
	| "uInt32"
	| "Uint32"
	| "UInt32"
	| "uInt64"
	| "Uint64"
	| "UInt64"
	| "uInt8"
	| "Uint8"
	| "UInt8"
	| "uinteger"
	| "uInteger"
	| "Uinteger"
	| "UInteger"
	| "ulong"
	| "uLong"
	| "Ulong"
	| "ULong"
	| "ushort"
	| "uShort"
	| "Ushort"
	| "UShort";
const integralTypes: Readonly<Record<NumericIntegralType | NumericIntegralTypeExtend, NumericIntegralType>> = {
	bigint: "int64",
	bigInt: "int64",
	Bigint: "int64",
	BigInt: "int64",
	biguint: "uint64",
	bigUint: "uint64",
	bigUInt: "uint64",
	BigUint: "uint64",
	BigUInt: "uint64",
	byte: "uint8",
	Byte: "uint8",
	char: "int8",
	Char: "int8",
	i128: "int128",
	I128: "int128",
	i16: "int16",
	I16: "int16",
	i32: "int32",
	I32: "int32",
	i64: "int64",
	I64: "int64",
	i8: "int8",
	I8: "int8",
	int128: "int128",
	Int128: "int128",
	int16: "int16",
	Int16: "int16",
	int32: "int32",
	Int32: "int32",
	int64: "int64",
	Int64: "int64",
	int8: "int8",
	Int8: "int8",
	integer: "int32",
	Integer: "int32",
	long: "int64",
	Long: "int64",
	rune: "int32",
	Rune: "int32",
	short: "int16",
	Short: "int16",
	smallint: "int16",
	smallInt: "int16",
	SmallInt: "int16",
	smalluint: "uint16",
	smallUint: "uint16",
	smallUInt: "uint16",
	SmallUint: "uint16",
	SmallUInt: "uint16",
	tinyint: "int8",
	tinyInt: "int8",
	TinyInt: "int8",
	tinyuint: "uint8",
	tinyUint: "uint8",
	tinyUInt: "uint8",
	TinyUint: "uint8",
	TinyUInt: "uint8",
	u128: "uint128",
	U128: "uint128",
	u16: "uint16",
	U16: "uint16",
	u32: "uint32",
	U32: "uint32",
	u64: "uint64",
	U64: "uint64",
	u8: "uint8",
	U8: "uint8",
	uchar: "uint8",
	uChar: "uint8",
	Uchar: "uint8",
	UChar: "uint8",
	uint128: "uint128",
	uInt128: "uint128",
	Uint128: "uint128",
	UInt128: "uint128",
	uint16: "uint16",
	uInt16: "uint16",
	Uint16: "uint16",
	UInt16: "uint16",
	uint32: "uint32",
	uInt32: "uint32",
	Uint32: "uint32",
	UInt32: "uint32",
	uint64: "uint64",
	uInt64: "uint64",
	Uint64: "uint64",
	UInt64: "uint64",
	uint8: "uint8",
	uInt8: "uint8",
	Uint8: "uint8",
	UInt8: "uint8",
	uinteger: "uint32",
	uInteger: "uint32",
	Uinteger: "uint32",
	UInteger: "uint32",
	ulong: "uint64",
	uLong: "uint64",
	Ulong: "uint64",
	ULong: "uint64",
	ushort: "uint16",
	uShort: "uint16",
	Ushort: "uint16",
	UShort: "uint16"
};
function getNumericIntegralTypeRange(typeName: NumericIntegralType | NumericIntegralTypeExtend): NumericIntegralTypeRange {
	switch (integralTypes[typeName]) {
		case "int8":
			return resolveNumericIntegralTypeRange(true, 8n);
		case "int16":
			return resolveNumericIntegralTypeRange(true, 16n);
		case "int32":
			return resolveNumericIntegralTypeRange(true, 32n);
		case "int64":
			return resolveNumericIntegralTypeRange(true, 64n);
		case "int128":
			return resolveNumericIntegralTypeRange(true, 128n);
		case "uint8":
			return resolveNumericIntegralTypeRange(false, 8n);
		case "uint16":
			return resolveNumericIntegralTypeRange(false, 16n);
		case "uint32":
			return resolveNumericIntegralTypeRange(false, 32n);
		case "uint64":
			return resolveNumericIntegralTypeRange(false, 64n);
		case "uint128":
			return resolveNumericIntegralTypeRange(false, 128n);
		default:
			throw new RangeError(`\`${typeName}\` is not a valid integral numeric type! Only accept these values: ${Array.from(Object.keys(integralTypes)).sort().join(", ")}`);
	}
}
/**
 * Determine whether the numeric is in the range of the specify integral type.
 * @param {NumericIntegralType | NumericIntegralTypeExtend} typeName Name of the integral numeric type.
 * @param {bigint | number} item Item that need to determine.
 * @returns {boolean} Determine result.
 * @example 1
 * ```ts
 * isNumericIntegral("Byte", 9876);
 * //=> false
 * ```
 * @example 2
 * ```ts
 * isNumericIntegral("UInt8", 256);
 * //=> false
 * ```
 * @example 3
 * ```ts
 * isNumericIntegral("Byte", 8n);
 * //=> true
 * ```
 */
export function isNumericIntegral(typeName: NumericIntegralType | NumericIntegralTypeExtend, item: bigint | number): boolean {
	const {
		maximum,
		minimum
	} = getNumericIntegralTypeRange(typeName);
	if (typeof item === "bigint") {
		return (minimum <= item && item <= maximum);
	}
	return (Number.isInteger(item) && Number(minimum) <= item && item <= Number(maximum));
}
export default isNumericIntegral;
