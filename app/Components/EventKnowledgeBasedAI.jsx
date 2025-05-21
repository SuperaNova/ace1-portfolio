'use client'
import React from 'react'
import { useEffect } from 'react';
import { createChat } from '@n8n/chat';
// import '@n8n/chat/style.css';


const EventKnowledgeBasedAI = () => {
    // useEffect(() => {
	// 	createChat({
	// 		webhookUrl: 'https://dsva.app.n8n.cloud/webhook/d9121fc2-1d0e-46d8-8787-fbf128b986ed/chat',
    //         mode: 'fullscreen',
    //         initialMessages: [
    //             'Hi there! 👋',
    //         ],
    //         target: '#event-knowledge-based-ai',
    //         i18n: {
    //             en: {
    //                 title: '',
    //                 subtitle: "",
    //                 footer: '',
    //                 getStarted: 'New Conversation',
    //                 inputPlaceholder: 'Type your question..',
    //             },
    //         },
	// 	});
	// }, []);
    return (
        <div className="p-4 ">
            {/* <div id="event-knowledge-based-ai" className='w-[1000] mx-auto h-[500] mb-10 overflow-auto'></div>  */}
            <div className="flex gap-6">
                <iframe width={800} height={500} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRrvmSUAimp0ULHwPYJK6BYvdCbkT1GBLfGK0-IVHN_wxACuOCpF_5G8ySFjXVx_JH44jOPwGLR5V1A/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                <iframe width={800} height={500} src="https://docs.google.com/document/d/e/2PACX-1vRbqKqy1llnmgKJWRT1AaACla03TvHy7YgmVJ9fMS-xAHYWYajNTBn-NkYCUg-20mgym9jnQbydzCy-/pub?embedded=true"></iframe>
            </div>
        </div>
    )
}

export default EventKnowledgeBasedAI