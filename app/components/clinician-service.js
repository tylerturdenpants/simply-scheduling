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
		let { store, appointment } = this;
		let cpt = store.peekRecord('cpt-code', cptCodeId);
		appointment.addStep({
			num: 2,
			text: htmlSafe(`${cpt.get('description')}<br> ${cpt.get('duration')} minutes`)
		});
		this.router.transitionTo('office-locations', cptCodeId);
	}
}
