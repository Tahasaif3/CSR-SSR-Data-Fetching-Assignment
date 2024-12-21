'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
interface Product {
  id: number
  title: string
  price: number
  category: string
  image: string
}

export default function ClientSidePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching products:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">Client-side Data Fetching: Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {products.map(product => (
          <Card key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="h-64 relative">
              <Image 
                src={product.image} 
                alt={product.title} 
                layout="fill" 
                objectFit="cover" 
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 line-clamp-2">{product.title}</h2>
              <p className="text-gray-600 mb-4">Category: {product.category}</p>
              <p className="text-2xl font-bold text-blue-600">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="bg-blue-500 p-4">
              <span className="text-white font-semibold">Product ID: {product.id}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
