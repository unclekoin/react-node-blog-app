const checkConfig = (name) => {
  const result = {};

  switch (name) {
    case 'name': {
      result.required = 'Поле обязательно для заполнения';
      result.minLength = {
        value: 5,
        message: 'Имя должно содержать не менее 5 символов',
      };
      break;
    }
    case 'email':
      result.required = 'Поле обязательно для заполнения';
      result.pattern = {
        value: /^\S+@\S+\.\S+$/g,
        message: 'Неверный формат электронной почты',
      };
      break;
    case 'password': {
      result.required = 'Поле обязательно для заполнения';
      result.minLength = {
        value: 8,
        message: 'Пароль не может быть короче 8 символов',
      };
      break;
    }
    default:
      break;
  }
  return result;
};

export default checkConfig;
