import React from 'react'
import {calculateInvestmentResults, formatter} from '../util/investment.js'

const Result = ({inputs}) => {
    const finalOutput = calculateInvestmentResults(inputs);
    console.log(finalOutput);
    const initialInvestment = finalOutput[0].valueEndOfYear - finalOutput[0].interest - finalOutput[0].annualInvestment;
  return (
      <table id="result">
        <thead>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </thead>
        <tbody>
            {finalOutput.map(yearResult => {
                const totalInterest = yearResult.valueEndOfYear - yearResult.year * yearResult.annualInvestment - initialInvestment;
                const totalAmmountInvested = yearResult.valueEndOfYear - totalInterest;
                return(
                <tr key={yearResult.year}>
                    <td>{yearResult.year}</td>
                    <td>{formatter.format(yearResult.valueEndOfYear)}</td>
                    <td>{formatter.format(yearResult.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmmountInvested)}</td>
                </tr>
            )})}
        </tbody>

      </table>
  )
}

export default Result
