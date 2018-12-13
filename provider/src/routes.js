import express from 'express';
import { getUsers, createUser, deleteUsers } from './domain';

const router = express.Router();

router.get('/users', (req, res) => {
  res.status(200).json(getUsers());
});

router.post('/users', (req, res) => {
  res.status(200).json(createUser(req.body));
});

router.delete('/users', (req, res) => {
  res.status(200).json(deleteUsers());
});

export default router;
