import React from 'react';

import PropTypes from 'prop-types';

const Profile = props =>{



return (
    <>
    <div style={{width:'500px',border:'2px black solid',width:'200px',textAlign:'center',
    marginLeft:'600px',marginTop:'300px'}}>

        <p>Full name :{props.data.fullname}</p>
        <p>Bio:{props.data.bio}</p>
        <p>profession:{props.data.profession}</p>

        <div style={{display:'flex', flexDirection:'column'}}>
        <a href="#" onClick={props.alert} style={{backgroundColor:'red' ,color:'white'}}>click me</a>
        
        {props.children}
        </div>
        </div>
</>
    );    

}

Profile.defaultProps = {
    data: {fullname:'my name', bio:'bac+',profession:'jobless'},
    alert: function handleName(e) {
        e.preventDefault();
        alert("hello World !" );}
};


Profile.propTypes = {
    data: PropTypes.objectOf(PropTypes.string)
    };



export default Profile;
