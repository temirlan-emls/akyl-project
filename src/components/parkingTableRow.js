import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from './../hooks/useAction';

export default function ParkingTableRow({ item }) {
    const [isSelected, setIsSelected] = useState(false);
    const activeParking = useSelector(
        (state) => state.activeParking.activeParking
    );

    const { addToActiveParking, addToDeleteParking } = useActions();

    const handleSelection = (e) => {
        addToActiveParking(item);
    };
    const handleDelete = (e) => {
        addToDeleteParking(item);
    };

    useEffect(() => {
        if (activeParking.length) {
            if (activeParking[0].id === item.id) {
                setIsSelected(true);
                return;
            } else {
                setIsSelected(false);
                return;
            }
        } else {
            setIsSelected(false);
            return;
        }
    }, [activeParking, item]);
    return (
        <div
            onClick={(e) => handleSelection(e)}
            className={`text-[#183658] ${
                isSelected
                    ? 'bg-blue-100 outline outline-[#898989] -outline-offset-2'
                    : 'bg-white'
            } duration-100 flex relative`}
        >
            <div className="w-2/12 pl-3 pt-1 border-r border-t border-[#B9B9B9] underline underline-offset-2 text-[#5A80C8] text-end pr-4">
                {item.id}
            </div>
            <div className="w-2/12 pl-3 pt-1 border-r border-t border-[#B9B9B9]">
                {item.name}
            </div>
            <div className="w-2/12 pl-3 pt-1 border-r border-t border-[#B9B9B9]">
                {item.longitude}
            </div>
            <div className="w-2/12 pl-3 pt-1 border-r border-t border-[#B9B9B9]">
                {item.latitude}
            </div>
            <div className="w-2/12 pl-3 pt-1 border-r border-t border-[#B9B9B9]">
                {item.capacity}
            </div>
            <div className="w-2/12 pl-3 pt-1 border-t border-[#B9B9B9]">
                {item.price} ₸/час
            </div>
            <button
                className={`absolute w-12 h-full rounded-r-lg border-2 bg-gray-200 border-[#898989] transition-all ${
                    isSelected ? 'translate-x-0' : '-translate-x-12'
                }  `}
                onClick={() => handleDelete()}
            >
                DEL
            </button>
        </div>
    );
}
