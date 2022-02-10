export const getLocalDate = () => {
  return (
    new Date()
      .toLocaleString('ru', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      .slice(0, -1) + 'ода'
  );
};
