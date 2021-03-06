import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', category: 'Select a Category', error: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const select = document.getElementsByTagName('select');

    Object.keys(select).forEach(e => {
      select[e].onchange = () => {
        if (select[e].value !== 'Category' && select[e].value !== 'All') {
          select[e].classList.add('toggle');
        } else {
          select[e].classList.remove('toggle');
        }
      };
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { props: { createBook }, state: { title, category } } = this;
    const element = document.getElementsByTagName('select')[1];

    if (title === '' || element.value === 'Category') {
      this.setState({ error: 'Please enter a valid title and select a category' });
      return;
    }
    const book = {
      id: Math.random().toString(),
      title,
      category,
    };
    createBook(book);
    this.setState({ title: '', error: '' });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { state: { title, error } } = this;
    return (
      <>
        <form onSubmit={e => this.handleSubmit(e)} className="formContainer">
          <div className="formBook">
            <label htmlFor="title">
              <input type="text" value={title} onChange={this.handleChange} name="title" placeholder="Title" />
            </label>
          </div>
          <div className="formBook">
            <label htmlFor="categories">
              <select name="category" onChange={e => this.handleChange(e)}>
                <option value="Category">Select a Category</option>
                {categories.map(c => <option key={`select-${c}`} value={c}>{c}</option>)}
              </select>
            </label>
          </div>
          <button type="submit">Add Button</button>
        </form>
        {error ? <span className="form-errors">{error}</span> : null}
      </>
    );
  }
}

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};


export default connect(null, { createBook })(BookForm);
