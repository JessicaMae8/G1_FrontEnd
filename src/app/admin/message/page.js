'use client';

import { useState } from 'react';

export default function AdminMessagePage() {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        if (!subject || !message) {
            setError('Please fill in all fields.');
            return;
        }
        // Here you would send the message to your API
        setSuccess('Message sent successfully!');
        setSubject('');
        setMessage('');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white px-4">
            <h1 className="text-3xl font-bold mb-6">Send a Message</h1>
            <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md space-y-6">
                <div>
                    <label className="block mb-2 text-sm font-semibold">Subject</label>
                    <input
                        type="text"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter subject"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-semibold">Message</label>
                    <textarea
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                        rows={5}
                        placeholder="Type your message here..."
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-500 hover:to-orange-700 text-white py-2 rounded-full font-semibold"
                >
                    Send Message
                </button>
                {success && <div className="text-green-400 text-center mt-2">{success}</div>}
                {error && <div className="text-red-400 text-center mt-2">{error}</div>}
            </form>
        </div>
    );
}