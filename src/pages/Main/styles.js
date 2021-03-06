import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;


export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #ddd;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #ddd;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
`;

export const List = styled.FlatList.attrs({

})`
  margin-top: 20px;
`;


export const User = styled.View``;
export const Avatar = styled.Image``;
export const Name = styled.Text``;
export const Bio = styled.Text``;
export const ProfileButton = styled(RectButton)``;
export const ProfileButtonText = styled.Text``;
