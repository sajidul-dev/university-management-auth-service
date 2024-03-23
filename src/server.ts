import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { logger, errorLogger } from './shared/logger';
import { Server } from 'http';

process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('Connected to MongoDB');
    server = app.listen(config.port, () => {
      logger.info(`University listening on port ${config.port}`);
    });
  } catch (err) {
    errorLogger.error(`Failed to connect database ${err}`);
  }

  // Gracefully off your server
  process.on('unhandledRejection', error => {
    console.log('Unhandled Rejection is processing....');
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});
