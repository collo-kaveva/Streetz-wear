import { n as Button, r as Navigation, t as Footer } from "./footer-Dq52LYOJ.js";
import { t as ProductCard } from "./product-card-CJB435OO.js";
import { r as getClothing } from "./products-D1tJhUcM.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
//#region src/routes/clothing.tsx?tsr-split=component
function Clothing() {
	const clothing = getClothing();
	const hoodies = clothing.filter((p) => p.subcategory === "hoodies");
	const jackets = clothing.filter((p) => p.subcategory === "jackets");
	const pants = clothing.filter((p) => p.subcategory === "pants" || p.subcategory === "jeans");
	const tshirts = clothing.filter((p) => p.subcategory === "tshirts");
	const sweaters = clothing.filter((p) => p.subcategory === "sweaters");
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
								src: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1920&q=80",
								alt: "Clothing Hero",
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
											children: "Premium Clothing"
										}), /* @__PURE__ */ jsx("p", {
											className: "mt-4 text-xl text-gray-200",
											children: "Elevate your style with our curated collection"
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
								children: "Hoodies"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-lg text-muted-foreground",
								children: "Comfort meets style"
							})] }), /* @__PURE__ */ jsxs(Button, {
								variant: "outline",
								className: "gap-2",
								children: ["View All", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 gap-6 md:grid-cols-4",
							children: hoodies.slice(0, 8).map((product) => /* @__PURE__ */ jsx(ProductCard, {
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
									children: "Jackets"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-lg text-muted-foreground",
									children: "Outerwear that stands out"
								})] }), /* @__PURE__ */ jsxs(Button, {
									variant: "outline",
									className: "gap-2",
									children: ["View All", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 gap-6 md:grid-cols-4",
								children: jackets.slice(0, 8).map((product) => /* @__PURE__ */ jsx(ProductCard, {
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
								children: "Pants & Jeans"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-lg text-muted-foreground",
								children: "Perfect fit for every occasion"
							})] }), /* @__PURE__ */ jsxs(Button, {
								variant: "outline",
								className: "gap-2",
								children: ["View All", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 gap-6 md:grid-cols-4",
							children: pants.slice(0, 8).map((product) => /* @__PURE__ */ jsx(ProductCard, {
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
									children: "T-Shirts"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-lg text-muted-foreground",
									children: "Essential basics and statement pieces"
								})] }), /* @__PURE__ */ jsxs(Button, {
									variant: "outline",
									className: "gap-2",
									children: ["View All", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 gap-6 md:grid-cols-4",
								children: tshirts.slice(0, 8).map((product) => /* @__PURE__ */ jsx(ProductCard, {
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
								children: "Sweaters"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-lg text-muted-foreground",
								children: "Cozy layers for cooler days"
							})] }), /* @__PURE__ */ jsxs(Button, {
								variant: "outline",
								className: "gap-2",
								children: ["View All", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 gap-6 md:grid-cols-4",
							children: sweaters.slice(0, 8).map((product) => /* @__PURE__ */ jsx(ProductCard, {
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
									children: "All Clothing"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-lg text-muted-foreground",
									children: "Browse our complete clothing collection"
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 gap-6 md:grid-cols-4",
								children: clothing.map((product) => /* @__PURE__ */ jsx(ProductCard, {
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
export { Clothing as component };
