import styles from "@/styles/Delivery.module.css";

const Delivery = () => {


    return (
        <div className={styles.container}>
            <h1>Доставка</h1>
            <div className={styles.delivery_container}>
                <div className={styles.delivery_container_left}>
                    <h2>Осуществляем отгрузки:</h2>
                    <ul className={styles.delivery_container_left_list}>
                        <li>Россия – ежедневно, вне зависимости от дня недели.</li>
                        <li>Казахстан, Киргизия – рейсы еженедельно.</li>
                        <li>Другие страны – по заявкам покупателей.</li>
                    </ul>
                    <h2>Условия отгрузки товара:</h2>
                    <ul className={styles.delivery_container_left_list}>
                        <li>самовывоз со склада готовой продукции по адресу: Московская область, город Дмитров, улица Промышленная, дом 27;</li>
                        <li>доставка силами поставщика до любой транспортной компании по г. Москва и Московской области;</li>
                        <li>доставка может быть организована специалистами нашей компании, а её стоимость включена в цену товара.</li>
                    </ul>
                </div>
                <div className={styles.delivery_container_right}>
                    <h2>Доставка осуществляется:</h2>
                    <ul className={styles.delivery_container_right_list}>
                        <li>автотранспортом, автоналив 30м3;</li>
                        <li>автотранспортом, еврофура 90м3;</li>
                        <li>автотранспортом, сборный груз;</li>
                        <li>транспортными компаниями;</li>
                        <li>железнодорожным транспортом,</li>
                        <li>стандартный 20 футовый контейнер;</li>
                        <li>железнодорожным транспортом, стандартный 40 футовый контейнер;</li>
                        <li>железнодорожным транспортом, вагон-цистернами 70-80м3.</li>
                    </ul>
                    <h2>Фасовка товара:</h2>
                    <ul className={styles.delivery_container_right_list}>
                        <li>барабаны стальные, 50 литров;</li>
                        <li>бочки стальные, 216 литров;</li>
                        <li>евро-кубы, 1000м3;</li>
                        <li>налив (авто, жд).</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Delivery;