import useMenuUP from '../assets/userMenuUP.svg';
import { useOutside } from '../hooks/useOutside';

export default function UserMenu() {
    const { ref, isShown, setIsShown } = useOutside(false, 'click');

    return (
        <div className="relative font-bold mr-[80px]" ref={ref}>
            {' '}
            <div className="flex" onClick={() => setIsShown(!isShown)}>
                <span className="cursor-pointer">Admin</span>{' '}
                <img
                    src={useMenuUP}
                    alt="useMenuUP"
                    className={`transition-all duration-500 ease-in-out ${
                        isShown ? 'rotate-180' : 'rotate-0'
                    } `}
                />
            </div>
            <div
                className={`transition-all duration-300 ease-in-out ${
                    isShown ? 'absolute' : 'hidden'
                }`}
            >
                <button>выйти</button>
            </div>
        </div>
    );
}
