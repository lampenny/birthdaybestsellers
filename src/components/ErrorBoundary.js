import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
};

componentDidCatch(error, info) {
    this.setState({ hasError: true })
}

render (){
    if (this.state.hasError) {
        return <div>
        <h1>no bestsellers for that date :(</h1><p>
        <a href="https://lampenny.github.io/birthdaybestsellers/"><input type="button" value="Go back" /></a>
        </p>
        </div>
    }
    return this.props.children
    }
}

export default ErrorBoundary;