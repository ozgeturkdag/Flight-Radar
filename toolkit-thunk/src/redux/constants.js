export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "37.036472",
    bl_lng: "27.425467",
    tr_lat: "41.11295",
    tr_lng: "42.70228",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "5332c479c4msh4dc29c530a8fb43p19df6ejsnd1b202c1f5ab",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
