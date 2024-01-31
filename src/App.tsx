import './App.css'
import React, {useState, useEffect} from 'react'
import Helmet from 'react-helmet'
import Headshot from './assets/1680028854516.jpeg'


const relevantSymptoms = [
    "Missed messages",
    "Delayed responses",
    "Forgotten follow-ups"
];

const BulletList = ({listItems}: {listItems: string[]}) => (
    <ul children={listItems.map(i => <li key={i} children={i}/>)}/>
)
const HeadshotImg = () => (
    <img style={{borderRadius: '100%'}} height={100} width={100} src={Headshot} />
)

const whatCanIDo = {
    "What can I do if I suspect this has happened?": "Even though reminders can feel like a \"social faux pas\", they are immeasurably helpful. A quick follow-up message is seen as an act of significant kindness, and is often all that's needed to resume communication.",
}

const otherNotes = {
    "How often does this happen?": "Often enough that he created a website.",
    "Is Lucas ignoring me?": "No. The frontal lobe of his brain is coloring instead of reminding him of things he needs to know.",
    "I'm annoyed that I have to help him remember": "This is an appropriate reaction, for which you aren't blamed. Know that you are never expected to take action, and it is ultimately up to the one suffering to manage symptoms as best they can.",
    "I don't want to be annoying / I don't want be a bother": "Rest assured, a brain that doesn't remember to eat throughout the day is far more bothersome than your helpful follow up message.",
    "But what if this is really important?": "Good question! In the case of important messages, he'll spend even more time feeling bad about forgetting.",
    "Are you sure? It's been __ days!": "Yes. Especially if he's read the message, started to respond, and been pulled away.",
    "I bet he doesn't forget to respond to _____": "Oh, he most definitely does. Fear of forgetting to respond (and therefore being misunderstood) is one of the more powerful motivators to keeping something front-of-mind. Since fear is less prevalent in close relationships, the degree of forgetfulness actually increases.",
    "It can't really be THAT bad": "It is really that bad.",
    "Does this brain disorder have a name?": "Yes - which has unfortunately been overused and misunderstood to the point of causing significant harm for those with legitimate diagnoses.",
    "I'd like to test my own bias, what's the disorder called?": () => <span>Deal! Even with a severe diagnosis from multiple doctors and a textbook history of its ill-effects on my life, I struggled to believe the condition was real. My story is unfortunately more of <i>the rule</i> than it is <i>the exception</i>, and nothing short of "tragedy" quite describes the millions of Americans internalizing shame over a condition they've been told does not exist. So pay attention to your reaction and examine how the name of <a href="https://www.additudemag.com/slideshows/adhd-and-shame/">this neurodevelopmental brain disorder</a> affects your perception. And remind me to text you back when you're done.</span>

}

interface CardProps {
    [p: string]: any;
    obj: Record<string, string|React.FunctionComponent>
    headerProps?: Record<string, any>
}

const SectionCard = ({obj, headerProps, ...props}: CardProps) => (
    <div className="card" {...props}>
        {
            Object.entries(obj).map(
                ([question, Answer]) => (
                    <div key={question} style={{padding: '1em 1em 0 0'}}>
                        <b {...headerProps}>{question}</b>
                        <br/>{typeof(Answer) === 'string' ? Answer : <Answer />}
                    </div>
                )
            )
        }
    </div>
)

export const App = () => {
    const [authorName, setAuthorName] = useState('Lucas');
    useEffect(() => setAuthorName(authorName), [authorName])

    return(

        <div className='App'>
            <Helmet>
                <title>
                    {
                        authorName? authorName.split(' ')[0] + '\'s PSA'
                            : 'A Quick PSA'
                    }
                </title>
            </Helmet>
            <div className="main-card">
            <h2 children={'Hi there!'}/>
                <HeadshotImg/>
                <p>
                    <b>Lucas wanted you to know that he suffers from a very pesky{' '}
                    <span className="tooltip"> Neurodevelopmental Brain Disorder <span className="tooltiptext">Neurodevelopmental disorders are a group of conditions in which the growth and development of the brain is affected. This can impact an individual's language, emotions, behavior, self-control, learning and memory.</span></span></b>.
                    This disorder can severely impair the brains prefrontal cortex, which manages
                    executive functions like short-term working memory, inhibition, time-awareness, CNS regulation, and task-switching.
                    <br />
                    <h3 style={{color: '#909090'}}><i>"It's not you, its <s>me</s> my malfunction prefrontal cortex."</i></h3>
                    Despite significant efforts at prevention, you might experience some of the following:
                    <BulletList listItems={relevantSymptoms} />
                    Please know that Lucas is acutely aware of the frustration and inconvenience this can cause.
                    Your grace, patience, and understanding is appreciated more than you know.
                </p>
            </div>
                <SectionCard key='gradientBox' className="card default" obj={whatCanIDo} headerProps={{className: 'gradient-text'}} />
                <h2 style={{textAlign: 'center'}}>Q & A</h2>
                <SectionCard key='QandA' obj={otherNotes} className="card default"/>
        </div>
)};

export default App
