import React from 'react'
import Input from './Input'

const UserInput = ({onChange,userInput}) => {
    
    return (
        <form id="user-input">
            <div className="input-group">
                <Input id="ini_investment" onChange={onChange} name="initialInvestment" type="number" value={userInput.initialInvestment}/>
                <Input id="an_investment" onChange={onChange} name="annualInvestment" type="number" value={userInput.annualInvestment}/>
            </div>
            <div className="input-group">
                <Input id="exp_return" onChange={onChange} name="expectedReturn" type="number" value={userInput.expectedReturn}/>
                <Input id="duration" onChange={onChange} name="duration" type="number" value={userInput.duration}/>
            </div>

        </form>
    )
}

export default UserInput
