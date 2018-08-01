import React from 'react'

class MoveBook extends React.Component {
	render() {
		const { book } = this.props

		return (
			<div className="book-shelf-changer">
				<select value={book.shelf || "none"} onChange={(event) => this.props.updateBookShelf(book, event.target.value)}>
					<option value="" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		)
	}
}

export default MoveBook