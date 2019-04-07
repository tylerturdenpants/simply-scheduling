import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
	location: config.locationType,
	rootURL: config.rootURL
});

Router.map(function() {
	this.route('select-a-service');
	this.route('office-locations', { path: '/office-locations/:cpt_code' });
	this.route('date-and-time');
});

export default Router;
