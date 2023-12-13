import Link from "next/link";
import styles from "../styles/Header.module.css"
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";
import { BiLogoWhatsappSquare } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import {useState} from "react";
const Header = () => {



    return (
      <header className={styles.header}>
          <div className={styles.container}>
              <div className={styles.menu_wrapper}>
                  <ul className={styles.menu}>
                      <li
                          
                          className={styles.menu_item}>

                          <button>Компания</button>
                          <IoIosArrowDown/>
                          <ul className={styles.submenu}>
                              <li>
                                  <Link href='/'>
                                      О компании
                                  </Link>
                              </li>
                              <li>
                                  <Link href='/'>
                                      Оферта
                                  </Link>
                              </li>
                              <li>
                                  <Link href='/'>
                                      Доставка
                                  </Link>
                              </li>
                              <li>
                                  <Link href='/'>
                                      Реквизиты
                                  </Link>
                              </li>
                          </ul>
                      </li>
                      <li className={styles.menu_item}>
                          <button>Каталог продукции</button>
                          <IoIosArrowDown/>
                      </li>
                      <li className={styles.menu_item}>
                          <button>Новости</button>
                      </li>
                      <li className={styles.menu_item}>
                          <button>Вакансии</button>
                      </li>
                      <li className={styles.menu_item}>
                          <button>Контакты</button>
                      </li>
                  </ul>
              </div>
              <div className={styles.search_wrapper}>
                <div className={styles.search_icon}>
                    <IconContext.Provider value={{size: "2em"}}>
                        <CiSearch/>
                    </IconContext.Provider>
                </div>
              </div>
              <div className={styles.messengers_wrapper}>
                  <Link href='/'>
                      <Image src='https://zavodpr.ru/wp-content/uploads/2023/01/whatsapp.svg' alt='Мессенджер' width={30} height={30}/>
                  </Link>
                  <Link href='/'>
                      <Image src='https://zavodpr.ru/wp-content/uploads/2023/01/telegram.svg' alt='Мессенджер' width={30} height={30}/>
                  </Link>
                  <Link href='/'>
                  </Link>
              </div>
              <div className={styles.contacts_wrapper}>
                  <p> +7 (499) 113-07-77 </p>
                  <Link href='/'>
                      Заказать звонок
                  </Link>
              </div>
          </div>
      </header>
    )
}

export default Header;