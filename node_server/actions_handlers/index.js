const handleLogin = require('./login_handler');
const handleInterventionsRequest = require('./request_interventions_handler');
const handleCustomersRequest = require('./request_customers_handler');
const handleEmployeesRequest = require('./request_employees_handler');
const handleInterventionCreation = require('./create_intervention_handler');

module.exports = {
	handleLogin,
	handleInterventionsRequest,
	handleCustomersRequest,
	handleEmployeesRequest,
	handleInterventionCreation
}
