import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useUpdateParkingMutation } from '../store/turaqApi/turaq.api';
import { useActions } from './../hooks/useAction';

export default function EditParking() {
    const activeParking = useSelector(
        (state) => state.activeParking.activeParking
    );

    const [formValue, setFormValue] = useState({});

    function isEqual(object1, object2) {
        const props1 = Object.getOwnPropertyNames(object1);
        const props2 = Object.getOwnPropertyNames(object2);

        if (props1.length !== props2.length) {
            return false;
        }

        for (let i = 0; i < props1.length; i += 1) {
            const prop = props1[i];

            if (object1[prop] !== object2[prop]) {
                return false;
            }
        }

        return true;
    }

    useEffect(() => {
        if (activeParking.length) {
            setFormValue({
                parkingID: activeParking[0].id,
                parkingName: activeParking[0].name,
                longitude: activeParking[0].longitude,
                latitude: activeParking[0].latitude,
                capacity: activeParking[0].capacity,
                tariff: activeParking[0].price,
            });
        }
    }, [activeParking]);

    const changeHandler = (e) => {
        setFormValue((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const [updateParking] = useUpdateParkingMutation();
    const { removeFromActiveParking } = useActions();
    const handleSubmit = (e) => {
        // e.preventDefault();
        const { places, ...originalItem } = activeParking[0];
        const submitItem = {
            id: +e.target.parkingID.value,
            name: e.target.parkingName.value,
            longitude: +e.target.longitude.value,
            latitude: +e.target.latitude.value,
            price: +e.target.tariff.value,
            capacity: +e.target.capacity.value,
        };

        if (isEqual(submitItem, originalItem)) {
            alert('No changes');
        } else {
            updateParking({
                id: +submitItem.id,
                body: JSON.stringify(submitItem),
            });
            removeFromActiveParking();
            window.location.reload(false);
        }
    };

    return (
        <>
            {activeParking.length ? (
                <div className="h-full w-full flex flex-col items-center">
                    <h2 className="text-2xl text-center mt-32 text-[#183658]">
                        Таблица: Парковки
                    </h2>
                    <form
                        className="w-10/12 mt-4 flex flex-col items-center"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <div className="flex flex-col w-full">
                            <label
                                htmlFor="parkingID"
                                className="ml-5 text-lg mt-4 text-[#888888]"
                            >
                                ID парковки
                            </label>
                            <input
                                value={formValue.parkingID || ''}
                                name="parkingID"
                                type="number"
                                onChange={(e) => changeHandler(e)}
                                disabled
                                className="p-4 rounded-xl text-[#888888] bg-[#F8F8F8] border border-[#b6b6b6]"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label
                                htmlFor="parkingName"
                                className="ml-5 text-lg mt-4 text-[#888888]"
                            >
                                Название парковки
                            </label>
                            <input
                                value={formValue.parkingName || ''}
                                name="parkingName"
                                type="text"
                                onChange={(e) => changeHandler(e)}
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
                                value={formValue.latitude || ''}
                                name="latitude"
                                type="number"
                                onChange={(e) => changeHandler(e)}
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
                                value={formValue.longitude || ''}
                                name="longitude"
                                type="number"
                                onChange={(e) => changeHandler(e)}
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
                                value={formValue.capacity || ''}
                                name="capacity"
                                type="number"
                                onChange={(e) => changeHandler(e)}
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
                                value={formValue.tariff || ''}
                                name="tariff"
                                type="number"
                                onChange={(e) => changeHandler(e)}
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
            ) : (
                <p className="h-full text-[#888888] text-center flex flex-col justify-center items-center">
                    Выделите строку, чтобы внести <br /> изменения
                </p>
            )}
        </>
    );
}
