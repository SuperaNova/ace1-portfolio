import React from 'react';
import AboutSection from '../app/Components/AboutSection';
import Contact from '../app/Components/Contact';
import Header from '../app/Components/Header';
import Hero from "../app/Components/Hero";

export default function Home() {

    const portfolioData = [
            {
                title: 'Customer Service AI Agent (Helpdesk)',
                description: 'An AI Agent that answers inquiries about a product, pricing, etc. It allows users/clients to raise an issue. The agent will try to give instructions on how to fix an issue. This AI is integrated with Helpdesk system where issues will be raises for 2nd level support',
                image: '/images-worflow-background/Customer Service.jpg',
                link: 'WorkflowPage/helpdesk'
            },
            {
                title: 'Event AI Agent',
                description: 'An AI agent that answers questions about an event. Questions such as: event time, location, guests, parking, food, etc.',
                image: '/images-worflow-background/Event AI Agent.jpg',
                link: 'WorkflowPage/event-ai-agent'
            },

            {
                title: 'Data Analyst Agent',
                description: 'A chatbot that uses AI to answer questions about data analysis. This workflow analyzes sales, refunds, etc. from a data source. ',
                image: '/images-worflow-background/data-analyst.jpg',
                link: 'WorkflowPage/data-analyst-agent'
            },
            {
                title: `'Ask Me' AI Agent`,
                description: 'A chatbot that uses AI to search through documents, scrape websites and answer questions. This is very useful to find answers related to company policies, procedures, work instructions, or any other related use cases.',
                image: '/images-worflow-background/Ask Me AI Agent.jpg',
                link: 'WorkflowPage/ask-me-ai-agent'
            },
            {
                title: 'Automated Interview Scheduling Google Calendar Chat Bot',
                description: 'This workflow uses chat as trigger. It connects with google calendar to get availability during the week and creation  of events',
                image: '/images-worflow-background/Automated Interview Scheduling Google Calendar Chat Bot.jpg',
                link: 'WorkflowPage/automated-interview-scheduling-google-calendar-chat-bot'
            },
            // {
            //     title: 'Pepa Medical Clinic',
            //     description: 'A medical clinic automation system using Vapi, Make, and Airtable for handling appointments.',
            //     image: '/workflow-images/Pepa Medical Clinic.png',
            //     link: 'WorkflowPage/pepa-medical-clinic'
            // },
            {
                title: 'Personal Assistant',
                description: 'A chat bot and voice personal assistant that can perform various tasks such as scheduling appointments, sending messages, and more.',
                image: '/images-worflow-background/Personal Assistant.jpg',
                link: 'https://evo-personal-assistant.vercel.app/'
            },
            {
                title: 'AI Voice Assistant',
                description: 'An interactive AI voice assistant that engages in conversation and provides information in real-time using the Vapi.ai platform.',
                image: '/images-worflow-background/Personal Assistant.jpg',
                link: 'WorkflowPage/vapi-assistant',
                isVapi: true
            }
    ]
    

    return (
        <div className="antialiased">
            <Header />

            <Hero />

            {/* Workflow Showcase */}
            <section id="workflows" className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 md:mb-16">
                        AI Automation
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
