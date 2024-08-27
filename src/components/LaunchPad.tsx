type Location = {
    name: string;
    region: string;
    longitude: number;
    latitude: number;
}
export type LaunchPadType = {
    id: string;
    full_name: string;
    location: Location;
    region: string;
    status: string;
    attempted_launches: number;
    successful_launches: number;
    details: string;
}
export const LaunchPad = ({launchpad, setLaunchpadCoordinates}: {launchpad: LaunchPadType, setLaunchpadCoordinates: (coordinates: [number, number]) => void;}) => {
    const onLaunchPadClick = () => {
        setLaunchpadCoordinates([launchpad.location.latitude, launchpad.location.longitude]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div key={launchpad.id} className="bg-white shadow-md rounded-lg p-6" onClick={(onLaunchPadClick)}>
            <h2 className="text-xl font-semibold mb-2">{launchpad.full_name}</h2>
            <p className="text-gray-600 mb-4"><strong>Location:</strong> {launchpad.location.name}, {launchpad.location.region}</p>
            <p className="text-gray-600 mb-4"><strong>Status:</strong> {launchpad.status}</p>
            <p className="text-gray-600 mb-4"><strong>Launch Attempts:</strong> {launchpad.attempted_launches}</p>
            <p className="text-gray-600 mb-4"><strong>Launch Successes:</strong> {launchpad.successful_launches}</p>
            <p className="text-gray-600"><strong>Details:</strong> {launchpad.details}</p>
        </div>
    )
}