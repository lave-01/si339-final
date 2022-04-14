
import maxresdefault from '../static/images/maxresdefault.jpg'
import mindful_eating_tips_FTR from '../static/images/mindful-eating-tips-FTR.jpg'
import book6 from '../static/images/book6.jpg'
import book from '../static/images/book.jpg'
import book1 from '../static/images/book1.jpg'
import book5 from '../static/images/book5.jpg'
import book2 from '../static/images/book2.jpg'
import book3 from '../static/images/book3.jpg'
import book4 from '../static/images/book4.jpg'

export default function Reference() {
    return <>
        <main>
            <div id="main">
                <h1>References and Resources for mindful eating</h1>
                <div className="text">
                    <div className="website">
                        <h3>Websites</h3>
                        <ul id="websites">
                            <li><a href='https://www.eatthis.com/mindful-eating-techniques/'>www.eatthis.com's mindful eating
                                tips</a></li>
                            <li><a href='https://movara.com/2015/12/08/7-types-of-eaters-what-type-are-you'>A blog describing
                                types
                                of eaters</a></li>
                            <li><a href='https://amihungry.com/mindful-eating-resources/about-the-mindful-eating-cycle'>Am I
                                Hungry?
                                -- The Mindful Eating Cycle (super helpful!)</a></li>
                            <li><a href='https://amihungry.com/eating-cycle-assessment'>Test youself: EATING CYCLE
                                ASSESSMENT</a></li>
                        </ul>
                        <h3>Other Resources for getting help</h3>
                        <ul id="other-resources">
                            <li>8 Steps to Mindful Eating – How to truly pay attention to the food you eat. (Harvard Health
                                Publishing)</li>
                            <li>Introduction to Mindful Eating – What it is, the benefits, and how to start. (The Center for
                                Mindful
                                Eating)</li>
                            <li>Also, there is some resources from the Center for Mindful Eating (unverified). Starting a
                                Mindful
                                Eating Practice for those wishing to learn more starting a mindful eating practice
                                Community practices for live, guided meditation and mindful eating practice.</li>
                        </ul>
                    </div>
                    <div className="other-resource">
                        <h3>These may help mindful eating fit in your everyday life</h3>
                        <ul>
                            <li>Podcast: Ram Dass is joined by a young Joseph Goldstein and Jack Kornfield for a meaningful talk
                                about mindfulness and food: <a href="https://www.ramdass.org/ep-104-mindfulness-food/">link</a>
                            </li>
                            <li>Book: Mindful Eating: A Guide to Rediscovering a Healthy and Joyful Relationship with Food by
                                Jan
                                Chozen Bays, MD</li>
                            <li>Book: Savor: Mindful Eating, Mindful Life by Thich Nhat Hahn</li>
                            <li>Book: Eating the Moment: 141 Mindful Practices to Overcome Overeating One Meal at a Time by
                                Pavel G.
                                Somov</li>
                            <li>Book: Art of the Inner Meal: The Power of Mindful Practices to Heal Our Food Cravings by Donald
                                Altman</li>
                            <li>Book: Mindful Eating: Develop a Better Relationship with Food through Mindfulness, Overcome
                                Eating Disorders (Overeating, Food
                                Addiction, Emotional and Binge ... Enjoy Healthy Weight Loss without Diets
                                by Nathalie Seaton</li>
                            <li>Book: Eat to Love: A Mindful Guide to Transforming Your Relationship with Food, Body, and Life
                                by Jenna Hollenstein</li>
                            <li>App: Headspace</li>
                        </ul>
                    </div>
                </div>
                <div className="gallery grid-container">
                    <div className="wrapper">
                        <div className="box header">
                            <img className="grid Ram" src={maxresdefault}
                                alt="Cover of Ram Dass Podcast with Ram Dass watching you" />
                        </div>
                        <div className="box sidebar">
                            <img className="grid" src={mindful_eating_tips_FTR} alt="a woman holding some food smiling" />
                        </div>
                        <div className="box sidebar2">
                            <img className="grid Jenna" src={book6}
                                alt="Cover of Eat to Love: A Mindful Guide to Transforming Your Relationship with Food, Body, and Life" />
                        </div>
                        <div className="box sidebar3">
                            <img className="grid Thich" src={book2}
                                alt="Cover of Savor: Mindful Eating, Mindful Life: an orange" />
                        </div>
                        <div className="box sidebar4">
                            <img className="grid Pavel" src={book3}
                                alt="Cover of Eating the Moment: 141 Mindful Practices to Overcome Overeating One Meal at a Time: two hands holding a bowl full of berries" />
                        </div>
                        <div className="box sidebar5">
                            <img className="grid Donald" src={book4}
                                alt="Cover of Art of the Inner Meal: The Power of Mindful Practices to Heal Our Food Cravings: two plates with utensils on the water" />
                        </div>
                        <div className="box sidebar6">
                            <img className="grid Jon" src={book}
                                alt="Cover of Mindful Eating: A Guide to Rediscovering a Healthy and Joyful Relationship with Food: a hand holding a wood bowl" />
                        </div>
                        <div className="box sidebar7">
                            <img className="grid Nathalie" src={book5}
                                alt="Cover of Mindful Eating: Develop a Better Relationship with Food through Mindfulness, Overcome Eating Disorders: a plate with a smile made by food" />
                        </div>
                        <div className="box sidebar7">
                            <img className="grid Jan" src={book1}
                                alt="Cover of Mindful Eating: A Guide to Rediscovering a Healthy and Joyful Relationship with Food: a bowl full of strawberries" />
                        </div>
                        <div className="box content">
                            There are plenty of useful resources online!
                        </div>
                        <div className="box footer"></div>
                    </div>
                </div>
            </div>
        </main>
    </>
}