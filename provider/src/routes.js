import express from 'express';
import { getUsers, createUser, deleteUsers } from './domain';

const router = express.Router();

const formatUsersResponse = (users) =>
  users.map(({ name, email, birthday }) => ({ name, email, birthday }));

router.get('/users', (req, res) => {
  res.status(200).json(formatUsersResponse(getUsers()));
});

router.post('/users', (req, res) => {
  res.status(200).json(createUser(req.body));
});

router.delete('/users', (req, res) => {
  res.status(200).json(deleteUsers());
});

export default router;
