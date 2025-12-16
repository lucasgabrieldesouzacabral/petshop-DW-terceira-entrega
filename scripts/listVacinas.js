const Vacina = require('../models/vacina.model');
const db = require('../config/database');

(async () => {
  try {
    await db.authenticate();
    const vacinas = await Vacina.findAll();
    console.log('Vacinas:', vacinas.map(v => v.get({ plain: true })));
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
