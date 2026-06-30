import { r as Navigation, t as Footer } from "./footer-Dq52LYOJ.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Award, Globe, Target, Users } from "lucide-react";
//#region src/routes/about.tsx?tsr-split=component
function About() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ jsx(Navigation, {}),
			/* @__PURE__ */ jsxs("div", {
				className: "pt-24",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "relative h-[70vh] overflow-hidden",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80",
								alt: "About Hero",
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
											children: "Our Story"
										}), /* @__PURE__ */ jsx("p", {
											className: "mt-4 text-xl text-gray-200",
											children: "Built for modern street culture"
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
								children: "Our Mission"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xl text-muted-foreground leading-relaxed",
								children: "We blend clean silhouettes, premium fabrics, and a bold point of view to create pieces that feel timeless and current. Our mission is to provide premium streetwear that empowers self-expression and celebrates individuality."
							})]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "bg-muted/30",
						children: /* @__PURE__ */ jsxs("div", {
							className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20",
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
								className: "mb-12 text-center",
								children: [/* @__PURE__ */ jsx("h2", {
									className: "text-4xl font-bold text-foreground",
									children: "Our Values"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-4 text-lg text-muted-foreground",
									children: "The principles that guide everything we do"
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "grid gap-8 md:grid-cols-2 lg:grid-cols-4",
								children: [
									{
										icon: Target,
										title: "Quality First",
										description: "We never compromise on quality. Every piece is crafted with premium materials and attention to detail."
									},
									{
										icon: Users,
										title: "Community",
										description: "We believe in building a community that celebrates diversity and self-expression through fashion."
									},
									{
										icon: Award,
										title: "Innovation",
										description: "We constantly push boundaries to bring you fresh designs and cutting-edge streetwear."
									},
									{
										icon: Globe,
										title: "Sustainability",
										description: "We are committed to reducing our environmental impact through responsible sourcing and production."
									}
								].map((value, index) => /* @__PURE__ */ jsxs(motion.div, {
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
									className: "rounded-3xl border border-border/60 bg-card p-8 text-center",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10",
											children: /* @__PURE__ */ jsx(value.icon, { className: "h-8 w-8 text-primary" })
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "text-xl font-bold text-foreground mb-2",
											children: value.title
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-muted-foreground",
											children: value.description
										})
									]
								}, index))
							})]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20",
						children: /* @__PURE__ */ jsxs("div", {
							className: "grid gap-12 lg:grid-cols-2 items-center",
							children: [/* @__PURE__ */ jsx(motion.div, {
								initial: {
									opacity: 0,
									x: -20
								},
								whileInView: {
									opacity: 1,
									x: 0
								},
								viewport: { once: true },
								children: /* @__PURE__ */ jsx("img", {
									src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
									alt: "Our Story",
									className: "rounded-3xl shadow-lg"
								})
							}), /* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									x: 20
								},
								whileInView: {
									opacity: 1,
									x: 0
								},
								viewport: { once: true },
								className: "space-y-6",
								children: [
									/* @__PURE__ */ jsx("h2", {
										className: "text-4xl font-bold text-foreground",
										children: "Our Journey"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-lg text-muted-foreground",
										children: "Founded in 2020, Streetwear started with a simple vision: to create a destination where sneaker enthusiasts and fashion-forward individuals could find premium pieces that reflect their unique style."
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-lg text-muted-foreground",
										children: "What began as a small online store has grown into a global community of fashion lovers. We've curated partnerships with the world's most iconic brands while maintaining our commitment to quality and authenticity."
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-lg text-muted-foreground",
										children: "Today, we continue to push boundaries, bringing you the latest drops and timeless classics that define modern street culture."
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "bg-foreground",
						children: /* @__PURE__ */ jsx("div", {
							className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20",
							children: /* @__PURE__ */ jsx("div", {
								className: "grid gap-8 md:grid-cols-4 text-center",
								children: [
									{
										value: "100+",
										label: "Premium Brands"
									},
									{
										value: "500+",
										label: "Products"
									},
									{
										value: "50K+",
										label: "Happy Customers"
									},
									{
										value: "25+",
										label: "Countries"
									}
								].map((stat, index) => /* @__PURE__ */ jsxs(motion.div, {
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
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-5xl font-bold text-white",
										children: stat.value
									}), /* @__PURE__ */ jsx("div", {
										className: "mt-2 text-lg text-gray-300",
										children: stat.label
									})]
								}, index))
							})
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20",
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
							className: "mb-12 text-center",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-4xl font-bold text-foreground",
								children: "Our Team"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-4 text-lg text-muted-foreground",
								children: "The passionate people behind Streetwear"
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid gap-8 md:grid-cols-3",
							children: [
								{
									name: "Alex Johnson",
									role: "Founder & CEO",
									image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
								},
								{
									name: "Sarah Chen",
									role: "Creative Director",
									image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
								},
								{
									name: "Mike Rodriguez",
									role: "Head of Curation",
									image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
								}
							].map((member, index) => /* @__PURE__ */ jsxs(motion.div, {
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
								className: "text-center",
								children: [
									/* @__PURE__ */ jsx("img", {
										src: member.image,
										alt: member.name,
										className: "mx-auto mb-4 h-48 w-48 rounded-full object-cover"
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "text-xl font-bold text-foreground",
										children: member.name
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-muted-foreground",
										children: member.role
									})
								]
							}, index))
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { About as component };
