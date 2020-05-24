import React, { useReducer } from 'react';
import { createGlobalStyle } from 'styled-components';
import DesktopBG from './images/bg-intro-desktop.png';
import MobileBG from './images/bg-intro-mobile.png';
import {
  P, Heading, StyleP
} from './components/Typography/Typography';
import Form from './components/Styled/Form';
import Terms from './components/Styled/Terms';
import Desc from './components/Desc/Desc';
import Button from './components/Button/Button';
import FormField from './components/FormField/FormField';
import { Provider } from './store';
import reducer, { initialState } from './reducer';


const Global = createGlobalStyle`
*, *:before, *:after {
  box-sizing: border-box;
}
:root {
  --red: hsl(0, 100%, 74%);
  --green: hsl(154, 59%, 51%);
  --greenborder: hsl(154, 59%, 40%);
  --blue: hsl(248, 32%, 49%);
  --darkblue: hsl(249, 10%, 26%);
  --grayishblue: hsl(246, 25%, 77%);
}
body {
  background: var(--red) url(${MobileBG});
  font-family: 'Poppins', sans-serif;
  color: white;

  @media (min-width: 600px) {
    background: var(--red) url(${DesktopBG});
  }
}
.app {
  width: min(1200px, 100%);
  padding: 5em 2.5em;
  margin: 0 auto;

  @media (min-width: 600px) {
    display: flex;
  }

  div {
    flex: 50% 1 1;
  }
}
`;

function App() {
  const [{
    firstName, lastName, email, password, clicked
  }, dispatch] = useReducer(reducer, initialState);
  const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const onChange = name => e => dispatch({ type: 'changeVal', payload: { name, value: e.target.value } });
  const emailIsValid = emailRegex.test(email);
  function onSubmit(e) {
    e.preventDefault();
    dispatch({type: 'changeVal', payload: {
      name: 'clicked',
      value: true
    }})

    if(firstName && lastName && email && password && emailIsValid) {
      dispatch({type: 'reset'});
    }
  }
  
  return (
    <React.Fragment>
      <Global />
      <main className="app">
        <Desc>
          <Heading>Learn to code by watching others</Heading>
          <P>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</P>
        </Desc>
        <div>
          <StyleP>
            <strong>Try it free 7 days</strong> then $20/mo. thereafter
          </StyleP>
          <Form onSubmit={onSubmit}>
            <FormField
              value={firstName}
              error={clicked && !firstName}
              name="firstName"
              errorText="First Name cannot be empty"
              placeholder="First Name" onChange={onChange('firstName')} />
            <FormField
              value={lastName}
              error={clicked && !lastName}
              name="lastName"
              errorText="Last Name cannot be empty"
              placeholder="Last Name" onChange={onChange('lastName')} />
            <FormField
              value={email}
              error={clicked && (!email || !emailIsValid)}
              name="email"
              errorText={email && !emailIsValid ? 'Looks like this is not an email' : "Email cannot be empty"}
              placeholder="Email Address" onChange={onChange('email')} />
            <FormField
              value={password}
              error={clicked && !password}
              name="password"
              errorText="Password cannot be empty"
              placeholder="Password" type="password" onChange={onChange('password')} />
            <Button>Claim your free trial</Button>
            <Terms>By clicking the button, you are agreeing to our <a href="#">Terms and Services</a></Terms>
          </Form>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
