"use client";

import React from "react";
import Card from "./card";
import tecnologias from "@/app/data/tecnologias.json";

export default function Page() {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center tracking-tight">
          Tecnologias
        </h1>
        <article className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tecnologias.map((tec, index) => (
            <Card
              key={index}
              id={index}
              title={tec.title}
              image={tec.image}
              description={tec.description}
              rating={tec.rating}
            />
          ))}
        </article>
      </div>
    </section>
  );
}