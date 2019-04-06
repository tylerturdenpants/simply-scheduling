import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default class OfficeModel extends Model {
	@attr() city
	@attr() name
	@attr() state
	@attr() street
	@attr() zip
	@attr() phone
	@attr() isVideo
}
