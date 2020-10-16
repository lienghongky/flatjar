import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sideBarActive: false
        };
      }
    handleToggleSideBar = ()=>{
        this.setState({sideBarActive: !this.state.sideBarActive})
        console.log('click')
    }
    

    render(){
        const navStyle = {
            zIndex:999
        }
        return ( 
            <div style={navStyle} className="fixed top-0 inset-x-0 bg-gray-200  shadow-lg font-semibold text-gray-900 flex p-4 sm:pl-20  bg-opacity-75">
                    <div className="flex items-center">
                        <Link className="hover:text-indigo-600" to="/">FLATJAR</Link>
                    </div>
    
                    {/* Destop screen */}
                    <div className="hidden sm:flex flex-1  justify-end items-center px-4 space-x-4">
                        <Link className="hover:text-indigo-600" to="/student">Student</Link>
                        <Link className="hover:text-indigo-600" to="/teacher">Teacher</Link>
                        <Link className="hover:text-indigo-600" to="/plan">Plan</Link>
                        <Link className="hover:text-indigo-600" to="/help">Help</Link>
                        <div className="px-4 space-x-2">
                        <Link className="bg-indigo-600 rounded-lg p-2 px-4 text-white shadow-lg" to="/login">Login</Link>
                        <Link className="bg-white rounded-lg p-2 px-4 text-indigo-600 shadow-lg" to="/signup">Sign up</Link>
                        </div>
                    </div>
                    {/* Mobile screen */}
                    <div className="sm:hidden flex-1 flex justify-end">
                        <button onClick={this.handleToggleSideBar} className="px-4 p-2  rounded-lg shadow-lg text-indigo-600">=</button>
                       
                    </div>
                    {/* SIDE BAR */}
                    {
                       this.state.sideBarActive && (
                        <div  className="transition  duration-500 transform ease-in-out fixed top-0 right-0 h-screen w-2/3 bg-white shadow-lg">
                            <div className="flex justify-end p-2">
                                <button onClick={this.handleToggleSideBar} className="px-4 p-2  rounded-lg shadow-lg text-indigo-600">X</button>
                            </div>
                            <div className="flex flex-col p-4 space-y-2">
                                <Link className="hover:text-indigo-600 p-2" to="/student">Student</Link>
                                <Link className="hover:text-indigo-600 p-2" to="/teacher">Teacher</Link>
                                <Link className="hover:text-indigo-600 p-2" to="/plan">Plan</Link>
                                <Link className="hover:text-indigo-600 p-2" to="/help">Help</Link>
                                <div className="p-2 flex flex-col space-y-2 text-center">
                                <Link className="bg-indigo-600 rounded-lg p-2 px-4 text-white  shadow-lg" to="/login">Login</Link>
                                <Link className="bg-white rounded-lg p-2 px-4 text-indigo-600 shadow-lg" to="/signup">Sign up</Link>
                                </div>
                            </div>
                        </div>
                        )
                        
                    }
            </div>
        );
    }
    
};
 
export default Nav;


