import React, { Component } from 'react'
import style from './ThemeButton.css'

class ThemeButton extends Component {
  render() {
    return (
      <div className={style.buttonBg}>
        <input
          type='button'
          className={style.themeButton}
        />
      </div>
    )
  }
}

export default ThemeButton