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
                          <Link href={"/"}>
                              <button>Компания</button>
                          </Link>
                          <IoIosArrowDown/>
                          <ul className={styles.submenu}>
                              <li>
                                  <Link href='/'>
                                      О компании
                                  </Link>
                              </li>
                              <li>
                                  <Link href='/offer'>
                                      Оферта
                                  </Link>
                              </li>
                              <li>
                                  <Link href='/delivery'>
                                      Доставка
                                  </Link>
                              </li>
                              <li>
                                  <Link href='/requisites'>
                                      Реквизиты
                                  </Link>
                              </li>
                          </ul>
                      </li>
                      <li className={styles.menu_item}>
                          <Link href={"/"}>
                              <button>Каталог продукции</button>
                          </Link>
                          <IoIosArrowDown/>
                          <div className={styles.catalog_menu}>
                              <div></div>
                              <div></div>
                          </div>
                      </li>
                      <li className={styles.menu_item}>
                          <Link href={"/news"}>
                              <button>Новости</button>
                          </Link>
                      </li>
                      <li className={styles.menu_item}>
                          <Link href={"/vacancies"}>
                              <button>Вакансии</button>
                          </Link>
                      </li>
                      <li className={styles.menu_item}>
                          <Link href={"/contacts"}>
                              <button>Контакты</button>
                          </Link>
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