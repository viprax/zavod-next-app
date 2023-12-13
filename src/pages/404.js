import styles from "../styles/404.module.css"
const NotFoundPage = () => {

    return (
        <div className={styles.container_wrapper}>
            <h1>Ошибка 404</h1>
            <h2>Страница была удалена, устарела или не существовала</h2>
        </div>
    )
}

export default NotFoundPage;
