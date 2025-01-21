
import { StyleSheet, View, Text } from 'react-native';
export default function Login() {

  return (
    <View style={{backgroundColor: 'black', flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text style={{color: 'white'}}>hllo</Text></View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
