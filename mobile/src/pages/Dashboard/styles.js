import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ListUsers = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 5px 10px;
`;

export const User = styled.TouchableOpacity`
  height: 90px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 74px;
  width: 74px;
  margin-right: 10px;
  border-radius: 37px;
`;

export const Infos = styled.View``;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const Email = styled.Text`
  font-size: 18px;
  color: #999;
`;
