import React, { FunctionComponent } from 'react';
import { Query } from 'react-apollo';
import { GET_DEVELOPERS } from '../../queries';

import Developer from '../../components/Developer';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

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

interface Variables {
  slug: string | null;
  limit: number;
  offset: number;
  orderBy: object;
}

const Developers: FunctionComponent = () => {
  let city = localStorage.getItem('city');
  return (
    <Query<Data, Variables>
      query={GET_DEVELOPERS}
      variables={{
        slug: city,
        orderBy: { direction: 'DESC', field: 'TOTAL_STARRED' },
        limit: 5,
        offset: 0,
      }}
    >
      {({ data, loading, error, fetchMore }) => {
        if (loading || !data) return <Loading />;
        if (error) return <Error />;
        const { location } = data;
        return <Developer location={location} />;
      }}
    </Query>
  );
};

export default Developers;
