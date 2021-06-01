import React from 'react';

const Books = props => (
    <div>
         { props.books.map((book) => {
            return (
              <div key={book.primary_isbn13} className='calisto dit mw5 ma1-ns center bg-white br3 pa4 pa4-ns mv4 mh3 ba b--black-10 grow'>
                <img src={book.book_image} alt={book.title} height="193" width="128"/>
                <p className="b ttc">{ book.title }</p>
                <p className="i b">{ book.author }</p>
                <p className="">{ book.description }</p>
              </div>
              );
          })
          }
    </div>
);

export default Books;