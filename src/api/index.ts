import { User } from './types';

type GetUsersResponse = {
    data: User[];
};

export async function getUsers() {
    try {
        const response = await fetch('localhost:8080/users/1', { credentials: 'include' });

        if (response.ok) {
            const data = await response.json() as GetUsersResponse;
            console.log(data);

            console.log(JSON.stringify(data, null, 4));

            console.log('response status is: ', response.status);

            return data.data;
        } else {
            throw new Error(`Error fetching users: \${response.statusText}`);
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}
