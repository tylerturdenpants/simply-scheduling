import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
	@service appointment

	beforeModel() {
		this.appointment.start();
	}

	model() {
		return this.modelFor('application');
	}
}
