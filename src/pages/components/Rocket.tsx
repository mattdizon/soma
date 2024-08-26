import React, { Dispatch, SetStateAction } from 'react';

export type RocketType = {
    rocket_name: string;
    description: string;
    flickr_images: string[];
    country: string;
    id: string;
    rocket_id: string;
    rocket_type: string;
    height: {
        meters: number;
        feet: number;
    };
    diameter: {
        meters: number;
        feet: number;
    };
    mass: {
        kg: number;
        lb: number;
    };
    stages: number;
    engines: number;
    cost_per_launch: number;
    success_rate_pct: number;
    first_flight: string;
    wikipedia: string;
};


type RocketProps = {
    rocket: RocketType;
    setSelectedRocket: Dispatch<SetStateAction<RocketType | null>>;
    isSelected?: boolean; // Add this prop to conditionally apply styles
}

export const Rocket = ({ rocket, setSelectedRocket, isSelected }: RocketProps) => {
    return (
        <div 
            onClick={() => setSelectedRocket(rocket)}
            className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition transform hover:scale-105 ${isSelected ? 'border-4 border-blue-500' : 'border'}`}
        >
            <img 
                src={rocket.flickr_images[0]} 
                alt={rocket.rocket_name} 
                className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
                <p className="text-xl font-semibold mb-2 text-gray-600">{rocket.rocket_name}</p>
            </div>
        </div>
    );
}
