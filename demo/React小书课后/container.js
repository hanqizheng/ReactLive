class BlackBorderContainer extends Component {
  /* TODO */

  render() {
    return (
      <div>
        {this.props.children.map((child) => {
          return (
            <div className="myBorder">{child}</div>
          )
        })
        }
      </div>
    )
  }
}