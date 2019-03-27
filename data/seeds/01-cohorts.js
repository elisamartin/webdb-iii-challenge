exports.seed = function(knex, Promise) {
	return knex('cohort').del().then(function() {
		return knex('cohort').insert([ { name: 'WEBEU1' }, { name: 'WEBEU2' }, { name: 'WEBEU3' } ]);
	});
};
