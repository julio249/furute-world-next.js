import Link from "next/link"
import styles from './ChatLink.module.sass'

export const ChatLink = () => {
    return (
        <Link href='./chat' className={styles.ChatLink}> Chat ✨</Link>
    )
}