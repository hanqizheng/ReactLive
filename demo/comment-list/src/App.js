import React, { Component } from 'react';
import CommentList from './CommentList'
import CommentInput from './CommentInput'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }

  componentWillMount() {
    this._loadComments()
  }

  _saveComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }

  _loadComments () {
    let comments = localStorage.getItem('comments')

    if (comments) {
      comments = JSON.parse(comments)
      this.setState({
        comments: comments
      })
    }
  }

  handleSubmitComment(comment) {
    if (!comment) return
    if (!comment.username) {
      return alert('请输入用户名')
    }
    if (!comment.content) {
      return alert('请输入内容')
    }

    const comments = this.state.comments

    this.setState({
      comments: [...this.state.comments, comment]
    })

    this._saveComments(comments)
  }

  handleDeleteComment(index) {
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({
      comments: comments
    })
    this._saveComments(comments)
  }

  render() {
    return (
      <div className="wrapper">
        <CommentList
          comments={this.state.comments}
          onDeleteComment={e => this.handleDeleteComment(e)}
        />
        <CommentInput 
          onSubmit={e => this.handleSubmitComment(e)}
        />
      </div>
    );
  }
}

export default App;
