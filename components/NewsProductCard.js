import styles from '../src/styles/NewsProductCard.module.css';
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
        <Link className={styles.card_block} href={itemUrl}>
            <span>
                <Image src={imgSrc} alt={title} width={280} height={280}/>
            </span>
            <span className={styles.card_title}>
                {title}
            </span>
        </Link>
    )
}

NewsProductCard.propTypes = {
    title: PropTypes.string,
    imgSrc: PropTypes.string,
    itemUrl: PropTypes.string,
};
export default NewsProductCard;

