import gql from 'graphql-tag';

export const GET_LOCATIONS = gql`
  query locations($orderBy: LocationOrder!, $limit: Int, $offset: Int) {
    locations(orderBy: $orderBy, limit: $limit, offset: $offset) {
      id
      name
      totalDevelopers
      totalRepositories
      languageUsage(limit: 1) {
        language {
          name
        }
      }
    }
  }
`;

export const GET_DEVELOPERS = gql`
  query location($slug: String!, $orderBy: DeveloperOrder!, $limit: Int, $offset: Int) {
    location(slug: $slug) {
      name
      stats {
        rank
      }
      developers(orderBy: $orderBy, limit: $limit, offset: $offset) {
        name
        avatarUrl
        totalStarred
        followers
      }
    }
  }
`;
