import express, {Express} from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv' 
import cors from 'cors';
import path from 'path'
import { ErrorMiddleware } from '../middleware/error.middleware';

const rootDir = __dirname;

const app: Express=express()

// Acceder a la configuracion del archivo .env
dotenv.config();
// Puerto que escucha por defecto 3000 o definido .env
const port = process.env.PORT || 3000;
// Middleware CORS para aceptar llamadas en el servidor
app.use(cors());
// Middleware para loggear las llamadas al servidor
app.use(morgan('dev'));

// Middleware para gestionar Requests y Response json
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//---- Registro de rutas ----

//Gestión de errores middleware
app.use(ErrorMiddleware.handleError)

//Acceso a las imágenes


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  console.log('Presione CTRL-C para deternerlo\n');
 });
