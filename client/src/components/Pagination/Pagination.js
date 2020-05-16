import React from 'react';
import "./Pagination.css";
import { Link, withRouter } from 'react-router-dom';

class Paginagtion extends React.Component {


    renderPaging = () => {
        let rawQuery = this.props.location.search || null;
        let titleFilter = "";
        let sortBy = "";
        let sortByDesc = "";
        let queryObj = {
            page: 0,
            title: "",
            sort_by: "",
            sort_by_desc: ""
        }

        if (rawQuery) {
            let patt = /[^?].*/;
            let queryArr = rawQuery.split("&");
            queryArr.forEach(queryStr => {
                let q = queryStr.split("=");
                queryObj[q[0].match(patt)[0]] = q[1];
            })
        }

        const { current_page, links, total_pages } = this.props.pagination;

        const activePrev = current_page !== 1 ? "" : "disabled";
        const activeNext = current_page !== total_pages ? "" : "disabled" ;


        let start = current_page -5;
        if(start <= 0) {
            start = 1;
        }

        let end = current_page + 5;
        if(end >= total_pages) {
            end = total_pages;
        }


        const pageNumbers = [];
        
        if(queryObj.title) titleFilter = "&title=" + queryObj.title;
        if(queryObj.sort_by) sortBy = `&sort_by=${queryObj.sort_by}`;
        if(queryObj.sort_by_desc) sortByDesc = `&sort_by_desc=${queryObj.sort_by_desc}`;
        for(let i = start; i <= end; i++) {
            pageNumbers.push(
                <li key={i} className={`page-item ${current_page === i ? "active" : ""}`}>
                    <Link className="page-link" to={`?page=${i}${titleFilter}${sortBy}${sortByDesc}`}>{i}</Link>
                </li>
            )
        }

        let linkPrev = "#";
        let linkNext = "#";
        
        if(links.previous) {
            linkPrev = links.previous.split("/")[links.previous.split("/").length - 1];
        }
        if(links.next) {
            linkNext = links.next.split("/")[links.next.split("/").length - 1];
        }

        return (
            <>
                <li className={`page-item ${activePrev}`}>
                    <Link className="page-link" to={linkPrev}>Trước</Link>
                </li>
                {pageNumbers}
                <li className={`page-item ${activeNext}`}>
                    <Link className="page-link" to={linkNext}>Sau</Link>
                </li>
            </>
        )
    }

    render() {
        console.log(this.props)
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                   {this.renderPaging()}
                </ul>
            </nav>
        )
    }
}

export default withRouter(Paginagtion);