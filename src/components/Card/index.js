import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ConvertToRp, ConvertToDateString} from '../../helper';
import styles from './style';

function Card({transaction, action}) {
  return (
    <TouchableOpacity
      onPress={action}
      style={[
        styles.container,
        transaction.status === 'SUCCESS'
          ? styles.borderGreen
          : styles.borderOrange,
      ]}>
      <View style={styles.left}>
        <Text style={styles.bank}>
          <Text style={{fontWeight: 'bold'}}>{transaction.sender_bank}</Text> ➜{' '}
          <Text style={{fontWeight: 'bold'}}>
            {transaction.beneficiary_bank}
          </Text>
        </Text>
        <Text style={styles.name}>{transaction.beneficiary_name}</Text>
        <Text style={styles.price}>
          Rp{ConvertToRp(transaction.amount)}{' '}
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            •
          </Text>{' '}
          {ConvertToDateString(transaction.created_at)}
        </Text>
      </View>
      <View style={styles.right}>
        <View
          style={[
            styles.button,
            transaction.status === 'SUCCESS'
              ? styles.successButton
              : styles.pendingButton,
          ]}>
          <Text
            style={[
              styles.textButton,
              transaction.status === 'SUCCESS'
                ? styles.successText
                : styles.pendingText,
            ]}>
            {transaction.status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(Card);
