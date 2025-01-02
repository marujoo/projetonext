import React, { useState } from "react";
import { CardProps } from "../models/interfaces";

export default function Card({ addToCart, ...props }: CardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(props);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);
  };

  return (
    <section className="group bg-gradient-to-b from-white to-gray-50 border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col max-w-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform"></div>
      
      <article className="overflow-hidden rounded-t-2xl p-6 group-hover:scale-105 transition-transform duration-500">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-44 object-contain drop-shadow-md"
        />
      </article>

      <article className="px-6 pb-4 flex-grow">
        <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
          {props.title}
        </h2>
        <p className="text-sm text-cyan-500 font-medium mb-2">
          {props.category}
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          {props.description}
        </p>
      </article>

      <article className="px-6 py-4 border-t border-gray-100 flex justify-between items-center bg-gradient-to-r from-gray-50 to-white">
        <span className="text-xl font-bold text-cyan-600">
          {props.price.toFixed(2)}€
        </span>
        <div className="flex items-center gap-1">
          <span className="text-yellow-400 text-sm font-medium">
            {props.rating.rate}
          </span>
          <span className="text-yellow-400 group-hover:animate-spin">⭐</span>
          <span className="text-gray-400 text-sm ml-1">
            ({props.rating.count})
          </span>
        </div>
      </article>

      <button
        onClick={handleAddToCart}
        className="relative w-full py-3 px-6 overflow-hidden group/button bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-medium transition-all duration-500 transform hover:scale-[1.02]"
      >
        <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover/button:translate-x-full transition-transform duration-700"></span>
        <span className="relative inline-flex items-center justify-center gap-2">
          {isAdded ? (
            <>
              <span className="animate-bounce">✓</span> Adicionado!
            </>
          ) : (
            <>
              Adicionar ao Carrinho <span className="text-xl">🛒</span>
            </>
          )}
        </span>
      </button>
    </section>
  );
}