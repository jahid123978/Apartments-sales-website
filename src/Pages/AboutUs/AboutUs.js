import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
                <img className="image" src="https://images.unsplash.com/photo-1523192193543-6e7296d960e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                 <h2 className="heading">Our mission is to establish a trusted and user 
                     friendly online property or real estate 
                     marketplace in Bangladesh.</h2>
               <h1 style={{textAlign: 'center'}}>Our Mission</h1>
              <p style={{margin: '5px 40px'}}>Apartments sales would like to be your most desired online property selling site in Bangladesh.
                   Whether you want to buy a property, sell a land or rent flat, we’re here with a wide selection.
                    With a view to helping the developers and property sellers finding theirs more prospective 
                    customers, we will consistently be outperforming our peers providing the most credible 
                    information and consultation to all our stakeholders utilizing our expertise and market
                     knowledge by doing continuous industry research and market correspondence.</p>
               <h1 style={{textAlign: 'center'}}>Our Vision</h1>
              <p style={{margin: '5px 40px'}}>From the very beginning, bdHousing is aiming to become the number
               one and most admired online property selling site in Bangladesh by providing professional level 
               service to its clients at home and abroad with globally recognized competencies. We understand 
               how troublesome job it is to search and find the perfect property to rent or buy. Want to get 
               along with top notch mastery? Looking for the best ready flat buy sale portal? Let bdHousing to
                be your ultimate companion. We follow a strict methodology to facilitate our respected clientage
                 with physically verified listings, free buying assistance and detailed information about any property.
                  We wish to become your one click solution for property sell buy website in Bangladesh.

</p>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AboutUs;