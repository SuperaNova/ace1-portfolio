import React from 'react';
import AboutSection from '../app/Components/AboutSection';
import Contact from '../app/Components/Contact';
import Header from '../app/Components/Header';
import Hero from "../app/Components/Hero";

export default function Home() {

    const portfolioData = [
            {
                title: 'AI Data Analyst Chatbot',
                description: 'A chatbot that uses AI to answer questions about data analysis. This workflow analyze google sheet. It triggers with a chat and and give answer from what it analyzed. It use a calculator node which calculates the numbers in the google sheet',
                image: '/workflow-images/AI Data Analyst Chatbot.png',
                link: 'WorkflowPage/ai-data-analyst-chatbot'
            },
            {
                title: 'Chat-triggered Answer Search',
                description: 'Search through documents, scrape websites and answer questions',
                image: '/workflow-images/Chat-triggered Answer Search.png',
                link: 'WorkflowPage/chat-triggered-answer-search'
            },
            {
                title: 'Pepa Medical Clinic',
                description: 'A medical clinic automation system using Vapi, Make, and Airtable for handling appointments.',
                image: '/workflow-images/Pepa Medical Clinic.png',
                link: 'WorkflowPage/pepa-medical-clinic'
            },
            {
                title: 'Personal Assistant',
                description: 'A chat bot and voice personal assistant that can perform various tasks such as scheduling appointments, sending messages, and more.',
                image: '/workflow-images/personal-assistant.png',
                link: 'https://evo-personal-assistant.vercel.app/'
            },
            {
                title: 'Event Knowledge Based AI',
                description: 'Telegram bot that analyzes and answers questions. It has a broadcast feature that sends messages to users that has interacted with the bot. And a schedule message feature',
                image: '/workflow-images/Event Knowledge Based AI.png',
                link: 'WorkflowPage/event-knowledge-based-ai'
            },
            {
                title: 'Automated Interview Scheduling Google Calendar Chat Bot',
                description: 'This workflow uses chat as trigger. It connects with google calendar to get availability during the week and creation  of events',
                image: '/workflow-images/Automated Interview Scheduling Google Calendar Chat Bot.png',
                link: 'WorkflowPage/automated-interview-scheduling-google-calendar-chat-bot'
            },
            {
                title: 'Helpdesk',
                description: 'This workflow uses chat as trigger to handle inquiries and tickets',
                image: '/workflow-images/Helpdesk.png',
                link: 'WorkflowPage/helpdesk'
            },
    ]
    

    return (
        <div className="antialiased">
            <Header />

            <Hero />

            {/* Workflow Showcase */}
            <section id="workflows" className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 md:mb-16">
                        Interactive Workflows
                    </h2>
            {/* Workflow Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12" >
        {portfolioData.map((workflow, index) => (
                <div className="workflow-card bg-white rounded-xl shadow-lg overflow-hidden flex flex-col my-8" key={index}>
                    <img src={workflow.image}
                        alt={workflow.title}
                        className="w-full h-56 object-cover"/>
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{workflow.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 flex-grow">
                            {workflow.description}
                        </p>
                        <a href={workflow.link} className="btn-primary-link w-full font-medium py-2.5 px-5 rounded-lg mt-auto">
                            Launch Workflow
                        </a>
                    </div>
                </div>
        ))
        }
            </div>
                </div>
            </section>

            <AboutSection />

            <Contact />

            
        </div>
    );
}
