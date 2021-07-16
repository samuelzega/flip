const convertToDateString = string => {
  const splitresult = string.split(' ');
  const newDate = new Date(splitresult[0]);
  const day = newDate.getDate();
  //   const month = newDate.getMonth();
  const year = newDate.getFullYear();
  return (
    newDate.getDate() +
    ' ' +
    month[newDate.getMonth()] +
    ' ' +
    newDate.getFullYear()
  );
};

const month = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];
export default convertToDateString;
