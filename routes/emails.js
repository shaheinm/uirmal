/**
 * This file defines the email tests for your project.
 * 
 * Each email test should provide the locals used to render the
 * email template for preview.
 * 
 * Values can either be an object (for simple tests), or a
 * function that calls a callback(err, locals).
 * 
 * Sample generated emails, based on the keys and methods below,
 * can be previewed at /keystone/test-email/{key}
 */

var keystone = require('keystone');

module.exports = {
	
	/** New Enquiry Notifications */
	
	'enquiry-notification': function(req, res, callback) {
		
		// To test enquiry notifications we create a dummy enquiry that
		// is not saved to the database, but passed to the template.
		
		var Enquiry = keystone.list('Enquiry');
		
		var newEnquiry = new Enquiry.model({
			name: { first: 'Test', last: 'User' },
			email: 'contact@uirimal.com',
			phone: '+61 2 1234 5678',
			enquiryType: 'message',
			message: { md: 'Nice enquiry notification.' }
		});
		
		callback(null, {
			admin: 'Admin User',
			enquiry: newEnquiry,
			enquiry_url: '/keystone/enquiries/'
		});
		
	}
	
};

module.exports = {
	'registration-notification': function(req, res, callback) {
		
		// Need to find test email locations
		
		var Registration = keystone.list('Registration');
		
		var newRegistration = new Registration.model({
			name: { first: 'Test', last: 'User' },
			school: 'Some University',
			email: 'contact@uirimal.com',
			phone: '555-555-5555',
			numOfStudents: '10',
			tourPackage: false,
			message: { md: 'Registered for UIRIMAL!' },
		});
		
		callback(null, {
			admin: 'Admin User',
			registration: newRegistration,
			registration_url: '/keystone/registrations/'
		});
	}
};

module.exports = {
	'staff-notification': function(req, res, callback) {
		
		// Need to find test email locations
		
		var Staff = keystone.list('Staff');
		
		var newStaff = new Staff.model({
			name: { first: 'Test', last: 'User' },
			school: 'Some University',
			email: 'contact@uirimal.com',
			phone: '555-555-5555',
			position: 'Chair',
			message: { md: 'Registered for UIRIMAL!' },
		});
		
		callback(null, {
			admin: 'Admin User',
			staff: newStaff,
			staff_url: '/keystone/staff/'
		});
	}
};
