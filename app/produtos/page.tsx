"use client";

import React from 'react';
import useSWR from 'swr';
import Card from './card';
import { Product } from '../models/interfaces';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Page() {
  const { data, error, isLoading } = useSWR<Product[]>('https://deisishop.pythonanywhere.com/products/', fetcher);

  if (error) return <div className="text-center text-red-500 mt-8 p-4 bg-red-50 rounded-lg">Erro ao carregar os produtos.</div>;
  if (isLoading) return <div className="text-center text-gray-500 mt-8 animate-pulse">Carregando...</div>;
  if (!data) return <div className="text-center text-gray-500 mt-8">Nenhum dado disponível.</div>;

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center tracking-tight">Produtos</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              category={product.category}
              price={product.price}
              description={product.description}
              image={product.image}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}