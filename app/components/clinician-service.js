/* eslint-disable ember/use-ember-get-and-set */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/string';

export default class ClinicianServiceComponent extends Component {
	@service router
	@service store
	@service appointment

	@action
	goToLocations(cptCodeId) {
		let cptCode = this.store.peekRecord('cpt-code', cptCodeId);
		this.appointment.addStep({
			num: 2,
			text: htmlSafe(`${cptCode.get('description')}<br> ${cptCode.get('duration')} minutes`)
		});
		this.router.transitionTo('office-locations', cptCodeId);
	}
}
