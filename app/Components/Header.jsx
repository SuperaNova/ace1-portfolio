import React from 'react'

const Header = () => {
  return (
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
        </header>  )
}

export default Header