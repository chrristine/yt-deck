import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import Deck from './models/Deck';

require('dotenv').config();
console.log(process.env);

const app = express();

const PORT = 4000;

app.use(express.json());

mongoose.connect('mongodb+srv://crusso:ByZ13kRiW3eiL7tP@cluster0.iqsgrhj.mongodb.net/?retryWrites=true&w=majority').then(() => {
  console.log(`Listening on port ${PORT}`);
  app.listen(PORT);
});

app.post('/decks', async (req: Request, res: Response) => {
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
  // res.send('decks');
});

app.get('/hello', (req: Request, res: Response) => {
  res.send('Hello World!');
});
