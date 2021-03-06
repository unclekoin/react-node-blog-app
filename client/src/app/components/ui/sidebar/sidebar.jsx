import React from 'react';
import { useSearch } from '../../../hooks/use-search'
import TagsList from '../tags-list/tags-list';

const Sidebar = () => {
  const { query, changeQuery } = useSearch();
  const handleChange = (e) => {
    changeQuery(e.target.value);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div>
          <div className="sidebar__info">
            <div className="sidebar__form">
              <input
                onChange={handleChange}
                className="sidebar__input"
                type="text"
                name="search"
                value={query}
                placeholder="Найти..."
              />
              <div className="sidebar__search-btn">
                <i className="bi bi-search"></i>
              </div>
            </div>

            <div className="sidebar__social">
              <div className="sidebar__social-title">
                Ищите информцию о нас в социальных сетях:
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
              <TagsList />
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
