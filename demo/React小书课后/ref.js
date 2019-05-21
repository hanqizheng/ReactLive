class Post extends Component {
  handleClick() {
    console.log(this.p.clientHeight)
  }
  
  render () {
    const { content } = this.props
    return (
      <p ref={p => this.p = p} onClick={e => this.handleClick(e)}>{content}</p>
    )
  }
}