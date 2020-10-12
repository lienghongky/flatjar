import React, { useState, useCallback, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    const  [sideBarActive, setsideBarActive] = React.useState(0);
    useEffect(() => {
        console.log('in EF',sideBarActive);
    },[sideBarActive, setsideBarActive]);
    const handleToggleClick = useCallback(()=>{
        console.log('Clicked')
        setsideBarActive(c=>c+1)
        console.log(sideBarActive)
    },[sideBarActive, setsideBarActive])

    return ( 
        <div className="fixed top-0 inset-x-0 bg-white bg-opacity-75 shadow-lg font-bold text-gray-900 flex p-4 sm:pl-20">
                <div className="flex items-center">
                    <Link className="hover:text-indigo-600" to="/">FLATJAR</Link>
                </div>

                {/* Destop screen */}
                <div className="hidden sm:flex flex-1  justify-end items-center px-4 space-x-4">
                    <Link className="hover:text-indigo-600" to="/student">Student</Link>
                    <Link className="hover:text-indigo-600" to="/teacher">Teacher</Link>
                    <div className="px-4 space-x-2">
                    <Link className="bg-indigo-600 rounded-lg p-2 px-4 text-white shadow-lg" to="/login">Login</Link>
                    <Link className="bg-white rounded-lg p-2 px-4 text-indigo-600 shadow-lg" to="/signup">Sign up</Link>
                    </div>
                </div>
                {/* Mobile screen */}
                <div className="sm:hidden flex-1 flex justify-end">
                    <button onClick={handleToggleClick} className="px-4 p-2  rounded-lg shadow-lg">=</button>
                    <p>{sideBarActive}</p>
                </div>
                {/* SIDE BAR */}
                {
                    sideBarActive==5 && (
                    <div  className="fixed top-0 right-0 h-screen w-2/3 bg-white shadow-lg">
                        <div className="flex justify-end p-2">
                            <button onClick={handleToggleClick} className="px-4 p-2  rounded-lg shadow-lg">X</button>
                        </div>
                    </div>
                    )
                    
                }
        </div>
    );
    
};
 
export default Nav;


