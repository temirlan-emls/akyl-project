import { Outlet } from 'react-router-dom';
import SideBar from '../components/sideBar';
import SelectLanguage from '../components/selectLanguage';
import UserMenu from '../components/userMenu';
import RemoveParkingModal from '../components/removeParkingModal';

export default function LayoutPage() {
    return (
        <div className="max-w-screen h-screen bg-[#F5F5F5] font-mainFont flex overflow-hidden relative">
            <SideBar />
            <div className="w-10/12 h-full flex flex-col">
                <div className="border-b-2 h-20 border-[#D9D9D9] flex justify-end items-center">
                    <SelectLanguage />
                    <UserMenu />
                </div>
                <Outlet />
            </div>
            <RemoveParkingModal />
        </div>
    );
}
