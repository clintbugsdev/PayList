import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of pants',
        amount: 89.99,
        date: new Date('2021-12-22')
    },
    {
        id: 'e3',
        description: 'Adobo',
        amount: 19.00,
        date: new Date('2021-12-23')
    },
    {
        id: 'e4',
        description: 'Book',
        amount: 19.00,
        date: new Date('2022-1-25')
    },
    {
        id: 'e5',
        description: 'iPhone',
        amount: 1000.00,
        date: new Date('2021-2-25')
    },
    {
        id: 'e6',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-2-19')
    },
    {
        id: 'e7',
        description: 'A pair of pants',
        amount: 89.99,
        date: new Date('2021-3-22')
    },
    {
        id: 'e8',
        description: 'Adobo',
        amount: 19.00,
        date: new Date('2021-3-23')
    },
    {
        id: 'e9',
        description: 'Book',
        amount: 19.00,
        date: new Date('2021-3-25')
    },
    {
        id: 'e10',
        description: 'iPhone',
        amount: 1000.00,
        date: new Date('2021-4-25')
    },
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { }
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toDateString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );

            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        default:
            return state;
    }
}

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
    }

    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id });
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    };

    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    );
}

export default ExpensesContextProvider;