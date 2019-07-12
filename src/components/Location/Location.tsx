import React, { FunctionComponent, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../../scss/styles.css';

import cleanUpTurkishChars from '../../utils/cleanUpTurkishChars';
import handleScroll from '../../utils/HandleScroll';

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
  }, []);

  return (
    <Fragment>
      <ul>
        {locations.map((loc, idx) => {
          return (
            <li key={idx}>
              <Link
                to="/feed"
                onClick={() => localStorage.setItem('city', cleanUpTurkishChars(loc.name))}
              >
                <button className="button-text">{loc.name}</button>
              </Link>

              <h4>Geliştirici Sayısı: {loc.totalDevelopers}</h4>
              <h4>Repo Sayısı: {loc.totalRepositories}</h4>
              {loc.languageUsage.map(lang => (
                <h4 key={idx}>Favori Dil: {lang.language.name}</h4>
              ))}
              <Link
                to="/feed"
                onClick={() => localStorage.setItem('city', cleanUpTurkishChars(loc.name))}
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
