const API_URL = 'https://exercisedb.p.rapidapi.com';
const API_KEY = process.env.REACT_APP_EXERCISESDB_API_KEY;

export const fetchCategories = async () => {
    try {
        const response = await fetch(`${API_URL}/exercises/bodyPartList`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Eroare la preluarea categoriilor:', error);
        throw error;
    }
};

export const fetchExercises = async (category) => {
    try {
        const response = await fetch(`${API_URL}/exercises/bodyPart/${category}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
            },
        })

        if (!response.ok) {
            throw new Error(`Eroare API: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Eroare la preluarea exercițiilor:', error);
        throw error;
    }
};


