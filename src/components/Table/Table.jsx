import React from "react"
import './Table.css';

const Table = ({ measures, property }) => {
    console.log("measures in table ", );
    let meanData = measures['mean'];
    let medianData =  measures['median'];
    let modeData =  measures['mode'];

    return (<React.Fragment>
        <h2>{property} Table</h2>
        <table>
            <thead>
                <tr>
                    <td>Measure</td>
                    <td>Alcohal Class 1</td>
                    <td>Alcohal Class 2</td>
                    <td>Alcohal Class 3</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{property} Mean</td>
                    {/* {measures} */}
                    {/* {classesMean.map((mean,index)=><td key={index}>{mean}</td>)} */}
                    {meanData && meanData.map((value,index)=><td key={index}>{value}</td>)}
                </tr>
                <tr>
                    <td>{property} Median</td>    
                    {/* {classesMedian.map((median,index)=><td key={index}>{median}</td>)} */}
                    {medianData && medianData.map((value,index)=><td key={index}>{value}</td>)}
                </tr>
                <tr>
                    <td>{property} Mode</td>  
                    {modeData && modeData.map((value,index)=><td key={index}>{value}</td>)}
                </tr>
            </tbody>
        </table>
    </React.Fragment>)
}

export default Table