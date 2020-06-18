import React,{useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


export const AddTransation = () => {
    let [text,setText] = useState('');
    let [amount,setAmount] = useState();  
    const {addTransaction} = useContext(GlobalContext);
   
    const onSubmit = e =>{
    e.preventDefault();
      
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    
    addTransaction(newTransaction)
    }

    return (
        <div>
            <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Transaction Name</label>
          <input type="text" onChange={(e)=> setText(e.target.value)}  placeholder="Enter transaction name..." />
        </div>
        <div className="form-control">
          <label
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"  onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
      <p>Created by Noman Ishaq</p>
        </div>
    )
}
