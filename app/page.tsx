import Faq from "./faq";
import Footer from "./footer";
import Founders from "./founders";
import Hero from "./hero";
import Navbar from "./navbar";
import News from "./news";
import { Projects } from "./projects";
import Statistics from "./stats";

import Trusted from "./trusted";

const Home = () => {
  return ( <div>
 <Navbar />
 <Hero />
 <Trusted />
 <Projects />
 <Founders />
 <Statistics />
 <News/>
 <Faq />
 <Footer />
  </div> );
}
 
export default Home;