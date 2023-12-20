import { useEffect } from "react";
import { useUnit } from "effector-react";
import { fetchData, newsData, fetchNewsData, currentPage } from "@/effector/pagination";
import NewsProductCard from "@/components/NewsProductCard";
import Pagination from "@/components/pagination";
import styles from "@/styles/News.module.css";

const PAGE_SIZE = 12;

const News = () => {

    const data = useUnit(newsData);
    const page = useUnit(currentPage);

    useEffect( () => {
        const fetchNews = async () => {
            await fetchNewsData(page);
        }
        fetchNews();
    }, [page]);

    const handlePageChange = (selectedPage) => {
        fetchData(selectedPage + 1)
    }

    return(
        <div className={styles.wrap_container}>
            <h1>Новости</h1>
            <div className={styles.grid_container}>
                {
                    data.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map((newsItem) => (
                        <NewsProductCard
                            key={newsItem.id}
                            title={newsItem.title}
                            imgSrc={newsItem.imgSrc}
                            itemUrl={newsItem.itemUrl}
                            width={newsItem.width}
                            height={newsItem.height}
                        />
                    ))
                }
            </div>
            <Pagination onChangePage={handlePageChange} currentPage={page}/>

        </div>
    )
}

export default News;