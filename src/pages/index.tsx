
import brain from '../static/images/large-brain.png'

export default function Index() {
    return <>
        <main>
            <div id="main">
                <div className="wrapper-cover">
                    <img className='cover-img' src={brain}
                        alt='fruits and vegetables in the shape of a brain with pink background' />
                    <div className="centered">Mindful Eating</div>
                </div>

                <div className="text">
                    <h1>What is mindful eating?</h1>
                    <p>Mindful eating is maintaining an in-the-moment awareness of the food and drink you put into your body. It
                        involves observing how the food makes you feel and the signals your body sends about taste,
                        satisfaction,
                        and fullness. Mindful eating requires you to simply acknowledge and accept rather than judge the
                        feepngs,
                        thoughts, and bodily sensations you observe. It can extend to the process of buying, preparing, and
                        serving
                        your food as well as consuming it.</p>
                    <p>Mindful eating isn't about being perfect, always eating the right things, or never allowing yourself to
                        eat
                        on-the-go again. And it's not about estabpshing strict rules for how many calories you can eat or which
                        foods you have to include or avoid in your diet. Rather, it's about focusing all your senses and being
                        present as you shop for, cook, serve, and eat your food.</p>
                    <p>While mindfulness isn't for everyone, many people find that by eating this way, even for just a few meals
                        a
                        week, you can become more attuned to your body. This can help you to avoid overeating, make it easier to
                        change your dietary habits for the better, and enjoy the improved well-being that comes with a healthier
                        diet.</p>
                    <h2 className='benefits'>Benefits of mindful eating</h2>
                    <p>How you eat your food is as equally important as what type of foods you eat when it comes to regulating
                        your
                        weight. </p>
                    <p>Eating mindfully can help you to:</p>
                    <ul className="benefits">
                        <li>Slow down and take a break from the hustle and bustle of your day, easing stress and anxiety.</li>
                        <li>Examine and change your relationship with food—helping you to notice when you turn to food for
                            reasons
                            other
                            than hunger, for example.</li>
                        <li>Derive greater pleasure from the food you eat, as you learn to slow down and more fully appreciate
                            your
                            meals
                            and snacks.</li>
                        <li>Make healthier choices about what you eat by focusing on how each type of food makes you feel after
                            eating
                            it.</li>
                        <li>Improve your digestion by eating slower.</li>
                        <li>Feel fuller sooner and by eating less food.</li>
                        <li>Make a greater connection to where your food comes from, how it's produced, and the journey it's
                            taken to
                            your plate.</li>
                        <li>Eat in a healthier, more balanced way.</li>
                    </ul>
                </div>
            </div>
        </main>
    </>
}