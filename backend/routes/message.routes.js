import express from 'express';
import protectRoute from '../middleware/protectRoute.js';

import { sendMessage, getMessages } from '../controllers/message.controller.js';

const Router = express.Router();

Router.get("/:id", protectRoute, getMessages);
Router.post("/send/:id", protectRoute, sendMessage);

export default Router;
