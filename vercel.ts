import startServer from './index';

const start = async () => {
  const app = await startServer();
  const PORT = process.env.PORT || 3001;

  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}.`);
  });
};

start().catch((error) => console.error('Error al iniciar el servidor:', error));
