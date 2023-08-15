import { SelectChangeEvent } from '@mui/material';
import { FC, MouseEvent } from 'react';
import { pokemonAPI } from '../services/PokemonAPIService';
import TypeLink from './TypeLink';

interface CardProps {
    name: string;
    type: string;
    handleChange: (event: SelectChangeEvent<string> | string) => void;
    handleOpen: (event: MouseEvent, name: string) => void;
}

const check_type = (type: string, types: { type: { name: string } }[]) => {
    return types.find((value) => value.type.name === type) === undefined;
};

const Card: FC<CardProps> = ({ name, handleOpen, type, handleChange }) => {
    const { data: pokemon } = pokemonAPI.useGetPokemonDataQuery(name);
    if (pokemon && check_type(type, pokemon.types) && type !== 'None') {
        return <></>;
    }
    return (
        <>
            {pokemon && (
                <div
                    onClick={(event) => handleOpen(event, name)}
                    className="flex flex-col gap-4 max-h-80 w-full hover:opacity-75 rounded-lg bg-white drop-shadow-[0_19px_47px_rgba(25,43,56,0.2)] items-center justify-between capitalize p-6"
                >
                    <img
                        className="max-h-48 max-w-max select-none"
                        src={pokemon.sprites.other['official-artwork'].front_default}
                        alt="pokemon"
                    />
                    <h1 className="font-medium">{pokemon.name}</h1>
                    <div className="flex gap-1">
                        {pokemon.types.map((value, index) => {
                            return <TypeLink key={index} name={value.type.name} handleChange={handleChange} />;
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;
