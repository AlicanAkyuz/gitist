import React, { FunctionComponent, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../../scss/styles.css';

import cleanUpTurkishChars from '../../utils/cleanUpTurkishChars';
import handleScroll from '../../utils/handleScroll';

interface Data {
  locations: [
    {
      name: string;
      totalDevelopers: number;
      totalRepositories: number;
      languageUsage: [
        {
          language: {
            name: string;
          };
        },
      ];
    },
  ];
  onLoadMore(): object;
}

const Location: FunctionComponent<Data> = ({ locations, onLoadMore }) => {
  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll(onLoadMore));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <ul>
        {locations.map((loc, idx) => {
          return (
            <li key={idx}>
              <Link
                onClick={() => localStorage.setItem('city', cleanUpTurkishChars(loc.name))}
                to="/feed"
              >
                <button className="button-text">{loc.name}</button>
              </Link>

              <h4>Geliştirici Sayısı: {loc.totalDevelopers}</h4>
              <h4>Repo Sayısı: {loc.totalRepositories}</h4>
              {loc.languageUsage.map(lang => (
                <h4 key={idx}>En Çok Kullanılan Dil: {lang.language.name}</h4>
              ))}
              <Link
                onClick={() => localStorage.setItem('city', cleanUpTurkishChars(loc.name))}
                to="/feed"
              >
                <button>Detaylarını Gör</button>
              </Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default Location;
