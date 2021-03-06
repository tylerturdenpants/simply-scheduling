'use strict';

module.exports = function(environment) {
	let ENV = {
		modulePrefix: 'simply-scheduling',
		environment,
		rootURL: '/',
		locationType: 'auto',
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
				EMBER_NATIVE_DECORATOR_SUPPORT: true,
				EMBER_METAL_TRACKED_PROPERTIES: true,
				EMBER_GLIMMER_ANGLE_BRACKET_NESTED_LOOKUP: true,
				EMBER_GLIMMER_ANGLE_BRACKET_BUILT_INS: true
			},
			EXTEND_PROTOTYPES: {
				// Prevent Ember Data from overriding Date.parse.
				Date: false
			}
		},

		APP: {
			// Here you can pass flags/options to your application instance
			// when it is created
			clientPortalBaseURL: 'https://johnny-appleseed.clientsecure.me',
			clinicianID: 2
		}
	};

	if (environment === 'development') {
		// ENV.APP.LOG_RESOLVER = true;
		// ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		// ENV.APP.LOG_VIEW_LOOKUPS = true;
	}

	if (environment === 'test') {
		// Testem prefers this...
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
		ENV.APP.autoboot = false;
	}

	// eslint-disable-next-line no-empty
	if (environment === 'production') {

	}

	ENV['ember-google-maps'] = {
		key: 'AIzaSyDPBeBUuTouHyW7d8SGpjeyWLEzoqqa74w', // Using .env files in this example
		language: 'en',
		region: 'US',
		protocol: 'https',
		version: '3.35'
		// client: undefined,
		// channel: undefined,
		// baseUrl: '//maps.googleapis.com/maps/api/js'
	};
	return ENV;
};
