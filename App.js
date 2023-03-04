import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function App() {
  return (
    <View style={style.black}>
      <Image
        source={{
          uri: 'https://avatars.githubusercontent.com/u/93644599?s=400&u=3edebecc08c120b69740044da5cba6270b78d826&v=4',
        }}
        style={style.img}
      />

      <Text style={style.titleMaster}> Dados pessoais:</Text>
      <Text style={style.subtitle} >Maycon Vieira Mendes</Text>
      <Text style={style.subtitle} >mendesmaycon77@gmail.com</Text>
      <Text style={style.titleMaster}> Formação:</Text>
      <Text style={style.subtitle}>Técnico em Desenvolvimento de Sistemas</Text>
      <Text style={style.titleMaster}> Experiência:</Text>
      <Text style={style.subtitle}>Edubrahub 4 meses</Text>
      <Text style={style.subtitle}>Webjump quase 1 ano e até o momento</Text>
      <Text style={style.titleMaster}> Projetos:</Text>
      <Text style={style.subtitle}>A.Dias</Text>
      <Text style={style.subtitle}>Broto</Text>
      <Text style={style.subtitle}>BetterDrinks</Text>
      <Text style={style.subtitle}>Obramax</Text>
      <Text style={style.subtitle}>Nestlé(é o meu projeto atual)</Text>
    </View>
  );
}

const style = StyleSheet.create({
  titleMaster: {
    fontSize: 20,
    color: '#000',
    fontWeight: 700,
    marginTop: 5,
    marginLeft: 20
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
    fontWeight: 500,
    marginLeft:20
  },
  img: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginTop: 20,
  },
  black: {
    backgroundColor: '#ccc',
    width: '100%',
    height: '100%'
  }
});

export default App;
