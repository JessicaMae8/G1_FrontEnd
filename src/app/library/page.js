'use client';

import Carousel from "components/Carousel/Carousel";

export default function LibraryPage() {
    const Trending = [
        {
            id: 1,
            title: 'The Pain of Onkai',
            cover: 'https://books.google.com/books/content?id=book01&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            status: 'Available',
        },
        {
            id: 2,
            title: 'Lost Decades',
            cover: 'https://books.google.com/books/content?id=book02&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            status: 'Coming Soon',
        },
        {
            id: 3,
            title: 'Eloquent Javascript Second Edition',
            cover: 'https://books.google.com/books/content?id=book03&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            status: 'Preview Only',
        },
        {
            id: 4,
            title: (<>The Philippines <br /> A Century Hence</>),
            cover: 'https://books.google.com/books/content?id=book04&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            status: 'Available',
        },
        {
            id: 5,
            title: 'Noli Me Tangere',
            cover: 'https://books.google.com/books/content?id=book05&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            status: 'Not in Library',
        },
    ];
    const Thrillers = [
        {
            title: 'The Pain of Onkai',
            cover: 'https://books.google.com/books/content?id=book01&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            status: 'Available',
        },
        {
            title: 'The Pain of Onkai',
            cover: 'https://books.google.com/books/content?id=book01&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            status: 'Checked Out',
        },
        {
            title: 'The Pain of Onkai',
            cover: 'https://books.google.com/books/content?id=book01&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            status: 'Preview Only',
        },
        {
            title: 'The Pain of Onkai',
            cover: 'https://books.google.com/books/content?id=book01&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            status: 'Preview Only',
        },
        {
            title: 'The Pain of Onkai',
            cover: 'https://books.google.com/books/content?id=book01&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            status: 'Not in Library',
        },
    ];

    return (
        <>
            <Carousel  title="Trending" books={Trending} />
            <Carousel title="Thrillers" books={Thrillers} />
        </>
    );
}
