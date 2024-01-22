import Profile from "./Task1/Profile"
import userData from "./Task1/userData.json"
import FriendList from "./Task2/FriendList"
import FriendsList from "./Task2/FriendsList.json"
import TransactionHistory from "./Task3/TransactionHistory"
import transactions from "./Task3/transactions.json"

function App() {
    return (
        <div>
            <Profile items={userData} />
            <FriendList friends={FriendsList} />
            <TransactionHistory transaction={transactions} />
        </div>
    )
}

export { App };