import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import { Container, Form, SubmitButton, Input, List } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class Main extends Component {

  state = {
    users: {
      newUser: '',
      users: [],
    },
  }

  handleAddUser = async () => {
    const { users, newUser } = this.state;
    const response = await api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    this.setState({
      users: [ ...users, data],
      newUser: '',
    });


    Keyboard.dismiss();

  }

  render() {
    const { users, newUser } = this.state;

    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Container>
        <Form>
          <Input
            autoCorrect = { false }
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />

          <SubmitButton onPress = { this.handleAddUser }>
            <Icon name = "add" size = {20} color = "#FFF" />
          </SubmitButton>
        </Form>

        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({ item }) => (
            <User>
              <Avatar source = {{ uri: item.avatar }}/>
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <ProfileButton onPress={() => {}}>
                <ProfileButtonText>Ver perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />

      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Usuarios',
}
