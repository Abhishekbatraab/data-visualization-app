import './App.css';
import { useEffect, useState } from 'react';
import { wines } from './config/data';
import { calculateGamma, calculateMean, calculateMedian, calculateMode } from './utils/formulas';
import Table from './components/Table/Table.jsx';

function App() {

  //we are getting the data from JSON
  const [wineData, setWineData] = useState(wines);
  const [classesMean, setClassesMean] = useState([]);
  const [classesMedian , setClassesMedian] = useState([]);
  const [classesMode, setClassesMode] = useState([]);

  useEffect(()=>{
    //setting the gamma property to the data set
    let wineDataArray = [...wineData];
    wineDataArray = setGamma(wineDataArray);
    //storing the classes 
    let wineClasses = Object.keys(wineData[0]);
    let classesMeanArray = [...classesMean];
    let classesMedianArray = [...classesMedian];
    let classesModeArray = [...classesMode];
    //getting the mean, media and mode data for each class
    wineClasses.forEach(wineClass=>{
      let filteredData = getTableData(wineClass, wineDataArray);
      console.log(classesMeanArray);
      if(classesMeanArray.length<=wineClasses.length-1 && classesMedianArray.length<=wineClasses.length-1 && classesModeArray.length<=wineClasses.length-1){
        classesMeanArray.push(calculateMean(filteredData));
        classesMedianArray.push(calculateMedian(filteredData));
        classesModeArray.push(calculateMode(filteredData));
      }
    });
    //setting the classes mean, median and mode
    setClassesMean(classesMeanArray);
    setClassesMedian(classesMedianArray);
    setClassesMode(classesModeArray);
    // update the wine data with 'Gamma' property
    setWineData(wineDataArray);
  },[])

  /**
   * function to add 'Gamma' property to the data set
   * @param {*} wineData 
   */
  function setGamma(wineData){
    return wineData.map(item=>{
      item['Gamma']=calculateGamma(item.Ash, item.Hue, item.Magnesium);
      return item
    });
  }
  
  /**
   * function defined to get the Mean, Median and Mode of a particular measure from wine data
   * @param {*} measure 
   * @param {*} wineData 
   */
  function getTableData(measure, wineData){
    let filteredData = wineData.map(data=>{
      let value = data[measure];
      return value
    });
    return filteredData;
  }

  return (
    <div className="App">
      <h1>Wine Data Visualization App</h1>
      <div className='tableContainer'>
        <Table measure="Falavoids" wineData={wineData} classesMean={classesMean} classesMedian={classesMedian} classesMode={classesMode} />
        <Table measure="Gamma" wineData={wineData} classesMean={classesMean} classesMedian={classesMedian} classesMode={classesMode} />   
      </div>
    </div>
  );
}

export default App;
