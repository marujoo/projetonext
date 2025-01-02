"use client";

import React, { useEffect } from "react";
import Card from "./card";
import tecnologias from "@/app/data/tecnologias.json";

export default function Page() {
  useEffect(() => {
    document.body.classList.add("home-body");

    return () => {
      document.body.classList.remove("home-body");
    };
  }, []);

  return (
    <section className="container mx-auto px-4 py-8">
      <article className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
    </section>
  );
}