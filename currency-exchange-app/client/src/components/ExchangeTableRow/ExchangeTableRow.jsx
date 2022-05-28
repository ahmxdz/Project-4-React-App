import React from 'react'
import getSymbolFromCurrency from 'currency-symbol-map'

const ExchangeTableRow = (props) => {
    // console.log(props, 'props')
    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.convertedTo}</td>
            <td>{props.convertedFrom}</td>
            <td>{getSymbolFromCurrency(props.convertedTo)} {(Math.round(props.amountSent * 100) / 100).toFixed(2)}</td>
            <td>{getSymbolFromCurrency(props.convertedFrom)} {(Math.round(props.convertedAmount * 100) / 100).toFixed(2)}</td>
        </tr>         
    )
}

export default ExchangeTableRow