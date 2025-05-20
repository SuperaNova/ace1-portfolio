'use client'
import React from 'react'
import { useEffect } from 'react';
import { createChat } from '@n8n/chat';
import '@n8n/chat/style.css';


const AutomatedInterviewSchedulingGoogleCalendarChatBot = () => {
    useEffect(() => {
		createChat({
			webhookUrl: 'https://dsva.app.n8n.cloud/webhook/0c8f9f17-f5f3-4b5d-85e7-071ced0213ae/chat',
            mode: 'fullscreen',
            initialMessages: [
                'Hi there! 👋',
            ],
            target: '#n8n-automated-interview-scheduling-google-calendar-chat-bot',
            i18n: {
                en: {
                    title: '',
                    subtitle: "",
                    footer: '',
                    getStarted: 'New Conversation',
                    inputPlaceholder: 'Type your question..',
                },
            },
		});
	}, []);
    return (
        <div className="p-4 flex flex-between gap-6">
            {/* <iframe width={800} height={500} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTxbiWnXS59jpJVKykZMYZYXdvFOOigprk3lv-7MBPBGf113NR1t4LyrU--USXPxeQV0R6iC8WeA-aP/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe> */}
            <iframe src="https://calendar.google.com/calendar/embed?src=ailemaraicanete%40gmail.com&ctz=Asia%2FManila" 
                className='border-0 w-[800] h-[600]'></iframe>
            <div id="n8n-automated-interview-scheduling-google-calendar-chat-bot" className='w-full h-[500px] overflow-auto'></div> 
        </div>
    )
}

export default AutomatedInterviewSchedulingGoogleCalendarChatBot