/* eslint-disable ember/use-ember-get-and-set */
/* eslint-disable camelcase */
import Route from '@ember/routing/route';
import { task, timeout } from 'ember-concurrency';
import { inject as service } from '@ember/service';
// import { htmlSafe } from '@ember/string';

export default class DateAndTimeRoute extends Route {
	@service appointment

	beforeModel() {
		if (this.appointment.steps.length === 0) {
			this.transitionTo('index');
			return;
		}
	}
	model({ office_id }) {
		return this.fetchDateAndTime.perform(2, office_id);
	}

	@task(function* () {
		yield timeout(300);
	}) fetchDateAndTime;

}
