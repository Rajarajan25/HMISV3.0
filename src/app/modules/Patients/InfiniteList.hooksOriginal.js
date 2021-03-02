import { gql, useQuery } from '@apollo/client';
import React, { useState, useContext, useEffect } from 'react';
const GET_PERSONS = gql`
query getInfiniteStaffs($cursor: ID) {
  staffs(first: 5, cursor: $cursor) {
    edges {
      node {
        id,
        name,
    description,
    mobile_number,
    email_signature,
    clients_served_sametime,
    staff_booking_page,
    display_provider_booking_page,
    login_Allowed,
    email_verification,
    active_status,
    avatar_path,
    more_options{
      security,
      accept_appointments,
      flexible_notifications,
      book_soon_notification_system,
      twoway_google_calendar_sync,
      twoway_office365_calendar_sync,
      specific_color_calendar,
      oneway_apple,
      oneway_mobile,
      oneway_office365,
      oneway_google_sync,
      color_option_enable,
      specific_color_calendar
    },
    services{
      id,
      name
    }
    locations{
      _id,
      id,
			name,
			timings{
        _id,
				work_day_id,
        work_day_name,
        start_time,
        end_time
        breaktime {
          start_time,
          end_time
        }
			}
		}
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
`
function useStaffs() {
  const {
    data,
    loading,
    fetchMore,
  } = useQuery(GET_PERSONS, {
    notifyOnNetworkStatusChange: true,
  })
  if (loading && !data) return { staffs: [], loading }
  const loadMore = () => {
    return fetchMore({
      query: GET_PERSONS,
      notifyOnNetworkStatusChange: true,
      variables: {
        cursor: data.staffs.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newEdges = fetchMoreResult.staffs.edges
        const pageInfo = fetchMoreResult.staffs.pageInfo
        return newEdges.length
          ? {
            staffs: {
              __typename: previousResult.staffs.__typename,
              edges: [...previousResult.staffs.edges, ...newEdges],
              pageInfo,
            },
          }
          : previousResult
      },
    })
  }
  if (loading || !data) {
    return {
      staffs: {},
      loading,
      loadMore,
      hasNextPage: {},
    }
  }
  else {
    return {
      staffs: data.staffs.edges.map(({ node }) => node),
      loading,
      loadMore,
      hasNextPage: data.staffs.pageInfo.hasNextPage,
    }
  }
}
export default useStaffs;