import React from "react";
import Layout from "./../components/Layout/Layout";
import Banner from "../images/banner.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>ՀԱՅԱՍՏԱՆԻ ՊԱՏՄՈՒԹՅԱՆ ԹԱՆԳԱՐԱՆ</h1>
        </div> 
      </div>
      <h1>ԲԱՐԻ ԳԱԼՈՒՍՏ ԹԱՆԳԱՐԱՆ</h1>
      <div  className="homeabout">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/87ElaLEIOzM?si=a2gxod_hr3syhLKR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
     <p >Հայաստանի պատմության և մշակույթի գիտահետազոտական կենտրոն
շուրջ 400 000 առարկայից բաղկացած ազգային հավաքածու
հնագիտական, դրամագիտական և ազգագրական բացառիկ նմուշներ
Հայաստանի պատմությունն ու մշակույթը Հին քարի դարից մինչև մեր օրերը</p>
      </div>
    </Layout>
  );
};

export default Home;