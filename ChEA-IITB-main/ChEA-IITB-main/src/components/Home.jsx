import React from "react";
import './Home.css';
import Footer from "./Footer";

const Home = () =>{
    return (
        <div className="home-main">
            <div className="hero-section">
                <div className="img-hero"><img src="https://cheaiitb.in/loading.png" alt="main image" className="image" /></div>
                <div className="content">
                    <h1 className="hero-head">CHEMICAL  Engineering
                    Association, IIT Bombay</h1>
                    <h3 className="hero-h3">Transforming atoms into innovations: where science converges with ingenuity!</h3>
                    <p className="hero-para">Chemical Engineering: a pivotal Catalyst of Innovation, unleashes the profound power of scientific knowledge, forging unique path that Shapes a Sustainable and Prosperous World. The Chemical Engineering Association (ChEA), established in 1965, looks back with pride with an enviable record of a number of educational, informative, and informal events. The records have become even more enviable when considered in the context of the fact that such events are organized almost entirely by students with remarkably keen participation and generous support from professors and alumni.</p>
                </div>
                
            </div>
            <div className="non-hero">
                <h1 className="head-non-hero">Here's What We Do !!</h1>
                <iframe width="500" height="315" src="https://www.youtube.com/embed/JOLQSrkcSAo?si=-XSfnWjgCr6GmU3y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p className="para-non-hero">ChEA is an association of the Alumni, Faculty, Students, and Staff of the Chemical Engineering Department, dedicated to the noble cause of disseminating knowledge and fostering awareness in the field of chemical engineering.</p>
                <p className="para-non-hero">One of its paramount objectives is to foster and fortify the spirit of brotherhood and cooperation among the esteemed members of the association, weaving a tapestry of unity that strengthens the bonds within this academic community.</p>
                <p className="para-non-hero">Association aims to nurture and cultivate leadership qualities, ignite the spark of initiative, and inculcate a profound sense of responsibility among its members.</p>
                <p className="para-non-hero">Simulate collaborative endeavors among industry, universities, government bodies, professional societies, and other chemical associations affiliated in India and abroad.</p>
            </div>
            <Footer/>
        </div>

    );
}
export default Home;