import '../styles/StaffCard.css';
import React from 'react';
import profilePicture from '../assets/ProfilePicture.png'

const StaffCard = ({id, name, jobTitle, openModal}) => {



  return (
    <div className="staffCard" onClick={() => openModal(id)}>
      <div className="staffCard__imgContainer">
        <img className="staffCard__img" src={profilePicture} alt={name} />
      </div>
      <div className="staffCard__info">
        <p className="staffCard__name">{name}</p>
        <p className="staffCard__title">{jobTitle}</p>
      </div>
      <div className="staffCard__location">MAN</div>
      <div className="staffCard__threeDots"></div>
    </div>
  )
}

export default StaffCard;