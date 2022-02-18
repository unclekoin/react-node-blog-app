const getTimeToRead = (data) => {
  const array = data.map((item) => item.content);
  const minutes = Math.ceil(
    array
      .map((item) => {
        return item.split(' ').length;
      })
      .reduce((sum, num) => sum + num, 0) / 150
  );
  return getText(minutes);
};

const getText = (number) => {
  let text = '';
  const numbers = [2, 3, 4];
  if (!(number > 10 && number < 14)) {
    if (number % 10 === 1) {
      text = 'минута';
    } else if (numbers.includes(number % 10)) {
      text = 'минуты';
    } else {
      text = 'минут';
    }
  }
  return `${number} ${text} на чтение`;
};

export default getTimeToRead;
