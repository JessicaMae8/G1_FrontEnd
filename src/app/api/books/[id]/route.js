import { NextResponse } from 'next/server';

let books = [
  {
    id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    category: 'Fiction, Classic',
    published: '1960',
    status: 'Available',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg',
  },
  // Add other initial books here or import from a shared module
];

// Helper to find book index by id
const findBookIndex = (id) => books.findIndex(book => book.id === id);

export async function GET(request, { params }) {
  const id = parseInt(params.id);
  const book = books.find(b => b.id === id);
  if (!book) {
    return NextResponse.json({ error: 'Book not found' }, { status: 404 });
  }
  return NextResponse.json(book);
}

export async function PUT(request, { params }) {
  const id = parseInt(params.id);
  const index = findBookIndex(id);
  if (index === -1) {
    return NextResponse.json({ error: 'Book not found' }, { status: 404 });
  }
  const updatedData = await request.json();
  books[index] = { ...books[index], ...updatedData };
  return NextResponse.json(books[index]);
}

export async function DELETE(request, { params }) {
  const id = parseInt(params.id);
  const index = findBookIndex(id);
  if (index === -1) {
    return NextResponse.json({ error: 'Book not found' }, { status: 404 });
  }
  books.splice(index, 1);
  return NextResponse.json({ message: 'Book deleted' });
}
