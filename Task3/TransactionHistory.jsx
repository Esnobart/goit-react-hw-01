import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ transaction }) {
    return (
        <table className="transaction-history">
            <thead>
                <tr className={css.trHead}>
                    <th className={css.thItem}>Type</th>
                    <th className={css.thItem}>Amount</th>
                    <th className={css.thItem}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transaction.map(({ id, type, amount, currency }) => (
                    <tr key={id}>
                        <td className={css.tbItem}>{type}</td>
                        <td className={css.tbItem}>{amount}</td>
                        <td className={css.tbItem}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}