import { n as Button, r as Navigation, t as Footer } from "./footer-Dq52LYOJ.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Heart, Instagram } from "lucide-react";
//#region src/routes/lookbook.tsx?tsr-split=component
function Lookbook() {
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
								src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80",
								alt: "Lookbook Hero",
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
											children: "Lookbook"
										}), /* @__PURE__ */ jsx("p", {
											className: "mt-4 text-xl text-gray-200",
											children: "Get inspired by our curated style collections"
										})]
									})
								})
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20",
						children: /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							className: "max-w-3xl mx-auto text-center",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-4xl font-bold text-foreground mb-6",
								children: "Style Inspiration"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xl text-muted-foreground leading-relaxed",
								children: "Explore our curated looks featuring the latest trends and timeless classics. Each outfit is carefully styled to help you discover new ways to wear your favorite pieces."
							})]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20",
						children: /* @__PURE__ */ jsx("div", {
							className: "grid gap-8 md:grid-cols-2",
							children: [
								{
									id: 1,
									title: "Urban Explorer",
									description: "Bold street style for the modern city dweller",
									image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
									products: [
										"Nike Air Max",
										"Black Hoodie",
										"Cargo Pants"
									]
								},
								{
									id: 2,
									title: "Minimalist Chic",
									description: "Clean lines and neutral tones for effortless style",
									image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
									products: [
										"White Sneakers",
										"Beige Jacket",
										"Slim Fit Jeans"
									]
								},
								{
									id: 3,
									title: "Athleisure Luxe",
									description: "Performance meets fashion in this sporty ensemble",
									image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80",
									products: [
										"Running Shoes",
										"Track Jacket",
										"Athletic Shorts"
									]
								},
								{
									id: 4,
									title: "Retro Revival",
									description: "Vintage-inspired pieces with a modern twist",
									image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
									products: [
										"Vintage Tee",
										"High-top Sneakers",
										"Denim Jacket"
									]
								},
								{
									id: 5,
									title: "Street Art",
									description: "Expressive style for the creative soul",
									image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&q=80",
									products: [
										"Graphic Tee",
										"Distressed Jeans",
										"Canvas Shoes"
									]
								},
								{
									id: 6,
									title: "Night Out",
									description: "Sophisticated looks for evening adventures",
									image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
									products: [
										"Leather Jacket",
										"Black Boots",
										"Dark Denim"
									]
								},
								{
									id: 7,
									title: "Summer Vibes",
									description: "Light and breezy for warm weather days",
									image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
									products: [
										"Linen Shirt",
										"Shorts",
										"Sandals"
									]
								},
								{
									id: 8,
									title: "Winter Warmth",
									description: "Cozy layers for cold weather comfort",
									image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80",
									products: [
										"Puffer Jacket",
										"Wool Sweater",
										"Winter Boots"
									]
								}
							].map((look, index) => /* @__PURE__ */ jsxs(motion.div, {
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
								className: "group overflow-hidden rounded-3xl border border-border/60 bg-card",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "relative aspect-[4/5] overflow-hidden",
									children: [
										/* @__PURE__ */ jsx("img", {
											src: look.image,
											alt: look.title,
											className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
										}),
										/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" }),
										/* @__PURE__ */ jsx("div", {
											className: "absolute bottom-0 left-0 right-0 p-6 translate-y-full transition-transform duration-300 group-hover:translate-y-0",
											children: /* @__PURE__ */ jsxs(Button, {
												className: "w-full gap-2",
												children: [/* @__PURE__ */ jsx(Instagram, { className: "h-5 w-5" }), "Shop This Look"]
											})
										})
									]
								}), /* @__PURE__ */ jsxs("div", {
									className: "p-6",
									children: [
										/* @__PURE__ */ jsx("h3", {
											className: "text-2xl font-bold text-foreground mb-2",
											children: look.title
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-muted-foreground mb-4",
											children: look.description
										}),
										/* @__PURE__ */ jsx("div", {
											className: "flex flex-wrap gap-2",
											children: look.products.map((product, i) => /* @__PURE__ */ jsx("span", {
												className: "rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary",
												children: product
											}, i))
										})
									]
								})]
							}, look.id))
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "bg-muted/30",
						children: /* @__PURE__ */ jsx("div", {
							className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20",
							children: /* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								className: "text-center",
								children: [
									/* @__PURE__ */ jsx("h2", {
										className: "text-4xl font-bold text-foreground mb-4",
										children: "Create Your Own Look"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xl text-muted-foreground mb-8 max-w-2xl mx-auto",
										children: "Browse our collection and mix and match to find your perfect style"
									}),
									/* @__PURE__ */ jsxs(Button, {
										size: "lg",
										className: "gap-2",
										children: ["Shop Now", /* @__PURE__ */ jsx(Heart, { className: "h-5 w-5" })]
									})
								]
							})
						})
					})
				]
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Lookbook as component };
