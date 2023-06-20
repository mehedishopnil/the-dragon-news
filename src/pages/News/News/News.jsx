import React from "react";
import { Card } from "react-bootstrap";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import './News.css'
import Category from "../../Home/Category/Category";
import EditorsInsite from "../EditorsInsits/EditorsInsite";

const News = () => {
  const news = useLoaderData();
  console.log(news);
  const { image_url, details, title, category_id } = news;
  return (
    <div>
        <h4 className="
         pb-4">Dragon News</h4>
      <Card>
        <Card.Body className="card-body">
          
          <img src={image_url} alt="" />
          <Card.Title className="post-title">{title}</Card.Title>

          <Card.Text className="news-text">
            {details}
          </Card.Text>

          <div>
            <Link to={`/category/${category_id}`} className="btn btn-danger category-btn"><FaArrowLeft></FaArrowLeft> All news in this category</Link>
          </div>
        </Card.Body>
      </Card>

      <div className="mt-5">
      <EditorsInsite></EditorsInsite>
      </div>
    </div>
  );
};

export default News;
