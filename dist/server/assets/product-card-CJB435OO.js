import { a as cn, i as calculateDiscountedPrice, o as formatPrice } from "./footer-Dq52LYOJ.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
//#region src/components/ui/rating.tsx
function Rating({ rating, reviews, className, showCount = true }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex items-center gap-2", className),
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex",
			children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: cn("h-4 w-4", i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300") }, i))
		}), showCount && reviews && /* @__PURE__ */ jsxs("span", {
			className: "text-sm text-muted-foreground",
			children: [
				"(",
				reviews,
				")"
			]
		})]
	});
}
//#endregion
//#region src/components/ui/badge.tsx
function Badge({ children, variant = "default", className }) {
	return /* @__PURE__ */ jsx("span", {
		className: cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider", {
			default: "bg-primary text-primary-foreground",
			sale: "bg-red-500 text-white",
			new: "bg-green-500 text-white",
			featured: "bg-purple-500 text-white",
			bestseller: "bg-orange-500 text-white"
		}[variant], className),
		children
	});
}
//#endregion
//#region src/components/product-card.tsx
function ProductCard({ product, className }) {
	const discountedPrice = calculateDiscountedPrice(product.price, product.discount);
	const hasDiscount = product.discount && product.discount > 0;
	return /* @__PURE__ */ jsxs(motion.div, {
		className: cn("group relative", className),
		initial: {
			opacity: 0,
			y: 20
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: { duration: .3 },
		children: [/* @__PURE__ */ jsx(Link, {
			to: "/product/$id",
			params: { id: product.id },
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative overflow-hidden rounded-3xl bg-muted aspect-[4/5]",
				children: [
					/* @__PURE__ */ jsx(motion.img, {
						src: product.images[0],
						alt: product.name,
						className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110",
						whileHover: { scale: 1.05 }
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "absolute left-4 top-4 flex flex-col gap-2",
						children: [
							product.newArrival && /* @__PURE__ */ jsx(Badge, {
								variant: "new",
								children: "New"
							}),
							product.bestSeller && /* @__PURE__ */ jsx(Badge, {
								variant: "bestseller",
								children: "Best Seller"
							}),
							product.featured && /* @__PURE__ */ jsx(Badge, {
								variant: "featured",
								children: "Featured"
							}),
							hasDiscount && /* @__PURE__ */ jsxs(Badge, {
								variant: "sale",
								children: [
									"-",
									product.discount,
									"%"
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "absolute right-4 top-4 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
						children: [/* @__PURE__ */ jsx(motion.button, {
							className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-colors hover:bg-white",
							whileHover: { scale: 1.1 },
							whileTap: { scale: .9 },
							children: /* @__PURE__ */ jsx(Heart, { className: "h-5 w-5" })
						}), /* @__PURE__ */ jsx(motion.button, {
							className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-colors hover:bg-white",
							whileHover: { scale: 1.1 },
							whileTap: { scale: .9 },
							children: /* @__PURE__ */ jsx(Eye, { className: "h-5 w-5" })
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "absolute bottom-4 left-4 right-4 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
						children: /* @__PURE__ */ jsxs(motion.button, {
							className: "flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg",
							whileHover: { scale: 1.02 },
							whileTap: { scale: .98 },
							children: [/* @__PURE__ */ jsx(ShoppingCart, { className: "h-4 w-4" }), "Add to Cart"]
						})
					})
				]
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-4 space-y-2",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "flex items-start justify-between gap-2",
					children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "text-sm font-medium text-muted-foreground",
						children: product.brand
					}), /* @__PURE__ */ jsx("h3", {
						className: "font-semibold text-foreground line-clamp-1",
						children: product.name
					})] })
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-2",
					children: hasDiscount ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
						className: "font-bold text-primary",
						children: formatPrice(discountedPrice)
					}), /* @__PURE__ */ jsx("span", {
						className: "text-sm text-muted-foreground line-through",
						children: formatPrice(product.price)
					})] }) : /* @__PURE__ */ jsx("span", {
						className: "font-bold text-primary",
						children: formatPrice(product.price)
					})
				}),
				/* @__PURE__ */ jsx(Rating, {
					rating: product.rating,
					reviews: product.reviews
				})
			]
		})]
	});
}
//#endregion
export { Badge as n, Rating as r, ProductCard as t };
