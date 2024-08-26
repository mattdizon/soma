import { useState } from 'react';
import { RocketContainer } from './containers/RocketContainer';
import { MissionContainer } from './containers/MissionContainer';
import { SearchField } from './components/SearchField';
import { RocketType } from './components/Rocket';
import { LaunchPadList } from './containers/LaunchPadList';

export default function IndexPage() {
  const [selectedRocket, setSelectedRocket] = useState<RocketType | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  return (
    <div className="min-h-screen p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">SpaceX Rockets</h1>
        <SearchField onSearch={setFilter}/>
      </div>
      
      <div className="mb-8">
        <RocketContainer setSelectedRocket={setSelectedRocket} selectedRocket={selectedRocket} />
      </div>
      
      <div className="mb-8">
        <MissionContainer selectedRocket={selectedRocket} filter={filter} />
      </div>

      <div className='mb-8'>
        <LaunchPadList/>
      </div>
    </div>
  );
}
