# Data Fetching Assignment: Using CSR and SSR

This project demonstrates data fetching using **Client-Side Rendering (CSR)** and **Server-Side Rendering (SSR)** in a Next.js application. It fetches and displays product and book data from external APIs, showcasing the differences in implementation between CSR and SSR.

---

## Features

- **CSR (Client-Side Rendering)**:
  - Fetches product data dynamically in the browser using the `fetch` API.
  - Displays loading animations while the data is being fetched.
  - Updates the UI once the data is available.

- **SSR (Server-Side Rendering)**:
  - Fetches book data on the server before rendering the page.
  - Returns fully-rendered HTML to the browser, improving SEO and initial load time.

- Reusable UI components (`Card`, `CardContent`, `CardFooter`) to display fetched data in an organized manner.

---

## Technologies Used

- **Next.js**: Framework for React-based server-side rendering and static site generation.
- **TypeScript**: Type safety and better developer experience.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **APIs**:
  - [Fake Store API](https://fakestoreapi.com/) for product data.
  - [Simple Books API](https://simple-books-api.glitch.me/) for book data.

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Tahasaif3/CSR-SSR-Data-Fetching-Assignment.git
   cd CSR-SSR-Data-Fetching-Assignment
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Project Structure

- **CSR Page (`app/client-side/page.tsx`)**:
  - Fetches product data using the `useEffect` hook.
  - Handles loading state and displays a spinner while fetching data.
  - Displays a grid of product cards with details like title, price, category, and image.

- **SSR Page (`app/server-side/page.tsx`)**:
  - Fetches book data using the `fetch` API with `cache: 'no-store'` for fresh data.
  - Ensures data is available at the time of rendering.
  - Displays a grid of book cards with details like name, type, availability, and ID.

---

## Code Examples

### Client-Side Rendering (CSR)

```tsx
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

export default function ClientSidePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {products.map(product => (
        <Card key={product.id}>
          <CardContent>{product.title}</CardContent>
        </Card>
      ))}
    </div>
  );
}
```

### Server-Side Rendering (SSR)

```tsx
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

async function getBooks(): Promise<Book[]> {
  const response = await fetch('https://simple-books-api.glitch.me/books', { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }
  return response.json();
}

export default async function ServerSidePage() {
  const books = await getBooks();

  return (
    <div>
      {books.map(book => (
        <Card key={book.id}>
          <CardContent>{book.name}</CardContent>
        </Card>
      ))}
    </div>
  );
}
```

---

## Lessons Learned

- Differences between CSR and SSR:
  - CSR fetches data on the client-side after the initial HTML is loaded.
  - SSR fetches data on the server-side and sends pre-rendered HTML to the client.
- Type safety with TypeScript improves code readability and prevents runtime errors.
- Proper API handling ensures error-free data fetching.

---

## Acknowledgments

- [Fake Store API](https://fakestoreapi.com/)
- [Simple Books API](https://simple-books-api.glitch.me/)
