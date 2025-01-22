
import AppContext from '@/context/context';
import { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
export default function Login() {
  const { login, setLoggedIn } = useContext(AppContext)
  console.log("login in login.tsx", login)
  return (
    <View style={{
      backgroundColor: 'black', 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
      <TouchableOpacity onPress={() => setLoggedIn(true)}>
        <Text style={{color: 'white', fontSize: 40}}>login</Text>
      </TouchableOpacity>
    </View>
  );
}
