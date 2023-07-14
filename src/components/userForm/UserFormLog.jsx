import React, { useState } from 'react';
import Input from 'components/input/input';

const UserFormLog = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitLog = () => {};

  const handleChangeUser = e => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <form onSubmit={handleSubmitLog}>
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
      <button type="submit">Log In</button>
    </form>
  );
};
//TODO valid invalid CSS for inputs
export default UserFormLog;
