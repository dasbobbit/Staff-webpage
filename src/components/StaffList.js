import "../styles/StaffList.css";
import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import StaffCard from "./StaffCard";

import StaffModal from "./StaffModal";
import getDayOfYear from "date-fns/getDayOfYear";
import { parseJSON } from "date-fns";

const StaffList = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [allData, setAllData] = useState([]);
  const [staffData, setStaffData] = useState([]);
  const [viewModal, setViewModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  useEffect(() => {
    fetchData();
    sortStaffData();
  }, []);

  const fetchData = async() => {
    const url = 'http://interview.dev.steinias.com/api/employees';

    setIsFetching(true);
    try {
      const response = await fetch(url, { mode: "cors" })
      const data = await response.json();
      setStaffData(data);
    } catch (error) {
      console.error(error);
    }
  }

  const sortStaffData = () => {

    let currentDate = new Date().toJSON();
    let orderedStaffData = staffData.sort(
      (a, b) =>
        getDayOfYear(parseJSON(a.birthday)) -
        getDayOfYear(parseJSON(b.birthday))
    );

    let closestBdayIndex = orderedStaffData.findIndex(
      (item) =>
        getDayOfYear(parseJSON(currentDate)) <
        getDayOfYear(parseJSON(item.birthday))
    );

    let orderedDataFromToday = [
      ...orderedStaffData.slice(closestBdayIndex, orderedStaffData.length),
      ...orderedStaffData.slice(0, closestBdayIndex),
    ];
    setAllData(orderedDataFromToday);
    setStaffData(orderedDataFromToday);
    setIsFetching(false);
  };

  const handleOpenModal = (id) => {
    setModalContent(fetchIndividualData(id));
    setViewModal(true);
  };

  const handleCloseModal = (e) => {
    if (e.target.className === 'modal' || e.target.className === 'modal__closeIcon') {
      setModalContent();
      setViewModal(false);
    }
  }

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();

    let filteredResult = allData.filter((data) => {
      return data.name.toLowerCase().includes(value)
    });
    setStaffData(filteredResult);
  };

  const fetchIndividualData = (id) =>
    staffData.find((staff) => staff.id === id);

  return (
    <div className="staffList">
      <Searchbar handleSearch={handleSearch} />

      <p className="staffList__count">Showing {staffData.length} colleague(s)</p>

      <div className="staffList__container">

        {isFetching ? (
          <div>Loading...</div>
        ) : (
          staffData.map((item) => (
            <StaffCard
              key={item.id}
              id={item.id}
              name={item.name}
              jobTitle={item.jobTitle}
              openModal={handleOpenModal}
            />
          ))
        )}
      </div>

      <StaffModal viewModal={viewModal} closeModal={handleCloseModal} data={modalContent} />
    </div>
  );
};

export default StaffList;
