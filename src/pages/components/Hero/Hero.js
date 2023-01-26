import './Hero.css';

import { Link } from 'react-router-dom';

import heroImage from '../../../assets/heroimage1.jpg';

export default function Hero() {
    return (
        <div className="hero-wrapper">
            <img className="hero-image" src={heroImage} />
            <div className="hero-overlay">
                <div className="hero-info">
                    <h1 className="title">Quality coffee and tea</h1>
                    <p className="subtitle">
                    Whether you need an energy boost in the morning or a short break to recharge your brain during a busy day, it all comes down to having a cup of perfectly roasted coffee. Now all that’s left is for you to buy Colombian Coffee online or in-store. 
                    </p>
                    <Link to="/category/1/product/1">
                        <button className="button">Buy here</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
