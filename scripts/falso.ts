import * as fs from 'fs';

import {
  randBoolean,
  randHex,
  randNumber,
  randText,
  randUuid,
  randWord,
} from '@ngneat/falso';

const numNotes = 5;
const numTags = 3;

/* const tags = [
  {
    name: 'Business',
    color: randHex(),
  },
  {
    name: 'Projects',
    color: randHex(),
  },
  {
    name: 'Personal',
    color: randHex(),
  },
]; */

const notes = Array.from({ length: numNotes }, (_, i) => ({
  id: randUuid(),
  description: randText({ charCount: 100 }),
  title: randText({ charCount: 20 }),
  tags: {
    projects: randBoolean(),
    business: randBoolean(),
    personal: randBoolean(),
  },
}));

const users = [
  {
    email: 'nya@example.com',
    password: '$2a$10$i/wwy3XAfeNie7ZIDhGlw.gtWdPR4y/s2mJKWkcR6ajIGtge7pLqe',
    id: 1,
  },
  {
    email: 'neko@example.com',
    password: '$2a$10$nCFs7v4av5qmGWkAFlQakOnXO2VI2sLDaMR8ocyJefkFInE85wPXW',
    id: 2,
  },
];

const database = JSON.stringify({ notes, users });
fs.writeFileSync('./api/database.json', database, 'utf8');
console.log('database.json created');
