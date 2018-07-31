import React from 'react'
import * as BooksAPI from './../BooksAPI'

class MoveBook extends React.Component {
	state = {
		value: '',
	}
	
	updateValue = (value) => {
		this.setState({value: value});
		BooksAPI.update(this.props.book, value).then(
			changes => this.props.onChange(changes)
		)
	}
	
	render() {
		const { book } = this.props
		const { value } = this.state

		if(value === "currentlyReading") {
			book.shelf = value
		} else if(value === "wantToRead") {
			book.shelf = value
		} else if(value === "read") {
			book.shelf = value
		}

		return (
			<div className="book-shelf-changer">
				<select>
					<option value="move" disabled>Move to...</option>
					<option value="currentlyReading" onClick={(event) => (this.updateValue("currentlyReading"))}>Currently Reading</option>
					<option value="wantToRead" onClick={(event) => (this.updateValue("wantToRead"))}>Want to Read</option>
					<option value="read" onClick={(event) => (this.updateValue("read"))}>Read</option>
				</select>
			</div>
		)
	}
}

export default MoveBook