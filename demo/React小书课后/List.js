class Lesson extends Component {
  /* TODO */
 
  render() {
    const { lesson } = this.props
    return (
      <div onClick={() => console.log(`${this.props.index} - ${lesson.title}`)}>
        <h1>{lesson.title}</h1>
        <p>{lesson.description}</p>
        <hr />
      </div>
    )
  }
}

class LessonsList extends Component {
  /* TODO */

  render() {
    const { lessons } = this.props
    return (
      <div>
        {lessons.map((lesson, i) => {
          return <Lesson key={i} index={i} lesson={lesson} />
        })}
      </div>
    )
  }
}