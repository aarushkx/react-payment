export function formatPrice(price) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
    }).format(price);
}

export function sortProductsByPriceHighToLow(products) {
    return products.slice().sort((a, b) => b.price - a.price);
}
