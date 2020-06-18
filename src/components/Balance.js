import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
const {transactions} = useContext(GlobalContext);

const amount = transactions.map(transation=> transation.amount);
const total = amount.reduce((acc, item)=>(acc += item), 0).toFixed(2);
    return (
        <div>
            <h4>Your Balance</h4>
    <h1>${total}</h1>
        </div>
    )
}
