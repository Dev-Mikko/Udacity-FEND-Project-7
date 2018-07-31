import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from './Book'

class Search extends React.Component {
	static propTypes = {
		query: PropTypes.string,
	}

	state = {
		query: '',
	}

	updateQuery = (query) => {
		this.setState({query: query.trim()})
	}

	render() {
		const { books } = this.props;
		const { query } = this.state;
		let showBooks;

		if(query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			showBooks = books.filter((books) => (match.test(books.title) || match.test(books.authors)))
		} else {
			showBooks = []
		}
		
		if(showBooks.length !== 0) {
			showBooks.sort(sortBy('title'))
		}

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.updateQuery(event.target.value)} />
					</div>
				</div>
				<div className="search-books-results">
					<Book books={showBooks} />
				</div>
			</div>
		)
	}
}

export default Search