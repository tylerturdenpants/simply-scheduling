import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ClinicianServiceComponent extends Component {
	@service router
	@action
	goToLocations(cptCodeId) {
		console.log(cptCodeId, this.router);
		this.router.transitionTo('request-an-appt.office-locations', cptCodeId);
	}
}
