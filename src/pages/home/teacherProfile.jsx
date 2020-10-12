import React, { Component } from 'react';
class TeacherProfile extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="shadow-xl  ">
                <img className="object-cover" src="https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg" alt="" srcSet=""/>
                <div className="p-4">
                    <h4>Teacher Name</h4>
                    <p className="font-thin text-gray-500">120 Lessions</p>
                </div>
            </div>
         );
    }
}
 
export default TeacherProfile;