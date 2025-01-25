import { assertEquals } from "STD/assert/equals";
import {
	isNumericIntegral,
	type NumericIntegralType
} from "./mod.ts";
function testkit(value: bigint | number, result: Record<`${NumericIntegralType}`, boolean>): ((t: Deno.TestContext) => void | Promise<void>) {
	return async (t) => {
		for (const [name, expected] of Object.entries(result)) {
			await t.step(name, () => {
				assertEquals(isNumericIntegral(name as NumericIntegralType, value), expected);
			});
		}
	};
}
Deno.test("AllType -8n", { permissions: "none" }, testkit(-8n, {
	int128: true,
	int16: true,
	int32: true,
	int64: true,
	int8: true,
	uint128: false,
	uint16: false,
	uint32: false,
	uint64: false,
	uint8: false
}));
Deno.test("AllType 8n", { permissions: "none" }, testkit(8n, {
	int128: true,
	int16: true,
	int32: true,
	int64: true,
	int8: true,
	uint128: true,
	uint16: true,
	uint32: true,
	uint64: true,
	uint8: true
}));
Deno.test("AllType 256", { permissions: "none" }, testkit(256, {
	int128: true,
	int16: true,
	int32: true,
	int64: true,
	int8: false,
	uint128: true,
	uint16: true,
	uint32: true,
	uint64: true,
	uint8: false
}));
Deno.test("AllType 9876", { permissions: "none" }, testkit(9876, {
	int128: true,
	int16: true,
	int32: true,
	int64: true,
	int8: false,
	uint128: true,
	uint16: true,
	uint32: true,
	uint64: true,
	uint8: false
}));
Deno.test("1", { permissions: "none" }, () => {
	assertEquals(isNumericIntegral("Byte", 9876), false);
});

Deno.test("2", { permissions: "none" }, () => {
	assertEquals(isNumericIntegral("UInt8", 256), false);
});

Deno.test("3", { permissions: "none" }, () => {
	assertEquals(isNumericIntegral("Byte", 8n), true);
})
