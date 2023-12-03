//import { useState, useEffect } from 'react';
//import Helmet from 'react-helmet';
//import ReactMarkdown from 'react-markdown';
//
///**
//*  Page Sections:
//*
//*  Intro: The first sentence
//*  =================================
//*  required: true
//*  default: "[Author] wants you to know about their communication style"
//*  maxLength: 100 chars (one short sentence);
//*
//*
//*  The PSA: The main note on commmunication style / explanation of condition.
//*  =================================
//*  required: true
//*  default: This disorder can severely impair...
//*  maxLength: 650 chars (about 100 words), including symptoms.
//*
//*
//*  The Kicker: What action the audience can take to respond
//*  ==================================
//*  required: true (even if it's "Nothing! This PSA is purely for your awareness")
//*  default: Even though reminders can feel like a social faux-pas...
//*  maxLength: 500 chars (1-3 short sentences ideal, though can be longer)
//*
//*
//*  Q&A: Others questions the audience might ask, or emphasis the author wants to make
//*  ===================================
//*  required: false
//*  default: null
//*  maxLength: 10 QA Blocks. Each Q is 1-2 sentences. A is max 100 words.
//*/
//
//enum ConditionTemplate {
//    Neurodevelopmental_Disorder = "NDD", // Less specific term for ADHD / ADD / Autism / And others
//    Custom = ""
//}
//
//const App = () => {
//    const [userData, setUserData] = useState({
//        authorName: null,
//        profileImage: 'default-profile-image-url',
//        conditionTemplate: ConditionTemplate
//    });
//
//    // Simulate loading user data (replace with actual logic to load JSON files)
//    useEffect(() => {
//        // Load user data here and set it using setUserData
//    }, []);
//
//
//
//    const defaultContent = `
//# Hi there!
//
//![Profile Picture](${userData.profileImage})
//
//**${userData.authorName} wants you to know about their communication style.**
//
//This style is influenced by a Neurodevelopmental Brain Disorder, which can affect the brain's prefrontal cortex. This impacts executive functions such as short-term memory, inhibition, time-awareness, CNS regulation, and task-switching.
//
//### Common Symptoms Include:
//
//- Missed messages
//- Delayed responses
//- Forgotten follow-ups
//
//**What can you do if you suspect this has happened?**
//
//Even though reminders can feel like a "social faux pas", they are immensely helpful. A quick follow-up message is often all that's needed to resume communication.
//
//### Q & A
//
//- **How often does this happen?**
//  Often enough that someone created a website for it.
//
//- **Is the author ignoring me?**
//  No, it's more about their brain's current focus.
//
//...
//
//${userData.personalNotes}
//
//${Object.entries(userData.customSections).map(([key, value]) => `### ${key}\n\n${value}`).join('\n\n')}
//`;
//
//    return (
//        <div className='App'>
//            <Helmet>
//                <title>{userData.authorName ? `${userData.authorName.split(' ')[0]}'s Communication Style` : 'Understanding Communication Styles'}</title>
//            </Helmet>
//            <ReactMarkdown children={defaultContent} />
//        </div>
//        );
//};
//
//export default App;