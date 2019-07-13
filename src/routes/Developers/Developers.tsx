import React, { FunctionComponent } from 'react';
import { Query } from 'react-apollo';
import { GET_DEVELOPERS } from '../../queries';

import DeveloperList from '../../components/DeveloperList';
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
  offset: number | [];
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
        if (error) return <Error />;
        if (loading || !data) return <Loading />;
        let offset = 0;
        const { location } = data;
        return (
          <DeveloperList
            location={location}
            onLoadMore={async () => {
              try {
                offset = offset + 5;
                await fetchMore({
                  variables: { offset },
                  updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    let newData = JSON.parse(JSON.stringify(prev));
                    newData.location.developers = Object.assign(
                      [],
                      [...prev.location.developers, ...fetchMoreResult.location.developers],
                    );
                    return newData;
                  },
                });
              } catch (err) {
                console.log('err');
                // When the variables of <Query> changes while a fetchMore is still in progress, we get this error: ObservableQuery with this id does not exist: id on unmounted component, which is an open issue: https://github.com/apollographql/apollo-client/issues/4114
              }
            }}
          />
        );
      }}
    </Query>
  );
};

export default Developers;
