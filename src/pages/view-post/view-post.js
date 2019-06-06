import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncOperations, selectors } from '../../redux';

import style from './view-post.module.css';

class ViewPost extends Component {
	state = {
		body: ''
	};

	componentDidMount() {
		const { match, getPostById } = this.props;
		getPostById(match.params.id);
	}

	handleChange = (e) => {
		this.setState({ body: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { addComment } = this.props;
		const { body } = this.state;
		addComment(body);
		this.setState({ body: '' });
	};

	handleBackToPosts = () => {
		const { history, location } = this.props;
		const { state } = location;

		return state ? history.push(state.from) : history.push({ pathname: '/' });
	};

	render() {
		const { post } = this.props;
		const { body } = this.state;
		return post !== null ? (
			<div key={post.id} className={style.container}>
				<div>
					<button onClick={this.handleBackToPosts} type="button" className={style.button}>
						Back To Posts
					</button>
				</div>
				<div className={style.description}>
					<div className={style.image}>
						<img src={post.url_img} alt="Amazing post" />
					</div>
					<div>
						<h1>{post.title}</h1>
						<p>{post.body}</p>
					</div>
					<div />
				</div>
				<h2>Comments: </h2>
				{post.comments !== undefined ? (
					<ul className={style.rounded}>
						{post.comments.map((comment) => (
							<li key={comment.id}>
								<span>{comment.body}</span>
							</li>
						))}
					</ul>
				) : null}
				<form onSubmit={this.handleSubmit}>
					<textarea rows="7" cols="60" value={body} onChange={this.handleChange} />
					<br />
					<button type="submit" className={style.button}>
						Comment it
					</button>
				</form>
			</div>
		) : null;
	}
}

const mapStateToProps = (state) => ({
	post: selectors.post(state)
});

const mapDispatchToProps = {
	getPostById: asyncOperations.getPostById,
	addComment: asyncOperations.addComment
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewPost);
