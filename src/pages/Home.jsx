import Header from "../components/Header";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <h2 className="bg-white">
                    Dogster
                </h2>
                <div className="pt-[9vh]">
                    <Slider />
                </div>
            </main>
        </>
    );
};

export default Home;