import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {ConvertToRp, ConvertToDateString} from '../../helper';
import Clipboard from '@react-native-clipboard/clipboard';

export default function TransactionDetail({navigation, route: {params}}) {
  const copyToClipboard = () => {
    Clipboard.setString(params.transaction.id);
  };
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.title}>ID TRANSAKSI: #{params.transaction.id}</Text>
        <TouchableOpacity onPress={copyToClipboard} style={{marginStart: 10}}>
          <Image
            source={require('../../asset/copy.png')}
            style={styles.copyIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.title}>DETAIL TRANSAKSI</Text>
        <Text style={styles.tutupText}>Tutup</Text>
      </View>
      <View style={styles.separator} />
      <Text style={styles.descTitle}>
        {params.transaction.sender_bank} ➜ {params.transaction.beneficiary_bank}
      </Text>
      <View style={styles.descBox}>
        <View style={styles.flex1}>
          <Text style={styles.subtitle}>
            {params.transaction.beneficiary_name}
          </Text>
          <Text style={styles.desc}>{params.transaction.account_number}</Text>
        </View>
        <View style={styles.flex2}>
          <Text style={styles.subtitle}>Nominal</Text>
          <Text style={styles.desc}>{params.transaction.account_number}</Text>
        </View>
      </View>
      <View style={styles.descBox}>
        <View style={styles.flex1}>
          <Text style={styles.subtitle}>Berita Transfer</Text>
          <Text style={styles.desc}>{params.transaction.remark}</Text>
        </View>
        <View style={styles.flex2}>
          <Text style={styles.subtitle}>Kode Unik</Text>
          <Text style={styles.desc}>{params.transaction.unique_code}</Text>
        </View>
      </View>
      <View style={styles.descBox}>
        <View style={styles.flex1}>
          <Text style={styles.subtitle}>Jumlah</Text>
          <Text style={styles.desc}>
            Rp{ConvertToRp(params.transaction.amount)}
          </Text>
        </View>
        <View style={styles.flex2}>
          <Text style={styles.subtitle}>Biaya Transfer</Text>
          <Text style={styles.desc}>
            Rp{ConvertToRp(params.transaction.fee)}
          </Text>
        </View>
      </View>
      <View style={styles.descBox}>
        <View style={styles.flex1}>
          <Text style={styles.subtitle}>Waktu Dibuat</Text>
          <Text style={styles.desc}>
            {ConvertToDateString(params.transaction.created_at)}
          </Text>
        </View>
        <View style={styles.flex2}>
          <Text style={styles.subtitle}>Waktu Selesai</Text>
          <Text style={styles.desc}>
            {ConvertToDateString(params.transaction.completed_at)}
          </Text>
        </View>
      </View>
      <View style={styles.descBox}>
        <View style={styles.flex1}>
          <Text style={styles.subtitle}>Status</Text>
          <Text style={styles.desc}>{params.transaction.status}</Text>
        </View>
      </View>
    </View>
  );
}
