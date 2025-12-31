import { useState } from "react";

import cafe1 from "../assets/locales/cafe1.png";
import cafe2 from "../assets/locales/cafe2.png";
import cafe3 from "../assets/locales/cafe3.png";
import cafe4 from "../assets/locales/cafe4.png";

const images = [cafe1, cafe2, cafe3, cafe4];

export default function Slider() {

  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden rounded-2xl shadow-xl">
      <img
        src={images[index]}
        className="w-full h-[550px] object-cover"
        alt=""
      />

      {/* Botón izquierda */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-lg"
      >
        ◀
      </button>

      {/* Botón derecha */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-lg"
      >
        ▶
      </button>
    </div>
  );
}