import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useActions } from './../hooks/useAction';
import { useDeleteParkingMutation } from '../store/turaqApi/turaq.api';

export default function RemoveParkingModal() {
    const [isShown, setIsShown] = useState(false);
    const parkingToDelete = useSelector(
        (state) => state.activeParking.parkingToDelete
    );

    const {
        removeFromActiveParking,
        removeFromDeleteParking,
        removeItemFromParkingsStore,
    } = useActions();
    const [deleteParking] = useDeleteParkingMutation();

    useEffect(() => {
        if (parkingToDelete.length) {
            setIsShown(true);
        }
    }, [parkingToDelete]);

    const handleDelete = (e) => {
        if (e.target.innerText === 'Продолжить') {
            if (parkingToDelete.length) {
                deleteParking(parkingToDelete[0].id);
                removeItemFromParkingsStore(parkingToDelete[0]);
                removeFromDeleteParking();
                removeFromActiveParking();
                setIsShown(false);
            }
        } else {
            removeFromActiveParking();
            setIsShown(false);
        }
    };

    return (
        <div
            className={`w-screen h-screen top-0 left-0 bg-black/30 flex justify-center items-center ${
                isShown ? 'absolute' : 'hidden'
            }`}
        >
            <div className="w-3/12 h-1/4 bg-white rounded-xl flex flex-col items-center text-center">
                <h2 className="mt-8 text-2xl font-bold">Внимание</h2>
                <p className="my-6 text-lg">
                    Вы уверены, что хотите <br /> удалить строку?
                </p>
                <div
                    className="w-11/12 flex justify-around"
                    onClick={(e) => handleDelete(e)}
                >
                    <button className="p-[12px] text-2xl bg-[#183658] text-white rounded-[10px] shadow-md hover:bg-[#183658]/75 hover:text-[#D9D9D9] transition-all">
                        Продолжить
                    </button>
                    <button className="p-[12px] text-2xl bg-[#888888] text-[#D9D9D9] rounded-[10px] shadow-md hover:bg-[#888888]/75 hover:text-white transition-all">
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    );
}
