import JSONAPISerializer from 'ember-data/serializers/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
	keyForAttribute(key) {
		return key;
	}
}
