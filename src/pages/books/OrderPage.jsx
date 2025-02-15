import React from 'react'
import { useGetOrderByEmailQuery } from '../../redux/features/orders/ordersApi'
import { useAuth } from '../../context/AuthContext'

const OrderPage = () => {
    const { currentUser } = useAuth()
    const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser.email)
    if (isLoading) return <div>loading...</div>
    if (isError) return <div>error getting orders data</div>
    return (
        <div className='container mx-auto p-6 '>
            <h2 className='text-2xl font-semibold mb-4'>your orders</h2>{
                orders.length === 0 ? (<div> no orders found</div>) : (<div>

                    {orders.map((order, index) => (
                        <div>
                            <p className='p-1 bg-gray-500 text-white w-10 rounded mb-1'> # {index + 1}</p>
                            <h3>OrderId: {order?._id}</h3>
                            <h3>Name: {order?.name}</h3>
                            <h3>Email: {order?.email}</h3>
                            <h3>Phone: {order?.phone}</h3>
                            <h3>TotalPrice: {order?.totalPrice}</h3>
                            <h3>Address: </h3>
                            <p>Address: {order.address.cty}{order.address.state}{order.address.country}{order.address.zipcode}</p>
                            <h3>Products id:</h3>
                            <ul>
                                {order.productsIds.map((productId) => (<li key={productId}>{productId}</li>))}
                            </ul>
                        </div>
                    ))}</div>)}
        </div>
    )
}

export default OrderPage