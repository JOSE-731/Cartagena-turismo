import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <>
      <ScrollView>

        <View style={styles.container}>
          <Image style={styles.banner} source={require('./assets/cartagena1.jpeg')} />
        </View>

        <View style={styles.container2}>
          <Text style={styles.texto1}>¿Que hacer en Cartagena?</Text>
          <ScrollView horizontal>
            <View>
              <Image style={styles.ciudad} source={require('./assets/indiaCatalina.jpg')} />
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./assets/actividad1.jpg')} />
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./assets/isla.jpg')} />
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./assets/centro1.jpg')} />
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./assets/rey.jpeg')} />
            </View>
            <View>
              <Image style={styles.bazurto} source={require('./assets/bazurto.jpg')} />
            </View>
            <View>
              <Image style={styles.acuario} source={require('./assets/acuario.jpg')} />
            </View>
            <View>
              <Image style={styles.cerro} source={require('./assets/cerroSanfelipe.jpg')} />
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./assets/centro2.jpeg')} />
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./assets/acuario2.jpg')} />
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./assets/aviario.jpg')} />
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./assets/comida.jpg')} />
            </View>
            <View>
              <Image style={styles.playa} source={require('./assets/playasBlanca.jpg')} />
            </View>
            <View>
              <Image style={styles.botas} source={require('./assets/botasViejas.jpg')} />
            </View>
          </ScrollView>

          <Text style={styles.texto1}>Mejores alojamientos</Text>
          <View>
            <Image style={styles.destinos} source={require('./assets/hilton.jpg')} />
          </View>
          <View>
            <Image style={styles.destinos} source={require('./assets/hotel.jpeg')} />
          </View>
          <View>
            <Image style={styles.destinos} source={require('./assets/hotel2.jpeg')} />
          </View>

          <Text style={styles.texto1}>Hospedajes en Cartagena</Text>
          <View style={styles.items}>
            <View style={styles.listado}>
              <Image style={styles.destinos} source={require('./assets/hospedajeCartagena2.jpg')} />
            </View>
            <View style={styles.listado}>
              <Image style={styles.destinos} source={require('./assets/hospedaje2.jpg')} />
            </View>
            <View style={styles.listado}>
              <Image style={styles.destinos} source={require('./assets/hospedaje3.jpg')} />
            </View>
            <View style={styles.listado}>
              <Image style={styles.destinos} source={require('./assets/hospedajeCartagena.jpg')} />
            </View>
          </View>

        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  banner: {
    height: 550,
    flex: 1
  },
  texto1: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20
  },
  container2: {
    paddingHorizontal: 20
  },
  ciudad: {
    height: 450,
    width: 450,
    marginRight: 10
  },
  destinos: {
    height: 200,
    width: '100%',
    marginVertical: 5
  },
  items: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  listado: {
    flexBasis: '48%'
  },
  acuario: {
    height: 450,
    width: 650,
    marginRight: 10
  },
  bazurto:{
    height: 450,
    width: 850,
    marginRight: 10
  },
   playa:{
    height: 450,
    width: 850,
    marginRight: 10
  },
  botas:{
    height: 450,
    width: 850,
    marginRight: 10
  },
  cerro: {
    height: 450,
    width: 650,
    marginRight: 10
  }
});
