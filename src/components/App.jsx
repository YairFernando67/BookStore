import React, { Component } from 'react';
import PropType from 'prop-types';

import BooksList from './BooksList';
import BooksForm from './BooksForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.test = '';
  }

  render() {
    return (
      <div>
        <BooksList />
        <BooksForm />
      </div>
    );
  }
}
