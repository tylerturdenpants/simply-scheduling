import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
	host =  'https://johnny-appleseed.clientsecure.me'
	namespace = 'client-portal-api'
	headers = {
		'Api-Version': 2.0,
		'Application-Build-Version': 0.0,
		'Application-Platform': 'web'
	}
}
