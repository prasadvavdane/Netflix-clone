import Navbar from "../src/Navbar"
import Hero from "../src/Hero"
import PopularVideos from "../src/popularVideos"
function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero/>
     <PopularVideos/>
    </div>
  );
}

export default Home;
