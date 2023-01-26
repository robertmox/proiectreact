import './Reviews.css';

export default function Reviews() {
    return (
        <section className="customers" id="customers">
        <div className="heading">
            <h2>Our Customers</h2>
        </div>
        
        <div className="customers-container">
            <div class="box">
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <p>Lovely coffee, I think it's my favourite</p>
                <h2>James C.</h2>
                <img src="https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0=" alt="new"/>
                
            </div>
            <div className="box">
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <p>Amazing products, fast delivery</p>
                <h2>Andrew P.</h2>
                <img src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1525891879-379720-warren-wong-242286-unsplashjpg.jpg" alt="new"/>
                
            </div>
            <div className="box">
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half"></i>
                </div>
                <p>Lovely beans, smooth coffee, will order again</p>
                <h2>Jessica M.</h2>
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80" alt="new"/>
                
            </div>
        </div>
    </section>
    );
}
