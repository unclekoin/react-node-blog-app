export const tags = [
  {
    _id: '67rdca3eeb7f6fgeed471198',
    name: 'JavaScript',
  },
  {
    _id: '67rdca3eeb7f6fgeed471100',
    name: 'HTML',
  },
  {
    _id: '67rdca3eeb7f6fgeed4711012',
    name: 'Frontend Development',
  },
  {
    _id: '67rdca3eeb7f6fgeed471101',
    name: 'Code',
  },
  {
    _id: '67rdca3eeb7f6fgeed471102',
    name: 'React',
  },
  {
    _id: '67rdca3eeb7f6fgeed471103',
    name: 'Programming',
  },
  {
    _id: '67rdca3eeb7f6fgeed474563',
    name: 'Node.js',
  },
  {
    _id: '67rdca3eeb7f6fgeed478219',
    name: 'CSS',
  },
  {
    _id: '67rdca3eeb7f6fgeed475236',
    name: 'Web Development',
  },
  {
    _id: '67rdca3eeb7f6fgeed477312',
    name: 'Backend Development',
  },
  {
    _id: '67rdca3eeb7f6fgeed475533',
    name: 'Redux',
  },
  {
    _id: '67rdca3eeb7f6fgeed472386',
    name: 'Next.js',
  },
];

export const getTagById = (tagId) => {
  return tags.find((tag) => tag._id === tagId);
};
