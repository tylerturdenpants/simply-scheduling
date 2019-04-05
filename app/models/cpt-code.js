import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default class CptCodeModel extends Model {
	@attr() description;
	@attr() duration;
	@attr('float') rate;
	@attr('boolean') callToBook
}
