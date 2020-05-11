import React from 'react';

interface Planet {
    name: string;
    diameter: string;
}

interface PlanetsResult {
    results: Planet[]
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

export const usePlanets = (): [Planet[] | undefined, () => Promise<void>] => {
    const [planets, setPlanets] = React.useState<Planet[]>();
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

export const usePeople = (): [PeopleResult | undefined, () => Promise<void>] => {
    const [people, setPeople] = React.useState();
    const fetchUrl = useFetch<PeopleResult>('https://swapi.dev/api/people/');
    const fetchPeople = React.useCallback(async () => {

       setPeople(await fetchUrl());
    }, [setPeople, fetchUrl]);
    return [
        people,
        fetchPeople
    ]
}

const add = <T extends string | number>(a: T, b: T) => a + b;



add(5, 2);
add('derek', 'is cool');
