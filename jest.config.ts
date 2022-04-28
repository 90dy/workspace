const { getJestProjects } = require('@nrwl/jest')

module.exports = {
	projects: getJestProjects(),
	passWithNoTests: true,
}
