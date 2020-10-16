import React from 'react';
import { Button, Icon } from 'element-react';

class Help extends React.Component{
    render() {
        return (
            <div className="py-20 bg-gray-100">
                <div className="font-nunito antialiased  text-gray-900 p-4 flex items-center justify-center">
    
                <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
    
                    <div className="main-title my-8">
                        <h1 className="font-bold text-2xl text-center">How can we help you?</h1>
                    </div>
    
                    <div className="main-search mb-8 rounded-lg shadow-lg px-6 py-3 w-full flex items-center space-x-6 border border-gray-200 border-opacity-75">
                        <Icon  name="search"/>
                        <input x-ref="search" type="text" placeholder="Describe your issue" className="text-base w-full bg-transparent focus:outline-none border-none p-2"/>
                    </div>
    
                    <div className="main-question mb-8 flex flex-col divide-y text-gray-800 text-base">
                        <div className="item px-6 py-6" x-data={"{isOpen : false}".toString()}>
                            <a href="#" className="flex items-center justify-between">
                                <h4 >Popular articles</h4>
                                <svg 
                                    className="w-5 h-5 text-gray-500"
                                    fill="none" strokeLinecap="round" 
                                    strokeLinejoin="round" strokeWidth="2" 
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </a>
                            <div x-show="isOpen">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ex. Expedita sunt enim, vel amet cumque nulla illum harum. Similique!
                            </div>
                        </div>
    
                        <div className="item px-6 py-6" x-data={"{isOpen : false}".toString()}>
                            <a href="#" className="flex items-center justify-between">
                                <h4 >Fix problems & request removals</h4>
                                <svg 
                                    className="w-5 h-5 text-gray-500"
                                    fill="none" strokeLinecap="round" 
                                    strokeLinejoin="round" strokeWidth="2" 
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </a>
                            <div x-show="isOpen">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ex. Expedita sunt enim, vel amet cumque nulla illum harum. Similique!
                            </div>
                        </div>
    
                        <div className="item px-6 py-6" x-data={"{isOpen : false}".toString()}>
                            <a href="#" className="flex items-center justify-between">
                                <h4 >Browse the web</h4>
                                <svg 
                                    className="w-5 h-5 text-gray-500"
                                    fill="none" strokeLinecap="round" 
                                    strokeLinejoin="round" strokeWidth="2" 
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </a>
                            <div x-show="isOpen" >
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ex. Expedita sunt enim, vel amet cumque nulla illum harum. Similique!
                            </div>
                        </div>
    
                        <div className="item px-6 py-6" x-data={"{isOpen : false}".toString()}>
                            <a href="#" className="flex items-center justify-between">
                                <h4>Search on your phone or tablet</h4>
                                <svg 
                                    className="w-5 h-5 text-gray-500"
                                    fill="none" strokeLinecap="round" 
                                    strokeLinejoin="round" strokeWidth="2" 
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </a>
                            <div >
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ex. Expedita sunt enim, vel amet cumque nulla illum harum. Similique!
                            </div>
                        </div>
                    </div>
    
                    <div className=" mb-8 ">
                        <div className="images grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="image bg-white rounded-lg shadow-lg overflow-hidden">
                                <a href="#">
                                    <img className="h-64" src="https://images.unsplash.com/45/QDSMoAMTYaZoXpcwBjsL__DSC0104-1.jpg" alt="Contact with Customer support" title="Contact with Customer support"/>
                                    <span className="text-center p-2 text-gray-700 text-sm inline-block w-full">Customer support</span>
                                </a>
                            </div>
    
                            <div className="image bg-white rounded-lg shadow-lg overflow-hidden">
                                <a href="#">
                                    <img className="h-64" src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a" alt="Send massage to support disk" title="Send massage to support disk"/>
                                    <span className="text-center p-2 text-gray-700 text-sm inline-block w-full">Send massage</span>
                                </a>    
                            </div>
    
                            <div className="image bg-white rounded-lg shadow-lg overflow-hidden">
                                <a href="#">
                                    <img className="h-64" src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3" alt="Write your feedback" title="Write your feedback"/>
                                    <span className="text-center p-2 text-gray-700 text-sm inline-block w-full">Write feedback</span>
                                </a>                        
                        </div>
                        </div>
                    </div>
    
                </div>
    
                </div>
            </div>
        );
    }
}

export default Help;
