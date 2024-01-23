import { Component } from 'react';
import './App.css';

import { ErrorBoundary,
         Form,
         Books,
         Header,
         Footer } from '../components/index';

const API_KEY = process.env.REACT_APP_NYT_API_KEY;

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
