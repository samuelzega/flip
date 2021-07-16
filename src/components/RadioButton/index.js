import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './style';

const data = [
  'Urutkan',
  'Nama A-Z',
  'Nama Z-A',
  'Tanggal Terbaru',
  'Tanggal Terlama',
];

export default function RadioButton({listData = data, action}) {
  const [selected, setSelected] = useState(0);
  return listData.map((title, index) => (
    <TouchableOpacity
      onPress={() => console.log(index)}
      style={styles.listContainer}
      key={index}>
      <View style={styles.roundWrapper}>
        {selected == index && <View style={styles.roundChild} />}
      </View>
      <Text style={styles.rBtitle}>{title}</Text>
    </TouchableOpacity>
  ));
}
