import React, {useState} from 'react'
import useStyles from './style'
import {Link} from 'react-router-dom'
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from '@material-ui/core'


const steps=['Shipping Address', 'Payment Details']

const Checkout = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    return (
        <>
        <div className={classes.toolbar}/>
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((step)=>(
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Paper>
        </main>
        </>
    )
}

export default Checkout
