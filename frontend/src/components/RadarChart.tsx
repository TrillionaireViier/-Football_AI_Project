'use client';
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

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export interface RadarDataset {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}

export default function RadarChart({ data, labels, title, datasets }: { data?: number[], labels: string[], title?: string, datasets?: RadarDataset[] }) {
  const chartData = {
    labels: labels,
    datasets: datasets ? datasets : [
      {
        label: title || 'Stats',
        data: data || [],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
        pointLabels: { color: '#94a3b8' },
        ticks: { display: false },
      }
    },
    plugins: {
      legend: { labels: { color: '#f8fafc' } }
    }
  };

  return <Radar data={chartData} options={options} />;
}
