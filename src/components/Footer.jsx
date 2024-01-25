import React from 'react'

function Footer() {
  return (
    <>
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center">
                <p className="text-lg">&copy; 2024 GoTech. All rights reserved.</p>
                <div className="mt-4">
                <a href="#" className="text-gray-300 hover:text-white mx-3">Privacy Policy</a>
                <span className="text-gray-300">|</span>
                <a href="#" className="text-gray-300 hover:text-white mx-3">Terms of Service</a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer