'use client';

import React, { useEffect, useState } from 'react';

export default function ApiTestPage() {
  const [results, setResults] = useState([]);
  const API_BASE_URLS = [
    'http://localhost:8000',
    'http://localhost:8000/api',
    'http://localhost/backend_G1/public/api',
  ];

  useEffect(() => {
    const testEndpoints = async () => {
      const testResults = [];
      for (const baseUrl of API_BASE_URLS) {
        try {
          const resBooks = await fetch(\`\${baseUrl}/books\`);
          testResults.push({
            url: \`\${baseUrl}/books\`,
            status: resBooks.status,
            ok: resBooks.ok,
          });
        } catch (error) {
          testResults.push({
            url: \`\${baseUrl}/books\`,
            error: error.message,
          });
        }
        try {
          const resApiBooks = await fetch(\`\${baseUrl}/api/books\`);
          testResults.push({
            url: \`\${baseUrl}/api/books\`,
            status: resApiBooks.status,
            ok: resApiBooks.ok,
          });
        } catch (error) {
          testResults.push({
            url: \`\${baseUrl}/api/books\`,
            error: error.message,
          });
        }
        try {
          const resTransactions = await fetch(\`\${baseUrl}/transactions\`);
          testResults.push({
            url: \`\${baseUrl}/transactions\`,
            status: resTransactions.status,
            ok: resTransactions.ok,
          });
        } catch (error) {
          testResults.push({
            url: \`\${baseUrl}/transactions\`,
            error: error.message,
          });
        }
      }
      setResults(testResults);
    };
    testEndpoints();
  }, []);

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">API Endpoint Test Results</h1>
      <ul>
        {results.map((result, index) => (
          <li key={index} className="mb-2">
            <strong>{result.url}:</strong>{' '}
            {result.error ? (
              <span className="text-red-500">Error: {result.error}</span>
            ) : (
              <span className={result.ok ? 'text-green-500' : 'text-yellow-500'}>
                Status: {result.status} {result.ok ? '(OK)' : '(Not OK)'}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
