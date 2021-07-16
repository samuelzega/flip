const sortArray = (array, number) => {
  console.log(number);
  if (number == 0) {
    return array;
  } else if (number == 1) {
    //sort by name a-z
    const sortAZ = array.sort((a, b) =>
      a.beneficiary_name > b.beneficiary_name ? 1 : -1,
    );
    console.log(sortAZ);
    return sortAZ;
  } else if (number == 2) {
    //sort by name z-a
    const sortZA = array.sort((a, b) =>
      a.beneficiary_name < b.beneficiary_name ? 1 : -1,
    );
    return sortZA;
  } else if (number == 3) {
    //sort by date future-past
    const newest = array.sort((a, b) => {
      const newDateA = a.created_at.split(' ');
      const newDateB = b.created_at.split(' ');
      return new Date(newDateB[0]) - new Date(newDateA[0]);
    });
    return newest;
  } else if (number == 4) {
    //sort by date past - future
    const oldest = array.sort((a, b) => {
      const newDateA = a.created_at.split(' ');
      const newDateB = b.created_at.split(' ');
      return new Date(newDateA[0]) - new Date(newDateB[0]);
    });
    return oldest;
  }
  return array;
};

export default sortArray;
