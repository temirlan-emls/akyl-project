import ParkingTableRow from './parkingTableRow';
import { useGetParkingsQuery } from '../store/turaqApi/turaq.api';
import { useSelector } from 'react-redux';
import { useActions } from './../hooks/useAction';
import { useEffect } from 'react';

export default function ParkingTable() {
    const { data } = useGetParkingsQuery();
    const parkingsStore = useSelector(
        (state) => state.parkingsStore.parkingsStore
    );
    const { addToParkingsStore } = useActions();

    useEffect(() => {
        if (data && data.length) {
            addToParkingsStore(data);
        }
    }, [data, addToParkingsStore]);

    return (
        <>
            <div className="w-11/12 border border-b-0 border-[#B9B9B9] rounded-t-xl bg-gray-200/75">
                <div className="flex">
                    <div className="w-2/12 border-[#B9B9B9]  text-start px-3 pt-1 pb-6 text-lg text-[#183658] ">
                        Parking ID
                    </div>
                    <div className="w-2/12 border-l border-[#B9B9B9]  text-start px-3 pt-1 pb-6 text-lg text-[#183658] -mx-[1px]">
                        Parking <br /> Name
                    </div>
                    <div className="w-2/12 border-l border-[#B9B9B9]  text-start px-3 pt-1 pb-6 text-lg text-[#183658] mx-[1px]">
                        Longitude
                    </div>
                    <div className="w-2/12 border-l border-[#B9B9B9]  text-start px-3 pt-1 pb-6 text-lg text-[#183658]">
                        Latitude
                    </div>
                    <div className="w-2/12 border-l border-[#B9B9B9]  text-start px-3 pt-1 pb-6 text-lg text-[#183658]">
                        Capacity
                    </div>
                    <div className="w-2/12 border-l border-[#B9B9B9]  text-start px-3 pt-1 pb-6 text-lg text-[#183658] mr-[4px]">
                        Tariff
                    </div>
                </div>
            </div>
            <div className="w-11/12 max-h-[34rem] overflow-y-scroll border border-[#B9B9B9] border-t-0 rounded-b-xl ">
                {parkingsStore[0] &&
                    parkingsStore.map((item) => (
                        <ParkingTableRow key={item.id} item={item} />
                    ))}
            </div>
            <div />
        </>
    );
}
