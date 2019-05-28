import React from 'react'
import { connect } from 'dva'
import PostsComponent from '../components/Posts'

function Posts(props) {
	return (
		<div>
			<h1>Posts</h1>
			<PostsComponent
				loading={props.loading}
				posts={props.posts}
			/>
    </div>
	)
}

function mapStateToProps(state) {
	const { loading, posts, postsByKey } = state.posts
	return {
		loading,
		posts: posts.map(key => ({ ...postsByKey[key], key }))
	}
}

export default connect(mapStateToProps)(Posts)