'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const cards = [
    {
      title: 'Client-side Data Fetching',
      description: 'Explore products fetched dynamically on the client-side using React hooks.',
      link: '/client-side',
      color: 'from-blue-400 to-blue-600',
      hoverColor: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Server-side Data Fetching',
      description: 'Discover books fetched server-side for optimal performance and SEO.',
      link: '/server-side',
      color: 'from-green-400 to-green-600',
      hoverColor: 'from-green-500 to-green-700',
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12">
      <motion.h1 
        className="text-5xl font-bold mb-12 text-center text-black"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       Data Fetching Assignment
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Link href={card.link} className="block">
              <Card 
                className={`bg-gradient-to-br ${hoveredCard === card.title ? card.hoverColor : card.color} text-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105`}
                onMouseEnter={() => setHoveredCard(card.title)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
                  <p className="text-black">{card.description}</p>
                </CardContent>
                <CardFooter className="bg-black bg-opacity-20 p-4">
                  <span className="font-semibold">Explore {hoveredCard === card.title ? '→' : '↗'}</span>
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-xl text-black mb-4">Explore the power of different data fetching techniques</p>
        <div className="flex justify-center space-x-4">
          <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors">Next.js Docs</a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 transition-colors">React Docs</a>
        </div>
      </motion.div>
    </div>
  )
}

