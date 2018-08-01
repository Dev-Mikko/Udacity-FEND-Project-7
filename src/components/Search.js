import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './../BooksAPI'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import Book from './Book'

class Search extends React.Component {
	static propTypes = {
		query: PropTypes.string,
	}

	state = {
		query: '',
		results: []
	}

	searchBooks = () => {
		BooksAPI.search(this.state.query).then(resp => {
			if(resp) {
				resp.forEach(b => {
					let book = this.props.books.filter(book => b.id === book.id)[0]
					b.shelf = book ? book.shelf : "none"
				});
				resp.sort(sortBy("title"))

				return this.setState({ results: resp })
			} else if(!resp || (resp && resp.error)) {
				return this.setState({results: []});
			} 
		})
	}

	updateQuery = (query) => {
		this.setState({query: query}, this.searchBooks)
	}

	render() {
		const { query, results } = this.state;

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.updateQuery(event.target.value)} />
					</div>
				</div>
				<div className="search-books-results">
					<Book books={results} />
				</div>
			</div>
		)
	}
}

export default Search