import css from "./Profile.module.css"

export default function Profile({ image, name, tag, location, stats }) {
    const keys = Object.keys(stats);
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img src={image} alt="User avatar" className={css.avatar} />
                <p className={css.name}>{name}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                {keys.map(item => {
                    return (<li className={css.list} key={item}>
                        <span className={css.label}>{item}</span>
                        <span className={css.value}>{stats[item]}</span>
                    </li>);
                })}
            </ul>
        </div>
    )
}