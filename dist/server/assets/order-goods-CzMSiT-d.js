import { n as Button, r as Navigation, t as Footer } from "./footer-Dq52LYOJ.js";
import { s as products } from "./products-D1tJhUcM.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { CheckCircle2, PackageCheck, Send } from "lucide-react";
//#region src/routes/order-goods.tsx?tsr-split=component
function OrderGoods() {
	const [submitted, setSubmitted] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		product: products[0]?.name ?? "",
		brand: "Nike",
		size: "M",
		color: "Black",
		quantity: "1",
		deliveryAddress: "",
		notes: ""
	});
	const handleChange = (event) => {
		const { name, value } = event.target;
		setForm((prev) => ({
			...prev,
			[name]: value
		}));
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ jsx(Navigation, {}),
			/* @__PURE__ */ jsx("div", {
				className: "pt-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-12 max-w-3xl",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-sm font-semibold uppercase tracking-[0.3em] text-primary",
								children: "Order Goods"
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "mt-3 text-4xl font-bold text-foreground sm:text-5xl",
								children: "Request your next drop with ease"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-lg text-muted-foreground",
								children: "Share your preferred product details and we’ll prepare a tailored order request for you."
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "grid gap-8 lg:grid-cols-[1.1fr_0.9fr]",
						children: [/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								x: -20
							},
							animate: {
								opacity: 1,
								x: 0
							},
							className: "rounded-[2rem] border border-border/60 bg-card p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "mb-8 flex items-center gap-3",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary/10",
										children: /* @__PURE__ */ jsx(PackageCheck, { className: "h-6 w-6 text-primary" })
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
										className: "text-2xl font-semibold text-foreground",
										children: "Order summary"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm text-muted-foreground",
										children: "A premium concierge experience from start to finish"
									})] })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-4 rounded-[1.5rem] border border-border/60 bg-background/70 p-6",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-muted-foreground",
												children: "Selected item"
											}), /* @__PURE__ */ jsx("span", {
												className: "font-semibold text-foreground",
												children: form.product
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-muted-foreground",
												children: "Brand"
											}), /* @__PURE__ */ jsx("span", {
												className: "font-semibold text-foreground",
												children: form.brand
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-muted-foreground",
												children: "Size"
											}), /* @__PURE__ */ jsx("span", {
												className: "font-semibold text-foreground",
												children: form.size
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-muted-foreground",
												children: "Color"
											}), /* @__PURE__ */ jsx("span", {
												className: "font-semibold text-foreground",
												children: form.color
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-muted-foreground",
												children: "Quantity"
											}), /* @__PURE__ */ jsx("span", {
												className: "font-semibold text-foreground",
												children: form.quantity
											})]
										})
									]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-6 rounded-[1.5rem] bg-muted/40 p-6 text-sm text-muted-foreground",
									children: "We’ll review your request, confirm availability, and share delivery timelines within 24 hours."
								})
							]
						}), /* @__PURE__ */ jsx(motion.div, {
							initial: {
								opacity: 0,
								x: 20
							},
							animate: {
								opacity: 1,
								x: 0
							},
							className: "rounded-[2rem] border border-border/60 bg-card p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]",
							children: submitted ? /* @__PURE__ */ jsxs("div", {
								className: "space-y-5",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "flex h-16 w-16 items-center justify-center rounded-full bg-primary/10",
										children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-8 w-8 text-primary" })
									}),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
										className: "text-2xl font-semibold text-foreground",
										children: "Your order request is confirmed"
									}), /* @__PURE__ */ jsxs("p", {
										className: "mt-2 text-muted-foreground",
										children: [
											"Thanks, ",
											form.name || "there",
											". We’ve received your request and will reach out shortly with availability and delivery details."
										]
									})] }),
									/* @__PURE__ */ jsxs("div", {
										className: "rounded-[1.5rem] border border-border/60 bg-background/70 p-5 text-sm text-muted-foreground",
										children: ["Reference: ORD-", Math.floor(1e5 + Math.random() * 9e5)]
									})
								]
							}) : /* @__PURE__ */ jsxs("form", {
								className: "space-y-5",
								onSubmit: handleSubmit,
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "grid gap-5 sm:grid-cols-2",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "mb-2 block text-sm font-medium text-foreground",
											children: "Name"
										}), /* @__PURE__ */ jsx("input", {
											name: "name",
											value: form.name,
											onChange: handleChange,
											required: true,
											className: "w-full rounded-full border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-primary"
										})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "mb-2 block text-sm font-medium text-foreground",
											children: "Email"
										}), /* @__PURE__ */ jsx("input", {
											type: "email",
											name: "email",
											value: form.email,
											onChange: handleChange,
											required: true,
											className: "w-full rounded-full border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-primary"
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "grid gap-5 sm:grid-cols-2",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "mb-2 block text-sm font-medium text-foreground",
											children: "Phone Number"
										}), /* @__PURE__ */ jsx("input", {
											name: "phone",
											value: form.phone,
											onChange: handleChange,
											required: true,
											className: "w-full rounded-full border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-primary"
										})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "mb-2 block text-sm font-medium text-foreground",
											children: "Product"
										}), /* @__PURE__ */ jsx("select", {
											name: "product",
											value: form.product,
											onChange: handleChange,
											className: "w-full rounded-full border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-primary",
											children: products.slice(0, 12).map((product) => /* @__PURE__ */ jsx("option", {
												value: product.name,
												children: product.name
											}, product.id))
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "grid gap-5 sm:grid-cols-2",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "mb-2 block text-sm font-medium text-foreground",
											children: "Brand"
										}), /* @__PURE__ */ jsx("input", {
											name: "brand",
											value: form.brand,
											onChange: handleChange,
											className: "w-full rounded-full border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-primary"
										})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "mb-2 block text-sm font-medium text-foreground",
											children: "Size"
										}), /* @__PURE__ */ jsx("input", {
											name: "size",
											value: form.size,
											onChange: handleChange,
											className: "w-full rounded-full border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-primary"
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "grid gap-5 sm:grid-cols-2",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "mb-2 block text-sm font-medium text-foreground",
											children: "Colour"
										}), /* @__PURE__ */ jsx("input", {
											name: "color",
											value: form.color,
											onChange: handleChange,
											className: "w-full rounded-full border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-primary"
										})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "mb-2 block text-sm font-medium text-foreground",
											children: "Quantity"
										}), /* @__PURE__ */ jsx("input", {
											type: "number",
											name: "quantity",
											min: "1",
											value: form.quantity,
											onChange: handleChange,
											className: "w-full rounded-full border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-primary"
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "mb-2 block text-sm font-medium text-foreground",
										children: "Delivery Address"
									}), /* @__PURE__ */ jsx("input", {
										name: "deliveryAddress",
										value: form.deliveryAddress,
										onChange: handleChange,
										required: true,
										className: "w-full rounded-full border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-primary"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "mb-2 block text-sm font-medium text-foreground",
										children: "Notes"
									}), /* @__PURE__ */ jsx("textarea", {
										name: "notes",
										value: form.notes,
										onChange: handleChange,
										rows: 4,
										className: "w-full resize-none rounded-[1.25rem] border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-primary"
									})] }),
									/* @__PURE__ */ jsxs(Button, {
										type: "submit",
										size: "lg",
										className: "w-full gap-2",
										children: [/* @__PURE__ */ jsx(Send, { className: "h-5 w-5" }), "Submit Request"]
									})
								]
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { OrderGoods as component };
