import React from 'react';
import { View, Text } from 'react-native';

const Planets = () => {
    const [hasError, setErrors] = React.useState(false);
    const [planets, setPlanets] = React.useState({})

    async function fetchPlanets() {
        console.log('fetch is firing');
        const res = await fetch('https://swapi.dev/api/planets/');
        res.json().then(res => setPlanets(res)).catch(err => setErrors(err));
    }

    React.useEffect(() => {
        console.log('use effect to fetch');
        fetchPlanets();
        });

    return (
        <View>
            <ul>
                <li>{for (let [key, value] of Object.entries(planets) {`${key}: ${value}`}</p>
            </ul>
        </View>
    );
}

export default Planets;
