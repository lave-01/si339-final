import mindful_eating_cycle_1a from '../static/images/mindful-eating-cycle-1a.png'
import components from '../static/images/components.jpg'
import grocery from '../static/images/grocery.jpg'
import mindful_eating_plate from '../static/images/mindful-eating-plate.png'
import eating_delicious_food from '../static/images/eating-delicious-food.jpg'
import mindful_eating_tips from '../static/images/mindful_eating_tips.jpg'
import mindful_eating_people from '../static/images/mindful_eating_people.jpg'
import bowl from '../static/images/bowl.jpeg'
import fullness_scale from '../static/images/fullness-scale.png'

export default function Exercise() {
    return <>
        <main>
            <div id="main">
                <h1>How to do mindful eating?</h1>
                <div className="gallery flex-container">
                    <div className="flex">
                        <img src={components} alt="components of mindful eating" />
                        <div className="text-with-img">
                            <p>There are a number of 'external' factors—such as the people with whom you are
                                enjoying a meal—that play a
                                critical role in your ability to eat mindfully.</p>
                        </div>
                    </div>
                    <div className="flex">
                        <img src={grocery} alt="A woman choosing vegetables in the grocery store" />
                        <div className="text-with-img">
                            <p>Employ all your senses while you're shopping, cooking, serving, and eating your food. How do
                                different
                                foods
                                look, smell, and feel as you chop? How do they sound as they're being cooked? How do they taste
                                as you
                                eat?</p>
                        </div>
                    </div>
                    <div className="flex">
                        <img src={mindful_eating_plate}
                            alt="a nutrition-balanced meal with captions reminding you to chew more and eat slowly" />
                        <div className="text-with-img">
                            <p>Take a bite, and notice how it feels in your mouth. How would you describe the texture now?
                                Try
                                to identify all the
                                ingredients, all the different flavors. Chew thoroughly and notice how you chew and what
                                that
                                feels like.</p>
                        </div>
                    </div>
                    <div className="flex">
                        <img src={eating_delicious_food} alt="a woman eating delicious food with satisfied smile" />
                        <div className="text-with-img">
                            <p>
                                Start by taking a few deep breaths and considering the health value of each different piece of
                                food.
                                While
                                nutrition experts continually debate exactly which foods are "healthy" and which are not, the
                                best rule
                                of
                                thumb is to eat food that is as close as possible to the way nature made it.
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <img src={mindful_eating_tips}
                            alt="a woman sitting at a table with a bowl of noodle with vegetables" />
                        <div className="text-with-img">
                            <p>Focus on how your experience shifts moment to moment. Do you feel yourself getting full? Are
                                you
                                satisfied? Take your
                                time, stay present and don't rush the experience.</p>
                        </div>
                    </div>
                    <div className="flex">
                        <img src={mindful_eating_people} alt="Two people enjoying their foods together" />
                        <div className="text-with-img">
                            <p>
                                Continue to eat slowly as you talk with your dining companions, paying close attention
                                to
                                your
                                body's signals of
                                fullness. If eating alone, try to stay present to the experience of consuming the food.
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <img src={bowl} alt="a bowl of bananas, broccoli and other nutrition-rich food on a table" />
                        <div className="text-with-img">
                            <p>Give gratitude and reflect on where this food came from, the plants or animals involved, and all
                                the people it took to
                                transport the food and bring it onto your plate. Being more mindful about the origins of our
                                food can help us all make
                                wiser and more sustainable choices.</p>
                        </div>
                    </div>
                    <div className="flex">
                        <img src={fullness_scale} alt="hunger fullness scale" />
                        <div className="text-with-img">
                            <p>Use <em>Hunger-Fullness Scale</em> to listen to our internal cues when it comes to our hunger and
                                fullness. Be mindful of the need of our stomach and choose to start eating when you feel enough
                                hunger
                                and stop eating when you are not hungery.</p>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="flex-card flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img id="flip-card-img" src={mindful_eating_cycle_1a}
                                    alt="a cycle of mindful eating checklist" />
                            </div>
                            <div className="flip-card-back">
                                <div className="flip-card-text">
                                    <p>Consciously check whether you are eating mindfully!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    </>
}