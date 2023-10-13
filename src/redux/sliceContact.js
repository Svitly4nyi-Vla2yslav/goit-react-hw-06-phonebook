import { createSlice } from "@reduxjs/toolkit";


export const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload)
        }
    }
})