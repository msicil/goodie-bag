const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candies', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: false
		}
	},
	description: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: false
		}
	},
	quantity: {
		type: Sequelize.INTEGER,
		validate: {
			min: 0,
			max: 10
		}
	},
	imageUrl: {
		type: Sequelize.STRING,
		defaultValue: ''
	}
});
