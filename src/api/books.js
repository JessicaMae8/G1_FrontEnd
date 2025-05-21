export async function fetchBooks() {
  const response = await fetch('/api/books');
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }
  return response.json();
}

export async function createBook(book) {
  const response = await fetch('/api/books', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  if (!response.ok) {
    throw new Error('Failed to create book');
  }
  return response.json();
}

export async function updateBook(bookId, book) {
  const response = await fetch(`/api/books/${bookId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  if (!response.ok) {
    throw new Error('Failed to update book');
  }
  return response.json();
}

export async function deleteBook(bookId) {
  const response = await fetch(`/api/books/${bookId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete book');
  }
  return true;
}
