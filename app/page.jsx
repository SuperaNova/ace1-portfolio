import React from 'react';


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
                description: 'search through documents, scrape websites and answer questions',
                image: '/workflow-images/Chat-triggered Answer Search.png',
                link: 'WorkflowPage/chat-triggered-answer-search'
            },
            {
                title: 'Pepa Medical Clinic',
                description: 'A medical clinic automation system using Vapi, Make, and Airtable for handling appointments.',
                image: '/workflow-images/Pepa Medical Clinic.png',
                link: 'WorkflowPage/pepa-medical-clinic'
            },
    ]
    

    return (
        <div className="antialiased">
            {/* Home */}
            <header className="bg-white shadow-md sticky top-0 z-50">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div>
                        <a href="#home" className="text-2xl font-bold text-gray-800">Agents Portfolio</a>
                    </div>
                    <div className="space-x-4">
                        <a href="#home" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="#workflows" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Workflows</a>
                        <a href="#about" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="#contact" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section id="home" className="hero-section text-white py-20 md:py-32">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Interactive Workflow Showcase</h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Explore a collection of my dynamic and interactive workflows. Click on any workflow to experience it live on its dedicated page.
                    </p>
                    <a href="#workflows" className="btn-secondary-link font-semibold py-3 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        View Workflows
                    </a>
                </div>
            </section>

            {/* Workflow Showcase */}
            <section id="workflows" className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 md:mb-16">
                        My Interactive Workflows
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

            {/* About Section */}
            <section id="about" className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>
                    <div className="max-w-3xl mx-auto text-center text-gray-700 text-lg">
                        <img src="https://placehold.co/150x150/E0E7FF/4338CA?text=Your+Photo" alt="Your Name" className="w-32 h-32 rounded-full mx-auto mb-6 shadow-md" />
                        <p className="mb-4">
                            Hi, This is ACE1, a passionate Your Profession/Title specializing in creating efficient and engaging workflows. 
                            This portfolio showcases some of my projects where users can directly interact with the processes I have designed.
                        </p>
                        <p>
                            I believe in making complex systems understandable and accessible through interactive experiences. Feel free to explore and reach out!
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Get In Touch</h2>
                    <div className="max-w-xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-xl">
                        <form action="#" method="POST"> <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input type="text" name="name" id="name" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150" placeholder="Your Name" required />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" name="email" id="email" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150" placeholder="you@example.com" required />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea name="message" id="message" rows={4}  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150" placeholder="Your message..." required></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            
        </div>
    );
}
