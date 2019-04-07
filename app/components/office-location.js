/* eslint-disable ember/use-ember-get-and-set */
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class OfficeLocationComponent extends Component {
	@service googleMapsApi
	@service store
	@service router
	@service appointment

	@tracked lat
	@tracked lng

	constructor(owner, args) {
		super(owner, args);
		this.geoencodeAddress();
	}

	async geoencodeAddress() {
		let google = await this.googleMapsApi.get('google');
		let geocoder =  new google.maps.Geocoder();
		geocoder.geocode({ address: this.address }, (results, status) => {
			if (status === google.maps.GeocoderStatus.OK) {
				if (status !== google.maps.GeocoderStatus.ZERO_RESULTS) {
					let lnglat = results[0].geometry.location;
					this.lat = lnglat.lat();
					this.lng = lnglat.lng();
				}
			}
		});
	}

	get address() {
		let { street, city, state, zip } = this.args.location;
		return `${street} ${city}, ${state}, ${zip}`;
	}

	get isLngOrLat() {
		return this.lat || this.lng;
	}

	@action
	goToDateAndTime() {
		this.appointment.addStep({
			num: 3,
			text: 'Santa Monica' // htmlSafe(`${office.get('name')}<br> ${office.get('city')}`)
		});
		this.router.transitionTo('date-and-time');
	}
}
