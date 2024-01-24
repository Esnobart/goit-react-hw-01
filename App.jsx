import Profile from "./Task1/Profile"
import userData from "./Task1/userData.json"

import FriendList from "./Task2/FriendList"
import FriendsList from "./Task2/FriendsList.json"

import TransactionHistory from "./Task3/TransactionHistory"
import transactions from "./Task3/transactions.json"

function App() {
    return (
        <div>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <FriendList friends={FriendsList} />
            <TransactionHistory items={transactions} />
        </div>
    )
}

export { App };