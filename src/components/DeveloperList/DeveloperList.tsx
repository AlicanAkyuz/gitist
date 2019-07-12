import React, { FunctionComponent, Fragment, useEffect } from 'react';
import '../../scss/styles.css';

import handleUserScroll from '../../utils/handleUserScroll';

interface Data {
  location: {
    stats: {
      rank: number;
    };
    name: string;
    developers: [
      {
        totalStarred: number;
        name: string;
        followers: number;
        avatarUrl: string;
      },
    ];
  };
  onLoadMore(): object;
}

const DeveloperList: FunctionComponent<Data> = ({ location, onLoadMore }) => {
  useEffect(() => {
    window.addEventListener('scroll', () => handleUserScroll(onLoadMore));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div className="city-info">
        <h1>{location.name}</h1>
        <h4>Şehir Türkiye Sıralaması: {location.stats.rank}</h4>
      </div>

      <ul className="developer-list">
        {location.developers.map((dev, idx) => {
          return (
            <li key={idx}>
              <img src={dev.avatarUrl} alt={`${dev.name}'s avatarı`} />
              <h1>{dev.name}</h1>
              <h4>Star Sayısı: {dev.totalStarred}</h4>
              <h4>Takipçi Sayısı: {dev.followers}</h4>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};
export default DeveloperList;
