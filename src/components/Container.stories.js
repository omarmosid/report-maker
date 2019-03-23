import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Container from './Container';


storiesOf('Container', module)
  .add('default', () => <Container />)