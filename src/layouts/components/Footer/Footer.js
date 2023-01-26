import './Footer.css';
import { Link, } from 'react-router-dom';


export default function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                <div className='col'>
                    <h4 className='title4'>Socials</h4>
                    <ul className='list-unstyled'>                  
                        <li><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a></li>                   
                        <li><a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="https://www.youtube.com/"><i class="fa-brands fa-youtube"></i></a></li>
                        <li><a href="https://www.twitter.com/"><i class="fa-brands fa-twitter"></i></a></li>
                        
                    </ul>
                </div>
                <div className='col'>
                    <h4 className='title4'>Address</h4>
                    <ul className='list-unstyled'>
                        <li>Strada Stefan cel Mare</li>
                        <li>Nr. 224 sector 2</li>
                        <li>Bucuresti</li>
                    </ul>
                </div>
                <div className='col'>
                    <h4 className='title4'>Contact</h4>
                    <ul className='list-unstyled'>
                        <li>0722778933</li>
                        <li>robertscoffeeshop@gmail.com</li>
                        <li>robertscoffeeshop.com</li>
                    </ul>
                </div>
                <div className='col'>
                    <h4 className='title4'>Program</h4>
                    <ul className='list-unstyled'>
                        <li>Mon-Fri</li>
                        <li>09:00-21:00</li>
                    </ul>
                </div>
                </div>
                <div className='row'>
                    <p className='col-sm'>
                        All rights Reserved Terms of Service Privacy
                    </p>
                </div>
            </div>
        </div>
    );
}
