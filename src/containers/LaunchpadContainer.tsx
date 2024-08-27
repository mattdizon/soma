import { useState } from 'react';

import { LatLngExpression } from 'leaflet';
import { useRouter } from 'next/router';
import Map from '~/components/Map';
import { trpc } from '~/utils/trpc';
import { LaunchPad } from '~/components/LaunchPad';

export default function LaunchPadPage() {
  const [launchpadCoordinates, setLaunchpadCoordinates] = useState<LatLngExpression | null>(null);
  const router = useRouter();

  const { data: launchPads, isLoading, error } = trpc.getLaunchPads.useQuery();

  if (isLoading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>Error: {error.message}</div>;
  }
  return (
    <div className="min-h-screen p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">SpaceX LaunchPads</h1>
        <button onClick={() => router.push('/')} className="text-blue-500 underline">
          Back to Rockets
        </button>
      </div>
      
      <div className="flex justify-between mb-8">
        <div className="w-1/2 pr-4">
          <Map coordinates={launchpadCoordinates} />
        </div>
        <div className="w-1/2 pl-4">
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {launchPads?.map((launchpad) => (
                    <LaunchPad key={launchpad.id} launchpad={launchpad} setLaunchpadCoordinates={setLaunchpadCoordinates}/>
                ))}
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}
