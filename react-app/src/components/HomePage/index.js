import Background from  "../../assets/home-img.jpg"
import "./home.css"
function Home() {

	return (
		<div id="page-container">
            <img src={Background} className="background-img"></img>
        </div>
	);
}

export default Home;
