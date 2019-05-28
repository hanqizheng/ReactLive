import React from 'react'
import PostItem from './PostItem'

function Posts(props) {
	return (
		<div>
			<div>loading: {props.loading + ''}</div>
			<div>
				{
					props.posts.map(post => {
						return <PostItem key={post.key} post={post} />
					})
				}
			</div>
		</div>

	)
}

export default Posts