import express from 'express';
import getBirthdays from './controllers/get-birthdays';

const router = express.Router();

router.get('/', getBirthdays);

export default router;
