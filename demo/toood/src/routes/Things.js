import React from 'react'
import { connect } from 'dva'
import Table from '../components/Table'
import Form from '../components/Form'
import ThemeButton from '../components/ThemeButton'
import style from './IndexPage.css'

const Things = props => {
  const { dispatch, things } = props

  function handleSubmit(thing) {
    console.log('this. handle submit', thing)
    dispatch({
      type: 'things/addThing',
      payload: thing
    })
  }

  function removeThing(index) {
    console.log('this is remove thing', index)
    dispatch({
      type:'things/deleteThing',
      payload: index
    })
  }

  return (
    <div className={style.App}>
      <div>
        <div className={style.colorSelection}>
          <ThemeButton />
          <ThemeButton />
          <ThemeButton />
          <ThemeButton />
        </div>
        <Table
          things={things}
          removeThing={removeThing}
        />

        <Form
          handleSubmit={handleSubmit}
        />

      </div>

    </div>
  )
}

const mapStateToProps = state => {
  const { things } = state
  return things
}

export default connect(mapStateToProps)(Things)