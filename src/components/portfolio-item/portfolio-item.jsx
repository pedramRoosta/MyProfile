import React from 'react'
import './portfolio-item.scss'
import { connect } from 'react-redux'
import { cartAddition } from '../../redux/cart/cart.action'
const PortfolioItem = ({item ,addToCart}) => {
    const {imageSrc,title,desc}=item;
    return <div className="portfolio-item" onClick={()=>addToCart(item)}>
        <div className="item-background" style={{ backgroundImage: `url(${imageSrc})` }} />
        <div className="item-content">
            <h3 className="item-title">{title}</h3>
            <p>{desc}</p>
        </div>
        <button className='itemBtn'>View More</button>
    </div>
};

const mapDispatchToProps = dispatch =>
    ({
        addToCart: item => dispatch(cartAddition(item))
    })
export default connect(null,mapDispatchToProps)(PortfolioItem)