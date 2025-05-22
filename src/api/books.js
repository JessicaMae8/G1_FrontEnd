const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000').replace(/\/$/, '') + '/api';

console.log('API_BASE_URL:', API_BASE_URL);

export async function fetchBooks(token) {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await fetch(`${API_BASE_URL}/books`, {
      headers,
    });
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    return response.json();
  } catch (error) {
    console.error('fetchBooks error:', error);
    throw error;
  }
}

export async function createBook(book) {
  const response = await fetch(`${API_BASE_URL}/books`, {
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
  const response = await fetch(`${API_BASE_URL}/books/${bookId}`, {
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
  const response = await fetch(`${API_BASE_URL}/books/${bookId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete book');
  }
  return true;
}
