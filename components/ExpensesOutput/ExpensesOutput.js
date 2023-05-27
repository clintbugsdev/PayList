import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

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
        date: new Date('2021-12-25')
    },
    {
        id: 'e5',
        description: 'iPhone',
        amount: 1000.00,
        date: new Date('2021-12-25')
    },
    {
        id: 'e6',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e7',
        description: 'A pair of pants',
        amount: 89.99,
        date: new Date('2021-12-22')
    },
    {
        id: 'e8',
        description: 'Adobo',
        amount: 19.00,
        date: new Date('2021-12-23')
    },
    {
        id: 'e9',
        description: 'Book',
        amount: 19.00,
        date: new Date('2021-12-25')
    },
    {
        id: 'e10',
        description: 'iPhone',
        amount: 1000.00,
        date: new Date('2021-12-25')
    },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    }
});