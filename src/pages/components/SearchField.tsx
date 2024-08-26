import React, { useState, useEffect } from 'react';

interface SearchFieldProps {
    onSearch: (text: string) => void;
}

export const SearchField: React.FC<SearchFieldProps> = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');
    const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value;
        setSearchText(text);

        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }

        const timeout = setTimeout(() => {
            onSearch(text);
        }, 300); // Trigger search after 300ms of inactivity

        setDebounceTimeout(timeout);
    };

    // Cleanup timeout on component unmount
    useEffect(() => {
        return () => {
            if (debounceTimeout) {
                clearTimeout(debounceTimeout);
            }
        };
    }, [debounceTimeout]);

    return (
        <div className="ml-auto">
            <input
                type="text"
                value={searchText}
                onChange={handleInputChange}
                placeholder="Search..."
                className="bg-white text-black placeholder-gray-500 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};
