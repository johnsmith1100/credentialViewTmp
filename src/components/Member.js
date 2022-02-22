import React from 'react';

const Member = (props) => { 
    return (
    <div className="flex flex-row items-center text-left px-1 pb-3 member-box">
        <div>
            <img src={props.imageURL} alt={props.name} className="member" />
            <img src="/PowerByTrustGrid.png" alt={props.name} className="member" />
        </div>
        <div className="px-1">
            {/* {props.saying !== undefined? <p className="text-md text-grey-darker  font-bold pt-3 mb-2">"{props.saying}"</p> : ""} */}
            {props.firstName !== undefined? <p className="text-sm text-grey-darker  font-bold pt-3 mb-1">First Name: {props.firstName}</p> : ""}
            {props.lastName !== undefined? <p className="text-sm text-grey-darker  font-bold pt-3 mb-1">Last Name: {props.lastName}</p> : ""}
            {props.DOB !== undefined? <p className="text-sm text-grey-darker  font-bold pt-3 mb-1">Date of Birth: {props.DOB}</p> : ""}
        </div>
    </div>
    )
};

export default Member;