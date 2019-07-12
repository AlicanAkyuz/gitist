import React, { FunctionComponent, Fragment } from 'react';

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
}

const Developer: FunctionComponent<Data> = ({ location }) => (
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

export default Developer;
