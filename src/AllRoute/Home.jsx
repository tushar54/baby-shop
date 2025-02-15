import BabyCribs from "../AllComponent/BabyCribs";
import Banner from "../AllComponent/Banner";
import BlogSection from "../AllComponent/Blog";
import Carriage from "../AllComponent/Carriage";
import Testimonials from "../AllComponent/Customer";
import Footer from "../AllComponent/Footer";
import Navbar from "../AllComponent/Navbar";
import ScrollToTop from "../AllComponent/ScrollToup";
import SmallTitleCard from "../Sharedcontent/SmallTitleCard";


const Home = () => {
    return (
        <div>
            <header className="">
                <Navbar></Navbar>
            </header>
            <div className="mt-14"> 
                <Banner></Banner>
            </div>
            <div className="flex justify-center items-center m-10">
                <SmallTitleCard title={"CRIBS & BASKETS"} subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp."}>
                </SmallTitleCard>
            </div>
            <div className="container mx-auto">
                <BabyCribs></BabyCribs>
            </div>
            <div className="flex justify-center items-center m-10">
                <SmallTitleCard title={'READ OUR BLOG'} subTitle={'Dignissim enim sit amet venenatis urna convallis ae nean et tortor etiam non qu.'}>
                </SmallTitleCard>
            </div>
            <div className="container mx-auto">
                <BlogSection></BlogSection>
                <Testimonials></Testimonials>
            </div>
            <div className="flex justify-center items-center m-10">
                <SmallTitleCard title={'NEW ARRIVALS'} subTitle={'Consectetur adipiscing elit ut aliquam duis convalli convalli tellus id interdum ve.'}>
                </SmallTitleCard>
            </div>
            <div className="container mx-auto">
                <Carriage></Carriage>
            </div>
           <Footer></Footer>
           <ScrollToTop></ScrollToTop>
        </div>
    );
};

export default Home;