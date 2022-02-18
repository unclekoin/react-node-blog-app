const displayDate = (date) => {
  return (
    new Date(date)
      .toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      .slice(0, -1) + 'ода'
  );
}

export default displayDate;