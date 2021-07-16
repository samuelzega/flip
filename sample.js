const data = {
  FT77438: {
    id: 'FT77438',
    amount: 2757362,
    unique_code: 326,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '2098177042',
    beneficiary_name: 'Miranda Bannister',
    beneficiary_bank: 'muamalat',
    remark: 'sample remark',
    created_at: '2021-07-14 13:39:10',
    completed_at: '2021-07-14 13:39:10',
    fee: 0,
  },
  FT67714: {
    id: 'FT67714',
    amount: 1592462,
    unique_code: 840,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '9316890482',
    beneficiary_name: 'Sufyan Kramer',
    beneficiary_bank: 'mandiri',
    remark: 'sample remark',
    created_at: '2021-07-14 13:38:10',
    completed_at: '2021-07-14 13:39:10',
    fee: 0,
  },
  FT83770: {
    id: 'FT83770',
    amount: 1636588,
    unique_code: 714,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '7389028769',
    beneficiary_name: 'Sammy-Jo Mccall',
    beneficiary_bank: 'muamalat',
    remark: 'sample remark',
    created_at: '2021-07-14 13:37:10',
    completed_at: '2021-07-14 13:39:10',
    fee: 0,
  },
  FT3560: {
    id: 'FT3560',
    amount: 305394,
    unique_code: 478,
    status: 'PENDING',
    sender_bank: 'bni',
    account_number: '1500173726',
    beneficiary_name: 'Hal Matthams',
    beneficiary_bank: 'btpn',
    remark: 'sample remark',
    created_at: '2021-07-13 10:39:10',
    completed_at: '2021-07-14 13:39:10',
    fee: 0,
  },
  FT97709: {
    id: 'FT97709',
    amount: 1255062,
    unique_code: 763,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '1960331618',
    beneficiary_name: 'Selin Dawe',
    beneficiary_bank: 'bsm',
    remark: 'sample remark',
    created_at: '2021-07-12 09:39:10',
    completed_at: '2021-07-14 13:39:10',
    fee: 0,
  },
  FT92531: {
    id: 'FT92531',
    amount: 3088522,
    unique_code: 856,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '3623275029',
    beneficiary_name: 'Jake Castillo',
    beneficiary_bank: 'muamalat',
    remark: 'sample remark',
    created_at: '2021-07-11 08:39:10',
    completed_at: '2021-07-14 13:39:10',
    fee: 0,
  },
  FT8851: {
    id: 'FT8851',
    amount: 2735017,
    unique_code: 563,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '3729123518',
    beneficiary_name: 'Hal Matthams',
    beneficiary_bank: 'mandiri',
    remark: 'sample remark',
    created_at: '2021-07-10 07:39:10',
    completed_at: '2021-07-14 13:39:10',
    fee: 0,
  },
  FT5614: {
    id: 'FT5614',
    amount: 1354246,
    unique_code: 602,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '7924083641',
    beneficiary_name: 'Jethro Cox',
    beneficiary_bank: 'btpn',
    remark: 'sample remark',
    created_at: '2021-07-09 06:39:10',
    completed_at: '2021-07-14 13:39:10',
    fee: 0,
  },
  FT83820: {
    id: 'FT83820',
    amount: 2236536,
    unique_code: 354,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '7091321162',
    beneficiary_name: 'Rhiannan Simmons',
    beneficiary_bank: 'muamalat',
    remark: 'sample remark',
    created_at: '2021-07-08 05:39:10',
    completed_at: '2021-07-14 13:39:10',
    fee: 0,
  },
  FT80107: {
    id: 'FT80107',
    amount: 3625896,
    unique_code: 672,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '6652733957',
    beneficiary_name: 'Hal Matthams',
    beneficiary_bank: 'bca',
    remark: 'sample remark',
    created_at: '2021-07-07 04:39:10',
    completed_at: '2021-07-14 13:39:10',
    fee: 0,
  },
};

const newData = Object.keys(data).map(id => ({
  ...data[id],
}));
// console.log(newData)

// const query = '3625';

// const filteredData = newData.filter(
//   element =>
//     element.beneficiary_name.toUpperCase().includes(query.toUpperCase()) ||
//     element.sender_bank.toUpperCase().includes(query.toUpperCase()) ||
//     element.beneficiary_bank.toUpperCase().includes(query.toUpperCase()) ||
//     element.amount.toString().toUpperCase().includes(query.toUpperCase()),
// );

// const newDate = new Date();
// var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
// var today = new Date(data.FT3560.created_at);

// console.log(today.toLocaleDateString('en-US')); // 9/17/2016
// console.log(today.toLocaleDateString('en-US', options)); // Saturday, September 17, 2016
// console.log(today.toLocaleDateString('hi-IN', options));

const tanggalTerlama = newData.sort(
  (a, b) => new Date(a.created_at) - new Date(b.created_at),
);
const tanggalTerbaru = newData.sort(
  (a, b) => new Date(b.created_at) - new Date(a.created_at),
);

const sortAZ = newData.sort((a, b) =>
  a.beneficiary_name > b.beneficiary_name ? 1 : -1,
);

const sortZA = newData.sort((a, b) =>
  a.beneficiary_name < b.beneficiary_name ? 1 : -1,
);

console.log(sortAZ);
