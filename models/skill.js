const skills = [
  {dev: 'Chris', HTML: true, CSS: true, JS: true, Express: true},
  {dev: 'Jim', HTML: true, CSS: true, JS: true, Express: true},
  {dev: 'Martin', HTML: true, CSS: true, JS: true, Express: true},
  {dev: 'Shaw', HTML: true, CSS: true, JS: true, Express: false}
];

module.exports = {
  getAll
};

function getAll() {
  return skills;
}