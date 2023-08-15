import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header: FC = () => {
    return (
        <header className="select-none bg-[#ef5350] w-full h-12 flex">
            <div className="w-[72rem] mx-auto flex items-stretch justify-center">
                <Link to={'/'} className="h-full hover:bg-[#e94141] flex items-center justify-center px-2 py-1">
                    <img src={logo} alt="pokemon" className="h-full" />
                </Link>
            </div>
        </header>
    );
};

export default Header;
