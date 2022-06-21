import React from 'react'
import { Table } from 'react-bootstrap'
const DataTable = () => {
  return (
    <>
    <div className='table-responsive tableCustom'>
        <Table striped>
          <thead>
            <tr>
              <th>Sale Period</th>
              <th>Quantity Sold: GIV</th>
              <th>Price Per $giv</th>
              <th>Limited Sale Price</th>
              <th>Liquidity Pool</th>
              <th>Giving Pool - Rewards - Dev</th>
              <th>Total Raised</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Limited Sale #1</td>
              <td>12,000,000 GIV</td>
              <td>$0.23</td>
              <td>$0.2415</td>
              <td>$2,484,000</td>
              <td>$138,000</td>
              <td>$2,898,000</td>
            </tr>
            <tr>
              <td>Limited Sale #2</td>
              <td>12,000,000 GIV</td>
              <td>$0.25</td>
              <td>$0.265</td>
              <td>$2,700,000</td>
              <td>$150,000</td>
              <td>$3,150,000</td>
            </tr>
            <tr>
              <td>Limited Sale #3</td>
              <td>12,000,000 GIV</td>
              <td>$0.28</td>
              <td>$0.294</td>
              <td>$3,024,000</td>
              <td>$168,000</td>
              <td>$3,528,000</td>
            </tr>
            <tr>
              <td>Limited Sale #4</td>
              <td>12,000,000 GIV</td>
              <td>$0.30</td>
              <td>$0.315</td>
              <td>$3,240,000</td>
              <td>$180,000</td>
              <td>$3,780,000</td>
            </tr>
            <tr>
              <td>Limited Sale #5</td>
              <td>12,000,000 GIV</td>
              <td>$0.33</td>
              <td>$0.3465</td>
              <td>$3,564,000</td>
              <td>$198,000</td>
              <td>$4,158,000</td>
            </tr>
            <tr>
              <td>Limited Sale #6</td>
              <td>12,000,000 GIV</td>
              <td>$0.36</td>
              <td>$0.378</td>
              <td>$3,888,000</td>
              <td>$216,000</td>
              <td>$4,536,000</td>
            </tr>
            <tr>
              <td>Limited Sale #7</td>
              <td>12,000,000 GIV</td>
              <td>$0.39</td>
              <td>$0.4095</td>
              <td>$4,212,000</td>
              <td>$234,000</td>
              <td>$4,914,000</td>
            </tr>
            <tr>
              <td>Limited Sale #8</td>
              <td>12,000,000 GIV</td>
              <td>$0.42</td>
              <td>$0.441</td>
              <td>$4,536,000</td>
              <td>$252,000</td>
              <td>$5,292,000</td>
            </tr>
            <tr>
              <td>Limited Sale #9</td>
              <td>12,000,000 GIV</td>
              <td>$0.45</td>
              <td>$0.4725</td>
              <td>$4,860,000</td>
              <td>$270,000</td>
              <td>$5,670,000</td>
            </tr>
            <tr>
              <td>Limited Sale #10</td>
              <td>12,000,000 GIV</td>
              <td>$0.45</td>
              <td>$0.4725</td>
              <td>$5,062,500</td>
              <td>$281,250</td>
              <td>$5,906,250</td>
            </tr>
            <tr>
              <td>Totals</td>
              <td>125,000,000 Giv Circulating</td>
              <td>Current Market Value</td>
              <td>Current Market Value</td>
              <td>$37,570,500</td>
              <td>$6,261,750</td>
              <td>$43,832,250</td>
            </tr>
          </tbody>
        </Table>
    </div>
    </>
  )
}

export default DataTable