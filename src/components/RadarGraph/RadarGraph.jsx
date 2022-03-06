import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { toUpperCaseIndex, transformString } from '../../shared/Utils';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);


const RadarGraph = ({ stats, pokemonBackground }) => {

    const statsLabel = stats.map( item => {
        return toUpperCaseIndex(transformString(item.stat.name.replace('special', 'S.').replace('-', ' '))).slice(0,11);
    });

    const statsBase = stats.map( item => { 
        return item.base_stat;
    });

    const maxScale = Math.max(...statsBase) < 100 ? 100 : Math.max(...statsBase) + 10;
    
    const data = {
        labels: statsLabel,
        datasets: [
          {
            label: 'Base',
            data: statsBase,
            backgroundColor: pokemonBackground.secondary,
            borderColor: pokemonBackground.primary,
            borderWidth: 1,
          }
        ],
      };

    const options = {
      scales: {
        r: {
          display: true,
          min: 0,
          max: maxScale,
          ticks: {
            showLabelBackdrop: false,
            color: 'rgba(255, 255, 255, .8)'
          },
          pointLabels: {
            color: 'white'
          },
          grid: {
            color: 'rgba(255, 255, 255, .2)'
          },
          angleLines: {
            color: 'rgba(255, 255, 255, .2)'
          }
        },
      },
      plugins: {  
        legend: {
          labels: {
            color: '#fff',
          }
        }
      }
    }
    return <Radar data={data} options={options}/>;
};

export default RadarGraph;