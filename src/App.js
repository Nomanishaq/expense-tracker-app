import React from 'react';
import './App.css';
import Header from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransation } from './components/AddTransaction';

function App() {
  return (
    <div className="container">
    <Header/>
    <Balance/>
    <IncomeExpense/>
    <TransactionList/>
    <AddTransation/>
    </div>
  );
}

export default App;
