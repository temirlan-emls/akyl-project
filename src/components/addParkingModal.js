import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useAction';
import { useAddParkingMutation } from '../store/turaqApi/turaq.api';

export default function AddParkingModal() {
    const newParking = useSelector((state) => state.activeParking.isCreating);
    const [addParking] = useAddParkingMutation();
    const { toggleNewLineForParking } = useActions();

    const handleSubmit = (e) => {
        e.preventDefault();

        const submitItem = {
            name: e.target.parkingName.value,
            longitude: +e.target.longitude.value,
            latitude: +e.target.latitude.value,
            price: +e.target.tariff.value,
            capacity: +e.target.capacity.value,
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
        };
        if (
            e.target.parkingName.value &&
            +e.target.longitude.value &&
            +e.target.latitude.value &&
            +e.target.tariff.value &&
            +e.target.capacity.value
        ) {
            addParking(JSON.stringify(submitItem));
            window.location.reload(false);
        } else {
            alert('Empty inputs');
        }
    };

    const handleExit = (e) => {
        if (e.target === e.currentTarget) {
            toggleNewLineForParking();
        }
    };
    return (
        <div
            className={`w-screen h-screen top-0 left-0 bg-black/30 flex justify-center items-center ${
                newParking ? 'absolute' : 'hidden'
            } `}
            onClick={(e) => handleExit(e)}
        >
            <div className="w-4/12 h-4/5 bg-white rounded-xl flex flex-col items-center">
                <h2 className="text-2xl font-bold mt-10 mb-8">
                    Добавить парковку
                </h2>
                <form
                    className="w-10/12 mt-4 flex flex-col items-center"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <div className="flex flex-col w-full">
                        <label
                            htmlFor="parkingName"
                            className="ml-5 text-lg mt-4 text-[#888888]"
                        >
                            Название парковки
                        </label>
                        <input
                            name="parkingName"
                            type="text"
                            className="p-4 rounded-xl text-[#183658] bg-[#F8F8F8] border border-[#b6b6b6]"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label
                            htmlFor="longitude"
                            className="ml-5 text-lg mt-4 text-[#888888]"
                        >
                            Ширина
                        </label>
                        <input
                            name="latitude"
                            type="number"
                            className="p-4 rounded-xl text-[#183658] bg-[#F8F8F8] border border-[#b6b6b6]"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label
                            htmlFor="longitude"
                            className="ml-5 text-lg mt-4 text-[#888888]"
                        >
                            Долгота
                        </label>
                        <input
                            name="longitude"
                            type="number"
                            className="p-4 rounded-xl text-[#183658] bg-[#F8F8F8] border border-[#b6b6b6]"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label
                            htmlFor="capacity"
                            className="ml-5 text-lg mt-4 text-[#888888]"
                        >
                            Вместимость
                        </label>
                        <input
                            name="capacity"
                            type="number"
                            className="p-4 rounded-xl text-[#183658] bg-[#F8F8F8] border border-[#b6b6b6]"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label
                            htmlFor="tariff"
                            className="ml-5 text-lg mt-4 text-[#888888]"
                        >
                            Тариф
                        </label>
                        <input
                            name="tariff"
                            type="number"
                            className="p-4 rounded-xl text-[#183658] bg-[#F8F8F8] border border-[#b6b6b6]"
                        />
                    </div>
                    <input
                        type="submit"
                        className="p-[12px] mt-10 bg-[#183658] text-[#D9D9D9] rounded-[10px] text-base hover:bg-[#888888] hover:text-white transition-all text-center"
                        value={'Сохранить изменения' || ''}
                    />
                </form>
            </div>
        </div>
    );
}
