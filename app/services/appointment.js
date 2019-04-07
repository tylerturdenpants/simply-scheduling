import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AppointmentService extends Service {
	@tracked currentStepNum = 2;
	@tracked steps = [{
		num: 1,
		text: 'Rob Gross, MFT'
	}];

	addStep(step) {
		this.steps = [...this.steps, step];
		this.currentStepNum = this.steps.length + 1;
	}

	removeStep() {
		this.step = this.steps.slice(0, -1);
		this.currentStepNum = this.steps.length;
	}
}
