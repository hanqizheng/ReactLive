import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  }
  
  static defaultProps = {
    comments: []
  }

  handleDeleteComment(index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }

  render() {
    return (
      <div>
        {this.props.comments.map((comment, i) => {
          return <Comment
                    comment={comment}
                    key={i}
                    index={i}
                    onDeleteComment={e => this.handleDeleteComment(e)} />
        })}
      </div>
    )
  }
}

export default CommentList