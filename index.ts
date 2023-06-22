

import { sequelize } from './src/db';
import app from './src/app';
sequelize
  .sync({ force: true, logging: false })
  .then(() => {
    app.listen(3001, function () {
      console.log('Wake up, Neo...');
    });
  })
  .catch((err) => console.error(err));


// import 'reflect-metadata';
// import { sequelize } from './src/db';
// import app from './src/app';

// const startServer = async () => {
//   try {
//     await sequelize.sync({ force: true, logging: false })
//     .then(() => {
//           app.listen(3001, function () {
//             console.log('Wake up, Neo...');
//           });
//           }
//     .catch(())
//     }
// }

// export default startServer;

