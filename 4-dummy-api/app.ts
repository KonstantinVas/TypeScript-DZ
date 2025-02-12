import axios from 'axios';

enum Gender {
    MAN = 'male',
    WOMAN = 'female'
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName?: string;
    age: number;
    gender: Gender;
    email: string;
    phone: string;
    username: string;
}

interface Data {
    users: User[];
    total: number;
    skip: number;
    limit: number;
}

async function fetchData(): Promise<void> {
    try {
        const response = await axios.get<Data>('https://dummyjson.com/users');
        const users = response.data.users;
        users.forEach(user => {
            console.log(user.firstName + ' ' + user.gender);
        });
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.message);
            throw new Error(`Axios error: ${error.message}`);
        } else if (error instanceof Error) {
            console.error('Unexpected error:', error.message);
            throw new Error(`Unexpected error: ${error.message}`);
        } else {
            console.error('Unknown error:', error);
            throw new Error('Unknown error occurred');
        }
    }
}

fetchData();