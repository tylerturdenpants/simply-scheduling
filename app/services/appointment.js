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
		this.steps = this.steps.slice(0, -1);
		this.currentStepNum = this.steps.length;
	}
	removeSteps(start, deleteCount = 0) {
		this.steps = [...this.steps.slice(0, start), ...this.steps.slice(start + deleteCount)];
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
