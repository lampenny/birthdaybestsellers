import React from 'react';

const Form = ( props ) =>(
    <div className="calisto ma4">
    
    <form onSubmit={props.getBook}>
        <label for="lists" >Choose a bestsellers list: </label>
            <select name="list" id="selectList" label="choose a list">
                <option value="hardcover-fiction">Hardcover Fiction</option>
                <option value="combined-print-and-e-book-fiction">Fiction - Print and E-Book</option>
                <option value="combined-print-and-e-book-nonfiction">Nonfiction - Print and E-Book</option>
                <option value="combined-print-fiction">Fiction - Hardcover & Paperback </option>
                <option value="combined-print-nonfiction">Nonfiction - Hardcover & Paperback </option>
                <option value="mass-market-paperback">Mass Market Paperback</option>
                <option value="manga">Manga</option>
     </select>
     <p className="f6">Note: data is only available from 2008 onwards.</p>
     <p>
        <label for="=lists">Enter birthday: </label>
        <input 
            type="text"
            name="bookDate"
            placeholder="YYYY-MM-DD"
            className = 'pa1'/>
            </p>
        <button className ='pa2 pill ba br4 bg-white b--yellow yellow b'>search</button>
    </form>
    <p className="ma3"></p>
    </div>
);

export default Form;