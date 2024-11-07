// src/tests/services.test.js

import { fetchData } from '../services/apiService'; // Adjust the import based on your file structure
import axios from 'axios';

jest.mock('axios');

describe('API Service', () => {
    test('fetchData returns data on success', async () => {
        const data = { data: { message: 'Success' } };
        axios.get.mockResolvedValue(data);

        const result = await fetchData('https://api.example.com/data');
        expect(result).toEqual(data.data);
    });

    test('fetchData throws error on failure', async () => {
        axios.get.mockRejectedValue(new Error('Network Error'));

        await expect(fetchData('https://api.example.com/data')).rejects.toThrow('Network Error');
    });
});
