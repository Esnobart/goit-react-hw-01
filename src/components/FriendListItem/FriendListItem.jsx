import css from "./FriendListItem.module.css"

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    const status = isOnline ? css.isOnline : css.isOffline;
    return (
        <div className={css.container}>
            <img className={css.avatar} src={avatar} alt={`${name} avatar`} />
            <p className={css.name}>{name}</p>
            <span className={status}>{isOnline ? "Online" : "Offline"}</span>
        </div>
    )
}