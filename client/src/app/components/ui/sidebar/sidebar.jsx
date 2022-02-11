import React from 'react';
import Tag from '../tag/tag';

const tags = [
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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div>
          <div className="sidebar__info">
            <form className="sidebar__form">
              <input
                className="sidebar__input"
                type="text"
                name="search"
                placeholder="Найти..."
              />
              <button className="sidebar__search-btn">
                <i className="bi bi-search"></i>
              </button>
            </form>

            <div className="sidebar__social">
              <div className="sidebar__social-title">
                Ищите информцию обо мне в социальных сетях:
              </div>
              <ul className="sidebar__social-links">
                <li className="sidebar__social-link">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li className="sidebar__social-link">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="sidebar__social-link">
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar__line"></div>
          </div>
          <div className="sidebar__tags">
            <ul className="sidebar__tags-list">
              {tags.map((tag) => (
                <Tag key={tag._id} {...tag} />
              ))}
            </ul>
          </div>
        </div>
        <div className="sidebar__copyright">
          &copy; Pavel Koryakin {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
