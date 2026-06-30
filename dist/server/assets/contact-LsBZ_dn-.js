import { n as Button, r as Navigation, t as Footer } from "./footer-Dq52LYOJ.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
//#region src/routes/contact.tsx?tsr-split=component
function Contact() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ jsx(Navigation, {}),
			/* @__PURE__ */ jsxs("div", {
				className: "pt-24",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative h-[50vh] overflow-hidden",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
							alt: "Contact Hero",
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
										children: "Get in Touch"
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-4 text-xl text-gray-200",
										children: "Let's talk style"
									})]
								})
							})
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid gap-12 lg:grid-cols-2",
						children: [/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								x: -20
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: { once: true },
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-3xl font-bold text-foreground mb-6",
									children: "Send us a Message"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-lg text-muted-foreground mb-8",
									children: "Have a question or feedback? We'd love to hear from you."
								}),
								/* @__PURE__ */ jsxs("form", {
									className: "space-y-6",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "grid gap-6 md:grid-cols-2",
											children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												className: "block text-sm font-medium text-foreground mb-2",
												children: "First Name"
											}), /* @__PURE__ */ jsx("input", {
												type: "text",
												className: "w-full rounded-full border-2 border-border/60 bg-background px-6 py-3 focus:border-primary focus:outline-none",
												placeholder: "John"
											})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												className: "block text-sm font-medium text-foreground mb-2",
												children: "Last Name"
											}), /* @__PURE__ */ jsx("input", {
												type: "text",
												className: "w-full rounded-full border-2 border-border/60 bg-background px-6 py-3 focus:border-primary focus:outline-none",
												placeholder: "Doe"
											})] })]
										}),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "block text-sm font-medium text-foreground mb-2",
											children: "Email"
										}), /* @__PURE__ */ jsx("input", {
											type: "email",
											className: "w-full rounded-full border-2 border-border/60 bg-background px-6 py-3 focus:border-primary focus:outline-none",
											placeholder: "john@example.com"
										})] }),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "block text-sm font-medium text-foreground mb-2",
											children: "Subject"
										}), /* @__PURE__ */ jsx("input", {
											type: "text",
											className: "w-full rounded-full border-2 border-border/60 bg-background px-6 py-3 focus:border-primary focus:outline-none",
											placeholder: "How can we help?"
										})] }),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "block text-sm font-medium text-foreground mb-2",
											children: "Message"
										}), /* @__PURE__ */ jsx("textarea", {
											rows: 5,
											className: "w-full rounded-3xl border-2 border-border/60 bg-background px-6 py-4 focus:border-primary focus:outline-none resize-none",
											placeholder: "Your message..."
										})] }),
										/* @__PURE__ */ jsxs(Button, {
											size: "lg",
											className: "w-full gap-2",
											children: [/* @__PURE__ */ jsx(Send, { className: "h-5 w-5" }), "Send Message"]
										})
									]
								})
							]
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
							className: "space-y-8",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
									className: "text-3xl font-bold text-foreground mb-6",
									children: "Contact Information"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-lg text-muted-foreground",
									children: "Reach out for collaborations, wholesale inquiries, or help finding your next favorite piece."
								})] }),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-6",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-start gap-4",
											children: [/* @__PURE__ */ jsx("div", {
												className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary/10",
												children: /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6 text-primary" })
											}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
												className: "font-semibold text-foreground",
												children: "Email"
											}), /* @__PURE__ */ jsx("p", {
												className: "text-muted-foreground",
												children: "hello@streetwear.com"
											})] })]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-start gap-4",
											children: [/* @__PURE__ */ jsx("div", {
												className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary/10",
												children: /* @__PURE__ */ jsx(Phone, { className: "h-6 w-6 text-primary" })
											}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
												className: "font-semibold text-foreground",
												children: "Phone"
											}), /* @__PURE__ */ jsx("p", {
												className: "text-muted-foreground",
												children: "+1 (555) 123-4567"
											})] })]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-start gap-4",
											children: [/* @__PURE__ */ jsx("div", {
												className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary/10",
												children: /* @__PURE__ */ jsx(MapPin, { className: "h-6 w-6 text-primary" })
											}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
												className: "font-semibold text-foreground",
												children: "Address"
											}), /* @__PURE__ */ jsxs("p", {
												className: "text-muted-foreground",
												children: [
													"123 Fashion Street",
													/* @__PURE__ */ jsx("br", {}),
													"New York, NY 10001"
												]
											})] })]
										})
									]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "rounded-3xl overflow-hidden border border-border/60",
									children: /* @__PURE__ */ jsx("div", {
										className: "aspect-video bg-muted flex items-center justify-center",
										children: /* @__PURE__ */ jsxs("div", {
											className: "text-center",
											children: [/* @__PURE__ */ jsx(MapPin, { className: "h-12 w-12 text-muted-foreground mx-auto mb-2" }), /* @__PURE__ */ jsx("p", {
												className: "text-muted-foreground",
												children: "Map Placeholder"
											})]
										})
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-3xl border border-border/60 bg-card p-6",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "font-semibold text-foreground mb-4",
										children: "Business Hours"
									}), /* @__PURE__ */ jsxs("div", {
										className: "space-y-2 text-sm",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex justify-between",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-muted-foreground",
													children: "Monday - Friday"
												}), /* @__PURE__ */ jsx("span", {
													className: "text-foreground",
													children: "9:00 AM - 6:00 PM"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex justify-between",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-muted-foreground",
													children: "Saturday"
												}), /* @__PURE__ */ jsx("span", {
													className: "text-foreground",
													children: "10:00 AM - 4:00 PM"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex justify-between",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-muted-foreground",
													children: "Sunday"
												}), /* @__PURE__ */ jsx("span", {
													className: "text-foreground",
													children: "Closed"
												})]
											})
										]
									})]
								})
							]
						})]
					})
				})]
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Contact as component };
