import React from "react";
import { Card } from "react-bootstrap";
import "./NewsCard.css";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaRegStarHalf,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import moment from "moment";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, details, title, image_url, rating, total_view } = news;
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
            <p>{moment(published_date).format("yyyy-mm-D")}</p>
          </div>
        </div>

        <div className="col social-share-btn d-flex justify-content-end  pt-4 pe-4">
          <div>
            <Link>
              <FaRegBookmark />
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
          <img src={image_url} alt="" />

          <Card.Text className="news-text">
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...
                <Link to={`/news/${_id}`} className="read-more ps-2">
                  Read More
                </Link>
              </>
            )}{" "}
            <br />
          </Card.Text>
        </Card.Body>
      </div>

      <Card.Footer className="">
        <div className="d-flex">
          <div className="d-flex flex-grow-1">
            <Rating className="rating"
              placeholderRating={rating.number}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>

            <p className="ps-2 fw-medium text-body">{rating?.number}</p>
          </div>

          <div className=" total-view d-flex ">
            <p>
              <FaEye />
            </p>
            <p className="ps-2">{total_view}</p>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
