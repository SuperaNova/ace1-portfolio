'use client'
import AIDataAnalystChatbot from "../Components/AIDataAnalystChatbot"


const page = ({}) => {
    const workflow_info = [
        {
            name: "AI Data Analyst Chatbot",
            description: "A chatbot that uses AI to answer questions about data analysis. This workflow analyze google sheet. It triggers with a chat and and give answer from what it analyzed. It use a calculator node which calculates the numbers in the google sheet",
            instruction: "The chatbot uses AI to answer questions about data analysis. It is trained on a dataset of data analysis questions and answers.",
            image: "/workflow-images/AI Data Analyst Chatbot.png",
            notes: "",
            component: <AIDataAnalystChatbot />,
        }
    ]

    

    return (
        <div className='antialiased text-gray-800'>
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 id="workflowTitle" className="text-xl md:text-2xl font-bold text-indigo-700">[Workflow Name]</h1>
                    <a href="/" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium py-2 px-4 rounded-md border border-indigo-600 hover:bg-indigo-50 transition-colors duration-150">
                        &larr; Back to Portfolio
                    </a>
                </div>
            </header>

            {workflow_info.map((workflow, index) => {
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