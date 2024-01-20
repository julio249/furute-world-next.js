"use client"

import Image from 'next/image';
import styles from 'app/sass/global-error.module.sass';

export default function globalError({reset}: ErrorPageProps) {
    return(
        <main className={styles.Error}>
            <h1 className={styles.__title}> an error occured</h1>
            <Image 
                src='/images/error.png'
                width={500}
                height={500}
                alt='Error'
            />
            <p className={styles.Error__message}>sorry, an error came up </p>
            <button className={styles.Error__button} onClick={reset}>Try Again</button>
        </main>
    )
}