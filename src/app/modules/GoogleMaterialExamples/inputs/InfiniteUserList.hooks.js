import { useQuery } from '@apollo/react-hooks';
import React, { useState, useContext, useEffect } from 'react';
import { gql } from 'apollo-boost';
import NetworkError from './NetworkError';
const GET_USER = gql`
query getInfiniteUsers($cursor: ID) {
  users(first: 5, cursor: $cursor) {
    edges {
        node {
            name
            id
            type
            email
            password
            phone_num
            previlidge
      }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
  }
}
`
function useUser() {
  const {
    data,
    loading,
    fetchMore,
  } = useQuery(GET_USER, {
    notifyOnNetworkStatusChange: true,
  })
  if (loading && !data) return { users: [], loading }
  const loadMore = () => {
    return fetchMore({
      query: GET_USER,
      notifyOnNetworkStatusChange: true,
      variables: {
        cursor: data.users.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newEdges = fetchMoreResult.users.edges
        const pageInfo = fetchMoreResult.users.pageInfo
        return newEdges.length
          ? {
            users: {
              __typename: previousResult.users.__typename,
              edges: [...previousResult.users.edges, ...newEdges],
              pageInfo,
            },
          }
          : previousResult
      },
    })
  }
  if( loading || !data)
  {
  return{
    users:{},
    loading,
    loadMore,
    hasNextPage: {},
  }
  }
  else{  return {
    users: data.users.edges.map(({ node }) => node),
    loading,
    loadMore,
    hasNextPage: data.users.pageInfo.hasNextPage,
  }
}
}
export default useUser;