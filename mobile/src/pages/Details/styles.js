import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 174px;
  height: 174px;
  margin: 30px;
  border-radius: 87px;
`;

export const Infos = styled.View`
  padding: 5px 20px;
  width: 100%;
`;

export const LabelText = styled.Text`
  color: #999;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  align-self: stretch;
`;

export const NameUser = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #418bf9;
  margin-left: 5px;
  padding: 0 5px;
`;

export const EmailUser = styled.Text`
  font-size: 20px;
  color: #418bf9;
  margin-left: 5px;
  font-weight: 400;
`;

export const Separe = styled.View`
  height: 1px;
  background: #ddd;
  margin: 20px 0;
`;
