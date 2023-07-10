import './App.css';
import { useEffect, useState } from 'react';
import { wines } from './config/data';
import { calculateGamma, calculateMean, calculateMedian, calculateMode } from './utils/formulas';
import Table from './components/Table/Table.jsx';

function App() {

  //we are getting the data from JSON
  const [wineData, setWineData] = useState(wines);

  const [flavanoidsMeasures, setFlavanoidsMeasures] = useState({});
  const [gammaMeasures, setGammaMeasures] = useState({});

  useEffect(()=>{
    //setting the gamma property to the data set
    let wineDataArray = [...wineData];
    wineDataArray = setGamma(wineDataArray);

    //Creating classes for Flavanoids
    const flavanoidsClasses = setClassesData(wineDataArray, "Flavanoids");
    const gammaClasses = setClassesData(wineDataArray, "Gamma");

    //creating data for flavanoids and gamma table
    const flavanoidsTableData = setTableData(flavanoidsClasses);
    const gammaTableData = setTableData(gammaClasses);
    setFlavanoidsMeasures(flavanoidsTableData);
    setGammaMeasures(gammaTableData);
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
   * function defined to set classes 
   * @param {*} wineDataArray 
   * @param {*} property 
   * @returns 
   */
  function setClassesData(wineDataArray, property){
    let classes = {}
    wineDataArray.forEach(data=>{
      const classKey = data.Alcohol;
      const propertyValue = data[property];
      if(classes[classKey]){
        classes[classKey].push(propertyValue)
      }else{
        classes[classKey] = [propertyValue]
      }
    })
    return classes
  }

  /**
   * function defined to set final data for table
   * @param {*} classes 
   */
  function setTableData(classes){

    let stats = {
      mean: [],
      median: [],
      mode: []
    };

    for (const classKey in classes) {
      const data = classes[classKey];
      stats['mean'].push(calculateMean(data));
      stats['median'].push(calculateMedian(data));
      stats['mode'].push(calculateMode(data)); 
    }
    return stats
  }

  return (
    <div className="App">
      <h1>Wine Data Visualization App</h1>
      <div className='tableContainer'>
        <Table property="Falavoids" measures={flavanoidsMeasures}/>
        <Table property="Gamma"  measures={gammaMeasures}/>
      </div>
    </div>
  );
}

export default App;
