/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

function LineGraph( { data }) {

  const options = {
    fill: false,
    borderColor: 'orange',
    color: 'white',
    tension: 0.1,
    scales: {
      x: {
        ticks: {
            color: 'white'
        }
      },
      y: {
        ticks: {
            color: 'white'
        }
      }
    },
    plugins: {
        legend: {
          labels: {
            boxWidth: 0 
          },
        },
        label: {
            display: false
        },
        title: {
            display: true,
            text: 'Total complaints per day',
            color: 'white',
            font: {
              weight: 'bold',
            },
          }
      }
  };

  return <Line data={data} options={options} />;
  
}

export default LineGraph;
