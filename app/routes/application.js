import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {

	model() {
		return this.store.query('cpt-code', {
			filter: {
				clinicianId: 2
			}
		});
	}
}
