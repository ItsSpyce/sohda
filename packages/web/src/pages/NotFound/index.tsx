import React from 'react';
import { StyledNotFound } from './styles';

type NotFoundProps = {
  path?: string;
};

const NotFound = (props: NotFoundProps) => (
  <StyledNotFound>
    <h1>Oops, we can&apos;t find that! Maybe the URL is wrong?</h1>
  </StyledNotFound>
);

export default NotFound;
