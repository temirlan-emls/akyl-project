import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function SideBarLinkItem({ icon, text, toLink }) {
    const location = useLocation();

    return (
        <li
            className={`${
                toLink === location.pathname ? 'bg-white/20' : ''
            } h-9 hover:bg-white/20 rounded-lg p-2 transition-all duration-200 ease-in-out`}
        >
            <Link className="w-full h-full flex items-center" to={toLink}>
                {' '}
                <img
                    src={icon}
                    alt="parkingIcon"
                    className={`w-[20px] contrast-150 ${
                        toLink === location.pathname ? '' : 'opacity-75'
                    }`}
                />{' '}
                <span
                    className={`text-white text-base font-normal ml-3 ${
                        toLink === location.pathname ? '' : 'text-white/70'
                    }`}
                >
                    {text}
                </span>
            </Link>
        </li>
    );
}
