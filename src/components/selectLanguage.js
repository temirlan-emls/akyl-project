import { useState } from 'react';
import { useOutside } from '../hooks/useOutside';
import useMenuUP from '../assets/userMenuUP.svg';
import kz from '../assets/flag-kazakhstan.png';
import uk from '../assets/flag-united-kingdom.png';
import ru from '../assets/flag-russia.png';

export default function SelectLanguage() {
    const { ref, isShown, setIsShown } = useOutside(false, 'click');
    const [currentLang, setCurrentLang] = useState(ru);

    return (
        <div className="relative font-bold mr-[80px]">
            {' '}
            <div
                className="flex"
                onClick={() => setIsShown(!isShown)}
                ref={ref}
            >
                <img
                    src={currentLang}
                    alt="currentLang"
                    className={`w-8 transition-all duration-300 ease-in-out`}
                />

                <img
                    src={useMenuUP}
                    alt="useMenuUP"
                    className={`transition-all duration-500 ease-in-out ${
                        isShown ? 'rotate-180' : 'rotate-0'
                    } `}
                />
            </div>
            <div
                className={`transition-all duration-300 ease-in-out flex flex-col ${
                    isShown ? 'absolute' : 'hidden'
                }`}
            >
                <img
                    onClick={() => setCurrentLang(kz)}
                    src={kz}
                    alt="flagKz"
                    className={`w-8 transition-all duration-300 ease-in-out ${
                        currentLang === kz ? 'hidden' : 'block'
                    }`}
                />
                <img
                    onClick={() => setCurrentLang(uk)}
                    src={uk}
                    alt="flagUk"
                    className={`w-8 transition-all duration-300 ease-in-out ${
                        currentLang === uk ? 'hidden' : 'block'
                    }`}
                />
                <img
                    onClick={() => setCurrentLang(ru)}
                    src={ru}
                    alt="flagRu"
                    className={`w-8 transition-all duration-300 ease-in-out ${
                        currentLang === ru ? 'hidden' : 'block'
                    }`}
                />
            </div>
        </div>
    );
}
