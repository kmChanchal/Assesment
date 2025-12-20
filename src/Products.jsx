import { useState } from "react";
import { products } from "./products";

export default function Products() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (status === "All" || p.status === status)
  );

  const perPage = 10;
  const totalPages = Math.ceil(filtered.length / perPage);
  const data = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="box">
      <h2>Products</h2>

      <input placeholder="Search" onChange={e => setSearch(e.target.value)} />
      <select onChange={e => setStatus(e.target.value)}>
        <option>All</option>
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <table>
        <thead>
          <tr><th>Name</th><th>Price</th><th>Status</th></tr>
        </thead>
        <tbody>
          {data.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {[...Array(totalPages)].map((_, i) => (
        <button key={i} onClick={() => setPage(i + 1)}>{i + 1}</button>
      ))}
    </div>
  );
}
