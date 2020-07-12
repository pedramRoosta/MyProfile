import React from 'react'
import { withRouter } from 'react-router-dom'
import './portfolio-item.scss'

const PortfolioItem = ({id, title,type, desc, imageSrc,history,match }) => {
    return <div className="portfolio-item" onClick={()=>history.push(`${match.url}${type}`)}>
        <div className="item-background" style={{ backgroundImage: `url(${imageSrc})` }}></div>
        <div className="item-content">
            <h3 className="item-title">{title}</h3>
            <p>{desc}</p>
        </div>
    </div>
};

export default withRouter(PortfolioItem)