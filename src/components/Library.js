import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class Library extends React.Component {
	state = {
		books: this.props
	}

	render() {
		const {books} = this.props
		
		let reading = books.filter(book => book.shelf === 'currentlyReading'), 
			toRead = books.filter(book => book.shelf === 'wantToRead'),
			read = books.filter(book => book.shelf === 'read');

		return(
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<Shelf title="Currently Reading" books={reading} />
						<Shelf title="Want to read" books={toRead} />
						<Shelf title="Reading" books={read} />
					</div>
				</div>
				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
			</div>
		)
	}
}

export default Library