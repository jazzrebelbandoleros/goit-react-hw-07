import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://67210bde98bbb4d93ca739bf.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contact/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/Contact");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contact/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/Contact", newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/Contact/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
