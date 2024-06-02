import Header from "./Components/Header"
import UserInput from "./Components/UserInput"
import Result from "./Components/Result"
import { useState } from "react"
function App() {
  const[valueObject, setValueObject] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10,
})
const inputIsValid = valueObject.duration > 0;

function handleChange(identifier, newValue){
    setValueObject(prevObj => {
        return {
            ...prevObj,
            [identifier] : +newValue
        }
    })
}
  return (
    <>
    <Header />
    <UserInput onChange={handleChange} userInput={valueObject}/>
    {!inputIsValid && <p className="center">Please enter the duration greater than zero.</p>}
    {inputIsValid && <Result inputs={valueObject}/>}
    </>
  )
}

export default App
