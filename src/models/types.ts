interface IPokemonData {
    id: number;
    name: string;
    weight: number;
    stats: {
        base_stat: number;
        stat: { name: string };
    }[];
    sprites: { other: { 'official-artwork': { front_default: string } } };
    types: { type: { name: string } }[];
    moves: { move: { name: string } }[];
}

interface INamesList {
    results: { name: string }[];
}

interface IPokemonsByType {
    pokemon: { pokemon: { name: string } }[];
}

export type { IPokemonData, INamesList, IPokemonsByType };
