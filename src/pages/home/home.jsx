import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TeacherProfile from './teacherProfile';


class Home extends Component {
    state = {  }
    render() { 
        var teachers = [1,2,3,4];
        var hightlights = [
            {
                id:1,
                icon:'https://www.import.io/wp-content/uploads/2018/04/Rocket-icon-blue-1-300x300.png',
                title:'Service',
                description:'Focusing on Japaness only'
            },
            {
                id:2,
                icon:'https://www.import.io/wp-content/uploads/2018/04/Rocket-icon-blue-1-300x300.png',
                title:'24/7 Class',
                description:'Available 24/7'
            },
            {
                id:3,
                icon:'https://www.import.io/wp-content/uploads/2018/04/Rocket-icon-blue-1-300x300.png',
                title:'Quick Support',
                description:'Focusing on Japaness only'
            },
            {
                id:4,
                icon:'https://www.import.io/wp-content/uploads/2018/04/Rocket-icon-blue-1-300x300.png',
                title:'Native Speaker',
                description:'Focusing on Japaness only'
            }
        ]
        return ( 
        <div className="">
           <div className="flex flex-wrap-reverse h-full py-32">
                <div className="w-full sm:w-1/2 flex items-start justify-center h-full">
                        <div className="space-y-10 px-4">
                            <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Ready to dive in?
                                <br/>
                                <span className="text-indigo-600">Start your first class today.</span>
                            </h2>
                            <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
                                <div className="inline-flex rounded-md shadow">
                                    <Link to="/" href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                    Get started
                                    </Link>
                                </div>
                                <div className="ml-3 inline-flex rounded-md shadow">
                                    <Link to="/" href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                    Learn more
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 flex items-center justify-center h-full">
                    <img src="https://profiles.sulekha.com/mstore/41473532/albums/default/thumbnailfull/shutterstock-1537715831.jpg" alt=""/>
                    </div>
                
           </div>
           <div className="h-screen bg-gray-200">
               <h1 className="text-center text-3xl pt-20 font-bold"><span className="text-red-500">10000+</span> teachers</h1>
               <div className="flex flex-wrap justify-center p-8">
                {teachers.map((e)=>
                    <div className="w-1/4 p-1" key={e}>
                        <TeacherProfile/>
                    </div>
                )}
               </div>
           </div>
           <div className="h-screen">
               <h1 className="text-center text-3xl pt-20 font-bold">Over <span className="text-red-500">30000+</span> learners</h1>
               <div className="flex flex-wrap justify-center p-8">
                {teachers.map((e)=>
                    <div className="w-1/4 p-1" key={e}>
                        <div className="shadow-xl  ">
                            <img className="object-cover" src="https://previews.123rf.com/images/antonioguillem/antonioguillem1707/antonioguillem170700045/82074335-happy-student-looking-at-you-with-thumbs-up-in-a-classroom-with-classmates-in-the-background.jpg" alt=""/>
                            <div className="p-4">
                                <h4>Student</h4>
                                <p className="font-thin text-gray-500">120 Lessions</p>
                            </div>
                        </div>
                    </div>
                )}
               </div>
           </div>

           <div className="h-screen bg-blue-100 px-20">
               <h1 className="text-center text-3xl pt-20 font-bold">Over <span className="text-red-500">30000+</span> learners</h1>
               <div className="flex flex-wrap justify-center p-8">
                {hightlights.map((e)=>
                    <div className="w-1/4 p-4" key={e.id}>
                        <div className="shadow-xl bg-white rounded-lg">
                            
                            <div className="flex justify-center items-center py-8">
                                <img className="object-cover w-32 h-32" src={e.icon} alt=""/>
                            </div>
                            <div className="p-4 text-center">
                                <h4>{e.title}</h4>
                                <p className="font-thin text-gray-500">{e.description}</p>
                            </div>
                            <div className="h-2 rounded-lg rounded-t-none w-full bg-green-600"></div>
                        </div>
                    </div>
                )}
               </div>
           </div>
        </div> 
        );
    }
}
 
export default Home;
