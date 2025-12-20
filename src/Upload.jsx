import { useState } from "react";

export default function Upload() {
  const [img, setImg] = useState(null);

  const handle = (e) => {
    const file = e.target.files[0];
    if (file.size > 5 * 1024 * 1024) return alert("Max 5MB");
    setImg(URL.createObjectURL(file));
  };

  return (
    <div className="box">
      <h2>Upload Image</h2>
      <input type="file" onChange={handle} />
      {img && <img src={img} width="200" />}
    </div>
  );
}
