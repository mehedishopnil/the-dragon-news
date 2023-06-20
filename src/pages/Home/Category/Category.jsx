import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2 className='mb-4 text-bold'>Dragon News Home</h2>

            {id && <h4 className='mb-4 text-bold'>This Category News: {categoryNews.length}</h4>}
            {
                categoryNews.map(news => <NewsCard
                key={news._id}
                news = {news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;