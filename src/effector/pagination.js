import { createEvent, createStore, createEffect } from "effector";
import axios from "axios";

export const fetchData = createEvent();

export const fetchNewsData = createEffect(async (page) => {
    const res = await axios.get(`https://65791172f08799dc80464eba.mockapi.io/news-card?page=${page}`)
    return res.data;
})

export const newsData = createStore([]).on(fetchNewsData.done, (_, { result }) => result);
export const currentPage = createStore(1).on(fetchData, (_, page) => page);