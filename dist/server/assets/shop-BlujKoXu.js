import { n as Button, r as Navigation, t as Footer } from "./footer-Dq52LYOJ.js";
import { t as ProductCard } from "./product-card-CJB435OO.js";
import { s as products } from "./products-D1tJhUcM.js";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
//#region src/routes/shop.tsx?tsr-split=component
function Shop() {
	const [selectedBrands, setSelectedBrands] = useState([]);
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [selectedPriceRange, setSelectedPriceRange] = useState("all");
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const itemsPerPage = 8;
	const brands = [...new Set(products.map((p) => p.brand))];
	const categories = [...new Set(products.map((p) => p.category))];
	const filteredProducts = products.filter((product) => {
		if (!`${product.name} ${product.brand} ${product.description}`.toLowerCase().includes(searchTerm.toLowerCase())) return false;
		if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
		if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false;
		if (selectedPriceRange === "low" && product.price > 100) return false;
		if (selectedPriceRange === "medium" && (product.price < 100 || product.price > 200)) return false;
		if (selectedPriceRange === "high" && product.price < 200) return false;
		return true;
	});
	useEffect(() => {
		setCurrentPage(1);
	}, [
		selectedBrands,
		selectedCategories,
		selectedPriceRange,
		searchTerm
	]);
	const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
	const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
	const toggleBrand = (brand) => {
		setSelectedBrands((prev) => prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]);
	};
	const toggleCategory = (category) => {
		setSelectedCategories((prev) => prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]);
	};
	const clearFilters = () => {
		setSelectedBrands([]);
		setSelectedCategories([]);
		setSelectedPriceRange("all");
		setSearchTerm("");
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
							className: "mb-8",
							children: [/* @__PURE__ */ jsx("h1", {
								className: "text-4xl font-bold text-foreground sm:text-5xl",
								children: "Shop All Products"
							}), /* @__PURE__ */ jsxs("p", {
								className: "mt-4 text-lg text-muted-foreground",
								children: [filteredProducts.length, " products found"]
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mb-8 rounded-[1.5rem] border border-border/60 bg-card/70 p-4 shadow-sm",
							children: /* @__PURE__ */ jsx("input", {
								value: searchTerm,
								onChange: (event) => setSearchTerm(event.target.value),
								placeholder: "Search by product, brand, or style",
								className: "w-full rounded-full border border-border/60 bg-background px-5 py-3 text-sm outline-none focus:border-primary"
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex gap-8",
							children: [
								/* @__PURE__ */ jsxs("button", {
									onClick: () => setIsFilterOpen(!isFilterOpen),
									className: "md:hidden flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-card",
									children: [/* @__PURE__ */ jsx(SlidersHorizontal, { className: "h-5 w-5" }), "Filters"]
								}),
								/* @__PURE__ */ jsx("aside", {
									className: `${isFilterOpen ? "block" : "hidden"} md:block w-64 flex-shrink-0 space-y-8`,
									children: /* @__PURE__ */ jsxs("div", {
										className: "sticky top-24 space-y-8",
										children: [
											(selectedBrands.length > 0 || selectedCategories.length > 0 || selectedPriceRange !== "all") && /* @__PURE__ */ jsxs(Button, {
												onClick: clearFilters,
												variant: "outline",
												className: "w-full gap-2",
												children: [/* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), "Clear Filters"]
											}),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
												className: "font-semibold text-foreground mb-4",
												children: "Brand"
											}), /* @__PURE__ */ jsx("div", {
												className: "space-y-2",
												children: brands.map((brand) => /* @__PURE__ */ jsxs("label", {
													className: "flex items-center gap-2 cursor-pointer",
													children: [/* @__PURE__ */ jsx("input", {
														type: "checkbox",
														checked: selectedBrands.includes(brand),
														onChange: () => toggleBrand(brand),
														className: "rounded border-border/60 bg-background text-primary focus:ring-primary"
													}), /* @__PURE__ */ jsx("span", {
														className: "text-sm text-muted-foreground",
														children: brand
													})]
												}, brand))
											})] }),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
												className: "font-semibold text-foreground mb-4",
												children: "Category"
											}), /* @__PURE__ */ jsx("div", {
												className: "space-y-2",
												children: categories.map((category) => /* @__PURE__ */ jsxs("label", {
													className: "flex items-center gap-2 cursor-pointer",
													children: [/* @__PURE__ */ jsx("input", {
														type: "checkbox",
														checked: selectedCategories.includes(category),
														onChange: () => toggleCategory(category),
														className: "rounded border-border/60 bg-background text-primary focus:ring-primary"
													}), /* @__PURE__ */ jsx("span", {
														className: "text-sm text-muted-foreground capitalize",
														children: category
													})]
												}, category))
											})] }),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
												className: "font-semibold text-foreground mb-4",
												children: "Price Range"
											}), /* @__PURE__ */ jsx("div", {
												className: "space-y-2",
												children: [
													{
														value: "all",
														label: "All Prices"
													},
													{
														value: "low",
														label: "Under $100"
													},
													{
														value: "medium",
														label: "$100 - $200"
													},
													{
														value: "high",
														label: "Over $200"
													}
												].map((range) => /* @__PURE__ */ jsxs("label", {
													className: "flex items-center gap-2 cursor-pointer",
													children: [/* @__PURE__ */ jsx("input", {
														type: "radio",
														name: "price",
														checked: selectedPriceRange === range.value,
														onChange: () => setSelectedPriceRange(range.value),
														className: "border-border/60 bg-background text-primary focus:ring-primary"
													}), /* @__PURE__ */ jsx("span", {
														className: "text-sm text-muted-foreground",
														children: range.label
													})]
												}, range.value))
											})] })
										]
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex-1",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4",
											children: paginatedProducts.map((product) => /* @__PURE__ */ jsx(ProductCard, {
												product,
												className: "col-span-1"
											}, product.id))
										}),
										totalPages > 1 && /* @__PURE__ */ jsx("div", {
											className: "mt-8 flex flex-wrap items-center justify-center gap-3",
											children: Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => /* @__PURE__ */ jsx("button", {
												onClick: () => setCurrentPage(page),
												className: `h-10 w-10 rounded-full border text-sm font-semibold transition-colors ${currentPage === page ? "border-primary bg-primary text-primary-foreground" : "border-border/60 bg-background text-foreground hover:border-primary"}`,
												children: page
											}, page))
										}),
										filteredProducts.length === 0 && /* @__PURE__ */ jsxs("div", {
											className: "text-center py-12",
											children: [/* @__PURE__ */ jsx("p", {
												className: "text-lg text-muted-foreground",
												children: "No products found matching your filters."
											}), /* @__PURE__ */ jsx(Button, {
												onClick: clearFilters,
												variant: "outline",
												className: "mt-4",
												children: "Clear Filters"
											})]
										})
									]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Shop as component };
