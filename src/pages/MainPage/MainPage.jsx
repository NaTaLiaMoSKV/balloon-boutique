import { About } from "components/About/About";
import { Advantages } from "components/Advantages/Advantages";
import { BalloonCollection } from "components/BalloonCollection/BalloonCollection";
import { DeliverySteps } from "components/DeliverySteps/DeliverySteps";
import { Donation } from "components/Donation/Donation";
import { FAQ } from "components/FAQ/FAQ";
import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import { Hero } from "components/Hero/Hero";
import { History } from "components/History/History";
import { Reviews} from "components/Reviews/Reviews";


const MainPage = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <History />
            <Donation />
            <Advantages />
            <BalloonCollection />
            <DeliverySteps />
            <Reviews />
            <FAQ />
            <Footer />
        </>
    )
}

export default MainPage;