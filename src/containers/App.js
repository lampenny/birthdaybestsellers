import { Component } from 'react';
import './App.css';

import ErrorBoundary from '../components/ErrorBoundary';
import Form from '../components/Form';
import Books from '../components/Books';
import Header from '../components/Header';
import Footer from '../components/Footer';

const API_KEY = "cAnUXB4uhv2xyVzMZCEkwNO6FdRlpoIh";

class App extends Component {
  state = {
    books: []
  }

  getBook = async (e) => {
    const bookDate = e.target.elements.bookDate.value;
    const lists = e.target.elements.list.value;
    e.preventDefault();
    const api_call = await fetch (`https://api.nytimes.com/svc/books/v3/lists/${bookDate}/${lists}.json?api-key=${API_KEY}`);
    
    const data = await api_call.json();
    this.setState({ books: data.results.books })
  }
  
  render() {
    return (
      <div className="App">
          <Header />
          <ErrorBoundary>
          <Form getBook={this.getBook} />
          <Books books={this.state.books} />
          </ErrorBoundary>
          <Footer />
      </div>
    )
  }
}

export default App;
