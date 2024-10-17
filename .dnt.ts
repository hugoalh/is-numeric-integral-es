import {
	getMetadataFromConfig,
	invokeDenoNodeJSTransformer
} from "DNT";
const configJSR = await getMetadataFromConfig("jsr.jsonc");
await invokeDenoNodeJSTransformer({
	assetsCopy: [
		"LICENSE.md",
		"README.md"
	],
	entrypoints: configJSR.exports,
	generateDeclarationMap: true,
	metadata: {
		name: "@hugoalh/is-numeric-integral",
		version: configJSR.version,
		description: "A module to determine whether the numeric is integral.",
		keywords: [
			"integral",
			"is",
			"numeric"
		],
		homepage: "https://github.com/hugoalh-studio/is-numeric-integral-es#readme",
		bugs: {
			url: "https://github.com/hugoalh-studio/is-numeric-integral-es/issues"
		},
		license: "MIT",
		author: "hugoalh",
		repository: {
			type: "git",
			url: "git+https://github.com/hugoalh-studio/is-numeric-integral-es.git"
		},
		scripts: {
		},
		engines: {
			node: ">=16.13.0"
		},
		private: false,
		publishConfig: {
			access: "public"
		}
	},
	outputDirectory: "npm",
	outputDirectoryPreEmpty: true
});
