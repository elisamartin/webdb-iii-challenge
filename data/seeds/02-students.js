exports.seed = function(knex, Promise) {
	return knex('students').del().then(function() {
		return knex('students').insert([
			{ name: 'Pete', cohort_id: 1 },
			{ name: 'Nate', cohort_id: 2 },
			{ name: 'Dave', cohort_id: 3 }
		]);
	});
};
