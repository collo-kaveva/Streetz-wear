import { n as Button, o as formatPrice, r as Navigation, t as Footer } from "./footer-Dq52LYOJ.js";
import { s as products } from "./products-D1tJhUcM.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
//#region src/routes/cart.tsx?tsr-split=component
function Cart() {
	const cartItems = products.slice(0, 3);
	const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
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
						className: "mb-10",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-sm font-semibold uppercase tracking-[0.3em] text-primary",
								children: "Cart"
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "mt-3 text-4xl font-bold text-foreground sm:text-5xl",
								children: "Your curated bag"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 max-w-2xl text-lg text-muted-foreground",
								children: "Review your selections and continue to checkout with confidence."
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "grid gap-8 lg:grid-cols-[1.1fr_0.9fr]",
						children: [/* @__PURE__ */ jsx("div", {
							className: "space-y-4",
							children: cartItems.map((item) => /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-4 rounded-[1.5rem] border border-border/60 bg-card p-5 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:flex-row sm:items-center",
								children: [
									/* @__PURE__ */ jsx("img", {
										src: item.images[0],
										alt: item.name,
										className: "h-28 w-full rounded-[1rem] object-cover sm:w-28"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex-1",
										children: [
											/* @__PURE__ */ jsx("p", {
												className: "text-sm font-medium text-primary",
												children: item.brand
											}),
											/* @__PURE__ */ jsx("h2", {
												className: "mt-1 text-xl font-semibold text-foreground",
												children: item.name
											}),
											/* @__PURE__ */ jsxs("p", {
												className: "mt-2 text-sm text-muted-foreground",
												children: [
													item.category,
													" • ",
													item.sizes[0]
												]
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between gap-4 sm:flex-col sm:items-end",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-lg font-semibold text-foreground",
											children: formatPrice(item.price)
										}), /* @__PURE__ */ jsx("button", {
											className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
											children: "Remove"
										})]
									})
								]
							}, item.id))
						}), /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								x: 20
							},
							animate: {
								opacity: 1,
								x: 0
							},
							className: "rounded-[2rem] border border-border/60 bg-card p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary/10",
										children: /* @__PURE__ */ jsx(ShoppingBag, { className: "h-6 w-6 text-primary" })
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
										className: "text-2xl font-semibold text-foreground",
										children: "Order summary"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm text-muted-foreground",
										children: "Secure checkout in minutes"
									})] })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-8 space-y-4 text-sm",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between text-muted-foreground",
											children: [/* @__PURE__ */ jsx("span", { children: "Subtotal" }), /* @__PURE__ */ jsx("span", { children: formatPrice(subtotal) })]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between text-muted-foreground",
											children: [/* @__PURE__ */ jsx("span", { children: "Shipping" }), /* @__PURE__ */ jsx("span", { children: "Free" })]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between border-t border-border/60 pt-4 text-lg font-semibold text-foreground",
											children: [/* @__PURE__ */ jsx("span", { children: "Total" }), /* @__PURE__ */ jsx("span", { children: formatPrice(subtotal) })]
										})
									]
								}),
								/* @__PURE__ */ jsxs(Button, {
									size: "lg",
									className: "mt-8 w-full gap-2",
									children: ["Proceed to checkout ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Cart as component };
