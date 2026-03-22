import styles from './fontTypeCard.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { getImageURL } from "../../utils/functions"

const FontTypeCard = ({ datas }) => {
    const { image, name, description } = datas
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 180 }}
                image={getImageURL(image)}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
            </CardContent>

        </Card>
    );
}

export default FontTypeCard