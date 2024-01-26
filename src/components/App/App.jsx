import Profile from "../Profile/Profile"
import userData from "../../components/userData.json"

import FriendList from "../FriendsList/FriendList"
import FriendsList from "../../components/FriendsList.json"

import TransactionHistory from "../TransactionHistory/TransactionHistory"
import transactions from "../../components/transactions.json"

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