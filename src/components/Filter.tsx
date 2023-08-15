import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import { pokemonAPI } from '../services/PokemonAPIService';

interface FilterProps {
    type: string;
    handleChange: (event: SelectChangeEvent<string> | string) => void;
}

const Filter: FC<FilterProps> = ({ type, handleChange }) => {
    const { data: types } = pokemonAPI.useGetPokemonsTypesQuery();
    return (
        <FormControl fullWidth className="capitalize">
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Type"
                onChange={(event) => handleChange(event)}
            >
                <MenuItem className="capitalize" value={'None'}>
                    None
                </MenuItem>
                {types &&
                    types.results.map((value, index) => {
                        return (
                            <MenuItem key={index} className="capitalize" value={value.name}>
                                {value.name}
                            </MenuItem>
                        );
                    })}
            </Select>
        </FormControl>
    );
};

export default Filter;
