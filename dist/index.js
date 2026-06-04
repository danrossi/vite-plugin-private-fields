//#region src/index.ts
function e() {
	return {
		name: "vite-plugin-private-fields",
		apply: "build",
		enforce: "post",
		renderChunk(e, t) {
			if (t.isEntry) return {
				code: e.replace(/#(?!version|define|pragma|if|ifdef|elif|else|endif|include)\b([a-zA-Z_$][a-zA-Z0-9_$]*)/g, "$1"),
				map: null
			};
		}
	};
}
//#endregion
export { e as vitePluginPrivateFields };
