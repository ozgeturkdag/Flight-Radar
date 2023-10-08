import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "./constants";

/*
   ! Thunk fonksiyonu: 
      Görevi: 
      1- Api'den uçuş verisini çekmek
      2- Bu verileri store'a aktar
   */

export const getFlightData = createAsyncThunk(
  "flights/getFlights",
  async () => {
    // asenkron işlemler
    const res = await axios.request(options);

    const newData = res.data.aircraft.map((plane) => ({
      id: plane[0],
      code: plane[1],
      lat: plane[2],
      lng: plane[3],
    }));

    // return olan veri store aktarılır

    return newData;
  }
);

const initialState = {
  flights: [],
  flightsLoading: true,
  isError: false,
};

export const flightSlice = createSlice({
  name: "flightSlice",
  initialState,
  //   extraReducer sayesinde bir thunk fonksiyonun aşama aşama store'u nasıl etkileyeceğini söylüyoruz
  extraReducers: {
    // henüz apiden bir cevap yoksa
    [getFlightData.pending]: (state, action) => {
      state.flightsLoading = true;
    },
    // eğer api'den gelen cevap olumluysa
    [getFlightData.fulfilled]: (state, action) => {
      state.flights = action.payload;
      state.flightsLoading = false;
    },
    // eğer api olumsuz cevap verdiyse
    [getFlightData.rejected]: (state, action) => {
      state.isError = true;
      state.flightsLoading = false;
    },
  },
});

/*
  thunk aksiyonları çalıştırınca store 
  veriyi aktarmadan hemen önce işlemler yapmaya yarar
  */
