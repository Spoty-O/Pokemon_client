import { SelectChangeEvent } from '@mui/material';
import { FC } from 'react';

interface TypesColors {
    [key: string]: string;
}

interface TypeLinkProps {
    name: string;
    handleChange: (event: SelectChangeEvent<string> | string) => void;
}

const TypeLink: FC<TypeLinkProps> = ({ name, handleChange }) => {
    const colors: TypesColors = {
        normal: '#b7b7a8',
        fire: '#ff6043',
        water: '#51a8ff',
        electric: '#ffd451',
        grass: '#8bd46e',
        ice: '#7dd4ff',
        fighting: '#c56e60',
        poison: '#b76ea8',
        ground: '#e2c56e',
        flying: '#9aa8ff',
        psychic: '#ff6ea8',
        bug: '#b7c543',
        rock: '#c5b77d',
        ghost: '#7d7dc5',
        dragon: '#8b7df1',
        dark: '#8b6e60',
        steel: '#b7b7c5',
        fairy: '#f1a8f1',
    };
    return (
        <button
            onClick={() => handleChange(name)}
            className={`py-1 px-4 flex justify-center items-center rounded-lg font-semibold capitalize`}
            style={{ backgroundColor: `${colors[name]}` }}
        >
            {name}
        </button>
    );
};

export default TypeLink;
