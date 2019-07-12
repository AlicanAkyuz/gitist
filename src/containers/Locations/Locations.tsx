import React, { FunctionComponent } from 'react';
import { Query } from 'react-apollo';
import { GET_LOCATIONS } from '../../queries';

import Location from '../../components/Location';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

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
}

interface Variables {
  limit: number;
  offset: number;
  orderBy: object;
}

const Locations: React.FunctionComponent = () => (
  <Query<Data, Variables>
    query={GET_LOCATIONS}
    variables={{
      limit: 5,
      offset: 0,
      orderBy: { direction: 'DESC', field: 'SCORE' },
    }}
  >
    {({ data, loading, error, fetchMore }) => {
      if (error) return <Error />;
      if (loading || !data) return <Loading />;
      let offset = 0;
      const { locations } = data;
      return (
        <Location
          locations={locations}
          onLoadMore={async () => {
            offset = offset + 5;
            try {
              await fetchMore({
                variables: { offset },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if (!fetchMoreResult) return prev;
                  let newData = JSON.parse(JSON.stringify(prev));
                  newData.locations = Object.assign(
                    [],
                    [...prev.locations, ...fetchMoreResult.locations],
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
export default Locations;
