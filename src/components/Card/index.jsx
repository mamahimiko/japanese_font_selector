import { useState } from "react"
import styles from "./card.module.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from "@mui/material/Paper";


const CardCompornent = ({ fontInfo }) => {
    const { genre, name, description, types } = fontInfo

    return (
        <div>
            <Paper elevation={3}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <div className={styles.genre}>{genre}</div>
                        <div className={`${styles.name} ${name ? styles[name.replaceAll(" ", "_")] : ""}`}>
                            <h3>{name}</h3>
                            <h4>あ ア 安 A a</h4>
                        </div>
                        <p className={styles.description}>{description}</p>
                    </CardContent>
                    <div className={styles.tagWrapper}>
                        {types.map((type, index) => (
                            <span key={index} className={styles.hashTag}>
                                #{type}
                            </span>
                        ))}
                    </div>
                </Card>
            </Paper>
        </div >
    )
}

export default CardCompornent