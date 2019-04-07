/* eslint-disable ember/use-ember-get-and-set */
/* eslint-disable camelcase */
import Route from '@ember/routing/route';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';
// import { htmlSafe } from '@ember/string';

export default class OfficeLocationsRoute extends Route {
	@service appointment

	beforeModel() {
		if (this.appointment.steps.length === 0) {
			this.transitionTo('index');
			return;
		}
	}

	model({ cpt_code }) {
		return this.fetchOfficeLocations.perform(2, cpt_code);
	}

	@task(function* (cId, cptCode) {
		let offices = yield this.store.query('office', {
			filter: {
				clinicianId: cId,
				cptCodeId: cptCode
			}
		});
		return offices;
	}) fetchOfficeLocations;

}
