import { useEffect, useState } from "react";
import { MissionInfo } from "~/components/MissionInfo";
import { RocketType } from "~/components/Rocket";
import { trpc } from "~/utils/trpc";

export const MissionContainer = ({
    selectedRocket,
    filter,
}: { 
    selectedRocket: RocketType | null,
    filter: string | null,
}) => {
    const [limit] = useState(5); 
    const [offset, setOffset] = useState(0);
    
    const rocketId = selectedRocket?.rocket_id ?? null;

    const { data: missionsData, isLoading: missionsIsLoading, error: missionsError, refetch } = trpc.getMissions.useQuery(
        { id: rocketId, limit, offset },
    );
    
    const [filteredMissions, setFilteredMissions] = useState(missionsData || []);

    useEffect(() => {
        setOffset(0);
        refetch(); 
    }, [selectedRocket, refetch]);

    useEffect(() => {
        if (missionsData) {
            if (!filter || filter.trim() === '') {
                setFilteredMissions(missionsData);
            } else {
                const lowerCaseFilter = filter.toLowerCase();
                const filtered = missionsData.filter(
                    (mission) =>
                        (mission.rocket.rocket_type && mission.rocket.rocket_type.toLowerCase().includes(lowerCaseFilter)) ||
                        (mission.details && mission.details.toLowerCase().includes(lowerCaseFilter))
                );
                setFilteredMissions(filtered);
            }
        }
    }, [filter, missionsData]);

    const handleNextPage = () => {
        setOffset((prevOffset) => prevOffset + limit);
    };

    const handlePrevPage = () => {
        if (offset > 0) {
            setOffset((prevOffset) => Math.max(prevOffset - limit, 0));
        }
    };

    const hasNextPage = missionsData && missionsData.length === limit;
    const hasPrevPage = offset > 0;

    if (missionsIsLoading) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div className="w-full px-4">
            <h1 className="text-3xl font-bold mb-6 text-center">{selectedRocket?.rocket_name} SpaceX Missions</h1>
            {missionsError ? (
                <h2 className="text-red-500 text-center">{missionsError.message}</h2>
            ) : (missionsData === undefined || filteredMissions.length === 0) ? (
                <div className="min-h-[200px] flex justify-center items-center">
                    <h1>No Data</h1>
                </div>
            ) : (
                <>
                    <div className="space-y-6">
                        {filteredMissions.map((data) => (
                            <MissionInfo mission={data} key={data.flight_number} />
                        ))} 
                    </div>
                    <div className="flex justify-between mt-6">
                        <button 
                            onClick={handlePrevPage} 
                            disabled={!hasPrevPage}
                            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <button 
                            onClick={handleNextPage}
                            disabled={!hasNextPage}
                            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
