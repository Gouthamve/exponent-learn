// @flow
import Exponent from 'exponent';
import React from 'react';

// Components
import { Screen, Heading, Image, NavigationBar, Title, Icon, View } from '@shoutem/ui';
import { Tile } from '@shoutem/ui';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <Screen>
        <NavigationBar
          leftComponent={<Icon name="sidebar" />}
          centerComponent={<Title>TITLE</Title>}
        />
      </Screen>
    )
  }
}
