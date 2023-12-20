import styles from "../styles/Contact.module.css"
import Image from "next/image";


import Link from "next/link";

const Contact = () => {
    return (
        <div className={styles.contact_form_wrapper}>
            <section className={styles.contact_form}>
                <div className={styles.form_wrapper}>
                    <div className={styles.form_left}>
                        <Image src="https://zavodpr.ru/wp-content/uploads/2023/02/zavod-dlya-bloka-kontakty-itog.png" width={580} height={380} alt='завод'/>
                    </div>
                    <div className={styles.form_right}>
                        <div className={styles.form_right_description}>
                            Подбираем качественные и индивидуальные решения, которые помогают создавать по-настоящему уникальные продукты и повышать рентабельность наших клиентов.
                        </div>
                        <div className={styles.form_right_contacts}>
                            <div className={styles.form_right_links}>
                                <Link href='/'>
                                    <Image width={22} height={22} src='https://zavodpr.ru/wp-content/uploads/2023/01/inline-form-icon-1.svg' alt='Контактный номер'/>
                                    <span>+7 (499) 113-07-77</span>
                                </Link>
                                <Link href='/'>
                                    <Image width={22} height={22} src='https://zavodpr.ru/wp-content/uploads/2023/01/inline-form-icon-2.svg' alt='Контактный номер'/>
                                    <span>125430, г. Москва, ул.Митинская, д.16</span>
                                </Link>
                                <Link href='/'>
                                    <Image width={22} height={22} src='https://zavodpr.ru/wp-content/uploads/2023/01/inline-form-icon-3.svg' alt='Контактный номер'/>
                                    <span>info@zavodpr.ru</span>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.form_right_form_block}>
                            <div className={styles.form_right_top}>
                                <Image src='https://zavodpr.ru/wp-content/uploads/2023/01/color-logo-icon.svg' alt='завод' width={38} height={50}/>
                                <p className={styles.form_text}>Нужна консультация? Заполните форму и наш специалист перезвонит вам</p>
                            </div>
                            <div className={styles.form_right_bottom}>
                                <form className={styles.form}>
                                    <p>
                                        <span className={styles.form_control_name_wrap}>
                                            <input
                                                className={styles.form_control_name_input}
                                                placeholder={'Ваше имя...'}
                                            />
                                        </span>
                                        <span className={styles.form_control_phone_wrap}>

                                            <input
                                                className={styles.form_control_phone_wrap}
                                                placeholder={'Ваш телефон...'}
                                            />
                                        </span>
                                        <button className={styles.form_button}>Отправить</button>
                                    </p>

                                    <div className={styles.form_conditions}>
                                        Отправляя форму, вы соглашаетесь с условиями
                                        <Link href='/'>политики конфиденциальности</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;