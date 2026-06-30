import { n as Button, r as Navigation, t as Footer } from "./footer-Dq52LYOJ.js";
import { t as ProductCard } from "./product-card-CJB435OO.js";
import { o as getSneakers } from "./products-D1tJhUcM.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
//#region src/routes/sneakers.tsx?tsr-split=component
function Sneakers() {
	const sneakers = getSneakers();
	const nikeSneakers = sneakers.filter((p) => p.brand === "Nike" || p.brand === "Jordan");
	const adidasSneakers = sneakers.filter((p) => p.brand === "Adidas");
	const newBalanceSneakers = sneakers.filter((p) => p.brand === "New Balance");
	const otherSneakers = sneakers.filter((p) => ![
		"Nike",
		"Jordan",
		"Adidas",
		"New Balance"
	].includes(p.brand));
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
								src: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1920&q=80",
								alt: "Sneakers Hero",
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
											children: "Premium Sneakers"
										}), /* @__PURE__ */ jsx("p", {
											className: "mt-4 text-xl text-gray-200",
											children: "Discover the latest drops from Nike, Jordan, Adidas, and more"
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
								children: "Nike & Jordan"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-lg text-muted-foreground",
								children: "Iconic silhouettes that changed the game"
							})] }), /* @__PURE__ */ jsxs(Button, {
								variant: "outline",
								className: "gap-2",
								children: ["View All", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 gap-6 md:grid-cols-4",
							children: nikeSneakers.slice(0, 8).map((product) => /* @__PURE__ */ jsx(ProductCard, {
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
									children: "Adidas"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-lg text-muted-foreground",
									children: "Performance meets style"
								})] }), /* @__PURE__ */ jsxs(Button, {
									variant: "outline",
									className: "gap-2",
									children: ["View All", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 gap-6 md:grid-cols-4",
								children: adidasSneakers.slice(0, 8).map((product) => /* @__PURE__ */ jsx(ProductCard, {
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
								children: "New Balance"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-lg text-muted-foreground",
								children: "Classic comfort, modern style"
							})] }), /* @__PURE__ */ jsxs(Button, {
								variant: "outline",
								className: "gap-2",
								children: ["View All", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 gap-6 md:grid-cols-4",
							children: newBalanceSneakers.slice(0, 8).map((product) => /* @__PURE__ */ jsx(ProductCard, {
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
									children: "More Brands"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-lg text-muted-foreground",
									children: "Converse, Vans, Puma, and more"
								})] }), /* @__PURE__ */ jsxs(Button, {
									variant: "outline",
									className: "gap-2",
									children: ["View All", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 gap-6 md:grid-cols-4",
								children: otherSneakers.slice(0, 8).map((product) => /* @__PURE__ */ jsx(ProductCard, {
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
							className: "mb-12",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-4xl font-bold text-foreground",
								children: "All Sneakers"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-lg text-muted-foreground",
								children: "Browse our complete sneaker collection"
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 gap-6 md:grid-cols-4",
							children: sneakers.map((product) => /* @__PURE__ */ jsx(ProductCard, {
								product,
								className: "col-span-1"
							}, product.id))
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Sneakers as component };
