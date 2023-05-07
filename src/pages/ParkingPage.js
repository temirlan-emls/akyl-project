export default function ParkingPage() {
    return (
        <div className="flex w-full h-full">
            <div className="w-9/12 ">
                <div className="flex items-center  h-36 w-full border-b-2 border-[#D9D9D9]">
                    {' '}
                    <h2 className="m-20 text-4xl font-bold">Паркинг</h2>
                </div>
                <div className="w-full flex flex-col items-center">
                    <div className="w-11/12 h-20 mt-10 mb-5 flex justify-end items-center">
                        <button className="p-4 h-4/6 bg-[#5A80C8] text-[#D9D9D9] rounded-[10px] hover:bg-[#183658] hover:text-white transition-all">
                            Добавить строку
                        </button>
                    </div>
                    <div className="w-11/12 border border-[#B9B9B9] rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="w-2/12 border-b border-[#B9B9B9] bg-gray-200/75 text-start px-3 pt-1 pb-6 text-lg text-[#183658]">
                                        Parking ID
                                    </th>
                                    <th className="w-2/12 border-b border-l border-[#B9B9B9] bg-gray-200/75 text-start px-3 pt-1 pb-6 text-lg text-[#183658]">
                                        Parking <br /> Name
                                    </th>
                                    <th className="w-2/12 border-b border-l border-[#B9B9B9] bg-gray-200/75 text-start px-3 pt-1 pb-6 text-lg text-[#183658]">
                                        Longitude
                                    </th>
                                    <th className="w-2/12 border-b border-l border-[#B9B9B9] bg-gray-200/75 text-start px-3 pt-1 pb-6 text-lg text-[#183658]">
                                        Latitude
                                    </th>
                                    <th className="w-2/12 border-b border-l border-[#B9B9B9] bg-gray-200/75 text-start px-3 pt-1 pb-6 text-lg text-[#183658]">
                                        Capacity
                                    </th>
                                    <th className="w-2/12 border-b border-l border-[#B9B9B9] bg-gray-200/75 text-start px-3 pt-1 pb-6 text-lg text-[#183658]">
                                        Tariff
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        The Sliding Mr. Bones (Next Stop,
                                        Pottersville)
                                    </td>
                                    <td>Malcolm Lockyer</td>
                                    <td>1961</td>
                                </tr>
                                <tr>
                                    <td>Witchy Woman</td>
                                    <td>The Eagles</td>
                                    <td>1972</td>
                                </tr>
                                <tr>
                                    <td>Shining Star</td>
                                    <td>Earth, Wind, and Fire</td>
                                    <td>1975</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="w-3/12 border-l-2 border-[#D9D9D9]">
                <p className="h-full text-[#888888] text-center flex flex-col justify-center items-center">
                    Выделите строку, чтобы внести <br /> изменения
                </p>
            </div>
        </div>
    );
}
