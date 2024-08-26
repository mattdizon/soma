import React from 'react';
import { trpc } from '~/utils/trpc';
import { LaunchPad } from '../components/LaunchPad';

export const LaunchPadContainer = () => {
    const { data: launchPads, isLoading, error } = trpc.getLaunchPads.useQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-8 text-center">SpaceX Launch Pads</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {launchPads?.map((launchpad) => (
                    <LaunchPad key={launchpad.id} launchpad={launchpad} />
                ))}
            </div>
        </div>
    );
};
