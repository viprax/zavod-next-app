import styles from "../styles/Pagination.module.css";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";

const Pagination = ({
    onChangePage = () => undefined,
    currentPage = 1
                    }) => {

    return (
        <nav className={styles.navigation}>
            <ReactPaginate
                className={styles.root}
                previousLabel={"<"}
                breakLabel={"..."}
                nextLabel={">"}
                onPageChange={(e) => onChangePage(e.selected)}
                pageRangeDisplayed={4}
                pageCount={2}
                forcePage={currentPage - 1}
                renderOnZeroPageCount={null}
            />
        </nav>
    );
};


export default Pagination;

Pagination.propTypes = {
    onChangePage: PropTypes.func,
    currentPage: PropTypes.number,
};

