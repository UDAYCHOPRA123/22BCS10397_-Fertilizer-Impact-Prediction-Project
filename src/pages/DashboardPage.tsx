import { Leaf, Droplets, Thermometer, Wind } from 'lucide-react';
import Button from '../components/Button';
import { StatCard } from '../components/stats/StatCard';
import { YieldTrends } from '../components/charts/YieldTrends';

export default function DashboardPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <Button onClick={() => window.location.href = '/predict'}>
            New Prediction
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Current Yield"
            value="2,390 kg/ha"
            icon={Leaf}
            trend="+5.7%"
          />
          <StatCard
            title="Fertilizer Usage"
            value="150 kg/ha"
            icon={Droplets}
            trend="-2.3%"
          />
          <StatCard
            title="Temperature"
            value="24°C"
            icon={Thermometer}
          />
          <StatCard
            title="Humidity"
            value="65%"
            icon={Wind}
          />
        </div>

        <YieldTrends />
      </div>
    </div>
  );
}