import React from 'react'
import MyOrderDeck from './MyOrders/MyOrderDeck'

const MyProjects = () => {

    return (
        <div  style={{   backgroundImage: "url(" + "https://static.vecteezy.com/system/resources/thumbnails/000/407/606/small/v363-aew-44-newyearsalebadge.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
            Booking Details<MyOrderDeck/>
            
        </div>
    )
}

export default MyProjects
