import { useState } from 'react'
import styles from './main.module.css'
import FontSelector from '../FontSelector'
import FontListPage from '../FontIListPage'
import Tips from '../Tips'
import ContactUs from '../ContactPage'

function Main({ page }) {


    return (
        <>
            <main className={styles.main}>
                {!page && <FontSelector />}
                {page === "fontInfo" && <FontListPage />}
                {page === "tips" && <Tips />}
                {page === "contact" && <ContactUs />}
            </main>
        </>
    )
}

export default Main