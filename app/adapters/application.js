import DS from 'ember-data';

export default class ApplicationAdapter extends DS.JSONAPIAdapter {
	host =  'https://johnny-appleseed.clientsecure.me'
	namespace = 'client-portal-api'
	headers = {
		'Api-Version': 2.0,
		'Application-Build-Version': 0.0,
		'Application-Platform': 'web'
	}
}
