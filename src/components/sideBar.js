import parkingIcon from '../assets/parking_icon.svg';
import mapIcon from '../assets/map_icon.svg';
import userIcon from '../assets/user_icon.svg';
import carIcon from '../assets/car_icon.svg';
import developerIcon from '../assets/developer_icon.svg';
import SideBarLinkItem from './sideBarLinkItem';

export default function SideBar() {
    return (
        <div className="w-2/12 bg-[#5A80C8] rounded-tr-3xl flex flex-col items-center">
            <p className="text-white font-extrabold text-[32px] mt-12">TURAQ</p>
            <ul className="w-6/12 mt-16 flex flex-col gap-2">
                <SideBarLinkItem
                    icon={parkingIcon}
                    text={'Паркинг'}
                    toLink={'/parkings'}
                />
                <SideBarLinkItem
                    icon={mapIcon}
                    text={'Карта'}
                    toLink={'/maps'}
                />
                <SideBarLinkItem
                    icon={userIcon}
                    text={'Пользователи'}
                    toLink={'/uses'}
                />
                <SideBarLinkItem
                    icon={carIcon}
                    text={'Машины'}
                    toLink={'/cars'}
                />
                <SideBarLinkItem
                    icon={developerIcon}
                    text={'Разработчики'}
                    toLink={'/developers'}
                />
            </ul>
        </div>
    );
}
