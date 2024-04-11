import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import { Link } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import { ProjectList } from "../helpers/ProjectList";


function Projects() {
  const [users, setUsers] = useState(ProjectList.slice(0, 18));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  const disproducts = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item) => {
      return (
        <div className="box">
          <h2 className="project-heading">{item.title}</h2>
          <div className="products-links">
            <p>Show Code</p>
            <Link to={item.code} target='_blank' className="product-link">Code</Link>
          </div>
          <div className="products-links">
            <p>Show live demo</p>
            <Link to={item.demo} target='_blank' className="product-link">demo</Link>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {disproducts}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}

export default Projects;
