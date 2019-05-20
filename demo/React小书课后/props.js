class Computer extends Component {
  constructor() {
    super()
    this.state = {
      status: 'off',
      showContent: '显示器关了'
    }
  }
  
  handleClick() {
    const newStatus = this.state.status === 'off' ? 'on' : 'off'
    let newContent
    
    if (newStatus === 'off') {
      newContent = '显示器关了'
    } else {
      newContent = '显示器亮了'
    }
    this.setState({
      status: newStatus,
      showContent: newContent
    })
  }
  
  render () {
    const content = this.state.showContent
    return (
      <div>
        <button onClick={e => this.handleClick(e)}>开关</button>
        <Screen showContent={content} />
      </div>
    )
  }
}

class Screen extends Component {
  static defaultProps = {
    showContent: '无内容'
  }
  
  render () {
    const showContent = this.props.showContent
    return (
      <div className='screen'>{showContent}</div>
    )
  }
}