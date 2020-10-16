import React, { Component } from 'react';
class TeacherProfile extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="shadow-xl overflow-hidden rounded-lg ">
                <img className="object-cover" src="https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg" alt="" srcSet=""/>
                <div className="p-4">
                    <h4 className="font-bold">Teacher Name</h4>
                    <p className="text-xs font-light text-gray-700">120 Lessions</p>
                    
                </div>
            </div>
         );
    }
}
 
export default TeacherProfile;