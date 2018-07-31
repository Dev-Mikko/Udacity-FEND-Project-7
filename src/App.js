import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import Search from './components/Search'
import Library from './components/Library'
import './App.css'

class BooksApp extends React.Component {
	state = {
		books: []
	}

	getBooks = () => {
		BooksAPI.getAll().then(books => {
			this.setState({
				books: books
			})
		})
	}

	componentDidMount() {
		this.getBooks()
	}

	componentDidUpdate() {
		this.getBooks()
	}

	render() {
		const { books } = this.state

		return (
			<div className="app">
				<Route exact path='/search' render={() => (
					<Search books={books} />
				)} />

				<Route exact path='/' render={() => (
					<Library books={books} />
				)} />
			</div>
		)
	}
}

export default BooksApp
