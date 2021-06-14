import axios from 'axios'

export const  BookingURL={
    zoomMeeting:async(args) => {
        console.log('newZoom.join_url : ');
        var token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6Il9xUlVJLWpJUXh1ZTduQXRrVEpjWGciLCJleHAiOjE2Mjc2MzIzMDAsImlhdCI6MTYyMzY1Nzk5OH0.XwybYsxY76CWfRwrMrw4tc--VFqedwzihO4eJgwPxsE"
        const url = "https://api.zoom.us/v2/users/me/meetings";
        console.log(url)
        const data = {
            startDateTime: "2021-07-12T14:30:34.2444915-07:00",
            endDateTime: "2021-07-12T15:00:34.2464912-07:00",
            subject: "User Booking Meeting"
        }
        const config = {
            headers: { Authorization: `Bearer ${token}`, "User-Agent": "Zoom-api-Jwt-Request", "content-type": "application/json" }
        };
        const result = await axios.post(url, data, config).then(response => {
            let newZoom = response.data.join_url;
            console.log('newZoom.join_url : ', response.data.join_url);
            return newZoom
        }).catch(error => {
            console.log('error--> : ', error);
            return error
        });
    }

}
