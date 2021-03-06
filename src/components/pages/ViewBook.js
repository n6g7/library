import React from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'

import Button from '../common/Button'
import BookDrawer from '../drawer/BookDrawer'
import Progressbar from '../common/Progressbar'

import editImg from '@assets/edit.svg'

class ViewBook extends React.PureComponent {
  render () {
    const { book } = this.props

    const startDate = book.get('startDate')
    const endDate = book.get('endDate')

    return <BookDrawer book={book}>
      <h2>
        {book.get('title')}
      </h2>
      <p className='author'>
        {book.get('author')}
      </p>
      <Progressbar progress={book.get('progress')} label={book.get('state')} />
      { startDate &&
        <p className='date'>
          Starting date: {startDate.format('DD/MM/YYYY')}
        </p>
      }
      { endDate &&
        <p className='date'>
          Ending date: {endDate.format('DD/MM/YYYY')}
        </p>
      }
      <nav>
        <Button link={`/books/${book.get('bid')}/edit`} icon={editImg}>
          Edit
        </Button>
      </nav>
    </BookDrawer>
  }
}

ViewBook.propTypes = {
  book: React.PropTypes.instanceOf(Map)
}

export default ViewBook

const mapStateToProps = (state, props) => ({
  book: state
    .getIn(['library', 'books'])
    .find(book => book.get('bid') === props.params.bid)
})

export const ViewBookContainer = connect(
  mapStateToProps
)(ViewBook)
