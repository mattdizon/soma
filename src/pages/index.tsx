import { useState } from 'react';;
import { SearchField } from '../components/SearchField';
import { RocketType } from '../components/Rocket';
import { useRouter } from 'next/router';
import { MissionContainer } from '~/containers/MissionContainer';
import { RocketContainer } from '~/containers/RocketContainer';

export default function IndexPage() {
  const [selectedRocket, setSelectedRocket] = useState<RocketType | null>(null);
  const [filter, setFilter] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div className="min-h-screen p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">SpaceX Rockets</h1>
        <SearchField onSearch={setFilter} />
      </div>
      
      <div className="mb-8">
        <RocketContainer setSelectedRocket={setSelectedRocket} selectedRocket={selectedRocket} />
      </div>
      
      <div className="mb-8">
        <MissionContainer selectedRocket={selectedRocket} filter={filter} />
      </div>

      <div className="text-center">
        <button 
          onClick={() => router.push('/launchpads')} 
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          View LaunchPads and Map
        </button>
      </div>
    </div>
  );
}
