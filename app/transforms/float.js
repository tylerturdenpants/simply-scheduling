import DS from 'ember-data';
const { Transform } = DS;

export default class FloatTransform extends Transform {
	deserialize(serialized) {
		return parseFloat(serialized);
	}

	serialize(deserialized) {
		return String(deserialized);
	}
}