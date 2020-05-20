import React from 'react';

interface PlanetInterface {
    name: string;
}

interface PlanetsResult {
    results: PlanetInterface[]
}

interface PersonInterface {
    name: string
}

interface PeopleResult {
    results: PersonInterface[]
}

interface FilmInterface {
    title: string
    opening_crawl: string
}

interface FilmResults {
    results: FilmInterface[]
}

interface SpeciesInterface {
    name: string
}

interface SpeciesResults {
    results: SpeciesInterface[]
}

interface VehiclesInterface {
    name: string
}

interface VehiclesResults {
    results: VehiclesInterface[]
}

interface StarshipInterface {
    name: string
}

interface StarshipResults {
    results: StarshipInterface[]
}



const useFetch = <T extends object>(url: string) => {
    const fetchUrl = React.useCallback(async () => {
        const res = await fetch(url);
        const data = await res.json();
        return data as T;
    }, [url]);
    return fetchUrl;
}

// plannets
export const usePlanets = (): [PlanetInterface[] | undefined, () => Promise<void>] => {
    const [planets, setPlanets] = React.useState<PlanetInterface[]>();
    const fetchUrl = useFetch<PlanetsResult>('https://swapi.dev/api/planets/')
    const fetchPlanets = React.useCallback(async () => {
        const result = await fetchUrl()
        setPlanets(result.results)
        // above is the same as: fetchUrl().then((data) => setPlanets(data))
    }, [setPlanets, fetchUrl]);

    return [
        planets,
        fetchPlanets
    ]
}

// people
export const usePeople = (): [PersonInterface[] | undefined, () => Promise<void>] => {
    const [people, setPeople] = React.useState<PersonInterface[]>();
    const fetchUrl = useFetch<PeopleResult>('https://swapi.dev/api/people/');
    const fetchPeople = React.useCallback(async () => {
        const result = await fetchUrl()
       setPeople(result.results);
    }, [setPeople, fetchUrl]);
    return [
        people,
        fetchPeople
    ]
}

// films
export const useFilms = (): [FilmInterface[] | undefined, () => Promise<void>] => {
    const [films, setFilms] = React.useState<FilmInterface[]>();
    const fetchUrl = useFetch<FilmResults>('https://swapi.dev/api/films/');
    const fetchFilms = React.useCallback(async () => {
        const result = await fetchUrl()
        setFilms(result.results);
    }, [setFilms, fetchUrl]);
    return [
        films,
        fetchFilms
    ]
}

// Species
export const useSpecies = (): [SpeciesInterface[] | undefined, () => Promise<void>] => {
    const [species, setSpecies] = React.useState<SpeciesInterface[]>();
    const fetchUrl = useFetch<SpeciesResults>('https://swapi.dev/api/species/');
    const fetchSpecies = React.useCallback(async () => {
        const result = await fetchUrl()
        setSpecies(result.results);
    }, [setSpecies, fetchUrl]);
    return [
        species,
        fetchSpecies
    ]
}

// Vehicles
export const useVehicles = (): [VehiclesInterface[] | undefined, () => Promise<void>] => {
    const [vehicles, setVehicles] = React.useState<VehiclesInterface[]>();
    const fetchUrl = useFetch<VehiclesResults>('https://swapi.dev/api/vehicles/');
    const fetchVehicles = React.useCallback(async () => {
        const result = await fetchUrl();
        setVehicles(result.results);
    }, [setVehicles, fetchUrl]);
    return [
        vehicles,
        fetchVehicles
    ]
}

// Starships
export const useStarships = (): [StarshipInterface[] | undefined, () => Promise<void>] => {
    const [starships, setStarships] = React.useState<StarshipInterface[]>();
    const fetchUrl = useFetch<StarshipResults>('https://swapi.dev/api/starships');
    const fetchStarships = React.useCallback(async () => {
        const result = await fetchUrl();
        setStarships(result.results);
    }, [setStarships, fetchUrl]);
    return [
        starships,
        fetchStarships
    ]
}

