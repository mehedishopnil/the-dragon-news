import React from "react";
import { Card } from "react-bootstrap";
import "./NewsCard.css";
import { FaBeer, FaShare, FaShareAlt, FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  console.log(news.author.img);
  const { _id, details, title, thumbnail_url } = news;
  const { img, published_date, name } = news.author;
  return (
    <Card className=" mb-4">
      <div className="row author-section">
        <div className="col author-container d-flex">
          <div className="author-img-container">
            <img className="author-img" src={img} alt="" />
          </div>
          <div className="author-info-container">
            <h4>{name}</h4>
            <p>{published_date}</p>
          </div>
        </div>

        <div className="col social-share-btn d-flex justify-content-end  pt-4 pe-4">
          <div>
            <Link>
              <FaTag />
            </Link>
          </div>
          <div className="ps-3">
            <Link>
              <FaShareAlt />
            </Link>{" "}
          </div>
        </div>
      </div>

      <div>
        <Card.Body className="card-body">
          <Card.Title className="post-title">{title}</Card.Title>
          <img src={thumbnail_url} alt="" />
          <Card.Text className="news-text">
            {details} <br />
            <Link className="read-more">Read More</Link>
          </Card.Text>
        </Card.Body>
      </div>

      <Card.Footer className="text-muted">
        <div></div>
        <div></div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
