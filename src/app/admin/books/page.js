'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { FaTrash, FaEdit, FaEye, FaPlus, FaSearch } from 'react-icons/fa';
// import ViewModal from '@/components/modals/BooksModal/ViewModal';
import DeleteModal from '../../../../components/modals/BooksModal/DeleteModal';
// import EditModal from '@/components/modals/BooksModal/EditModal';
import AddModal from '../../../../components/modals/BooksModal/AddModal';

const BooksTable = () => {
const initialBooks = [
        {
            id: 1,
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            category: 'Fiction, Classic',
            published: '1960',
            status: 'Available',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg',
        },
        {
            id: 2,
            title: '1984',
            author: 'George Orwell',
            category: 'Fiction, Dystopian',
            published: '1949',
            status: 'Issued',
            image: 'https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg',
        },
        {
            id: 3,
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            category: 'Fiction, Classic',
            published: '1925',
            status: 'Available',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg',
        },
        {
            id: 4,
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            category: 'Fiction, Romance',
            published: '1813',
            status: 'Available',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81vg6Z9QJ-L.jpg',
        },
        {
            id: 5,
            title: 'The Catcher in the Rye',
            author: 'J.D. Salinger',
            category: 'Fiction, Classic',
            published: '1951',
            status: 'Reserved',
            image: 'https://images-na.ssl-images-amazon.com/images/I/71Q1Iu4suSL.jpg',
        },
        {
            id: 6,
            title: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            category: 'Fiction, Fantasy',
            published: '1937',
            status: 'Available',
            image: 'https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg',
        },
        {
            id: 7,
            title: 'Fahrenheit 451',
            author: 'Ray Bradbury',
            category: 'Fiction, Dystopian',
            published: '1953',
            status: 'Available',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg',
        },
        {
            id: 8,
            title: 'Moby-Dick',
            author: 'Herman Melville',
            category: 'Fiction, Adventure',
            published: '1851',
            status: 'Available',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81PRVY1qG-L.jpg',
        },
        {
            id: 9,
            title: 'War and Peace',
            author: 'Leo Tolstoy',
            category: 'Fiction, Historical',
            published: '1869',
            status: 'Available',
            image: 'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL.jpg',
        },
        {
            id: 10,
            title: 'Crime and Punishment',
            author: 'Fyodor Dostoevsky',
            category: 'Fiction, Psychological',
            published: '1866',
            status: 'Available',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81rttv1ZJ-L.jpg',
        },
        {
            id: 11,
            title: 'The Odyssey',
            author: 'Homer',
            category: 'Fiction, Epic',
            published: '8th Century BC',
            status: 'Available',
            image: 'https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg',
        },
        {
            id: 12,
            title: 'The Divine Comedy',
            author: 'Dante Alighieri',
            category: 'Fiction, Epic',
            published: '1320',
            status: 'Available',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81vg6Z9QJ-L.jpg',
        },
        {
            id: 13,
            title: 'The Brothers Karamazov',
            author: 'Fyodor Dostoevsky',
            category: 'Fiction, Philosophical',
            published: '1880',
            status: 'Available',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81rttv1ZJ-L.jpg',
        },
        {
            id: 14,
            title: 'Brave New World',
            author: 'Aldous Huxley',
            category: 'Fiction, Dystopian',
            published: '1932',
            status: 'Available',
            image: 'https://images-na.ssl-images-amazon.com/images/I/71Q1Iu4suSL.jpg',
        },
    ];

    const [allBooks, setAllBooks] = useState(initialBooks);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentBooks = allBooks.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(allBooks.length / rowsPerPage);

    const [addModalOpen, setAddModalOpen] = useState(false);
    // const [viewModalOpen, setViewModalOpen] = useState(false);
    // const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);


    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

const handleAddBook = () => {
        setAddModalOpen(true);
    };

    // const handleEditBook = (book) => {
    //     setSelectedBook(book);
    //     setEditModalOpen(true);
    // };

    // const handleViewBook = (book) => {
    //     setSelectedBook(book);
    //     setViewModalOpen(true);
    // };

    const handleDeleteBook = (bookId) => {
        setAllBooks((prevBooks) => {
            const updatedBooks = prevBooks.filter((book) => book.id !== bookId);
            const newTotalPages = Math.ceil(updatedBooks.length / rowsPerPage);
            if (currentPage > newTotalPages) {
                setCurrentPage(newTotalPages > 0 ? newTotalPages : 1);
            }
            return updatedBooks;
        });
        setDeleteModalOpen(false);
    };

    const openDeleteModal = (book) => {
        setSelectedBook(book);
        setDeleteModalOpen(true);
    };

    const handleSaveBook = (newBook) => {
        if (selectedBook) {
            // Edit existing book
            setAllBooks((prevBooks) =>
                prevBooks.map((book) =>
                    book.id === selectedBook.id ? { ...book, ...newBook } : book
                )
            );
        } else {
            // Add new book
            setAllBooks((prevBooks) => [
                ...prevBooks,
                { id: Date.now(), ...newBook }, // Use a unique ID
            ]);
        }
    };

    return (
        <div className={`py-[40px] px-[30px] h-screen pb-[50px] 'bg-gray-950 text-white mr-[14px]`}>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">BOOKS</h2>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center w-full max-w-md mx-2 relative">
                        <input
                            type="text"
                            placeholder="Search books..."
                            className={`w-full px-3 py-2 pr-10 rounded bg-gray-700 border-gray-500 text-white focus:outline-none focus:ring-1 focus:ring-blue-500`}
                        />
                        <button className="absolute right-3 text-gray-400 hover:text-blue-500">
                            <FaSearch className="h-5 w-5" />
                        </button>
                    </div>
                    <button
                        onClick={handleAddBook}
                        className="flex items-center gap-2 px-4 py-[10px] mr-[65px] w-[200px] text-sm bg-blue-600 text-white rounded"
                    >
                        <FaPlus /> Add Book
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto pr-16">
                <table className={`min-w-full bg-gray-800 text-white rounded-lg`}>
                    <thead>
                        <tr className="bg-gray-700 text-left">
                            <th className="px-6 py-3">ID</th>
                            <th className="px-6 py-3">Book</th>
                            <th className="px-6 py-3">Title</th>
                            <th className="px-6 py-3">Author</th>
                            <th className="px-6 py-3">Category</th>
                            <th className="px-6 py-3">Published</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentBooks.map((book) => (
                            <tr
                                key={book.id}
                                className="border-b border-gray-700 hover:bg-gray-700/35 transition-colors"
                            >
                                <td className="px-6 py-4">{book.id}</td>
                                <td className="px-6 py-4">
                                    <Image
                                        src={book.image}
                                        alt={book.title}
                                        height={48}
                                        width={36}
                                        className="h-12 w-9 object-cover rounded"
                                    />
                                </td>
                                <td className="px-6 py-4">{book.title}</td>
                                <td className="px-6 py-4">{book.author}</td>
                                <td className="px-6 py-4">{book.category}</td>
                                <td className="px-6 py-4">{book.published}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`h-2.5 w-2.5 rounded-full ${book.status === 'Available' ? 'bg-green-500' : 'bg-red-500'
                                                }`}
                                        ></span>
                                        <span>{book.status}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center gap-4 text-white">
                                        {/* <button onClick={() => handleViewBook(book)} className="text-blue-500"> */}
                                        <button className="text-blue-500">
                                            <FaEye size={16} />
                                        </button>
                                        {/* <button onClick={() => handleEditBook(book)} className="text-yellow-500"> */}
                                        <button className="text-yellow-500">
                                            <FaEdit size={16} />
                                        </button>
                                        <button onClick={() => openDeleteModal(book)} className="text-red-500 hover:text-red-400">
                                            <FaTrash size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1 text-sm">
                    <div className="flex gap-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-3 py-1 rounded bg-gray-700 text-white disabled:opacity-50"
                        >
                            Prev
                        </button>
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-200'}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 rounded bg-gray-700 text-white disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>

                    <div className="text-center w-full sm:w-auto text-gray-400">
                        Showing {indexOfFirstRow + 1}–{Math.min(indexOfLastRow, allBooks.length)} of {allBooks.length} books
                    </div>
                </div>
            </div>
            <AddModal
                isOpen={addModalOpen}
                onClose={() => setAddModalOpen(false)}
                onSave={handleSaveBook}
            />

            {/* <ViewModal
                isOpen={viewModalOpen}
                onClose={() => setViewModalOpen(false)}
                book={selectedBook}
            /> */}

            {/* <EditModal
                isOpen={editModalOpen}
                onClose={() => setEditModalOpen(false)}
                onSave={handleSaveBook}
                book={selectedBook}
            /> */}

            <DeleteModal
                isOpen={deleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onDelete={handleDeleteBook}
                book={selectedBook}
            />
        </div>
    );
};

export default BooksTable;