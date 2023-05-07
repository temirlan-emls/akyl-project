import { Outlet } from 'react-router-dom';
import SideBar from '../components/sideBar';
import SelectLanguage from '../components/selectLanguage';
import UserMenu from '../components/userMenu';

export default function LayoutPage() {
    return (
        <div className="w-screen h-screen bg-[#F5F5F5] font-mainFont flex">
            <SideBar />
            <div className="h-full w-10/12 flex flex-col">
                <div className="h-[88px]  border-b-2 border-[#D9D9D9] flex justify-end items-center">
                    <SelectLanguage />
                    <UserMenu />
                </div>
                <Outlet />
            </div>
        </div>
    );
}
