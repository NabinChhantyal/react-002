import React from 'react';

import ReactDOM from 'react-dom/client';
import Countries from './countries.js';
import Transactions from './transactions.js';
import ColourButton from './colourbutton.js';
import CounterButton from './counterbutton.js';
import MyForm from './myform.js';
const cars =['Honda', 'Toyota', 'Mazda', 'Volvo'];
const countries =['Canada', 'USA', 'Mexico', 'Panama'];
const transactions = ['-$100.25', '$312.45', '-$12.13'];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Countries mycountries={countries} />
    <Transactions mytxns={transactions} />
    <ColourButton />
    <CounterButton start={3} steps={5} />
    <MyForm />
    </div>
);