/* eslint-disable ember/use-ember-get-and-set */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ClinicianServiceComponent extends Component {
	@service router

	@action
	goToLocations(cptCodeId) {
		this.router.transitionTo('office-locations', cptCodeId);
	}
}
