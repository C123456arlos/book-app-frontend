import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';
const Recommended = () => {
    const { data: books = [] } = useFetchAllBooksQuery()
    // const [books, setBooks] = useState([])
    // useEffect(() => {
    //     fetch('books.json').then(res => res.json()).then((data) => setBooks(data))
    // }, [])
    return (
        <div className='py-16'><h2 className='text-3xl font-semibold mb-6'>recommended for you</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    '@2.00': {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >  {books.length > 0 && books.slice(8, 18).map((book, index) => (
                <SwiperSlide key={index}><BookCard book={book}></BookCard></SwiperSlide>

            ))}


            </Swiper></div>

    )

}

export default Recommended