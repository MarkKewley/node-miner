"use strict";
import axios from 'axios';
import express from 'express';
import * as config from '../config/config';

const app = express();
const port = 9001;

const GOOGLE_MAPS_API = 'https://maps.googleapis.com/maps/api/geocode/json';
const API_KEY = '86fcb996cd3853c68afb8fc33a480725';
const DARKSKY_API_ENDPOINT = `https://api.darksky.net/forecast`;

app.get('/', (req, res) => {
    res.send('Hello World')
});


app.listen(port, () => {
    console.log(`Application listening on port: ${port}`);
});