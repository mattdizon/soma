import { RocketType } from "./Rocket";

export type MissionType = {
    mission_name: string;
    details: string;
    rocket_id: string;
    launch_date_utc: string;
    rocket: RocketType;
    launch_site: {
        site_id: string;
        site_name: string;
        site_name_long: string;
    }
    flight_number: number;
}

export const MissionInfo = ({mission}: {mission: MissionType}) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-full">
            <p className="text-2xl font-semibold mb-2 text-gray-800">{mission.mission_name}</p>
            <p className="text-gray-600"><strong>Launch Date:</strong> {new Date(mission.launch_date_utc).toLocaleDateString()}</p>
            <p className="text-gray-600"><strong>Rocket Name:</strong> {mission.rocket.rocket_name}</p>
            <p className="text-gray-600"><strong>Rocket Type:</strong> {mission.rocket.rocket_type}</p>
            <p className="text-gray-600"><strong>Launch Site:</strong> {mission.launch_site.site_name_long}</p>
            <p className="text-gray-600"><strong>Description:</strong> {mission.details}</p>
        </div>
    );
}
