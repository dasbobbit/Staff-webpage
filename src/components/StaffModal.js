import '../styles/StaffModal.css';
import React from 'react';
import profilePicture2x from '../assets/ProfilePicture@2x.png'
import closeIcon from '../assets/CloseIcon.svg';
import bdayCake from '../assets/Group3675.svg';
import emailIcon from '../assets/Group1742.svg';
import phoneIcon from '../assets/Path5373.svg';
import { differenceInMonths, parseJSON } from 'date-fns/esm';
import { differenceInYears, format } from 'date-fns';

const StaffModal = ({data, viewModal, closeModal}) => {
  if (viewModal === false) return null;

  let currentDate = new Date().toJSON();

  const monthsHired = (date) => {
    let totalMonths = differenceInMonths(parseJSON(currentDate), parseJSON(date))
    let years = Math.floor(totalMonths / 12);
    let months = totalMonths % 12;

    let yearsText = (years === 1) ? `${years} year` : 
                    (years > 1) ? `${years} years` :
                    null;
    let monthsText = (months === 1) ? `${months} month` :
                    (months > 1) ? `${months} months` :
                    null;

    if (totalMonths === 0) {
      return `Joined in the past month`
    } else {
      return `Joined ${yearsText} ${monthsText} ago`;
    }
  }

  const birthdayAge = (birthday) => {
    let totalYears = differenceInYears(parseJSON(currentDate), parseJSON(birthday));
    let birthdayDate = format(parseJSON(birthday), "MMMM dd");

    return `Turning ${totalYears + 1} on ${birthdayDate.toUpperCase()}`
  }

  const trimNumber = (num) => num.split("x")[0];

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal__Content">

          <img className="modal__closeIcon" alt="close" src={closeIcon} onClick={closeModal}/>
          <div className="modal__leftCol">
            <img src={profilePicture2x} alt={data.name} />
          </div>
          <div className="modal__rightCol">
            <p className="modal__name">{data.name}</p>
            <p className="modal__jobTitle">{data.jobTitle}</p>
            <span className="modal__joinedDate">{monthsHired(data.hireDate)}</span>
            <div className="modal__birthday">
              <p>Birthday: </p>
              <img src={bdayCake} alt="" />
              <p>{birthdayAge(data.birthday)}</p>
            </div>
            <div className="modal__divider">
              <div className="modal__contactInfo">
                <img src={emailIcon} alt="" />
                <p>{data.email}</p>
              </div>
              <div className="modal__contactInfo">
                <img src={phoneIcon} alt="" />
                <p>{trimNumber(data.mobile)}</p>
              </div>
            </div>
            <div className="modal__jobDescription">
              <p>{data.jobDescription}</p>
            </div>
          </div>

      </div>
    </div>
  )
}

export default StaffModal;