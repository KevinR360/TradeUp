import React from 'react';
import {View, Image, Text} from 'react-native';

import logo from '../../assets/logo.png';

import {
  Container,
  Avatar,
  Infos,
  NameUser,
  EmailUser,
  LabelText,
  Separe,
} from './styles';

export default function Details({navigation}) {
  const user = navigation.getParam('item');

  return (
    <Container>
      <Avatar
        source={
          user.avatar
            ? {uri: user.avatar}
            : {
                uri: 'https://api.adorable.io/avatars/174/abott@adorable.png',
              }
        }
      />
      <Infos>
        <LabelText>
          Name:
          <NameUser>{` ${user.first_name} ${user.last_name}`}</NameUser>
        </LabelText>
        <Separe />
        <LabelText>
          E-mail: <EmailUser>{user.email}</EmailUser>
        </LabelText>
        <Separe />
      </Infos>
    </Container>
  );
}

Details.navigationOptions = {
  headerTitle: <Image source={logo} style={{alignSelf: 'center'}} />,
};
