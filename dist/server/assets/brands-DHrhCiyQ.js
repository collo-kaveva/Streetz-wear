import { r as Navigation, t as Footer } from "./footer-Dq52LYOJ.js";
import { t as ProductCard } from "./product-card-CJB435OO.js";
import { s as products } from "./products-D1tJhUcM.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
//#region src/routes/brands.tsx?tsr-split=component
function Brands() {
	const brands = [...new Set(products.map((p) => p.brand))].sort();
	const getBrandProducts = (brand) => {
		return products.filter((p) => p.brand === brand).slice(0, 4);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ jsx(Navigation, {}),
			/* @__PURE__ */ jsxs("div", {
				className: "pt-24",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative h-[50vh] overflow-hidden",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80",
							alt: "Brands Hero",
							className: "h-full w-full object-cover"
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" }),
						/* @__PURE__ */ jsx("div", {
							className: "absolute inset-0 flex items-center",
							children: /* @__PURE__ */ jsx("div", {
								className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
								children: /* @__PURE__ */ jsxs(motion.div, {
									initial: {
										opacity: 0,
										y: 30
									},
									animate: {
										opacity: 1,
										y: 0
									},
									className: "max-w-2xl",
									children: [/* @__PURE__ */ jsx("h1", {
										className: "text-5xl font-bold text-white sm:text-6xl",
										children: "Shop by Brand"
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-4 text-xl text-gray-200",
										children: "Discover products from world-renowned brands"
									})]
								})
							})
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20",
					children: /* @__PURE__ */ jsx("div", {
						className: "space-y-20",
						children: brands.map((brand, index) => {
							const brandProducts = getBrandProducts(brand);
							return /* @__PURE__ */ jsxs(motion.div, {
								id: brand.toLowerCase().replace(/\s+/g, "-"),
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: { delay: index * .1 },
								children: [/* @__PURE__ */ jsxs("div", {
									className: "mb-8",
									children: [/* @__PURE__ */ jsx("h2", {
										className: "text-4xl font-bold text-foreground",
										children: brand
									}), /* @__PURE__ */ jsxs("p", {
										className: "mt-2 text-lg text-muted-foreground",
										children: [products.filter((p) => p.brand === brand).length, " products available"]
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "grid grid-cols-2 gap-6 md:grid-cols-4",
									children: brandProducts.map((product) => /* @__PURE__ */ jsx(ProductCard, {
										product,
										className: "col-span-1"
									}, product.id))
								})]
							}, brand);
						})
					})
				})]
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Brands as component };
