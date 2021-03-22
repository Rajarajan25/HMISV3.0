import { gql, useQuery } from '@apollo/client';
const searchText = localStorage.getItem("searchval")
const SEARCH_STAFF = gql`
query searchInfiniteStaffs($cursor: ID) {
  searchStaff(
    searchText:"Maadhuri",
    searchFilter: ["first_name"],
    first: 1,
     cursor: $cursor) {
    edges {
      node {
        id,
        name,
        date_of_join,
    description,
    mobile_number,
    date_offset,
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
  } = useQuery(SEARCH_STAFF, {
    notifyOnNetworkStatusChange: true,
  })
  if (loading && !data) return { searchStaff: [], loading }
  const loadMore = () => {
    return fetchMore({
      query: SEARCH_STAFF,
      notifyOnNetworkStatusChange: true,
      variables: {
        searchText: searchText,
        cursor: data.searchStaff.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newEdges = fetchMoreResult.searchStaff.edges
        const pageInfo = fetchMoreResult.searchStaff.pageInfo
        return newEdges.length
          ? {
            searchStaff: {
              __typename: previousResult.searchStaff.__typename,
              edges: [...previousResult.searchStaff.edges, ...newEdges],
              pageInfo,
            },
          }
          : previousResult
      },
    })
  }
  if (loading && !data)
  {
  return {
  
    staffs: data.staffs.edges.map(({ node }) => node),
    loading,
    loadMore,
    hasNextPage: data.staffs.pageInfo.hasNextPage,
  }
}
 
}
export default useStaffs;