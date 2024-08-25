import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const myList = (
  <ul>
    <li>Hello</li>
    <li>Hello there!</li>
    <li>Hello there Software Engineer</li>
  </ul>
);