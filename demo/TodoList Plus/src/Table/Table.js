import React, { Component } from 'react'
import './Table.css'

class Table extends Component {

  editThing = (e, index) => {
    console.log(this.refs[`text${index}`])
    this.refs[`text${index}`].readOnly = !this.refs[`text${index}`].readOnly
  }

  render() {
    const { thingList, removeThing } = this.props

    return (
      <div className="list-bg">
        <div className="list-title">
          <h1>TODO List</h1>
        </div>
        <table className="table-bg">
          <tbody>
            {
              thingList.map((row, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        ref={`text${index}`}
                        defaultValue={row.thing}
                        readOnly={true}
                        className="table-item-text"
                      />
                    </td>
                    <td className="table-item-action">
                      <input
                        type="button"
                        value="Done"
                        className="table-button-done"
                        onClick={() => removeThing(index)}
                      />
                    </td>
                    <td className="table-item-action">
                      <input
                        type="button"
                        value="Edit"
                        className="table-button-edit"
                        onClick={e => this.editThing(e, index)}
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