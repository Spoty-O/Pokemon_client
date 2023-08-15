import { SelectChangeEvent } from '@mui/material';
import { FC, MouseEvent, useState } from 'react';
import { pokemonAPI } from '../services/PokemonAPIService';
import Card from './Card';
import PokemonInfo from './PokemonInfo';

interface PokemonListProps {
    page: number;
    type: string;
    handleChange: (event: SelectChangeEvent<string> | string) => void;
}

const PokemonList: FC<PokemonListProps> = ({ page, type, handleChange }) => {
    const { data: pokemonsList } = pokemonAPI.useGetPokemonsQuery(page);
    const [open, setOpen] = useState(false);
    const [name_pokemon, setName] = useState('');

    const handleOpen = (event: MouseEvent, name: string) => {
        if ((event.target as Element).tagName.toLowerCase() !== 'button') {
            setName(name);
            setOpen(true);
        }
    };
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className="grid gap-4 mx-4 my-6 min-[560px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-stretch justify-evenly w-full">
                {pokemonsList &&
                    pokemonsList.results.map((value, index) => {
                        return (
                            <Card
                                key={index}
                                name={value.name}
                                handleOpen={handleOpen}
                                type={type}
                                handleChange={handleChange}
                            />
                        );
                    })}
            </div>
            {name_pokemon && (
                <PokemonInfo open={open} handleClose={handleClose} name={name_pokemon} handleChange={handleChange} />
            )}
        </>
    );
};

export default PokemonList;
