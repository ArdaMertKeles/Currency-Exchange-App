import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function News() {

    return (
        <div className="newsWrapper">
            <Card sx={{ maxWidth: 225 }}>
                <CardMedia
                    sx={{ height: 120 }}
                    image="https://image.cnbcfm.com/api/v1/image/108011693-17219115381721911535-35512843235-1080pnbcnews.jpg?v=1721911537&w=750&h=422&vtcrop=y"
                    title="green iguana"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        U.S. economy grew at a 2.8% pace in the second quarter, much more than expected
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 225 }}>
                <CardMedia
                    sx={{ height: 120 }}
                    image="https://image.cnbcfm.com/api/v1/image/108011609-1721901685388-gettyimages-1235943709-PGONCHAR_W8183.jpeg?v=1721901721&w=630&h=354&ffmt=webp&vtcrop=y"
                    title="green iguana"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Wegovy rival to be part of a suite of weight loss drugs, Roche CEO says following positive trial results 
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}