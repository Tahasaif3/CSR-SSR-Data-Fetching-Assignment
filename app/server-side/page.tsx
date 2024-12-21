import { Card, CardContent, CardFooter } from '@/components/ui/card'

interface Book {
  id: number
  name: string
  type: string
  available: boolean
}

async function getBooks() {
  const response = await fetch('https://simple-books-api.glitch.me/books', { cache: 'no-store' })
  if (!response.ok) {
    throw new Error('Failed to fetch books')
  }
  return response.json()
}

export default async function ServerSidePage() {
  const books = await getBooks()

  return (
    <div className="min-h-screen py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#808080]">Server-side Data Fetching: Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {books.map((book: Book) => (
          <Card key={book.id} className="shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">{book.name}</h2>
              <p className="text-gray-600 mb-4">Type: {book.type}</p>
              <p className="text-gray-600">Available: {book.available ? 'Yes' : 'No'}</p>
            </CardContent>
            <CardFooter className="p-4">
              <span className="text-[#808080] font-semibold">Book ID: {book.id}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

