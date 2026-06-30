import { forwardRef, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { Facebook, Heart, Instagram, Mail, MapPin, Menu, Phone, Search, ShoppingBag, Twitter, User, X, Youtube } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatPrice(price) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD"
	}).format(price);
}
function calculateDiscountedPrice(price, discount) {
	if (!discount) return price;
	return price - price * discount / 100;
}
//#endregion
//#region src/components/navigation.tsx
function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const navLinks = [
		{
			name: "Home",
			to: "/"
		},
		{
			name: "Shop",
			to: "/shop"
		},
		{
			name: "Sneakers",
			to: "/sneakers"
		},
		{
			name: "Clothing",
			to: "/clothing"
		},
		{
			name: "Accessories",
			to: "/accessories"
		},
		{
			name: "Brands",
			to: "/brands"
		},
		{
			name: "About",
			to: "/about"
		},
		{
			name: "Contact",
			to: "/contact"
		},
		{
			name: "Order Goods",
			to: "/order-goods"
		},
		{
			name: "Wishlist",
			to: "/wishlist"
		},
		{
			name: "Cart",
			to: "/cart"
		}
	];
	return /* @__PURE__ */ jsxs(motion.nav, {
		className: cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/60 shadow-sm" : "bg-transparent"),
		initial: { y: -100 },
		animate: { y: 0 },
		transition: { duration: .5 },
		children: [/* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex h-20 items-center justify-between",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "flex items-center gap-2",
						children: /* @__PURE__ */ jsx(motion.div, {
							className: "text-2xl font-bold uppercase tracking-[0.3em]",
							whileHover: { scale: 1.05 },
							children: "STREETWEAR"
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "hidden md:flex items-center gap-8",
						children: navLinks.map((link) => /* @__PURE__ */ jsx(Link, {
							to: link.to,
							className: "relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
							children: /* @__PURE__ */ jsxs(motion.span, {
								whileHover: { y: -2 },
								className: "relative",
								children: [link.name, /* @__PURE__ */ jsx(motion.span, {
									className: "absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full",
									whileHover: { width: "100%" }
								})]
							})
						}, link.name))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-4",
						children: [
							/* @__PURE__ */ jsx(motion.button, {
								className: "hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-accent",
								whileHover: { scale: 1.1 },
								whileTap: { scale: .9 },
								children: /* @__PURE__ */ jsx(Search, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ jsx(motion.button, {
								className: "hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-accent",
								whileHover: { scale: 1.1 },
								whileTap: { scale: .9 },
								children: /* @__PURE__ */ jsx(Heart, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ jsxs(motion.button, {
								className: "relative hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-accent",
								whileHover: { scale: 1.1 },
								whileTap: { scale: .9 },
								children: [/* @__PURE__ */ jsx(ShoppingBag, { className: "h-5 w-5" }), /* @__PURE__ */ jsx("span", {
									className: "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground",
									children: "3"
								})]
							}),
							/* @__PURE__ */ jsx(motion.button, {
								className: "hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-accent",
								whileHover: { scale: 1.1 },
								whileTap: { scale: .9 },
								children: /* @__PURE__ */ jsx(User, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ jsx(motion.button, {
								className: "md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-accent",
								onClick: () => setIsMenuOpen(!isMenuOpen),
								whileHover: { scale: 1.1 },
								whileTap: { scale: .9 },
								children: isMenuOpen ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
							})
						]
					})
				]
			})
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: isMenuOpen && /* @__PURE__ */ jsx(motion.div, {
			className: "md:hidden border-t border-border/60 bg-background/95 backdrop-blur-lg",
			initial: {
				height: 0,
				opacity: 0
			},
			animate: {
				height: "auto",
				opacity: 1
			},
			exit: {
				height: 0,
				opacity: 0
			},
			transition: { duration: .3 },
			children: /* @__PURE__ */ jsxs("div", {
				className: "px-4 py-6 space-y-4",
				children: [navLinks.map((link) => /* @__PURE__ */ jsx(Link, {
					to: link.to,
					className: "block py-2 text-lg font-medium text-muted-foreground transition-colors hover:text-foreground",
					onClick: () => setIsMenuOpen(false),
					children: link.name
				}, link.name)), /* @__PURE__ */ jsxs("div", {
					className: "flex gap-4 pt-4 border-t border-border/60",
					children: [
						/* @__PURE__ */ jsx(motion.button, {
							className: "flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-accent",
							whileHover: { scale: 1.1 },
							whileTap: { scale: .9 },
							children: /* @__PURE__ */ jsx(Search, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ jsx(motion.button, {
							className: "flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-accent",
							whileHover: { scale: 1.1 },
							whileTap: { scale: .9 },
							children: /* @__PURE__ */ jsx(Heart, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ jsxs(motion.button, {
							className: "relative flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-accent",
							whileHover: { scale: 1.1 },
							whileTap: { scale: .9 },
							children: [/* @__PURE__ */ jsx(ShoppingBag, { className: "h-5 w-5" }), /* @__PURE__ */ jsx("span", {
								className: "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground",
								children: "3"
							})]
						}),
						/* @__PURE__ */ jsx(motion.button, {
							className: "flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-accent",
							whileHover: { scale: 1.1 },
							whileTap: { scale: .9 },
							children: /* @__PURE__ */ jsx(User, { className: "h-5 w-5" })
						})
					]
				})]
			})
		}) })]
	});
}
//#endregion
//#region src/components/ui/button.tsx
var Button = forwardRef(({ className, variant = "primary", size = "md", fullWidth = false, children, ...props }, ref) => {
	return /* @__PURE__ */ jsx(motion.button, {
		ref,
		className: cn("inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
			primary: "bg-primary text-primary-foreground hover:bg-primary/90",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		}[variant], {
			sm: "px-4 py-2 text-sm",
			md: "px-6 py-3 text-base",
			lg: "px-8 py-4 text-lg",
			xl: "px-10 py-5 text-xl"
		}[size], fullWidth && "w-full", className),
		whileHover: { scale: 1.05 },
		whileTap: { scale: .95 },
		...props,
		children
	});
});
Button.displayName = "Button";
//#endregion
//#region src/components/footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "bg-foreground text-foreground",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "border-b border-border/20",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid gap-8 md:grid-cols-2",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "text-2xl font-bold text-white",
							children: "Stay in the Loop"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-gray-400",
							children: "Subscribe to our newsletter for exclusive offers and early access to new drops."
						})] }), /* @__PURE__ */ jsxs("form", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ jsx("input", {
								type: "email",
								placeholder: "Your email address",
								className: "flex-1 rounded-full border-0 bg-white/10 px-6 py-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary"
							}), /* @__PURE__ */ jsx(Button, {
								className: "bg-primary text-primary-foreground",
								children: "Subscribe"
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid gap-12 md:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("h3", {
								className: "text-2xl font-bold uppercase tracking-wider text-white mb-6",
								children: "STREETWEAR"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-gray-400 mb-6",
								children: "Your destination for premium sneakers, clothing, and accessories from the world's most iconic brands."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex gap-4",
								children: [
									/* @__PURE__ */ jsx(motion.a, {
										href: "#",
										className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary",
										whileHover: { scale: 1.1 },
										children: /* @__PURE__ */ jsx(Facebook, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ jsx(motion.a, {
										href: "#",
										className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary",
										whileHover: { scale: 1.1 },
										children: /* @__PURE__ */ jsx(Instagram, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ jsx(motion.a, {
										href: "#",
										className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary",
										whileHover: { scale: 1.1 },
										children: /* @__PURE__ */ jsx(Twitter, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ jsx(motion.a, {
										href: "#",
										className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary",
										whileHover: { scale: 1.1 },
										children: /* @__PURE__ */ jsx(Youtube, { className: "h-5 w-5" })
									})
								]
							})
						] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "text-lg font-semibold text-white mb-6",
							children: "Quick Links"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/shop",
									className: "text-gray-400 transition-colors hover:text-white",
									children: "Shop All"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/sneakers",
									className: "text-gray-400 transition-colors hover:text-white",
									children: "Sneakers"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/clothing",
									className: "text-gray-400 transition-colors hover:text-white",
									children: "Clothing"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/accessories",
									className: "text-gray-400 transition-colors hover:text-white",
									children: "Accessories"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/brands",
									className: "text-gray-400 transition-colors hover:text-white",
									children: "Brands"
								}) })
							]
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "text-lg font-semibold text-white mb-6",
							children: "Customer Service"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/contact",
									className: "text-gray-400 transition-colors hover:text-white",
									children: "Contact Us"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/about",
									className: "text-gray-400 transition-colors hover:text-white",
									children: "About Us"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "#",
									className: "text-gray-400 transition-colors hover:text-white",
									children: "Shipping Info"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "#",
									className: "text-gray-400 transition-colors hover:text-white",
									children: "Returns & Exchanges"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "#",
									className: "text-gray-400 transition-colors hover:text-white",
									children: "FAQ"
								}) })
							]
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "text-lg font-semibold text-white mb-6",
							children: "Contact Info"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-3 text-gray-400",
									children: [/* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5 mt-1 flex-shrink-0" }), /* @__PURE__ */ jsxs("span", { children: [
										"123 Fashion Street",
										/* @__PURE__ */ jsx("br", {}),
										"New York, NY 10001"
									] })]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-center gap-3 text-gray-400",
									children: [/* @__PURE__ */ jsx(Phone, { className: "h-5 w-5 flex-shrink-0" }), /* @__PURE__ */ jsx("span", { children: "+1 (555) 123-4567" })]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-center gap-3 text-gray-400",
									children: [/* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 flex-shrink-0" }), /* @__PURE__ */ jsx("span", { children: "hello@streetwear.com" })]
								})
							]
						})] })
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "border-t border-border/20",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-gray-400 text-sm",
							children: "© 2024 Streetwear. All rights reserved."
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex gap-6 text-sm",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: "#",
									className: "text-gray-400 transition-colors hover:text-white",
									children: "Privacy Policy"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#",
									className: "text-gray-400 transition-colors hover:text-white",
									children: "Terms of Service"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#",
									className: "text-gray-400 transition-colors hover:text-white",
									children: "Cookie Policy"
								})
							]
						})]
					})
				})
			})
		]
	});
}
//#endregion
export { cn as a, calculateDiscountedPrice as i, Button as n, formatPrice as o, Navigation as r, Footer as t };
