import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css"


const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_container_top}>
                    <div className={styles.footer_container_top_item}>
                        <Link href='/'>
                            <Image className={styles.footer_top_item_slogan_image} src="https://zavodpr.ru/wp-content/uploads/2023/01/logo-white.svg" width={300} height={100} alt='Завод присадок'/>
                        </Link>
                        <p className={styles.footer_container_top_item_slogan}>
                            Предлагает продукцию для нефтехимической отрасли.
                        </p>
                    </div>
                    <div className={styles.footer_container_top_item}>
                        <p className={styles.footer_container_top_item_title}>
                            Информация
                        </p>
                        <div className={styles.footer_container_top_item_links}>
                            <Link href='/'>
                                О компании
                            </Link>
                            <Link href='/'>
                                О компании
                            </Link>
                            <Link href='/'>
                                О компании
                            </Link>
                            <Link href='/'>
                                О компании
                            </Link>
                            <Link href='/'>
                                О компании
                            </Link>
                        </div>
                    </div>
                    <div className={styles.footer_container_top_item}>
                        <p className={styles.footer_container_top_item_title}>
                            Продукция
                        </p>
                        <div className={styles.footer_container_top_item_links}>
                            <Link href='/'>
                                О компании
                            </Link>
                            <Link href='/'>
                                О компании
                            </Link>
                            <Link href='/'>
                                О компании
                            </Link>
                            <Link href='/'>
                                О компании
                            </Link>
                            <Link href='/'>
                                О компании
                            </Link>
                        </div>
                    </div>
                    <div className={styles.footer_container_top_item}>
                        <p className={styles.footer_container_top_item_title}>Контакты</p>
                        <div className={styles.footer_container_top_item_links}>
                            <Link href='/'>
                                <Image width={22} height={22} src='https://zavodpr.ru/wp-content/uploads/2023/01/phone.svg' alt='Контактный номер'/>
                                <span>+7 (499) 113-07-77</span>
                            </Link>
                            <Link href='/'>
                                <Image width={22} height={22} src='https://zavodpr.ru/wp-content/uploads/2023/01/map.svg' alt='Контактный номер'/>
                                <span>125430, г. Москва, ул.Митинская, д.16</span>
                            </Link>
                            <Link href='/'>
                                <Image width={22} height={22} src='https://zavodpr.ru/wp-content/uploads/2023/01/email.svg' alt='Контактный номер'/>
                                <span>info@zavodpr.ru</span>
                            </Link>
                            <p>
                                <Image width={22} height={22} src='https://zavodpr.ru/wp-content/uploads/2023/01/work-time.svg' alt='Режим работы'/>
                                <span>пн-пт: с 09:00 до 18:00, сб-вс: выходной</span>
                            </p>
                        </div>
                        <div className={styles.footer_container_top_item_messengers}>
                            <Link href='/'>
                                <Image src='https://zavodpr.ru/wp-content/uploads/2023/01/whatsapp.svg' alt='Мессенджер' width={30} height={30}/>
                            </Link>
                            <Link href='/'>
                                <Image src='https://zavodpr.ru/wp-content/uploads/2023/01/telegram.svg' alt='Мессенджер' width={30} height={30}/>
                            </Link>
                            <Link href='/'>
                                <Image src='https://zavodpr.ru/wp-content/uploads/2023/01/telegram-bot.svg' alt='Мессенджер' width={30} height={30}/>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className={styles.footer_container_bottom}>
                    © ООО «ЗАВОД ПРИСАДОК И РЕАГЕНТОВ», 2023 |
                    <Link href='/'>
                        Политика конфиденциальности
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;