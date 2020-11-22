const skills = [];

module.exports = {
  getAll,
  create,
  deleteOne
};

function getAll() {
  return skills;
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skills.push(skill);
}

function deleteOne(id) {
  const idx = skills.findIndex(skill => skill.id === parseInt(id));
  skills.splice(idx, 1);
}