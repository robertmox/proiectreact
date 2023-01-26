import React, {Fragment} from 'react'
import './contact.css'
import Popup from '../components/Popup/popup'
import { useState } from 'react'


const Contact = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <Fragment>

      <section className='contactz'>
      <div className='contactz-heading'>
      <h2>Contact Us</h2>
      </div>
    <div className='containerz'>
      <div className='rowz'>

        <div className='columnz'>
        <div className='contactz-widget'>

        <div className='contactz-widget-item'>
          <div className='iconz'>
          <i class="fa-solid fa-location-dot"></i>
          </div>
          <div className='textz'>
          <h5>Address</h5>
          <p>Strada Stefan cel Mare Nr. 224 sector 2 Bucuresti.</p>
            </div>
          </div>

          <div className='contactz-widget-item'>
          <div className='iconz'>
          <i class="fa-solid fa-phone"></i>
          </div>
          <div className='textz'>
          <h5>Contact Us</h5>
          <p>0722778933</p>
            </div>
          </div>

          <div className='contactz-widget-item'>
          <div className='iconz'>
          <i class="fa-solid fa-envelope"></i>
          </div>
          <div className='textz'>
          <h5>Mail</h5>
          <p>robert000@yahoo.com</p>
            </div>
          </div>

        </div>
        </div>
      
        <div className='columnz'>
            <div className='contactz-form'>
              <form action='#'>
                <input class='inputz' type="text" placeholder="Name" />
                <input class='inputz' type="email" placeholder="Email" />
                <textarea class="textz" placeholder='Comment'></textarea>
                <button onClick={() => setButtonPopup(true)} type='submit' className='site-btn'> Send Message</button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <h3>Your Message has been sent</h3>
                </Popup>
              </form>
            </div>
        </div>

      </div>
      <div className='rowz'>
        <div className='map-columnz'>
          <div className='contactz-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.56672528596!2d26.024598028143963!3d44.43792692047133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4f6e6d7997%3A0x5a73af5fe07876f2!2sAteneul%20Rom%C3%A2n!5e0!3m2!1sro!2sro!4v1674324066169!5m2!1sro!2sro" 
          width="600" 
          height="450" 
          style={{border:0}}
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">

          </iframe>
          </div>
        </div>
      </div>
    </div>

      </section>
    </Fragment>
  )
}

export default Contact