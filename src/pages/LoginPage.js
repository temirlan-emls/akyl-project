import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import logoTuraq from '../assets/logo_turaq.png';
import loginEye from '../assets/login_eye.svg';

export default function LoginPage() {
    useEffect(() => {
        document.title = 'Login';
    }, []);

    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('data', data);
    };
    return (
        <div className="w-screen h-screen bg-[#F8F8F8] flex flex-col justify-center items-center font-mainFont font-semibold">
            <img src={logoTuraq} alt="logoTuraq" className="w-[100px]" />
            <form
                className="flex flex-col items-center text-[#888888]"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="w-[301px] h-[64px] bg-white rounded-lg shadow-md flex overflow-hidden">
                    <div className="flex flex-col">
                        {' '}
                        <label htmlFor="login" className="ml-[16px] mt-[10px]">
                            логин{' '}
                            {errors.login && (
                                <span className="text-red-500">*</span>
                            )}
                        </label>
                        <input
                            type="text"
                            name="login"
                            className="h-1/3 focus:outline-none pl-[16px]"
                            {...register('login', { required: true })}
                        />
                    </div>
                </div>
                <div className="w-[301px] h-[64px] bg-white rounded-lg shadow-md flex flex-col overflow-hidden mt-[24px]">
                    <div className="w-[301px] h-[64px] bg-white rounded-lg shadow-md flex overflow-hidden">
                        <div className="flex flex-col w-10/12">
                            {' '}
                            <label
                                htmlFor="password"
                                className="ml-[16px] mt-[10px]"
                            >
                                пароль{' '}
                                {errors.password && (
                                    <span className="text-red-500">*</span>
                                )}
                            </label>
                            <input
                                type={isPasswordShown ? 'text' : 'password'}
                                name="password"
                                className="h-1/3 focus:outline-none pl-[16px]"
                                {...register('password', { required: true })}
                            />
                        </div>
                        <div className="h-full w-2/12 flex items-end">
                            {' '}
                            <img
                                src={loginEye}
                                alt="loginEye"
                                className={`w-[19.6px] mb-3.5 ml-1 transition-all duration-300 ease-in-out ${
                                    isPasswordShown ? 'opacity-25' : ''
                                }`}
                                onClick={() =>
                                    setIsPasswordShown(!isPasswordShown)
                                }
                            />
                        </div>
                    </div>
                </div>
                <input
                    type="submit"
                    value="Войти"
                    className="p-[12px] mt-[48px] bg-[#888888] text-[#D9D9D9] rounded-[10px] text-base w-[80px] hover:bg-[#183658] hover:text-white transition-all"
                />
            </form>
        </div>
    );
}
