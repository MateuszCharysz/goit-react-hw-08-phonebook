import React, { useState } from 'react';
import Input from 'components/input/input';
import { useDispatch } from 'react-redux';
import opAuth from 'redux/auth/opAuth';

const UserForm = ({ typeOfForm }) => {
  console.log(typeOfForm)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const formReset = typeOfForm => {
    if (typeOfForm === 'Register') {
      setName('');
      setEmail('');
      setPassword('');
    } else {
      setEmail('');
      setPassword('');
    }
  };
  const handleSubmitReg = (name, email, pass) => {
    let credentials = {
      name: `${name}`,
      email: `${email}`,
      password: `${pass}`,
    };
    // credentials = { name: name, email: email, password: pass };
    dispatch(opAuth.register(credentials));
  };

  const handleSubmitLog = (email, pass) => {
    const credentials = { email: email, password: pass };
    console.log(typeof email)
    
    dispatch(opAuth.logIn(credentials));
  };

  const handleSubmit = (typeOfForm, name, email, pass) => {
    if (typeOfForm === 'Register') {
      console.log('handleSubmitReg');
      handleSubmitReg(name, email, pass);
    } else {
      console.log('handleSubmitLog');
      handleSubmitLog(email, pass);
    }
  };

  const handleChangeUser = e => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'name') {
      setName(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(typeOfForm, name, email, password);
        formReset();
      }}
    >
      {typeOfForm === 'Register' && (
        <Input
          label="User Name"
          type="text"
          dataName="name"
          title="User name for server"
          required
          funcChange={handleChangeUser}
          stateField={name}
        />
      )}
      <Input
        label="Email"
        type="email"
        dataName="email"
        title="Should look like smth@and.so.on"
        required
        funcChange={handleChangeUser}
        stateField={email}
      />
      <Input
        label="Password"
        type="password"
        dataName="password"
        title="Should be secret"
        required
        funcChange={handleChangeUser}
        stateField={password}
      />
      <button type="submit">
        {typeOfForm === 'Register' ? typeOfForm : 'Log In'}
      </button>
    </form>
  );
};
//TODO valid invalid CSS for inputs
export default UserForm;
