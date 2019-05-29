import React, { Component } from 'react'
import style from './Table.css'


class Table extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      isEdit: false
    }
    this.state = this.initialState
  }

  editThing = (e, index) => {
    console.log(this.refs[`edit${index}`].value)
    if (this.refs[`edit${index}`].value === 'Edit') {
      this.refs[`edit${index}`].value = 'Save'
    } else {
      this.refs[`edit${index}`].value = 'Edit'
    }
    this.refs[`edit${index}`].value = this.state.isEdit === 'Edit' ? 'Save' : 'Edit' 
    console.log(this.refs[`edit${index}`])
    this.refs[`text${index}`].readOnly = !this.refs[`text${index}`].readOnly
  }

  render() {
    const { things, removeThing } = this.props
    return (
      <div className={style.listBg}>
        <div className={style.listTitle}>
          <h1>TODO</h1>
        </div>
        <table className={style.tableBg}>
          <tbody>
            {
              things.map((row, index) => {
                return (
                  <tr key={index} className={style.tableItem}>
                      <td>
                        <input
                          type="text"
                          ref={`text${index}`}
                          defaultValue={row}
                          readOnly={true}
                          className={style.tableItemText}
                        />
                      </td>
                      <td className={style.tableItemAction}>
                        <input
                          type="button"
                          value="Done"
                          className={style.tableButtonDone}
                          onClick={() => removeThing(index)}
                        />
                      </td>
                      <td className={style.tableItemAction}>
                        <input
                          type="button"
                          ref={`edit${index}`}
                          defaultValue='Edit'
                          className={style.tableButtonEdit}
                          onClick={(e) => this.editThing(e, index)}
                        />
                      </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }

}

export default Table