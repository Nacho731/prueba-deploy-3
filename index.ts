

// import { sequelize } from './src/db';
// import app from './src/app';
// sequelize
//   .sync({ force: true, logging: false })
//   .then(() => {
//     app.listen(3001, function () {
//       console.log('Wake up, Neo...');
//     });
//   })
//   .catch((err) => console.error(err));


import 'reflect-metadata';
import { sequelize } from './src/db';
import app from './src/app';

const startServer = async () => {
  try {
    await sequelize.sync({ force: true, logging: false });
    console.log('Base de datos sincronizada correctamente.');

    return app;
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
    throw error;
  }
};

export default startServer;

