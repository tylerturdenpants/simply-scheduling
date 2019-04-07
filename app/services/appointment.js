import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AppointmentService extends Service {
	@tracked currentStepNum = 2;
	@tracked steps = [];

	addStep(step) {
		this.steps = [...this.steps, step];
		this.currentStepNum = this.steps.length + 1;
	}

	removeStep() {
		this.step = this.steps.slice(0, -1);
		this.currentStepNum = this.steps.length;
	}

	start() {
		this.steps = [];
		this.addStep({
			num: 1,
			text: 'Rob Gross, MFT'
		});
	}

	get isServiceStep() {
		return this.currentStepNum === 2;
	}
}
