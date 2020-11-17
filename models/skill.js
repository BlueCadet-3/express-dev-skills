const skills = [
  {dev: 'Chris', html: true, css: true, js: true, express: true},
  {dev: 'Jim', html: true, css: true, js: true, express: true},
  {dev: 'Martin', html: true, css: true, js: true, express: false},
  {dev: 'Shaw', html: true, css: true, js: true, express: true}
];

module.exports = {
  getAll
};

function getAll() {
  return skills;
}