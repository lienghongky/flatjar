import React from 'react';

class Bar extends React.Component{
    render(){
        const tabs = [
            {
                title:'Home',
                icon:'',
                url:''
            },
            {
                title:'Plan',
                icon:'',
                url:''
            },
            {
                title:'Teacher',
                icon:'',
                url:''
            },
            {
                title:'History',
                icon:'',
                url:''
            }
        ]
        return (
            <div className="flex sm:hidden fixed bottom-0 w-full bg-blue-600 shadow-lg ">
                {
                    tabs.map((e,index)=>(
                        <div className={`w-1/${tabs.length} flex justify-center items-center py-4 `} key={index}>
                            <p className="text-sm font-bold text-white">{e.title}</p>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Bar;
