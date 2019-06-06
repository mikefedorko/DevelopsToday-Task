/* eslint-disable camelcase */

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { asyncOperations, selectors } from '../../redux';

import style from './latest-posts.module.css';

class LatestPosts extends PureComponent {
	componentDidMount() {
		const { getAllPosts } = this.props;
		getAllPosts();
	}

	render() {
		const { postsList, isLoading, match, location } = this.props;
		return (
			<div className={style.container}>
				<h1 style={{ textAlign: 'center' }}>Front-End Challenge</h1>
				{isLoading && <h2 style={{ textAlign: 'center' }}>Loading...</h2>}
				{postsList !== undefined ? (
					postsList.map(({ id, title, body, tags, url_img }) => (
						<div key={id} className={style.listContainer}>
							<div className={style.image}>
								<img src={url_img} alt="Amazing IMG" width="500px" />
							</div>
							<div className={style.description}>
								<h2>{title}</h2>
								<span>Tag: {tags}</span>
								<p>{body}</p>

								<Link
									to={{
										pathname: `${match.path}${id}?_embed=comments`,
										state: { from: location }
									}}
								>
									Read full post...
								</Link>
							</div>
						</div>
					))
				) : null}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	postsList: selectors.allPosts(state),
	isLoading: selectors.loader(state)
});

const mapDispatchToProps = {
	getAllPosts: asyncOperations.getAllPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(LatestPosts);
