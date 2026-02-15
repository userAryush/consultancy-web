import { useState, useEffect } from 'react';

export function useApi(apiFunc, dependencies = []) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const result = await apiFunc();
            // Handle DRF pagination (results), common 'data' wrapper, or direct result
            const extractedData = result?.results || result?.data || result;
            setData(extractedData);
            setError(null);
        } catch (err) {
            console.error('API Error:', err);
            setError(err.response?.data?.message || 'Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, dependencies);

    return { data, loading, error, refresh: fetchData };
}
