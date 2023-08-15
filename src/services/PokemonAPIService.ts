import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPokemonData, INamesList, IPokemonsByType } from '../models/types';

export const pokemonAPI = createApi({
    reducerPath: 'pokemonAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/',
    }),
    endpoints: (build) => ({
        getPokemons: build.query<INamesList, number>({
            query: (page) => ({
                url: 'pokemon',
                method: 'GET',
                params: {
                    limit: 12,
                    offset: page * 12 - 12,
                },
            }),
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },
            merge: (currentCache, newItems) => {
                currentCache.results.push(...newItems.results);
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
        }),

        getPokemonData: build.query<IPokemonData, string>({
            query: (name) => ({
                url: `pokemon/${name}`,
                method: 'GET',
            }),
        }),

        getPokemonsTypes: build.query<INamesList, void>({
            query: () => ({
                url: 'type',
                method: 'GET',
                params: {
                    limit: 999,
                },
            }),
        }),

        getPokemonsByType: build.query<IPokemonsByType, string>({
            query: (name) => ({
                url: `type/${name}`,
                method: 'GET',
            }),
        }),
    }),
});
