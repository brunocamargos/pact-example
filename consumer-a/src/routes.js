import express from 'express';
import getEmails from './controllers/get-emails';

const router = express.Router();

router.get('/', getEmails);

export default router;
