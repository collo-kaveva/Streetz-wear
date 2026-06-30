import { t as Route$13 } from "./product._id-B081h2hN.js";
import { Outlet, createFileRoute, createRootRoute, createRouter, lazyRouteComponent } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
//#region src/routes/__root.tsx
var Route$12 = createRootRoute({
	component: () => /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(TanStackRouterDevtools, {})] }),
	notFoundComponent: () => /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background",
		children: /* @__PURE__ */ jsxs("div", {
			className: "text-center",
			children: [/* @__PURE__ */ jsx("h1", {
				className: "text-4xl font-bold text-foreground mb-4",
				children: "404"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-lg text-muted-foreground",
				children: "Page not found"
			})]
		})
	})
});
//#endregion
//#region src/routes/wishlist.tsx
var $$splitComponentImporter$11 = () => import("./wishlist-eMeAY29L.js");
var Route$11 = createFileRoute("/wishlist")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
//#endregion
//#region src/routes/sneakers.tsx
var $$splitComponentImporter$10 = () => import("./sneakers-9V-M84Xm.js");
var Route$10 = createFileRoute("/sneakers")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
//#endregion
//#region src/routes/shop.tsx
var $$splitComponentImporter$9 = () => import("./shop-BlujKoXu.js");
var Route$9 = createFileRoute("/shop")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
//#endregion
//#region src/routes/order-goods.tsx
var $$splitComponentImporter$8 = () => import("./order-goods-CzMSiT-d.js");
var Route$8 = createFileRoute("/order-goods")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
//#endregion
//#region src/routes/lookbook.tsx
var $$splitComponentImporter$7 = () => import("./lookbook-2KWXn34v.js");
var Route$7 = createFileRoute("/lookbook")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$6 = () => import("./contact-LsBZ_dn-.js");
var Route$6 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
//#endregion
//#region src/routes/clothing.tsx
var $$splitComponentImporter$5 = () => import("./clothing-CmZwx5d8.js");
var Route$5 = createFileRoute("/clothing")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
//#endregion
//#region src/routes/cart.tsx
var $$splitComponentImporter$4 = () => import("./cart-Cu2Llqas.js");
var Route$4 = createFileRoute("/cart")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
//#endregion
//#region src/routes/brands.tsx
var $$splitComponentImporter$3 = () => import("./brands-DHrhCiyQ.js");
var Route$3 = createFileRoute("/brands")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
//#endregion
//#region src/routes/accessories.tsx
var $$splitComponentImporter$2 = () => import("./accessories-DMmVbg8G.js");
var Route$2 = createFileRoute("/accessories")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$1 = () => import("./about-CeKfHfok.js");
var Route$1 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-DVHLe690.js");
var Route = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
//#endregion
//#region src/routeTree.gen.ts
var WishlistRoute = Route$11.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => Route$12
});
var SneakersRoute = Route$10.update({
	id: "/sneakers",
	path: "/sneakers",
	getParentRoute: () => Route$12
});
var ShopRoute = Route$9.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$12
});
var OrderGoodsRoute = Route$8.update({
	id: "/order-goods",
	path: "/order-goods",
	getParentRoute: () => Route$12
});
var LookbookRoute = Route$7.update({
	id: "/lookbook",
	path: "/lookbook",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$6.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var ClothingRoute = Route$5.update({
	id: "/clothing",
	path: "/clothing",
	getParentRoute: () => Route$12
});
var CartRoute = Route$4.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$12
});
var BrandsRoute = Route$3.update({
	id: "/brands",
	path: "/brands",
	getParentRoute: () => Route$12
});
var AccessoriesRoute = Route$2.update({
	id: "/accessories",
	path: "/accessories",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$12
	}),
	AboutRoute,
	AccessoriesRoute,
	BrandsRoute,
	CartRoute,
	ClothingRoute,
	ContactRoute,
	LookbookRoute,
	OrderGoodsRoute,
	ShopRoute,
	SneakersRoute,
	WishlistRoute,
	ProductIdRoute: Route$13.update({
		id: "/product/$id",
		path: "/product/$id",
		getParentRoute: () => Route$12
	})
};
//#endregion
//#region src/router.tsx
var router = createRouter({ routeTree: Route$12._addFileChildren(rootRouteChildren)._addFileTypes() });
async function getRouter() {
	return router;
}
//#endregion
export { getRouter, router };
