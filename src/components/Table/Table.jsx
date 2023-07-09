import React from "react"
import './Table.css';

const Table = ({ measure, wineData, classesMean, classesMedian, classesMode }) => {
    console.log(classesMedian, classesMode);
    console.log("headings are ",Object.keys(wineData[0]));
    const headings = Object.keys(wineData[0]);

    return (<React.Fragment>
        <h2>{measure} Table</h2>
        <table>
            <thead>
                <tr>
                    <td>Measure</td>
                    {headings.map(heading=><td key={heading}>{heading}</td>)}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{measure} Mean</td>
                    {classesMean.map((mean,index)=><td key={index}>{mean}</td>)}
                    
                </tr>
                <tr>
                    <td>{measure} Median</td>
                    {classesMedian.map((median,index)=><td key={index}>{median}</td>)}
                </tr>
                <tr>
                    <td>{measure} Mode</td>
                    {classesMode.map((mode,index)=><td key={index}>{mode}</td>)}
                </tr>
            </tbody>
        </table>
    </React.Fragment>)
}

export default Table