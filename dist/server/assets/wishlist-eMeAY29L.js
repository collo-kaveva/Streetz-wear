import { r as Navigation, t as Footer } from "./footer-Dq52LYOJ.js";
import { t as ProductCard } from "./product-card-CJB435OO.js";
import { s as products } from "./products-D1tJhUcM.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
//#region src/routes/wishlist.tsx?tsr-split=component
function Wishlist() {
	const wishlistItems = products.filter((product) => product.bestSeller || product.newArrival).slice(0, 8);
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ jsx(Navigation, {}),
			/* @__PURE__ */ jsx("div", {
				className: "pt-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						className: "mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-sm font-semibold uppercase tracking-[0.3em] text-primary",
								children: "Wishlist"
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "mt-3 text-4xl font-bold text-foreground sm:text-5xl",
								children: "Your saved fashion favorites"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 max-w-2xl text-lg text-muted-foreground",
								children: "Keep track of the pieces you love and return anytime for a fresh edit."
							})
						] }), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 rounded-full border border-border/60 bg-card px-4 py-3 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ jsx(Heart, { className: "h-5 w-5 text-primary" }),
								wishlistItems.length,
								" saved items"
							]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid gap-6 md:grid-cols-2 xl:grid-cols-4",
						children: wishlistItems.map((product) => /* @__PURE__ */ jsx(ProductCard, { product }, product.id))
					})]
				})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Wishlist as component };
