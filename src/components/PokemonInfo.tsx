import { Drawer, IconButton, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import { pokemonAPI } from '../services/PokemonAPIService';
import TypeLink from './TypeLink';
import CloseIcon from '@mui/icons-material/Close';

interface PokemonInfoProps {
    open: boolean;
    name: string;
    handleClose: () => void;
    handleChange: (event: SelectChangeEvent<string> | string) => void;
}

const PokemonInfo: FC<PokemonInfoProps> = ({ open, handleClose, name, handleChange }) => {
    const { data: pokemon } = pokemonAPI.useGetPokemonDataQuery(name);

    return (
        <Drawer anchor={'right'} open={open} onClose={handleClose} transitionDuration={500}>
            {pokemon && (
                <div className="flex flex-col capitalize justify-evenly items-center w-full h-full p-4 relative">
                    <div className="absolute top-0 left-4" onClick={handleClose}>
                        <IconButton>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <img
                        className="max-h-48 max-w-max select-none"
                        src={pokemon.sprites.other['official-artwork'].front_default}
                        alt="pokemon"
                    />
                    <h1 className="font-bold text-xl">
                        {name} #{String(pokemon.id).padStart(3, '0')}
                    </h1>
                    <table className="table-auto border border-collapse">
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">Type</td>
                                <td className="border px-4 py-2 flex gap-2">
                                    {pokemon.types.map((value, index) => {
                                        return (
                                            <TypeLink key={index} name={value.type.name} handleChange={handleChange} />
                                        );
                                    })}
                                </td>
                            </tr>
                            {pokemon.stats.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="border px-4 py-2">
                                            {value.stat.name === 'hp' ? 'HP' : value.stat.name}
                                        </td>
                                        <td className="border px-4 py-2">{value.base_stat}</td>
                                    </tr>
                                );
                            })}
                            <tr>
                                <td className="border px-4 py-2">weight</td>
                                <td className="border px-4 py-2">{pokemon.weight}</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">total moves</td>
                                <td className="border px-4 py-2">{pokemon.moves.length}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </Drawer>
    );
};

export default PokemonInfo;
