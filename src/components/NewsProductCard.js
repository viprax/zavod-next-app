import styles from '../styles/NewsProductCard.module.css';
import { useState, useEffect } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/image";


const NewsProductCard = ({
    title = "Title",
    imgSrc = "https://via.placeholder.com/280x280",
    itemUrl = "/"

                         }) => {


    return (
        <div className={styles.card_block_wrapper}>
            <Link className={styles.card_block} href={itemUrl}>
            <span className={styles.card_wrapper}>
                <Image src={imgSrc} alt={title} width={280} height={280}/>
            </span>
                <span className={styles.card_title}>
                {title}
            </span>
            </Link>
        </div>
    )
}

export default NewsProductCard;

NewsProductCard.propTypes = {
    title: PropTypes.string,
    imgSrc: PropTypes.string,
    itemUrl: PropTypes.string,
};


