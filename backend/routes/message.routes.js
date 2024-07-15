import express from 'express'
import protectRoute from '../middleware/protectRoute.js';

import { sendMessage } from '../controllers/message.controller.js';

const Router = express.Router();

Router.post("/send/:id",protectRoute, sendMessage)

export default Router;