import {Router} from 'express'
import { ContactController, ContactController } from '../controllers/contactController'

export const contatoRoute = Router()

const contactController = new ContactController()

contatoRoute.post("/criar", contactController.criarContato)