import { n as Button, r as Navigation, t as Footer } from "./footer-Dq52LYOJ.js";
import { t as ProductCard } from "./product-card-CJB435OO.js";
import { t as getAccessories } from "./products-D1tJhUcM.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
//#region src/routes/accessories.tsx?tsr-split=component
function Accessories() {
	const accessories = getAccessories();
	const watches = accessories.filter((p) => p.subcategory === "watches");
	const bags = accessories.filter((p) => p.subcategory === "bags");
	const sunglasses = accessories.filter((p) => p.subcategory === "sunglasses");
	const caps = accessories.filter((p) => p.subcategory === "caps");
	const other = accessories.filter((p) => ![
		"watches",
		"bags",
		"sunglasses",
		"caps"
	].includes(p.subcategory));
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ jsx(Navigation, {}),
			/* @__PURE__ */ jsxs("div", {
				className: "pt-24",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "relative h-[60vh] overflow-hidden",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1920&q=80",
								alt: "Accessories Hero",
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
											children: "Premium Accessories"
										}), /* @__PURE__ */ jsx("p", {
											className: "mt-4 text-xl text-gray-200",
											children: "Complete your look with our curated collection"
										})]
									})
								})
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16",
						children: [/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							className: "mb-12 flex items-end justify-between gap-4",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								className: "text-4xl font-bold text-foreground",
								children: "Watches"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-lg text-muted-foreground",
								children: "Timeless elegance on your wrist"
							})] }), /* @__PURE__ */ jsxs(Button, {
								variant: "outline",
								className: "gap-2",
								children: ["View All", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 gap-6 md:grid-cols-4",
							children: watches.slice(0, 8).map((product) => /* @__PURE__ */ jsx(ProductCard, {
								product,
								className: "col-span-1"
							}, product.id))
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "bg-muted/30",
						children: /* @__PURE__ */ jsxs("div", {
							className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16",
							children: [/* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								className: "mb-12 flex items-end justify-between gap-4",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
									className: "text-4xl font-bold text-foreground",
									children: "Bags"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-lg text-muted-foreground",
									children: "Style meets functionality"
								})] }), /* @__PURE__ */ jsxs(Button, {
									variant: "outline",
									className: "gap-2",
									children: ["View All", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 gap-6 md:grid-cols-4",
								children: bags.slice(0, 8).map((product) => /* @__PURE__ */ jsx(ProductCard, {
									product,
									className: "col-span-1"
								}, product.id))
							})]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16",
						children: [/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							className: "mb-12 flex items-end justify-between gap-4",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								className: "text-4xl font-bold text-foreground",
								children: "Sunglasses"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-lg text-muted-foreground",
								children: "Protect your eyes in style"
							})] }), /* @__PURE__ */ jsxs(Button, {
								variant: "outline",
								className: "gap-2",
								children: ["View All", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 gap-6 md:grid-cols-4",
							children: sunglasses.slice(0, 8).map((product) => /* @__PURE__ */ jsx(ProductCard, {
								product,
								className: "col-span-1"
							}, product.id))
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "bg-muted/30",
						children: /* @__PURE__ */ jsxs("div", {
							className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16",
							children: [/* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								className: "mb-12 flex items-end justify-between gap-4",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
									className: "text-4xl font-bold text-foreground",
									children: "Caps & Headwear"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-lg text-muted-foreground",
									children: "Complete your outfit"
								})] }), /* @__PURE__ */ jsxs(Button, {
									variant: "outline",
									className: "gap-2",
									children: ["View All", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 gap-6 md:grid-cols-4",
								children: caps.slice(0, 8).map((product) => /* @__PURE__ */ jsx(ProductCard, {
									product,
									className: "col-span-1"
								}, product.id))
							})]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16",
						children: [/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							className: "mb-12 flex items-end justify-between gap-4",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								className: "text-4xl font-bold text-foreground",
								children: "More Accessories"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-lg text-muted-foreground",
								children: "Belts, wallets, and more"
							})] }), /* @__PURE__ */ jsxs(Button, {
								variant: "outline",
								className: "gap-2",
								children: ["View All", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 gap-6 md:grid-cols-4",
							children: other.slice(0, 8).map((product) => /* @__PURE__ */ jsx(ProductCard, {
								product,
								className: "col-span-1"
							}, product.id))
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "bg-muted/30",
						children: /* @__PURE__ */ jsxs("div", {
							className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16",
							children: [/* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								className: "mb-12",
								children: [/* @__PURE__ */ jsx("h2", {
									className: "text-4xl font-bold text-foreground",
									children: "All Accessories"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-lg text-muted-foreground",
									children: "Browse our complete accessories collection"
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 gap-6 md:grid-cols-4",
								children: accessories.map((product) => /* @__PURE__ */ jsx(ProductCard, {
									product,
									className: "col-span-1"
								}, product.id))
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Accessories as component };
