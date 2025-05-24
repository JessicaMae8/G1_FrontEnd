export async function fetchUsers() {
  const response = await fetch('/api/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
}

export async function createUser(user) {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error('Failed to create user');
  }
  return response.json();
}

export async function updateUser(userId, user) {
  const response = await fetch(`/api/users/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error('Failed to update user');
  }
  return response.json();
}

export async function deleteUser(userId) {
  const response = await fetch(`/api/users/${userId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete user');
  }
  return true;
}
