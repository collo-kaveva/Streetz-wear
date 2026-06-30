import { n as Button, r as Navigation, t as Footer } from "./footer-Dq52LYOJ.js";
import { r as Rating, t as ProductCard } from "./product-card-CJB435OO.js";
import { i as getNewArrivals, n as getBestSellers, o as getSneakers, r as getClothing, s as products } from "./products-D1tJhUcM.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Mail, Quote, Sparkles } from "lucide-react";
//#region src/components/hero.tsx
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative h-[85vh] flex items-center justify-center overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0",
				children: [/* @__PURE__ */ jsx("img", {
					src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80",
					alt: "Fashion Hero",
					className: "h-full w-full object-cover"
				}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" })]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-3xl",
					children: /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .8 },
						className: "space-y-8",
						children: [
							/* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									x: -20
								},
								animate: {
									opacity: 1,
									x: 0
								},
								transition: { delay: .2 },
								className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm",
								children: [/* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-primary animate-pulse" }), /* @__PURE__ */ jsx("span", {
									className: "text-sm font-medium text-white uppercase tracking-wider",
									children: "New Collection 2024"
								})]
							}),
							/* @__PURE__ */ jsxs(motion.h1, {
								initial: {
									opacity: 0,
									y: 30
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: .4 },
								className: "text-5xl font-bold text-white sm:text-6xl lg:text-7xl leading-tight",
								children: ["Discover Your Next", /* @__PURE__ */ jsx("span", {
									className: "block bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent",
									children: "Signature Look"
								})]
							}),
							/* @__PURE__ */ jsx(motion.p, {
								initial: {
									opacity: 0,
									y: 30
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: .6 },
								className: "text-lg text-gray-200 sm:text-xl max-w-2xl",
								children: "Explore our curated collection of premium sneakers, clothing, and accessories from the world's most iconic brands."
							}),
							/* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									y: 30
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: .8 },
								className: "flex flex-wrap gap-4",
								children: [/* @__PURE__ */ jsx(Link, {
									to: "/shop",
									children: /* @__PURE__ */ jsxs(Button, {
										size: "lg",
										className: "gap-2",
										children: ["Shop Now", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
									})
								}), /* @__PURE__ */ jsx(Link, {
									to: "/sneakers",
									children: /* @__PURE__ */ jsxs(Button, {
										size: "lg",
										variant: "outline",
										className: "gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20",
										children: ["Explore Sneakers", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
									})
								})]
							}),
							/* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									y: 30
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: 1 },
								className: "flex flex-wrap gap-8 pt-8 border-t border-white/20",
								children: [
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
										className: "text-3xl font-bold text-white",
										children: "100+"
									}), /* @__PURE__ */ jsx("div", {
										className: "text-sm text-gray-300",
										children: "Premium Brands"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
										className: "text-3xl font-bold text-white",
										children: "500+"
									}), /* @__PURE__ */ jsx("div", {
										className: "text-sm text-gray-300",
										children: "Products"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
										className: "text-3xl font-bold text-white",
										children: "50K+"
									}), /* @__PURE__ */ jsx("div", {
										className: "text-sm text-gray-300",
										children: "Happy Customers"
									})] })
								]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: { delay: 1.5 },
				className: "absolute bottom-8 left-1/2 -translate-x-1/2",
				children: /* @__PURE__ */ jsxs(motion.div, {
					animate: { y: [
						0,
						10,
						0
					] },
					transition: {
						duration: 2,
						repeat: Infinity
					},
					className: "flex flex-col items-center gap-2 text-white",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-sm uppercase tracking-wider",
						children: "Scroll"
					}), /* @__PURE__ */ jsx("div", { className: "h-6 w-px bg-white/50" })]
				})
			})
		]
	});
}
//#endregion
//#region src/components/featured-categories.tsx
var categories = [
	{
		name: "Men's Fashion",
		image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80",
		to: "/shop?gender=men"
	},
	{
		name: "Women's Fashion",
		image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80",
		to: "/shop?gender=women"
	},
	{
		name: "Sneakers",
		image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&q=80",
		to: "/sneakers"
	},
	{
		name: "New Arrivals",
		image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
		to: "/shop?filter=new"
	},
	{
		name: "Streetwear",
		image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800&q=80",
		to: "/shop?category=streetwear"
	},
	{
		name: "Accessories",
		image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
		to: "/accessories"
	},
	{
		name: "Luxury Collection",
		image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
		to: "/shop?filter=luxury"
	},
	{
		name: "Best Sellers",
		image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
		to: "/shop?filter=bestsellers"
	}
];
function FeaturedCategories() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-20 bg-background",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
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
				transition: { duration: .6 },
				className: "mb-12 text-center",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-4xl font-bold text-foreground sm:text-5xl",
					children: "Shop by Category"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-lg text-muted-foreground",
					children: "Explore our curated collections"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 gap-4 md:grid-cols-4",
				children: categories.map((category, index) => /* @__PURE__ */ jsx(Link, {
					to: category.to,
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
						transition: {
							duration: .6,
							delay: index * .1
						},
						className: "group relative aspect-square overflow-hidden rounded-3xl",
						whileHover: { scale: 1.02 },
						children: [
							/* @__PURE__ */ jsx("img", {
								src: category.image,
								alt: category.name,
								className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							}),
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }),
							/* @__PURE__ */ jsxs("div", {
								className: "absolute bottom-0 left-0 right-0 p-6",
								children: [/* @__PURE__ */ jsx(motion.h3, {
									className: "text-xl font-bold text-white",
									whileHover: { x: 5 },
									children: category.name
								}), /* @__PURE__ */ jsxs(motion.div, {
									className: "mt-2 flex items-center gap-1 text-white/80",
									whileHover: { x: 5 },
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-sm",
										children: "Shop Now"
									}), /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
								})]
							})
						]
					})
				}, category.name))
			})]
		})
	});
}
//#endregion
//#region src/components/trending-sneakers.tsx
function TrendingSneakers() {
	const sneakers = getSneakers().slice(0, 8);
	return /* @__PURE__ */ jsx("section", {
		className: "py-20 bg-muted/30",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
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
				transition: { duration: .6 },
				className: "mb-12 flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-4xl font-bold text-foreground sm:text-5xl",
					children: "Trending Sneakers"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-lg text-muted-foreground",
					children: "The hottest drops from top brands"
				})] }), /* @__PURE__ */ jsx(Link, {
					to: "/sneakers",
					children: /* @__PURE__ */ jsxs(Button, {
						variant: "outline",
						className: "gap-2",
						children: ["View All", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
					})
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 gap-6 md:grid-cols-4",
				children: sneakers.map((product, index) => /* @__PURE__ */ jsx(ProductCard, {
					product,
					className: "col-span-1"
				}, product.id))
			})]
		})
	});
}
//#endregion
//#region src/components/featured-clothing.tsx
function FeaturedClothing() {
	const clothing = getClothing().slice(0, 8);
	return /* @__PURE__ */ jsx("section", {
		className: "py-20 bg-background",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
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
				transition: { duration: .6 },
				className: "mb-12 flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-4xl font-bold text-foreground sm:text-5xl",
					children: "Featured Clothing"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-lg text-muted-foreground",
					children: "Premium styles for every occasion"
				})] }), /* @__PURE__ */ jsx(Link, {
					to: "/clothing",
					children: /* @__PURE__ */ jsxs(Button, {
						variant: "outline",
						className: "gap-2",
						children: ["View All", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
					})
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 gap-6 md:grid-cols-4",
				children: clothing.map((product, index) => /* @__PURE__ */ jsx(ProductCard, {
					product,
					className: "col-span-1"
				}, product.id))
			})]
		})
	});
}
//#endregion
//#region src/components/best-sellers.tsx
function BestSellers() {
	const bestSellers = getBestSellers().slice(0, 8);
	return /* @__PURE__ */ jsx("section", {
		className: "py-20 bg-muted/30",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
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
				transition: { duration: .6 },
				className: "mb-12 flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-4xl font-bold text-foreground sm:text-5xl",
					children: "Best Sellers"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-lg text-muted-foreground",
					children: "Most loved by our customers"
				})] }), /* @__PURE__ */ jsx(Link, {
					to: "/shop?filter=bestsellers",
					children: /* @__PURE__ */ jsxs(Button, {
						variant: "outline",
						className: "gap-2",
						children: ["View All", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
					})
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 gap-6 md:grid-cols-4",
				children: bestSellers.map((product, index) => /* @__PURE__ */ jsx(ProductCard, {
					product,
					className: "col-span-1"
				}, product.id))
			})]
		})
	});
}
//#endregion
//#region src/components/new-arrivals.tsx
function NewArrivals() {
	const newArrivals = getNewArrivals().slice(0, 8);
	return /* @__PURE__ */ jsx("section", {
		className: "py-20 bg-background",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
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
				transition: { duration: .6 },
				className: "mb-12 flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-4xl font-bold text-foreground sm:text-5xl",
					children: "New Arrivals"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-lg text-muted-foreground",
					children: "Fresh styles just dropped"
				})] }), /* @__PURE__ */ jsx(Link, {
					to: "/shop?filter=new",
					children: /* @__PURE__ */ jsxs(Button, {
						variant: "outline",
						className: "gap-2",
						children: ["View All", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
					})
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 gap-6 md:grid-cols-4",
				children: newArrivals.map((product, index) => /* @__PURE__ */ jsx(ProductCard, {
					product,
					className: "col-span-1"
				}, product.id))
			})]
		})
	});
}
//#endregion
//#region src/components/brand-logos.tsx
var brands = [
	{
		name: "Nike",
		logo: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=200&q=80"
	},
	{
		name: "Jordan",
		logo: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=200&q=80"
	},
	{
		name: "Adidas",
		logo: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200&q=80"
	},
	{
		name: "Puma",
		logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80"
	},
	{
		name: "New Balance",
		logo: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=200&q=80"
	},
	{
		name: "Converse",
		logo: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=200&q=80"
	},
	{
		name: "Levi's",
		logo: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&q=80"
	},
	{
		name: "Tommy Hilfiger",
		logo: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200&q=80"
	}
];
function BrandLogos() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-16 bg-muted/30",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
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
				transition: { duration: .6 },
				className: "mb-12 text-center",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-3xl font-bold text-foreground sm:text-4xl",
					children: "Shop by Brand"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-lg text-muted-foreground",
					children: "Discover products from world-renowned brands"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-8",
				children: brands.map((brand, index) => /* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						scale: .8
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: index * .1
					},
					className: "flex aspect-square items-center justify-center rounded-2xl bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105",
					whileHover: { scale: 1.05 },
					children: /* @__PURE__ */ jsx("div", {
						className: "text-center",
						children: /* @__PURE__ */ jsx("div", {
							className: "text-2xl font-bold text-foreground",
							children: brand.name
						})
					})
				}, brand.name))
			})]
		})
	});
}
//#endregion
//#region src/components/customer-reviews.tsx
var reviews = [
	{
		id: 1,
		name: "Sarah Johnson",
		avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
		rating: 5,
		review: "Absolutely love the quality of the products! The sneakers I ordered arrived in perfect condition and the customer service was exceptional.",
		product: "Air Jordan 1 Retro High OG"
	},
	{
		id: 2,
		name: "Michael Chen",
		avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
		rating: 5,
		review: "Best online shopping experience I've had. Fast shipping, great prices, and the clothing quality exceeded my expectations.",
		product: "Essential Hoodie"
	},
	{
		id: 3,
		name: "Emily Davis",
		avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
		rating: 4,
		review: "The selection is amazing and the website is so easy to navigate. Will definitely be ordering again soon!",
		product: "Adidas Samba OG"
	}
];
function CustomerReviews() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-20 bg-background",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
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
				transition: { duration: .6 },
				className: "mb-12 text-center",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-4xl font-bold text-foreground sm:text-5xl",
					children: "What Our Customers Say"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-lg text-muted-foreground",
					children: "Real reviews from real customers"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: reviews.map((review, index) => /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .6,
						delay: index * .1
					},
					className: "rounded-3xl border border-border/60 bg-card p-8 shadow-sm",
					children: [
						/* @__PURE__ */ jsx(Quote, { className: "h-8 w-8 text-primary/20 mb-4" }),
						/* @__PURE__ */ jsx(Rating, {
							rating: review.rating,
							showCount: false
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-muted-foreground",
							children: review.review
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 flex items-center gap-4",
							children: [/* @__PURE__ */ jsx("img", {
								src: review.avatar,
								alt: review.name,
								className: "h-12 w-12 rounded-full object-cover"
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "font-semibold text-foreground",
								children: review.name
							}), /* @__PURE__ */ jsx("div", {
								className: "text-sm text-muted-foreground",
								children: review.product
							})] })]
						})
					]
				}, review.id))
			})]
		})
	});
}
//#endregion
//#region src/components/newsletter.tsx
function Newsletter() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative py-20 overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "absolute inset-0",
			children: [/* @__PURE__ */ jsx("img", {
				src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80",
				alt: "Newsletter",
				className: "h-full w-full object-cover"
			}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/70" })]
		}), /* @__PURE__ */ jsx("div", {
			className: "relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
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
				transition: { duration: .6 },
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-4xl font-bold text-white sm:text-5xl",
						children: "Join the Streetwear Community"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-lg text-gray-200",
						children: "Subscribe to our newsletter for exclusive drops, early access, and special offers."
					}),
					/* @__PURE__ */ jsxs(motion.form, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .6,
							delay: .2
						},
						className: "mt-8 flex flex-col gap-4 sm:flex-row",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative flex-1",
							children: [/* @__PURE__ */ jsx(Mail, { className: "absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" }), /* @__PURE__ */ jsx("input", {
								type: "email",
								placeholder: "Enter your email",
								className: "w-full rounded-full border-0 bg-white/10 px-12 py-4 text-white placeholder:text-gray-400 backdrop-blur-sm focus:ring-2 focus:ring-primary"
							})]
						}), /* @__PURE__ */ jsx(Button, {
							size: "lg",
							className: "bg-primary text-primary-foreground",
							children: "Subscribe"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-sm text-gray-400",
						children: "By subscribing, you agree to our Privacy Policy and consent to receive updates."
					})
				]
			})
		})]
	});
}
//#endregion
//#region src/components/instagram-gallery.tsx
var images = [
	"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
	"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80",
	"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
	"https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
	"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
	"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80"
];
function InstagramGallery() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-20 bg-background",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
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
				transition: { duration: .6 },
				className: "mb-12 text-center",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-4xl font-bold text-foreground sm:text-5xl",
					children: "Follow Us on Instagram"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-lg text-muted-foreground",
					children: "@streetwear for daily inspiration"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6",
				children: images.map((image, index) => /* @__PURE__ */ jsxs(motion.a, {
					href: "https://instagram.com",
					target: "_blank",
					rel: "noopener noreferrer",
					initial: {
						opacity: 0,
						scale: .8
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: index * .1
					},
					className: "group relative aspect-square overflow-hidden rounded-2xl",
					whileHover: { scale: 1.02 },
					children: [/* @__PURE__ */ jsx("img", {
						src: image,
						alt: `Instagram ${index + 1}`,
						className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
					}), /* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center",
						children: /* @__PURE__ */ jsx(Instagram, { className: "h-8 w-8 text-white" })
					})]
				}, index))
			})]
		})
	});
}
//#endregion
//#region src/components/extended-home-sections.tsx
var brandCards = [
	{
		name: "Nike",
		slug: "nike",
		image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=900&q=80"
	},
	{
		name: "Jordan",
		slug: "jordan",
		image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80"
	},
	{
		name: "Adidas",
		slug: "adidas",
		image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=900&q=80"
	},
	{
		name: "New Balance",
		slug: "new-balance",
		image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&q=80"
	},
	{
		name: "Puma",
		slug: "puma",
		image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&q=80"
	},
	{
		name: "Converse",
		slug: "converse",
		image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=80"
	}
];
function ExtendedHomeSections() {
	const featuredSneakers = products.filter((product) => product.category === "sneakers" && product.featured).slice(0, 4);
	const featuredClothing = products.filter((product) => product.category === "clothing" && product.featured).slice(0, 4);
	const accessories = products.filter((product) => product.category === "accessories" && product.featured).slice(0, 4);
	const bestSellers = products.filter((product) => product.bestSeller).slice(0, 6);
	const newArrivals = products.filter((product) => product.newArrival).slice(0, 6);
	return /* @__PURE__ */ jsx("section", {
		className: "border-t border-border/60 bg-background",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-24",
				children: [
					/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						className: "rounded-[2rem] border border-border/60 bg-gradient-to-br from-muted/80 via-background to-muted/30 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-10",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-sm font-semibold uppercase tracking-[0.3em] text-primary",
								children: "Featured Sneakers"
							}), /* @__PURE__ */ jsx("h2", {
								className: "mt-2 text-3xl font-bold text-foreground sm:text-4xl",
								children: "Elevated essentials for every rotation"
							})] }), /* @__PURE__ */ jsxs(Link, {
								to: "/sneakers",
								className: "inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary",
								children: ["Browse sneakers ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4",
							children: featuredSneakers.map((product) => /* @__PURE__ */ jsx(ProductCard, { product }, product.id))
						})]
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						className: "space-y-8",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-sm font-semibold uppercase tracking-[0.3em] text-primary",
								children: "Featured Clothing"
							}), /* @__PURE__ */ jsx("h2", {
								className: "mt-2 text-3xl font-bold text-foreground sm:text-4xl",
								children: "Layer up in refined everyday staples"
							})] }), /* @__PURE__ */ jsxs(Link, {
								to: "/clothing",
								className: "inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary",
								children: ["Explore clothing ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid gap-6 md:grid-cols-2 xl:grid-cols-4",
							children: featuredClothing.map((product) => /* @__PURE__ */ jsx(ProductCard, { product }, product.id))
						})]
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						className: "rounded-[2rem] border border-border/60 bg-card p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-10",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-sm font-semibold uppercase tracking-[0.3em] text-primary",
								children: "Accessories"
							}), /* @__PURE__ */ jsx("h2", {
								className: "mt-2 text-3xl font-bold text-foreground sm:text-4xl",
								children: "The finishing touches that define the fit"
							})] }), /* @__PURE__ */ jsxs(Link, {
								to: "/accessories",
								className: "inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary",
								children: ["Shop accessories ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4",
							children: accessories.map((product) => /* @__PURE__ */ jsx(ProductCard, { product }, product.id))
						})]
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						className: "space-y-8",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-sm font-semibold uppercase tracking-[0.3em] text-primary",
								children: "Best Sellers"
							}), /* @__PURE__ */ jsx("h2", {
								className: "mt-2 text-3xl font-bold text-foreground sm:text-4xl",
								children: "Most loved pieces this season"
							})] }), /* @__PURE__ */ jsxs(Link, {
								to: "/shop",
								className: "inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary",
								children: ["View all best sellers ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "flex gap-6 overflow-x-auto pb-2",
							children: bestSellers.map((product) => /* @__PURE__ */ jsx("div", {
								className: "min-w-[280px] flex-1",
								children: /* @__PURE__ */ jsx(ProductCard, { product })
							}, product.id))
						})]
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						className: "space-y-8",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-sm font-semibold uppercase tracking-[0.3em] text-primary",
								children: "New Arrivals"
							}), /* @__PURE__ */ jsx("h2", {
								className: "mt-2 text-3xl font-bold text-foreground sm:text-4xl",
								children: "Fresh drops curated for your next edit"
							})] }), /* @__PURE__ */ jsxs(Link, {
								to: "/shop",
								className: "inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary",
								children: ["See what’s new ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid gap-6 md:grid-cols-2 xl:grid-cols-3",
							children: newArrivals.map((product) => /* @__PURE__ */ jsx(ProductCard, { product }, product.id))
						})]
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						className: "rounded-[2rem] border border-border/60 bg-gradient-to-br from-foreground via-foreground/90 to-primary/80 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.16)] sm:p-10",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
								className: "mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium",
								children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }), "Shop by Brand"]
							}), /* @__PURE__ */ jsx("h2", {
								className: "text-3xl font-bold sm:text-4xl",
								children: "Curated collections from your favorite labels"
							})] }), /* @__PURE__ */ jsxs(Link, {
								to: "/brands",
								className: "inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary-foreground/80",
								children: ["Discover brands ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3",
							children: brandCards.map((brand) => /* @__PURE__ */ jsxs(Link, {
								to: "/brands",
								search: {},
								hash: brand.slug,
								className: "group relative overflow-hidden rounded-[1.5rem] border border-white/10",
								children: [
									/* @__PURE__ */ jsx("img", {
										src: brand.image,
										alt: brand.name,
										className: "h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
									}),
									/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" }),
									/* @__PURE__ */ jsx("div", {
										className: "absolute bottom-0 left-0 right-0 p-6",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("h3", {
												className: "text-2xl font-semibold",
												children: brand.name
											}), /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" })]
										})
									})
								]
							}, brand.name))
						})]
					})
				]
			})
		})
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ jsx(Navigation, {}),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(FeaturedCategories, {}),
			/* @__PURE__ */ jsx(TrendingSneakers, {}),
			/* @__PURE__ */ jsx(FeaturedClothing, {}),
			/* @__PURE__ */ jsx(BestSellers, {}),
			/* @__PURE__ */ jsx(NewArrivals, {}),
			/* @__PURE__ */ jsx(BrandLogos, {}),
			/* @__PURE__ */ jsx(CustomerReviews, {}),
			/* @__PURE__ */ jsx(Newsletter, {}),
			/* @__PURE__ */ jsx(InstagramGallery, {}),
			/* @__PURE__ */ jsx(ExtendedHomeSections, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
