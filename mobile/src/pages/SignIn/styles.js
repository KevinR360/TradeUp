import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const Image = styled.Image`
  height: 36px;
  width: 150px;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  height: 50px;
  background: rgba(0, 0, 0, 0.05);
  border: 0;
  border-radius: 4px;
  width: 100%;
  padding: 5px;
  font-size: 16px;
  margin-bottom: 12px;
`;

export const SubmitButton = styled(RectButton)`
  background: #418bf9;
  height: 60px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 4px;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;
