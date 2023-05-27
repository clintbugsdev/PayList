import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

function rednderExpenseItem(itemData) {
    return <ExpenseItem {...itemData.item}/>
}

function ExpensesList({ expenses }) {
    return (
        <FlatList
            data={expenses}
            renderItem={rednderExpenseItem}
            keyExtractor={(item) => item.id}
        />
    );
}

export default ExpensesList;