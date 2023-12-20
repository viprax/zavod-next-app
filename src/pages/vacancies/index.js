import styles from "../../styles/Vacancy.module.css";

const Vacancies = () => {


    return (
        <div className={styles.container_wrapper}>
            <h1>Вакансии</h1>
            <div className={styles.container_vacancies}>
                <section className={styles.vacancies_wrapper}>
                    <p>В настоящее время нет доступных вакансий. Следите за обновлениями</p>
                </section>
            </div>
        </div>
    )
}

export default Vacancies