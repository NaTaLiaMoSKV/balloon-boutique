import { Header } from "components/Header/Header"
import { Outlet, useLocation } from "react-router-dom"

import thematicBirthdayImg from 'images/balloons/thematic-birthday.jpg'
import thematicNewYearImg from 'images/balloons/thematic-new-year.jpg'
import thematicDischargeImg from 'images/balloons/thematic-discharge.jpg'
import thematicValentineImg from 'images/balloons/thematic-valentine.jpg'
import thematicGenderImg from 'images/balloons/thematic-genger-party.jpg'

import withoutPatternsImg from 'images/balloons/without-patterns.jpg'
import withPatternsImg from 'images/balloons/with-patterns.jpg'
import filledImg from 'images/balloons/filled.jpg'

import numbersImg from 'images/balloons/numbers.jpg'
import formsImg from 'images/balloons/forms.jpg'
import kidsImg from 'images/balloons/kids.jpg'
import foilBirthdayImg from 'images/balloons/foil-birthday.jpg'
import wordsImg from 'images/balloons/words.jpg'

import boxImg from 'images/balloons/box.jpg'
import archImg from 'images/balloons/arch.jpg'
import setImg from 'images/balloons/set.jpg'

import { ukrTitles } from "data/ukrTitle"
import { BalloonSection } from "components/BalloonSection/BalloonSection"
import { useEffect } from "react"

export const BalloonsPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      }, 0);
    }
  }, [hash]);
    
    const thematicArray = [
        { name: ukrTitles['birthday'], image: thematicBirthdayImg, subsection: 'birthday' },
        { name: ukrTitles['discharge'], image: thematicDischargeImg, subsection: 'discharge' },
        { name: ukrTitles['new-year'], image: thematicNewYearImg, subsection: 'new-year' },
        { name: ukrTitles['valentine'], image: thematicValentineImg, subsection: 'valentine' },
        { name: ukrTitles['gender-party'], image: thematicGenderImg, subsection: 'gender-party' },
    ];
    
    const latexArray = [
        { name: ukrTitles['without-patterns'], image: withoutPatternsImg, subsection: 'without-patterns' },
        { name: ukrTitles['with-patterns'], image: withPatternsImg, subsection: 'with-patterns' },
        { name: ukrTitles['filled'], image: filledImg, subsection: 'filled' },
    ];

    const foilArray = [
        { name: ukrTitles['numbers'], image: numbersImg, subsection: 'numbers' },
        { name: ukrTitles['forms'], image: formsImg, subsection: 'forms' },
        { name: ukrTitles['kids'], image: kidsImg, subsection: 'kids' },
        { name: ukrTitles['foil-birthday'], image: foilBirthdayImg, subsection: 'foil-birthday' },
        { name: ukrTitles['words'], image: wordsImg, subsection: 'words' },
    ];
    
    const otherArray = [
        { name: ukrTitles['box'], image: boxImg, subsection: 'box' },
        { name: ukrTitles['arch'], image: archImg, subsection: 'arch' },
        { name: ukrTitles['set'], image: setImg, subsection: 'set' },
    ];

    return (
        <>
            <Header />
            <div style={{marginTop: '130px'}}>
                <BalloonSection ukrTitle='Тематичні' title='thematic' array={thematicArray} />
                <BalloonSection ukrTitle='Латексні' title='latex' array={latexArray} />
                <BalloonSection ukrTitle='Фольговані' title='foil' array={foilArray} />
                <BalloonSection ukrTitle='Інші' title='other' array={otherArray} />
            </div>
            <Outlet />
        </>
    )
}