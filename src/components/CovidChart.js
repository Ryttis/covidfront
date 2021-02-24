import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios'
import SelectCountry from './SelectCountry';

const CovidChart = ({ match }) => {

  let name = match.params.name;
  const [covidData, setCovidData] = useState({});
  useEffect(() => {
    const fetchData = async () => {

      const result =  axios.get(`/api/countries`)
      const countries = await result
        .then(response => { return response.data })
        .catch(err => console.error("Err: ", err));

      const weeks = axios.get(`/api/weeks/${name}`)
      const bodyWeeks = await weeks
        .then(response => { return response.data })
        .catch(err => console.error("Err: ", err));

      const cases = axios.get(`/api/cases/${name}`)
      const bodyCases = await cases
        .then(response => { return response.data })
        .catch(err => console.error("Err: ", err));

      const deaths = axios.get(`/api/deaths/${name}`)
      const bodyDeaths = await deaths
        .then(response => { return response.data })
        .catch(err => console.error("Err: ", err));
      const totalBody = [bodyWeeks,bodyCases,bodyDeaths,countries]
     
      setCovidData(totalBody);
    }
    fetchData()
  }, [name]);
  
  return (
   
    <div >
      
      <h2>Covid statistics of {name}</h2>
      <Bar
        data={{
          labels: covidData[0],
          datasets: [
            {
              label: 'Cases',
              data: covidData[1],
              backgroundColor: 'red'
            },
            {
              label: 'Deaths',
              data: covidData[2],
              backgroundColor: 'blue'
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: false,
                }
              },
            ],
          },
        }}
      />
      
      <SelectCountry contries={covidData[3]}/>
    </div>
  )
}

export default CovidChart

