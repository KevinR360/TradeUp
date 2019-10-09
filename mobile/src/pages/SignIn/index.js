import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import logo from '../../assets/logo.png';

import {signInRequest} from '../../store/modules/auth/actions';

import {Container, Input, Image, SubmitButton, TextButton} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Image source={logo} resizeMode="contain" />
      <Input
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Digite seu e-mail"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current.focus()}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        secureTextEntry
        ref={passwordRef}
        placeholder="Sua senha secreta"
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
        value={password}
        onChangeText={setPassword}
      />
      <SubmitButton onPress={handleSubmit}>
        {loading ? (
          <TextButton style={{opacity: 0.6}}>Carregando....</TextButton>
        ) : (
          <TextButton>Entrar</TextButton>
        )}
      </SubmitButton>
    </Container>
  );
}
