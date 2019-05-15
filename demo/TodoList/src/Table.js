import React, { Component } from 'react'
import { Table, Button } from 'antd'
import Column from 'antd/lib/table/Column';


const rowSelection = {
  onChange: (selectedRowKeys, selectRows) => {
    console.log('yes')
  }
}

class myTable extends Component {
  handleClick = (record, removeThing, e) => {
    removeThing(record)
    console.log(record)
  }

  render() {
    const { thingData, removeThing } = this.props
    return (
      <Table dataSource={thingData} rowSelection={rowSelection}>
        <Column
          title="TODO"
          dataIndex="thing"
          key="thing"
        />
        <Column 
          title="Action"
          key="Action"
          render={(text, record) => (
            <span>
              <Button onClick={e => this.handleClick(record, removeThing, e)}>Done</Button>
            </span>
          )}
        />
      </Table>
    )
  }
}

export default myTable