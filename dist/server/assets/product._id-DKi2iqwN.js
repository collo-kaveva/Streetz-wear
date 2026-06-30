import { t as Route } from "./product._id-B081h2hN.js";
import { i as calculateDiscountedPrice, n as Button, o as formatPrice, r as Navigation, t as Footer } from "./footer-Dq52LYOJ.js";
import { n as Badge, r as Rating, t as ProductCard } from "./product-card-CJB435OO.js";
import { a as getProductById, s as products } from "./products-D1tJhUcM.js";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Heart, Minus, Plus, Share2, ShoppingCart, Star, ZoomIn } from "lucide-react";
//#region src/routes/product.$id.tsx?tsr-split=component
function ProductDetails() {
	const { id } = Route.useParams();
	const product = getProductById(id);
	const [selectedImage, setSelectedImage] = useState(0);
	const [selectedColor, setSelectedColor] = useState(0);
	const [selectedSize, setSelectedSize] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const [isZoomed, setIsZoomed] = useState(false);
	if (!product) return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ jsx(Navigation, {}),
			/* @__PURE__ */ jsx("div", {
				className: "pt-24 flex items-center justify-center",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-xl text-muted-foreground",
					children: "Product not found"
				})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
	const discountedPrice = calculateDiscountedPrice(product.price, product.discount);
	const hasDiscount = product.discount && product.discount > 0;
	const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
	const handlePreviousImage = () => {
		setSelectedImage((prev) => prev === 0 ? product.images.length - 1 : prev - 1);
	};
	const handleNextImage = () => {
		setSelectedImage((prev) => prev === product.images.length - 1 ? 0 : prev + 1);
	};
	const handleQuantityChange = (delta) => {
		setQuantity((prev) => Math.max(1, Math.min(product.stock, prev + delta)));
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ jsx(Navigation, {}),
			/* @__PURE__ */ jsx("div", {
				className: "pt-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12",
					children: [
						/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							className: "mb-8 flex items-center gap-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: "/",
									className: "hover:text-foreground",
									children: "Home"
								}),
								/* @__PURE__ */ jsx("span", { children: "/" }),
								/* @__PURE__ */ jsx("a", {
									href: "/shop",
									className: "hover:text-foreground",
									children: "Shop"
								}),
								/* @__PURE__ */ jsx("span", { children: "/" }),
								/* @__PURE__ */ jsx("span", {
									className: "text-foreground",
									children: product.name
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid gap-12 lg:grid-cols-2",
							children: [/* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									x: -20
								},
								animate: {
									opacity: 1,
									x: 0
								},
								className: "space-y-4",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "relative aspect-square overflow-hidden rounded-3xl bg-muted cursor-zoom-in",
									onMouseEnter: () => setIsZoomed(true),
									onMouseLeave: () => setIsZoomed(false),
									children: [
										/* @__PURE__ */ jsx(motion.img, {
											src: product.images[selectedImage],
											alt: product.name,
											className: "h-full w-full object-cover transition-transform duration-300",
											animate: { scale: isZoomed ? 1.5 : 1 },
											style: { transformOrigin: "center center" }
										}),
										/* @__PURE__ */ jsx("button", {
											onClick: handlePreviousImage,
											className: "absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-colors hover:bg-white",
											children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-5 w-5" })
										}),
										/* @__PURE__ */ jsx("button", {
											onClick: handleNextImage,
											className: "absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-colors hover:bg-white",
											children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5" })
										}),
										/* @__PURE__ */ jsx("div", {
											className: "absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg",
											children: /* @__PURE__ */ jsx(ZoomIn, { className: "h-5 w-5" })
										})
									]
								}), /* @__PURE__ */ jsx("div", {
									className: "flex gap-4 overflow-x-auto pb-2",
									children: product.images.map((image, index) => /* @__PURE__ */ jsx("button", {
										onClick: () => setSelectedImage(index),
										className: `relative aspect-square w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all ${selectedImage === index ? "border-primary scale-105" : "border-border/60 hover:border-primary"}`,
										children: /* @__PURE__ */ jsx("img", {
											src: image,
											alt: `${product.name} ${index + 1}`,
											className: "h-full w-full object-cover"
										})
									}, index))
								})]
							}), /* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									x: 20
								},
								animate: {
									opacity: 1,
									x: 0
								},
								className: "space-y-6",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex gap-2",
										children: [
											product.newArrival && /* @__PURE__ */ jsx(Badge, {
												variant: "new",
												children: "New Arrival"
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
													"% OFF"
												]
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "text-sm font-medium text-muted-foreground uppercase tracking-wider",
										children: product.brand
									}), /* @__PURE__ */ jsx("h1", {
										className: "mt-2 text-4xl font-bold text-foreground sm:text-5xl",
										children: product.name
									})] }),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-4",
										children: [/* @__PURE__ */ jsx(Rating, {
											rating: product.rating,
											reviews: product.reviews
										}), /* @__PURE__ */ jsx("span", {
											className: "text-sm text-muted-foreground",
											children: product.stock > 0 ? `${product.stock} in stock` : "Out of stock"
										})]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "flex items-center gap-4",
										children: hasDiscount ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
											className: "text-3xl font-bold text-primary",
											children: formatPrice(discountedPrice)
										}), /* @__PURE__ */ jsx("span", {
											className: "text-xl text-muted-foreground line-through",
											children: formatPrice(product.price)
										})] }) : /* @__PURE__ */ jsx("span", {
											className: "text-3xl font-bold text-primary",
											children: formatPrice(product.price)
										})
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-lg text-muted-foreground",
										children: product.description
									}),
									product.colors.length > 0 && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
										className: "font-semibold text-foreground mb-3",
										children: "Color"
									}), /* @__PURE__ */ jsx("div", {
										className: "flex gap-3",
										children: product.colors.map((color, index) => /* @__PURE__ */ jsx("button", {
											onClick: () => setSelectedColor(index),
											className: `h-10 w-10 rounded-full border-2 transition-all ${selectedColor === index ? "border-primary scale-110" : "border-border/60 hover:border-primary"}`,
											style: { backgroundColor: color }
										}, index))
									})] }),
									product.sizes.length > 0 && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
										className: "font-semibold text-foreground mb-3",
										children: "Size"
									}), /* @__PURE__ */ jsx("div", {
										className: "flex flex-wrap gap-3",
										children: product.sizes.map((size) => /* @__PURE__ */ jsx("button", {
											onClick: () => setSelectedSize(size),
											className: `h-12 w-12 rounded-full border-2 font-semibold transition-all ${selectedSize === size ? "border-primary bg-primary text-primary-foreground" : "border-border/60 bg-background hover:border-primary"}`,
											children: size
										}, size))
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
										className: "font-semibold text-foreground mb-3",
										children: "Quantity"
									}), /* @__PURE__ */ jsx("div", {
										className: "flex items-center gap-4",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex items-center rounded-full border-2 border-border/60",
											children: [
												/* @__PURE__ */ jsx("button", {
													onClick: () => handleQuantityChange(-1),
													className: "flex h-12 w-12 items-center justify-center transition-colors hover:bg-accent",
													children: /* @__PURE__ */ jsx(Minus, { className: "h-5 w-5" })
												}),
												/* @__PURE__ */ jsx("span", {
													className: "w-12 text-center font-semibold",
													children: quantity
												}),
												/* @__PURE__ */ jsx("button", {
													onClick: () => handleQuantityChange(1),
													className: "flex h-12 w-12 items-center justify-center transition-colors hover:bg-accent",
													children: /* @__PURE__ */ jsx(Plus, { className: "h-5 w-5" })
												})
											]
										})
									})] }),
									/* @__PURE__ */ jsxs("div", {
										className: "flex gap-4",
										children: [
											/* @__PURE__ */ jsxs(Button, {
												size: "lg",
												className: "flex-1 gap-2",
												children: [/* @__PURE__ */ jsx(ShoppingCart, { className: "h-5 w-5" }), "Add to Cart"]
											}),
											/* @__PURE__ */ jsx(Button, {
												size: "lg",
												variant: "outline",
												className: "gap-2",
												children: /* @__PURE__ */ jsx(Heart, { className: "h-5 w-5" })
											}),
											/* @__PURE__ */ jsx(Button, {
												size: "lg",
												variant: "outline",
												className: "gap-2",
												children: /* @__PURE__ */ jsx(Share2, { className: "h-5 w-5" })
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-2 gap-4 pt-6 border-t border-border/60",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ jsx(Check, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ jsx("span", {
													className: "text-sm text-muted-foreground",
													children: "Free Shipping"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ jsx(Check, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ jsx("span", {
													className: "text-sm text-muted-foreground",
													children: "30-Day Returns"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ jsx(Check, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ jsx("span", {
													className: "text-sm text-muted-foreground",
													children: "Secure Payment"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ jsx(Check, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ jsx("span", {
													className: "text-sm text-muted-foreground",
													children: "Authentic Products"
												})]
											})
										]
									})
								]
							})]
						}),
						/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .2 },
							className: "mt-16",
							children: [/* @__PURE__ */ jsx("div", {
								className: "border-b border-border/60",
								children: /* @__PURE__ */ jsx("div", {
									className: "flex gap-8",
									children: [
										"Description",
										"Specifications",
										"Reviews"
									].map((tab) => /* @__PURE__ */ jsx("button", {
										className: "pb-4 text-lg font-semibold text-foreground border-b-2 border-primary",
										children: tab
									}, tab))
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "py-8",
								children: [
									/* @__PURE__ */ jsx("h3", {
										className: "text-2xl font-bold text-foreground mb-4",
										children: "Product Description"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-lg text-muted-foreground leading-relaxed",
										children: product.description
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "text-2xl font-bold text-foreground mt-8 mb-4",
										children: "Specifications"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "grid gap-4 md:grid-cols-2",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex justify-between py-2 border-b border-border/60",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-muted-foreground",
													children: "Brand"
												}), /* @__PURE__ */ jsx("span", {
													className: "font-semibold",
													children: product.brand
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex justify-between py-2 border-b border-border/60",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-muted-foreground",
													children: "Category"
												}), /* @__PURE__ */ jsx("span", {
													className: "font-semibold capitalize",
													children: product.category
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex justify-between py-2 border-b border-border/60",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-muted-foreground",
													children: "Subcategory"
												}), /* @__PURE__ */ jsx("span", {
													className: "font-semibold capitalize",
													children: product.subcategory
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex justify-between py-2 border-b border-border/60",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-muted-foreground",
													children: "Stock"
												}), /* @__PURE__ */ jsxs("span", {
													className: "font-semibold",
													children: [product.stock, " units"]
												})]
											})
										]
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "text-2xl font-bold text-foreground mt-8 mb-4",
										children: "Customer Reviews"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-4 mb-6",
										children: [/* @__PURE__ */ jsx("div", {
											className: "text-5xl font-bold text-foreground",
											children: product.rating
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
											className: "flex",
											children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: `h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}` }, i))
										}), /* @__PURE__ */ jsxs("p", {
											className: "text-sm text-muted-foreground mt-1",
											children: [
												"Based on ",
												product.reviews,
												" reviews"
											]
										})] })]
									})
								]
							})]
						}),
						relatedProducts.length > 0 && /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .3 },
							className: "mt-16",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-3xl font-bold text-foreground mb-8",
								children: "Related Products"
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 gap-6 md:grid-cols-4",
								children: relatedProducts.map((relatedProduct) => /* @__PURE__ */ jsx(ProductCard, {
									product: relatedProduct,
									className: "col-span-1"
								}, relatedProduct.id))
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { ProductDetails as component };
