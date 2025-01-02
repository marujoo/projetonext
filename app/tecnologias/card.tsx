import React from "react";
import { Tecnologia } from "../models/interfaces";

export default function Card({
  title,
  image,
  description,
  rating,
}: Tecnologia) {
  return (
    <section className="group bg-gradient-to-b from-white to-gray-50 border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col max-w-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform"></div>
      
      <article className="overflow-hidden rounded-t-2xl p-6 group-hover:scale-105 transition-transform duration-500">
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-contain drop-shadow-md"
        />
      </article>

      <article className="px-6 pb-4 flex-grow">
        <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </article>

      <article className="px-6 py-4 border-t border-gray-100 flex justify-between items-center bg-gradient-to-r from-gray-50 to-white">
        <div className="flex items-center gap-1">
          <span className="text-yellow-400 text-sm font-medium">
            {rating}
          </span>
          <span className="text-yellow-400 group-hover:animate-spin">⭐</span>
        </div>
      </article>
    </section>
  );
}