// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import './Calc.css';



function Calc() {


    const [bill, setBill] = useState('');
    const [percentage, setPercentage] = useState('10');
   

    const handleInputBill = (e) => {
        setBill(e.target.value);
    }
    const handleInputPerc = (e) => {
        setPercentage (e.target.value);
    }

    return <div id="body-calc">
        
        
        <div id="calc">
            <h1>Tips Calculator</h1>
            <h3>How much did the bill cost?</h3>
            <input placeholder="Type here" type="number" value={bill} onChange={handleInputBill} />
            <h3>What is the percentage of the tip?</h3>
            <input placeholder="Type here" type="number" value={percentage} onChange={handleInputPerc}/>
            
            {bill.length > 0 && 
                <div id="final-calc">
                    <p>Subtotal: R${bill}</p>
                    <p>Tip ({percentage}%): R${(percentage/100)*bill}</p>
                    <h3>Total: R${parseInt(bill) + ((percentage/100)*bill)}</h3>
                                   

                </div>

            }

        </div>
        <footer id='github'>Github: https://github.com/juniorlaranjeira</footer>

    </div>;
}

export default Calc;