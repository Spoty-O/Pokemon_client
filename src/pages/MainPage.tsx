import { Button, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import Filter from '../components/Filter';
import Header from '../components/Header';
import PokemonList from '../components/PokemonList';

const MainPage = () => {
    const [page, setPage] = useState(1);
    const [type, setType] = useState('None');

    const handleChange = (event: SelectChangeEvent<string> | string) => {
        if (typeof event === 'string') {
            setType(event);
        } else {
            setType(event.target.value);
        }
    };
    return (
        <>
            <Header />
            <div className="max-w-[72rem] mx-auto flex justify-center items-center flex-col p-4 sm:p-8">
                <Filter type={type} handleChange={handleChange} />
                <PokemonList page={page} type={type} handleChange={handleChange} />
                <Button variant="contained" className="w-full" onClick={() => setPage(page + 1)}>
                    Load More
                </Button>
            </div>
        </>
    );
};

export default MainPage;
