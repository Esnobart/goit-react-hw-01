import Friend from "./Friend"
import css from "./FriendList.module.css"

export default function FriendList({ friends }) {
    return (
        <ul className={css.friendsList}>
            {friends.map(friend => (
                <li className={css.friend} key={friend.id}>
                    <Friend friend={friend} />
                </li>
            ))}
        </ul>
    )
}