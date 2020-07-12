import React, { Component } from 'react'
import './portfolio.scss'
import PortfolioItem from '../../components/portfolio-item/portfolio-item'
class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    id: 1,
                    title: "Web",
                    type: '/web',
                    desc: "no description",
                    imageSrc: "https://picsum.photos/id/222/200/300"
                },
                {
                    id: 2,
                    title: "3D Modeling", type: '/3d',
                    desc: "no description",
                    imageSrc: "https://picsum.photos/id/12/200/300"
                },
                {
                    id: 3,
                    title: "Music", type: '/music',
                    desc: "no description",
                    imageSrc: "https://picsum.photos/id/43/200/300"
                },
                {
                    id: 4,
                    title: "More...", type: '/more',
                    desc: "no description",
                    imageSrc: "https://picsum.photos/id/214/200/300"
                }
            ]
        }
    }
    render() {
        return <div className="portfolio">
            {this.state.items.map(({ id, ...otherProps }) => <PortfolioItem key={id} id={id} {...otherProps} />)}

        </div>
    }
}

export default Portfolio;