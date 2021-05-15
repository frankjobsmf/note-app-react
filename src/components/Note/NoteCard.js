import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

const NoteCard = ({ title, content }) => {
    return (
        <>
            <Card className="CardItem">
                <Grid>
                    <h3>{ title }</h3>
                    <p>{ content }</p>
                </Grid>
            </Card>
        </>
    )
}

export default NoteCard;