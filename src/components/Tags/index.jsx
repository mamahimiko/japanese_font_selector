import { useState } from "react"
import styles from "./tags.module.css"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


const Tags = ({ useCaseTitle, updateFunction, isSelected }) => {
    const handleClick = () => {
        updateFunction(useCaseTitle)
    }

    return (
        <>
            <Stack direction="row" spacing={1}>
                <Chip
                    label={useCaseTitle.toUpperCase()}
                    variant={isSelected ? "filled" : "outlined"}
                    onClick={handleClick} />
            </Stack>
        </>
    )

}

export default Tags