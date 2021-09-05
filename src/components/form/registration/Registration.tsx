import React from 'react';
import '../../styles/Registration.scss'

import {NavLink} from 'react-router-dom'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SubmitButton from './SubmitButton' 
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      '& > *': {
        margin: '0 auto',
        width: '280',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItem: 'center'
      },
    },
  }),
);

export default function Registration() {
  const classes = useStyles();


  const[firstName, setFirstName] = React.useState('')
  const[lastName, setLastName] = React.useState('')
  const[regEmail, setRegEmail] = React.useState('')
  const[regPassword, setRegPassword] = React.useState('')
  const[regConformPassword, setRegConformPassword] = React.useState('')

  return (
    <div className="registration">
      <Container maxWidth="sm" >
        <div className="registration-form">
          <h2>Registration</h2>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField 
                id="standard-basic"
                label="First Name"
                type="text"
                value={firstName}
                onChange={(e)=>{setFirstName(e.target.value)}}/>
              <TextField
                id="standard-basic"
                label="Last Name"
                type="text"
                value={lastName}
                onChange={(e)=>{setLastName(e.target.value)}}/>
              <TextField
                id="standard-basic"
                label="Email" 
                type="email" 
                value={regEmail}
                onChange={(e)=>{setRegEmail(e.target.value)}}/>
              <TextField 
                id="standard-basic" 
                label="Password" 
                type="password" 
                value={regPassword}
                onChange={(e)=>{setRegPassword(e.target.value)}}/>
              <TextField 
                id="standard-basic" 
                label="Confirm password" 
                type="password" 
                value={regConformPassword}
                onChange={(e)=>{setRegConformPassword(e.target.value)}}/>
            </form>
            <SubmitButton/>
            <div className="registration__login-link">
              <span>If you have an account </span>
              <span><NavLink to="/login">log in</NavLink></span>
            </div>
        </div>
      </Container>
    </div>
  );
}