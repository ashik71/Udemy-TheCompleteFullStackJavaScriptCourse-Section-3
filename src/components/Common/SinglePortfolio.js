import React from 'react';

const SinglePortfolio = (props) => {    
    return (
        <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                        <i className="fas fa-plus fa-3x"></i>
                    </div>
                </div>
                <img className="img-fluid" src={props.image} alt="" />
            </a>
            <div className="portfolio-caption">
                <h4>{props.title}</h4>
                <p className="text-muted">{props.subtitle}</p>
            </div>
        </div>
    );
};

export default SinglePortfolio;