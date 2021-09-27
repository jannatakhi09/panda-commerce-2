import React from 'react';
import './Aside.css';

const Aside = ({books}) => {

    let total = 0;
    let totalPrice = 0;

    for(const book of books){
        total = total + 1;
        totalPrice = totalPrice + book.price;
    }

    return (
        <div className="aside">
           <aside>
               <h3>Total books selected: {total}</h3>
               <h3>Total books Price: {totalPrice}</h3>
               {
                   books.map((book ,ind )=> <p key={ind}>{book.name}</p>)
               }
           </aside>
        </div>
    );
};

export default Aside;