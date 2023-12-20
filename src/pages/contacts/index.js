import styles from "../../styles/ContactsPage.module.css"
import Iframe from "react-iframe";
const ContactsPage = () => {

    return (
        <div className={styles.block_contacts}>
            <h1>Контакты</h1>
            <div className={styles.block}>
                <section className={styles.block_wrapper}>
                    <div className={styles.block_map}>
                        <div className={styles.block_title}>г.Москва — центральный офис</div>
                        <div className={styles.block_map_frame}>
                            <Iframe
                                url={"https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=true&um=constructor%3Aaa8ad6c715ab0cfec492108405c69ed75b0b6263237fadfd619131b5788062ff"}
                                width={"100%"}
                                height={"380px"}
                                display={"block"}
                            />
                        </div>
                        <div className={styles.block_address}>г. Москва, ул.Митинская, д.16</div>
                    </div>
                    <div className={styles.block_map}>
                        <div className={styles.block_title}>г.Дмитров — производственная площадка</div>
                        <div className={styles.block_map_frame}>
                            <Iframe
                                url={"https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=true&um=constructor%3Aaa8ad6c715ab0cfec492108405c69ed75b0b6263237fadfd619131b5788062ff"}
                                width={"100%"}
                                height={"380px"}
                            />
                        </div>
                        <div className={styles.block_address}>Московская Область, город Дмитров, ул.Промышленная, д. 27</div>
                    </div>
                    <div className={styles.block_map}>
                        <div className={styles.block_title}>г.Вельск — офис</div>
                        <div className={styles.block_map_frame}>
                            <Iframe
                                url={"https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=true&um=constructor%3Aaa8ad6c715ab0cfec492108405c69ed75b0b6263237fadfd619131b5788062ff"}
                                width={"100%"}
                                height={"380px"}
                            />
                        </div>
                        <div className={styles.block_address}>г. Вельск, ул. 50 лет октября, дом 79, корпус Д</div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ContactsPage;