import { trpc } from "~/utils/trpc";
import { Rocket, RocketType } from "../components/Rocket";
import { Dispatch, SetStateAction } from "react";

export const RocketContainer = ({
    setSelectedRocket,
    selectedRocket
}: { 
    setSelectedRocket:  Dispatch<SetStateAction<RocketType | null>>
    selectedRocket: RocketType | null
}) => {
    const { data, isLoading, error } = trpc.getRockets.useQuery();
    
    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    
    return (
        <div>
            {error ? (
                <h2 className="text-red-500">{error.message}</h2>
            ) : (data === undefined) ? (
                <div>
                    <h1>No Data</h1>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data.map((data) => (
                        <Rocket key={data.id} rocket={data} setSelectedRocket={setSelectedRocket} isSelected={selectedRocket?.id === data.id}/>
                    ))} 
                </div>
            )}
        </div>
    )
}
