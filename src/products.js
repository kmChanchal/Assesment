export const products = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: 100 + i * 10,
  category: "Electronics",
  stock: i % 2 === 0 ? "In Stock" : "Out",
  status: i % 3 === 0 ? "Inactive" : "Active",
}));
