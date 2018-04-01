const ApiUrl = {
  projects: () => '/projects',
  project: project => '/projects/' + project,
  create: project => '/projects/' + project,
  reference: project => '/projects/' + project + '/reference',
  test: project => '/projects/' + project + '/test',
  approve: project => '/projects/' + project + '/approve',
  report: project => '/projects/' + project + '/report'
}

export default ApiUrl
