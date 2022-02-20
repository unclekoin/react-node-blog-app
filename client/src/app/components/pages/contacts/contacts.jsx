import React from 'react';
import Static from '../../../layouts/static/static';
import build from '../../../../assets/images/building.jpeg';
import map from '../../../../assets/images/map.jpeg';

function Contacts() {
  return (
    <div>
      <Static title="Контакты">
        <div className="contacts__image-container">
          <img className="contacts__image" src={build} alt="build" />
        </div>
        <div className="contacts__map-container">
          <img className="contacts__map" src={map} alt="map" />
        </div>
      </Static>
    </div>
  );
}

export default Contacts;
