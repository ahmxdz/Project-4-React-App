import React ,{useEffect, useState } from 'react'
import {Table} from 'react-bootstrap'
// import './ClientTable.css'
import ExchangeTableRow from '../../components/ExchangeTableRow/ExchangeTableRow'


const ExchangeTable = (props) => {

    const [exchangeHistory, setExchangeHistory] = useState([])
      
        useEffect(() =>{
          fetch('/api/exchange')
          .then(response =>{
            return response.json()
          }).then(response => { 
            setExchangeHistory(response.exchangeData)
          }).catch(err =>{
            console.log(err)
          })
        },[])
        

    return (
        <div className="client-table"> 
            <Table striped variant="dark" bordered hover>
            <table className='content-table'>
            <thead>
                <tr className='active-row'>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Converted To</th>
                <th>Converted From</th>
                <th>Amount Sent</th>
                </tr>
            </thead>
            <tbody> 
        
            {exchangeHistory.map((exchangeData) =>
             <ExchangeTableRow
             id={exchangeData._id} 
             firstName={exchangeData.firstName} 
             lastName={exchangeData.lastName} 
             convertTo={exchangeData.convertedTo}
             convertFrom={exchangeData.convertedFrom}
             amountSent={exchangeData.amountSent}
             />
            )}  
            </tbody>
            </table>
            </Table>
        </div>

    )}


 export default ExchangeTable