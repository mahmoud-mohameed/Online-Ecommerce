import React from 'react'
import { FaFilter,FaSearch,FaHeart ,FaShoppingCart,FaCommentDots} from "react-icons/fa";
import './About.css'
import PageTransition from '../PageTransition';

const About = () => {
  return (
    <PageTransition>
    <div className="about">
        <div className="container">
            <div className="left">
                
                <h1>About</h1>
                <div className="name">
                     <p><span>E-Commerce :</span> is an easy and secure platform for people to discover and shop the products they love. With fast delivery, easy payment and return options and a 24-hour customer service, find everything you need at competitive prices. All our products are backed by our authenticity promise and E-Commerce warranty.</p>
                     
                </div>

                
            </div>
            <div className="right">
                 <h3>What is on the site?</h3>
                 <div className="icon_right">
                <div className="icon ">
                    <  FaFilter className="filter" />
                    <h2>Feltering</h2>
                            <p>Filter products and the filtering isn't changing when you are taking the link to your friend or anybody else.</p>


                </div>
                <div className="icon">
                    
                    <FaSearch  className="search_svg"/>
                    <h2>Search</h2>
                    <p>Search for any products</p>
                </div>
                <div className="icon">
                    <FaHeart className="hart" />
                    <h2>Wishlist</h2>
                    <p>Responsible for managing your favorite products.</p>

                </div>
                <div className="icon">
                    <FaShoppingCart  className="cart-svg"/>
                     <h2>Cart</h2>
                     <p>Review your products before buying them.</p>
                </div>
                <div className="icon">
                    <FaCommentDots   className="CommentDots-svg"/>
                     <h2>Interact</h2>
                     <p>By sending emails to your email address, we keep you informed about anything related to your account and your orders.</p>
                </div>
                </div>
                
            </div>
        </div>
    </div>
    </PageTransition>
  )
}

export default About