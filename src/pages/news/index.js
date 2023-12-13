import NewsProductCard from "@/components/NewsProductCard";
import styles  from "../../styles/NewsProductCard.module.css"

const News = ({

}) => {


    return(
        <div className={styles.wrap_container}>
            <h1>Новости</h1>
            <NewsProductCard/>
        </div>
    )
}

export default News;