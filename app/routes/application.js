import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
	@service store
	
	async model(){
		await this.store.query('cpt-code', {
			filter: {
				clinicianId: 2
			}
		});

		await this.store.query('office', {
			filter: {
				clinicianId: 2,
				cptCodeId: 3866
			}
		})
	}

}
