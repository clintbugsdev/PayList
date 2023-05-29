import { useLayoutEffect } from 'react';
import { Text } from 'react-native';

function ManageExpense({ route, navigation }) {
    const editedEpenseId = route.params?.expenseId;
    const isEditing = !!editedEpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    return <Text>Manage Epxense Screen</Text>
}

export default ManageExpense;