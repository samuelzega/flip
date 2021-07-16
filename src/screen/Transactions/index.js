import React, {useEffect, useState, useContext, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {getTransaction} from '../../api';
import {TransactionContext} from '../../context/transaction';
import {Card, RadioButton} from '../../components';
import styles from './style';
import {sortTransaction} from '../../helper';

export default function Transactions({navigation}) {
  const [state, dispatch] = useContext(TransactionContext);
  useEffect(() => {
    getAllTransaction();
  }, []);
  const [transactions, setTransactions] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedSort, setSelectedSort] = useState(0);

  const getAllTransaction = async () => {
    try {
      const response = await getTransaction(TransactionContext);
      const responseToArray = Object.keys(response).map(transaction => ({
        ...response[transaction],
      }));
      setTransactions(responseToArray);
      dispatch({
        type: 'SET_TRANSACTIONS',
        payload: responseToArray,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const search = useCallback(
    (text = searchText) => {
      const filteredData = state.transactions.filter(
        element =>
          element.beneficiary_name.toUpperCase().includes(text.toUpperCase()) ||
          element.sender_bank.toUpperCase().includes(text.toUpperCase()) ||
          element.beneficiary_bank.toUpperCase().includes(text.toUpperCase()) ||
          element.amount.toString().toUpperCase().includes(text.toUpperCase()),
      );
      const sorted = sortTransaction(filteredData, selectedSort);
      setTransactions(sorted);
    },
    [searchText],
  );

  const sortAction = number => {
    // console.log(transactions);
    const sorted = sortTransaction(transactions, number);
    setTransactions(sorted);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          console.log('modal province closed');
        }}>
        <TouchableOpacity
          onPress={() => setShowModal(false)}
          style={styles.modalWrapper}>
          <View style={styles.modalContainer}>
            {sortOption.map((title, index) => (
              <TouchableOpacity
                onPress={() => {
                  sortAction(+index);
                  setSelectedSort(+index);
                  setShowModal(false);
                }}
                style={styles.listContainer}
                key={index}>
                <View style={styles.roundWrapper}>
                  {selectedSort == index && <View style={styles.roundChild} />}
                </View>
                <Text style={styles.rBtitle}>{title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
      <FlatList
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <Image
              source={require('../../asset/search.png')}
              style={styles.headerIcon}
            />
            <TextInput
              value={searchText}
              onChangeText={text => {
                setSearchText(text);
                search(text);
              }}
              style={styles.textInput}
              placeholder="Cari nama, bank, atau nominal"
            />
            <TouchableOpacity
              onPress={() => setShowModal(true)}
              style={{
                position: 'absolute',
                right: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'orange',
                  fontWeight: 'bold',
                  maxWidth: 60,
                  textAlign: 'center',
                }}>
                {sortOption[selectedSort]}
              </Text>
              <Text style={{color: 'orange', fontWeight: 'bold'}}> ▼</Text>
            </TouchableOpacity>
          </View>
        }
        style={styles.container}
        data={transactions}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card
            transaction={item}
            action={() =>
              navigation.navigate('TransactionDetail', {transaction: item})
            }
          />
        )}
        ListFooterComponent={<View style={{margin: 20}} />}
      />
    </View>
  );
}

const sortOption = [
  'Urutkan',
  'Nama A-Z',
  'Nama Z-A',
  'Tanggal Terbaru',
  'Tanggal Terlama',
];
