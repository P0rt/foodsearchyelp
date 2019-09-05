import { useState, useEffect } from 'react';
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (serachTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: serachTerm,
                    location: 'moscow'
                }
            }); 
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Что-то пошло не так, сори чувак');
        }
    };
    // хук для того чтобы рендерить результат один раз
    useEffect(() => {
        searchApi('pasta');
    }, [])

    return [searchApi, results, errorMessage];
}
