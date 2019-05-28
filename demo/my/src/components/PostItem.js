import React from 'react'

function PostItem(props) {
  const { title, key, category } = props
  
  return (
    <div>
      <div>{title}</div>
      <div>Category: {category}</div>
    </div>
  )
}

export default PostItem