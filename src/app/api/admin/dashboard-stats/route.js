export async function GET(request) {
  // Sample dashboard stats data with keys matching dashboard page expectations
  const data = {
    totalBooks: 350,
    newBooksThisMonth: 20,
    totalMembers: 120,
    newMembersThisWeek: 5,
    booksIssued: 110,
    overdueReturns: 47,
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
