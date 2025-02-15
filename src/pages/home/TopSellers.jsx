import React, { useState, useEffect } from 'react'
import BookCard from '../books/BookCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';
const categories = ['choose a genre', 'business', 'fiction', 'horror', 'adventure']

const TopSellers = () => {
    // const [books, setBooks] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("choose a genre")
    const { data: books = [] } = useFetchAllBooksQuery()

    // useEffect(() => {
    //     fetch('books.json').then(res => res.json()).then((data) => setBooks(data))
    // }, [])
    const filteredBooks = selectedCategory === 'choose a genre' ? books : books.filter(book => book.category === selectedCategory.toLowerCase())

    return (
        <div className='py-10'>
            <h2 className='text-3xl font-semibold mb-6'>top sellers</h2>
            <div className='mb-8 flex items-center'>
                <select onChange={(e) => setSelectedCategory(e.target.value)}
                    name='category' id='category' className='border bg-[#EAEAEA] border-gray-300
                rounded-md px-4 py-2 focus:outline-none'>
                    {
                        categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))
                    }
                </select>
            </div>
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
            >  {filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                <SwiperSlide key={index}><BookCard book={book}></BookCard></SwiperSlide>

            ))}


            </Swiper>


        </div>
    )
}

export default TopSellers
