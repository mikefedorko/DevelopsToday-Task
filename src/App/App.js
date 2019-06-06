import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../config/routes';

import LatestPostPage from '../pages/latest-posts';
import ViewPostPage from '../pages/view-post';

const App = () => {
	return (
		<Fragment>
			<Switch>
				<Route exact path={routes.LATEST_POSTS} component={LatestPostPage} />
				<Route exact path={routes.VIEW_POST} component={ViewPostPage} />
			</Switch>
		</Fragment>
	);
};

export default App;
