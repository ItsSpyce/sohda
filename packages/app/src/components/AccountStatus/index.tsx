import React from 'react';

type AccountStatusProps = {
  account?: any;
};

const AccountStatus = (props: AccountStatusProps) => {
  return (
    <>
      {props.account && <span>{props.account.name}</span>}
      {!props.account && (
        <>
          <span>Login</span>|<span>Register</span>
        </>
      )}
    </>
  );
};

export default AccountStatus;
