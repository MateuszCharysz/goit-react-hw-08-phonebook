import React, { useState } from 'react';
import Input from 'components/input/input';

const UserForm = ({typeOfForm}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = formType => {};

  const handleChangeUser = e => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <form onSubmit={handleSubmit(typeOfForm)}>
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
      {/* <label for="email">Email </label>
      <input type="email" name={email} id="email" required></input>
      <label for="password">Password</label>
      <input type="password" name={password} id="password" required></input> */}
      <button type="submit">{typeOfForm}</button>
    </form>
  );
};
//TODO valid invalid CSS for inputs
export default UserForm;
