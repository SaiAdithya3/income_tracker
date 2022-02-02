// import React, { useState, useEffect, useContext } from 'react';
import React, { useContext } from 'react';
import { Card, CardContent, Typography, Grid, Divider, CardHeader } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import InfoCard from '../InfoCard';

const ExpenseTracker = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Created by Sai Adithya"/>
            <CardContent>
                <Typography align="center" variant="h5">Total balance ₹{balance}</Typography>
                <Typography variant="subtitle1" style={{lineHeight: '1.5em', marginTop: '20px' }}>
                    <InfoCard />
                    
                </Typography>
                <Divider className={classes.divider} />
                <Form />
            </CardContent>
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
    
}


export default ExpenseTracker;