export const users = [
  {
    _id: '67rdca3eeb7f6fgeed471819',
    name: 'Шелдон Купер',
    email: 'mindgames6878@phis.tech',
    password: '$8^M_LfY',
    image: 'https://smepayroll.com/img/testimonial/People_Business-03.png',
    favorites: []
  },
  {
    _id: '67rdca3eeb7f6fgeed471820',
    name: 'Леонард Хофстедтер',
    email: 'mindes000@phis.tech',
    password: '75gHX^Tj',
    image: 'https://www.shareicon.net/data/2016/05/24/770124_man_512x512.png',
    favorites: []
  },
  {
    _id: '67rdca3eeb7f6fgeed471821',
    name: 'Говард Воловиц',
    email: 'gov1903@phis.tech',
    password: 'k2+HWHq^',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Creative-Tail-People-superman.svg/768px-Creative-Tail-People-superman.svg.png',
    favorites: []
  },
  {
    _id: '67rdca3eeb7f6fgeed471822',
    name: 'Никола Тесла',
    email: 'electro@underground.tech',
    password: 'K2vVmM^Z',
    image: 'https://avishkar.eduapp.in/pages_admin/clients/chintamani/student/profile.png',
    favorites: []
  },
];

export const getUserById = (id) => {
  return users.find((user) => user._id === id);
}
