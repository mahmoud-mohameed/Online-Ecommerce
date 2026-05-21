import React from 'react'
import './Blog.css'
import PageTransition from '../PageTransition'
import html from '../../img/html.png'
import js from '../../img/js.png'
import css from '../../img/css.jpg'
import react from '../../img/react.png'
import tailwind from '../../img/tailwind.png'
import tmdb from '../../img/tmdb.png'
import onlineecommerce from '../../img/onlineecommerce.png'
import ecommerce from '../../img/ecommerce.png'
import orderfood from '../../img/orderfood.png'
import { Link } from 'react-router-dom'

const Blog = () => {
    const skills=[
        {
        id:1,
        img:html,
        title:"html",
        disc:"html tages"
       },
        {
        id:2,
        img:css,
        title:"css",
        disc:"User Interface"
       },
        {
        id:3,
        img:js,
        title:"Java Script",
        disc:"interaction"
       },
        {
        id:4,
        img:tailwind,
        title:"tailwind",
        disc:"User Interface"
       },
        {
        id:5,
        img:react,
        title:"react js",
        disc:"FrameWork"
       },
]

const Experience=[
    {
    id:1,
    image:ecommerce,
    url:"https://e-commerce-seven-zeta-63.vercel.app/?index",
    github:"https://github.com/mahmoud-mohameed/E-commerce"
    },
    {
    id:2,
    image:tmdb,
    url:"https://movies-tmdb-rho.vercel.app/",
    github:"https://github.com/mahmoud-mohameed/movies-Tmdb-"
    },
    {
    id:3,
    image:onlineecommerce,
    url:"https://online-ecommerce-jet.vercel.app/",
    github:"https://github.com/mahmoud-mohameed/Online-Ecommerce"
    },
    {
    id:4,
    image:orderfood,
    url:"https://github.com/mahmoud-mohameed/online-restaurant",
    github:"https://github.com/mahmoud-mohameed/online-restaurant"
    }
]


  return (
    <PageTransition>
        <div className="blog">
            <div className="container">
                <div className="top">
                    <h1>Summry</h1>
                    <p>Motivated Front-End Developer specializing in React.js with strong knowledge of modern UI/UX 
principles and web technologies. Skilled in building responsive and interactive web applications using 
industry-standard tools and frameworks. Focused on writing clean, maintainable code, optimizing 
performance, and delivering seamless user experiences. Currently working on freelance projects and 
seeking opportunities to contribute to dynamic teams and grow in a fast-paced environment</p>
                </div>
                <div className="middle">
                    <h1 className="skil">my skills</h1>

                    <div className="icon">
                        {skills.map((item)=>{
                            return(
                                <div key={item.id} className="icon_skill">
                                    <div className="img_icon">
                                        <img className='imge_icon' src={item.img} alt={item.title}/>
                                    </div>
                                    <div className="skill_contant">
                                        <h4>{item.title}</h4>
                                        <p>{item.disc}</p>
                                    </div>
                            
                                    

                                </div>
                            )

                        })}
                        
                        


                    </div>

                </div>
                <div className="end">
                     <h1 className="skil">My experiences</h1>
                     <div className="experiences">

                     

  {Experience.map((item) => {
    return (
      <div key={item.id} className="project">
        <div className="project-demo">
          <a href={item.url} target='_blank' > <img src={item.image} alt={item.url}/></a>
            <div className="project_url">
                <a href={item.github} target='_blank'>Github</a>
                <a href={item.url} target='_blank'>Demo</a>
            </div>
        </div>
        
      </div>
    );
  })}
  </div>
</div>
                
            </div>
        </div>
    </PageTransition>
  )
}

export default Blog

