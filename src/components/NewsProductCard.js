import styles from '../styles/NewsProductCard.module.css';
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/image";


const NewsProductCard = ({
    title = "Title",
    imgSrc = "",
    itemUrl = "/",
    height = 280,
    width = 280

                         }) => {



    return (
        <div className={styles.card_block_wrapper}>
            <Link className={styles.card_block} href={itemUrl}>
            <span className={styles.card_wrapper}>
                <Image src={imgSrc} alt={title} width={width} height={height}/>
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
    width: PropTypes.number,
    height: PropTypes.number,
};


