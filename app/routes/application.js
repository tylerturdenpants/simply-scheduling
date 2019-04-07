import Route from '@ember/routing/route';
import config from 'ember-get-config';

export default class ApplicationRoute extends Route {

	model() {
		return this.store.query('cpt-code', {
			filter: {
				clinicianId: config.APP.clinicianID
			}
		});
	}
}
