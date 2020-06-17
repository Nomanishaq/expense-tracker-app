import React ,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
const {transations} = useContext(GlobalContext);

  return (
        <>
             <h3>Previous History</h3>
      <ul className="list">
      {transations.map(transaction=>(<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
        </>
    )
}
