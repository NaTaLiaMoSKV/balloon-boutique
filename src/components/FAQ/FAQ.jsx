import { useState } from 'react';
import plusImg from '../../images/plus.png';
import './faq.css';

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null); 

    const handleQuestionClick = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

 const faqData = [
  {
    question: 'Які способи оплати доступні?',
    answer: 'Оплатити замовлення можна двома способами: передоплата 30 відсотків (решта суми при отриманні) або повна оплата онлайн до доставки.'
   },
  {
    question: 'Чи є можливість самовивозу?',
    answer: 'Так, фізичний магазин розташований за адресою вул. Рашельєвська, 67.'
  },
  {
    question: 'Як швидко здійснюється доставка?',
    answer: 'Доставка по місту займає до 2 годин після підтвердження замовлення. У термінових випадках можемо доставити навіть до пологового будинку.'
   },
   {
    question: 'Чи можлива доставка за межі міста?',
    answer: 'Так, доставка доступна не лише по місту, але й у найближчі райони. У центральні райони міста доставка безкоштовна, далі — від 200 гривень.'
  },
  {
    question: 'Чи можна замовити кульки у подарунковому наборі?',
    answer: 'Так, ми пропонуємо індивідуальні подарункові набори з кульок, аксесуарів та листівок. Також доступні коробки-сюрпризи.'
  },
  {
    question: 'Скільки часу тримаються надувні кульки?',
    answer: 'Латексні кульки тримаються у повітрі від 2 до 5 днів, а фольговані — від 2 днів до місяця.'
  }
];


    return (
        <section id="faq">
            <h2 className="faq__title scroll-element scroll-element--from-bottom"><span>&#9135;</span> FAQ <span>&#9135;</span></h2>

            {faqData.map((item, index) => (
                <div className="faq__item scroll-element scroll-element--from-bottom" key={index}>
                    <button 
                        className={`faq__question ${activeIndex === index ? 'active' : ''}`} 
                        onClick={() => handleQuestionClick(index)}
                    >
                    {item.question}
                    <img src={plusImg} alt="+" className="faq__icon" />
                </button>
                <div
                    className="faq__answer"
                    style={{ maxHeight: activeIndex === index ? `${item.answer.length * 1.5}px` : '0' }}
                >
                    <p>{item.answer}</p>
                </div>
                </div>
            ))}
        </section>
    );
};
