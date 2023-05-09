import EditParking from '../components/editParking';
import ParkingTable from '../components/parkingTable';
import { useAddParkingMutation } from '../store/turaqApi/turaq.api';

export default function ParkingPage() {
    const [addParking] = useAddParkingMutation();

    const handleClick = () => {
        addParking(
            JSON.stringify({
                name: 'Par221',
                latitude: 1.113,
                longitude: 2.223,
                capacity: 10,
                price: 50,
                places: [
                    {
                        id: 1,
                        parkingStatus: 'FREE',
                        parkingStartTime: null,
                        parkingEndTime: null,
                        parkedCar: null,
                    },
                    {
                        id: 2,
                        parkingStatus: 'FREE',
                        parkingStartTime: null,
                        parkingEndTime: null,
                        parkedCar: null,
                    },
                    {
                        id: 3,
                        parkingStatus: 'FREE',
                        parkingStartTime: null,
                        parkingEndTime: null,
                        parkedCar: null,
                    },
                    {
                        id: 4,
                        parkingStatus: 'FREE',
                        parkingStartTime: null,
                        parkingEndTime: null,
                        parkedCar: null,
                    },
                    {
                        id: 5,
                        parkingStatus: 'FREE',
                        parkingStartTime: null,
                        parkingEndTime: null,
                        parkedCar: null,
                    },
                    {
                        id: 6,
                        parkingStatus: 'FREE',
                        parkingStartTime: null,
                        parkingEndTime: null,
                        parkedCar: null,
                    },
                    {
                        id: 7,
                        parkingStatus: 'FREE',
                        parkingStartTime: null,
                        parkingEndTime: null,
                        parkedCar: null,
                    },
                    {
                        id: 8,
                        parkingStatus: 'FREE',
                        parkingStartTime: null,
                        parkingEndTime: null,
                        parkedCar: null,
                    },
                    {
                        id: 9,
                        parkingStatus: 'FREE',
                        parkingStartTime: null,
                        parkingEndTime: null,
                        parkedCar: null,
                    },
                    {
                        id: 10,
                        parkingStatus: 'FREE',
                        parkingStartTime: null,
                        parkingEndTime: null,
                        parkedCar: null,
                    },
                ],
            })
        );
    };

    return (
        <div className="flex w-full h-full">
            <div className="w-9/12">
                <div className="flex h-28 items-center w-full border-b-2 border-[#D9D9D9]">
                    {' '}
                    <h2 className="m-20 text-4xl font-bold">Паркинг</h2>
                </div>
                <div className="w-full h-full flex flex-col items-center">
                    <div className="w-11/12 mt-10 mb-5 flex justify-end items-center">
                        <button
                            onClick={() => handleClick()}
                            className="p-4 bg-[#5A80C8] text-[#D9D9D9] rounded-[10px] hover:bg-[#183658] hover:text-white transition-all"
                        >
                            Добавить строку
                        </button>
                    </div>
                    <ParkingTable />
                </div>
            </div>
            <div className="w-3/12 border-l-2 border-[#D9D9D9]">
                <EditParking />
            </div>
        </div>
    );
}
