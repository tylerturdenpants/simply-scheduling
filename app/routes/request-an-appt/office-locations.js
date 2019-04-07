/* eslint-disable camelcase */
import Route from '@ember/routing/route';
import { task } from 'ember-concurrency';

export default class RequestAnApptOfficeLocationsRoute extends Route {
	model({ cpt_code }) {
		return {
			locations: this.fetchOfficeLocations.perform(2, cpt_code)
		};
	}

	@task(function* (cId, cptCode) {
		return yield this.store.query('office', {
			filter: {
				clinicianId: cId,
				cptCodeId: cptCode
			}
		});
	}) fetchOfficeLocations;

}
