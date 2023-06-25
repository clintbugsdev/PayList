import axios from 'axios';

const BACKEND_URL = 'https://react-native-course-f0a95-default-rtdb.asia-southeast1.firebasedatabase.app';

export async function storeExpense(expenseData) {
    const response = await axios.post(BACKEND_URL + '/expenses.json', expenseData);
    const id = response.data.name;
    return id;
}

export async function fetchExpenses() {
    const response = await axios.get(BACKEND_URL + '/expenses.json');
    const expenes = [];

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        }
        expenes.push(expenseObj);
    }

    return expenes;
}

export function updateExpense(id, expenseData) {
    return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
    return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}