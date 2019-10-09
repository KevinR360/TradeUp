import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import {Container, ListUsers, User, Avatar, Infos, Name, Email} from './styles';

export default function Dashboard({navigation}) {
  const [users, setUsers] = useState([]);
  const [loading, setLoadin] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('users', {
        params: {
          per_page: 12,
        },
      });

      const {data} = response.data;
      setUsers(data);
      setLoadin(false);
    }

    loadUsers();
  }, []);

  return (
    <Container>
      {!loading ? (
        <ListUsers
          data={users}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <User onPress={() => navigation.navigate('Details', {item})}>
              <Avatar
                source={
                  item.avatar
                    ? {uri: item.avatar}
                    : {
                        uri:
                          'https://api.adorable.io/avatars/73/abott@adorable.png',
                      }
                }
              />
              <Infos>
                <Name>{`${item.first_name} ${item.last_name}`}</Name>
                <Email>{item.email}</Email>
              </Infos>
            </User>
          )}
        />
      ) : (
        <Text style={{marginTop: 20, alignSelf: 'center'}}>Carregando....</Text>
      )}
    </Container>
  );
}

Dashboard.navigationOptions = {
  headerTitle: (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={logo} style={{alignSelf: 'center'}} />
    </View>
  ),
};
