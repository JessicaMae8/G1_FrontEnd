const API_BASE_URL = 'http://localhost/backend_G1/public/api';

export async function fetchUserTransactions(token) {
  const response = await fetch(`${API_BASE_URL}/transactions`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch transactions');
  }
  return response.json();
}

export async function borrowBook(token, bookId, borrowedAt, dueAt) {
  const response = await fetch(`${API_BASE_URL}/transactions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      book_id: bookId,
      borrowed_at: borrowedAt,
      due_at: dueAt,
    }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to borrow book');
  }
  return response.json();
}
