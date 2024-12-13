import historyMobileImg from '../../images/history-mobile.png';
import historyDesktopImg from '../../images/history-desktop.png';
import { HistoryImg, HistoryItem, HistoryList, HistoryMobileContainer, HistorySection } from './History.styled';

export const History = () => {
    const width = window.innerWidth;

    return (
        <HistorySection>
            <h2>Наша історія</h2>
            {width < 768 &&
                <HistoryMobileContainer>

                    <HistoryImg src={historyMobileImg} alt="history in years" />

                    <HistoryList>
                        <HistoryItem>
                            <h3>Початок шляху</h3>
                            <p>Ми розпочали з маленького магазину, прагнучи зробити святкування яскравішими.</p>
                        </HistoryItem>
                        <HistoryItem>
                            <h3>Час випробувань</h3>
                            <p>Попри виклики війни, ми продовжували приносити радість нашим клієнтам, навіть в найскладніші часи.</p>
                        </HistoryItem>
                        <HistoryItem>
                            <h3>Розширення горизонтів</h3>
                            <p>Ми розширили асортимент і доставку, щоб задовольнити потреби всіх клієнтів по всій країні.</p>
                        </HistoryItem>
                        <HistoryItem>
                            <h3>Погляд у майбутнє</h3>
                            <p>Наша мета — стати лідером на ринку та створювати незабутні моменти для кожного клієнта.</p>
                        </HistoryItem>
                    </HistoryList>
                </HistoryMobileContainer>
            
            }
            {width >= 768 &&
                <>
                    <HistoryImg src={historyDesktopImg} alt="history in years" />
                    <HistoryList>
                        <HistoryItem>
                            <h3>Початок шляху</h3>
                            <p>Ми розпочали з маленького магазину, прагнучи зробити святкування яскравішими.</p>
                        </HistoryItem>
                        <HistoryItem>
                            <h3>Час випробувань</h3>
                            <p>Попри виклики війни, ми продовжували приносити радість нашим клієнтам, навіть в найскладніші часи.</p>
                        </HistoryItem>
                        <HistoryItem>
                            <h3>Розширення горизонтів</h3>
                            <p>Ми розширили асортимент і доставку, щоб задовольнити потреби всіх клієнтів по всій країні.</p>
                        </HistoryItem>
                        <HistoryItem>
                            <h3>Погляд у майбутнє</h3>
                            <p>Наша мета — стати лідером на ринку та створювати незабутні моменти для кожного клієнта.</p>
                        </HistoryItem>
                    </HistoryList>
                </>
                }
           
        </HistorySection>
    )
}