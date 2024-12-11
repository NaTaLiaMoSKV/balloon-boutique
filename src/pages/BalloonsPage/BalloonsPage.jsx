import { Header } from "components/Header/Header"
import { Outlet } from "react-router-dom"

import thematicBirthdayImg from 'images/balloons/thematic-birthday.jpg'
import thematicNewYearImg from 'images/balloons/thematic-new-year.jpg'
import thematicDischargeImg from 'images/balloons/thematic-discharge.jpg'
import thematicValentineImg from 'images/balloons/thematic-valentine.jpg'
import thematicGenderImg from 'images/balloons/thematic-genger-party.jpg'
import * as BalloonSection from "components/BalloonSection/BalloonSection";

export const BalloonsPage = () => {
    const thematicArray = [
        { name: 'На День народження', image: thematicBirthdayImg, subsection: 'birthday' },
        { name: 'На виписку', image: thematicDischargeImg, subsection: 'discharge' },
        { name: 'На Новий рік', image: thematicNewYearImg, subsection: 'new-year' },
        { name: 'На День закоханих та 8 березня', image: thematicValentineImg, subsection: 'valentine' },
        { name: 'На гендер-паті', image: thematicGenderImg, subsection: 'gender-party' },
    ];

    return (
        <>
            <Header />
            <BalloonSection.BalloonSection ukrTitle='Тематичні' title='thematic' array={thematicArray} />
            {/* <BalloonSection ukrTitle='Тематичні' title='thematic' array={thematicArray} /> */}
            <Outlet />
        </>
    )
}