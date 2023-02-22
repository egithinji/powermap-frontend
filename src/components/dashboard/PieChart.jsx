import { Chart as ChartJS } from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

function PieChart( {data} ) {
    const options = {
        borderWidth: 0,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Total complaints per area',
            color: 'white'
          }
        },
      };
    return <Pie data={data} options={options} />;
}

export default PieChart;