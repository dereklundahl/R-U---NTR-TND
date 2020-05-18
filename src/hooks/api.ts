import React from 'react';

export interface PlanetInterface {
    name: string;
}

interface PlanetsResult {
    results: PlanetInterface[]
}

interface Person {
    name: string
}

interface PeopleResult {
    results: Person[]
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
export const usePeople = (): [Person[] | undefined, () => Promise<void>] => {
    const [people, setPeople] = React.useState<Person[]>();
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
// Species
// Vehicles
// Starships

