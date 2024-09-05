import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// code inside the curly braces in jsx are treated as regular javascript
root.render(<h1>{2 + 3}</h1>); 
