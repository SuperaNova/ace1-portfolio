'use client'
import { useEffect, useState } from "react"
import AIDataAnalystChatbot from "../../Components/AIDataAnalystChatbot"
import ChatTriggeredAnswerSearch from "../../Components/ChatTriggeredAnswerSearch"
import PepaMedicalClinic from "../../Components/PepaMedicalClinic"
import EventKnowledgeBasedAI from "../../Components/EventKnowledgeBasedAI"
import AutomatedInterviewSchedulingGoogleCalendarChatBot from "../../Components/AutomatedInterviewSchedulingGoogleCalendarChatBot"
import Helpdesk from "../../Components/Helpdesk"


const page = ({params}) => {
    const workflow_info = [
        {
            name: "AI Data Analyst Chatbot",
            description: "A chatbot that uses AI to answer questions about data analysis. This workflow analyze google sheet. It triggers with a chat and and give answer from what it analyzed. It use a calculator node which calculates the numbers in the google sheet",
            instruction: "The chatbot uses AI to answer questions about data analysis. It is trained on a dataset of data analysis questions and answers.",
            notes: "",
            component: <AIDataAnalystChatbot />,
            link: "ai-data-analyst-chatbot"
        },
        {
            name: "Chat-triggered Answer Search",
            description: "search through documents, scrape websites and answer questions",
            instruction: "search through documents, scrape websites and answer questions",
            notes: "",
            component: <ChatTriggeredAnswerSearch />,
            link: "chat-triggered-answer-search"
        },
        {
            name: "Pepa Medical Clinic",
            description: "A medical clinic automation system using Vapi, Make, and Airtable for handling appointments.",
            instruction: "A medical clinic automation system using Vapi, Make, and Airtable for handling appointments.",
            notes: "",
            component: <PepaMedicalClinic />,
            link: "pepa-medical-clinic"
        },
        {
            name: "Event Knowledge based AI",
            description: "telegram bot that analyzes and answers questions. It has a broadcast feature that sends messages to users that has interacted with the bot. And a schedule message feature",
            instruction: "telegram bot that analyzes and answers questions. It has a broadcast feature that sends messages to users that has interacted with the bot. And a schedule message feature",
            notes: "",
            component: <EventKnowledgeBasedAI />,
            link: "event-knowledge-based-ai"
        },
        {
            name: "Automated Interview Scheduling Google Calendar Chat Bot",
            description: "this workflow uses chat as trigger. It connects with google calendar to get availability during the week and setting of events",
            instruction: "this workflow uses chat as trigger. It connects with google calendar to get availability during the week and setting of events",
            notes: "",
            component: <AutomatedInterviewSchedulingGoogleCalendarChatBot />,
            link: "automated-interview-scheduling-google-calendar-chat-bot"
        },
        {
            name: "Helpdesk",
            description: "this workflow uses chat as trigger to handle inquiries and tickets",
            instruction: "this workflow uses chat as trigger to handle inquiries and tickets",
            notes: "",
            component: <Helpdesk />,
            link: "helpdesk"
        },
    ]
    
    const [site, setSite] = useState('')
    useEffect(() => {
        const getWorkflow = async() =>{
            const items = await params
            setSite(items.workflow)
        }
        getWorkflow()
    }, [])

    return (
        <div className='antialiased text-gray-800'>
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 id="workflowTitle" className="text-xl md:text-2xl font-bold text-indigo-700">{site}</h1>
                    <a href="/" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium py-2 px-4 rounded-md border border-indigo-600 hover:bg-indigo-50 transition-colors duration-150">
                        &larr; Back to Portfolio
                    </a>
                </div>
            </header>

            {workflow_info.map((workflow, index) => {
                if(site === workflow.link)
                return(<div className="content-wrapper container mx-auto px-6 py-8 md:py-12" key={index}>
                    {/* instructions */}
                    <section id="workflowInstructions" className="mb-8 p-6 bg-indigo-50 border border-indigo-200 rounded-lg shadow">
                        <h2 className="text-xl font-semibold text-indigo-800 mb-3">Description:</h2>
                        <p className="text-gray-700 leading-relaxed">{workflow.description}</p>
                    </section>

                    {/* worflow area */}
                    <section id="interactiveWorkflowArea" className="mb-8">
                        <div className="bg-slate-700 text-white px-4 py-2.5 flex justify-between items-center rounded-t-md">
                            <span id="workflowToolbarTitle" className="text-base font-semibold truncate">{workflow.name} - Live Demo</span>
                            <div className="flex items-center space-x-2">
                                <span className="w-3.5 h-3.5 bg-slate-500 rounded-full inline-block" title="Visual only"></span>
                                <span className="w-3.5 h-3.5 bg-slate-500 rounded-full inline-block" title="Visual only"></span>
                                <span className="w-3.5 h-3.5 bg-slate-500 rounded-full inline-block" title="Visual only"></span>
                            </div>
                        </div>
                        
                        
                        {workflow.component}
                    </section>

                    {/* Notes and Considetions */}
                    <section id="workflowNotes" className="mb-8 text-sm text-gray-600">
                        <h3 className="font-semibold text-gray-700 mb-2">Notes & Considerations:</h3>
                        <h4>Try asking it these questions:</h4>
                        <u>
                            <li>- How many refunds in January and what was the amount refunded?</li>
                            <li>- How many successful sales did we have in January 2025 and what was the final income of those?</li>
                            <li>- What is the most frequent reason for refunds?</li>
                        </u>
                    </section>


                </div>)
            })}


        </div>
    )
}

export default page