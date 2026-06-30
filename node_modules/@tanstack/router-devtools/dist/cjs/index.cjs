Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let _tanstack_react_router_devtools = require("@tanstack/react-router-devtools");
//#region src/index.tsx
console.warn("[@tanstack/router-devtools] This package has moved to @tanstack/react-router-devtools. Please switch to the new package at your earliest convenience, as this package will be dropped in the next major version release.");
//#endregion
Object.defineProperty(exports, "TanStackRouterDevtools", {
	enumerable: true,
	get: function() {
		return _tanstack_react_router_devtools.TanStackRouterDevtoolsInProd;
	}
});
Object.defineProperty(exports, "TanStackRouterDevtoolsPanel", {
	enumerable: true,
	get: function() {
		return _tanstack_react_router_devtools.TanStackRouterDevtoolsPanelInProd;
	}
});

//# sourceMappingURL=index.cjs.map