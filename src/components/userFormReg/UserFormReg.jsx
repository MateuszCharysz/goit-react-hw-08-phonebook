import React, { useState } from 'react';
import Input from 'components/input/input';

const UserFormReg = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitReg = () => {};

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
    <form onSubmit={handleSubmitReg}>
      <Input
        label="User Name"
        type="text"
        dataName="name"
        validation=""
        title="Should look like smth@and.so.on"
        required
        funcChange={handleChangeUser}
        stateField={name}
      />
      <Input
        label="Email"
        type="email"
        dataName="email"
        validation=""
        title="Should look like smth@and.so.on"
        required
        funcChange={handleChangeUser}
        stateField={email}
      />
      <Input
        label="Password"
        type="password"
        dataName="password"
        validation=""
        title="Should be secret"
        required
        funcChange={handleChangeUser}
        stateField={password}
      />
      <button type="submit">Register</button>
    </form>
  );
};
//TODO valid invalid CSS for inputs
export default UserFormReg;
