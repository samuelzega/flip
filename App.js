import React from 'react';
import Routes from './src/routes';
import {TransactionProvider} from './src/context/transaction';

export default function App() {
  return (
    <TransactionProvider>
      <Routes />
    </TransactionProvider>
  );
}
