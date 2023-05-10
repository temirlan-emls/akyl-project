import EditParking from '../components/editParking';
import ParkingTable from '../components/parkingTable';
import { useActions } from '../hooks/useAction';

export default function ParkingPage() {
    const { toggleNewLineForParking } = useActions();

    const handleClick = () => {
        toggleNewLineForParking();

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
