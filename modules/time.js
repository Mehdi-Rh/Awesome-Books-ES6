import { DateTime } from '../node_modules/luxon/src/luxon.js';

const timeBox = document.querySelector('#date');

const now = DateTime.now();
timeBox.textContent = `${now}`;
