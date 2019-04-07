import JSONAPIAdapter from 'ember-data/adapters/json-api';
import config from 'ember-get-config';
console.log(config);
export default class ApplicationAdapter extends JSONAPIAdapter {

	host =  config.APP.clientPortalBaseURL;
	namespace = 'client-portal-api'
	headers = {
		'Api-Version': 2.0,
		'Application-Build-Version': 0.0,
		'Application-Platform': 'web'
	}
}
