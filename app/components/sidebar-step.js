import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class SidebarStepComponent extends Component {
	@service appointment

	get isCurrentStep() {
		return this.appointment.currentStepNum === this.args.stepNum;
	}

	get isStepComplete() {
		return this.args.stepNum <= this.appointment.steps.length;
	}

	get disabled() {
		return (!this.isCurrentStep && (this.appointment.steps.length < this.args.stepNum)) ? 'disabled' : '';
	}

	get text() {
		let step = this.appointment.steps[this.args.stepNum - 1];
		if (step) {
			return step.text;
		}
		return '';
	}

	get color() {
		if ((this.isStepComplete || this.disabled)) {
			return 'secondary';
		} else {
			return 'info';
		}
	}
}
