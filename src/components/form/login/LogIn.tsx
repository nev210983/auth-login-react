import React from 'react';
import '../../styles/Registration.scss'

import {NavLink} from 'react-router-dom'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LoginButton from './LoginButton' 
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      '& > *': {
        margin: '0 auto',
        width: '25ch',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItem: 'center'
      },
    },
  }),
);

export default function LogIn() {
  const classes = useStyles();

  const[logEmail, setLogEmail] = React.useState('')
  const[logPassword, setLogPassword] = React.useState('')

  return (
    <div className="registration">
      <Container maxWidth="sm" >
        <div className="registration-form">
          <h2>Log in</h2>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField 
                id="standard-basic" 
                label="Email" 
                type="email"
                value={logEmail}
                onChange={(e)=>{setLogEmail(e.target.value)}}/>
              <TextField 
                id="standard-basic" 
                label="Password" 
                type="password"
                value={logPassword}
                onChange={(e)=>{setLogPassword(e.target.value)}}/>
            </form>
            <LoginButton/>
            <div className="registration__login-link">
              <span>If you have not an account </span>
              <span>
                <NavLink to="/registration">registration</NavLink>
              </span>
            </div>
        </div>
      </Container>
    </div>
  );
}