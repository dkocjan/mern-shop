import bodyParser from 'body-parser';

const setMiddlewares = app => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
};

export default setMiddlewares;
