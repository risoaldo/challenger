import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";


import Header from "../../components/Header";
import Table from "../../components/Table";
import ModalUser from "../../components/ModalUser";

import "./style.css";

function Main() {
  const [search, setSearch] = useState("");
  const [userModalOpen, setUSerModalOpen] = useState(false);

  const { users } = useContext(UserContext);
  console.log("usersss: ", users);

  const handleModalOpen = () => {
    setUSerModalOpen(true);
  };
  const handleModalClose = () => {
    setUSerModalOpen(false);
  };

  return (
    <>
      <Header />
      <div className="container-main">
        <div className="content-main">
          <p className="title-main">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis et, dolores consequuntur cupiditate exercitationem
            incidunt laborum veniam beatae ut delectus doloribus totam
            veritatis? Culpa quia praesentium doloribus, sunt perferendis aut!
          </p>

          <input
            className="input-main"
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="table-content-main">
            <Table users={users}  />
          </div>
        </div>
      </div>

      {/* <ModalUser
        isOpen={userModalOpen}
        onRequestClose={handleModalClose}
      /> */}
      
    </>
  );
}

export default Main;
