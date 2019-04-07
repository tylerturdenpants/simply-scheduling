import Route from '@ember/routing/route';
import { task } from 'ember-concurrency';

export default class RequestAnApptSelectAServiceRoute extends Route {

	model() {
		return {
			clinicianServices: this.fetchClinicianServices.perform(2)
		};
	}

	@task(function* (id) {
		return yield this.store.query('cpt-code', {
			filter: {
				clinicianId: id
			}
		});
	}) fetchClinicianServices;
}
