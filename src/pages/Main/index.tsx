import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../context/userContext";

import Header from "../../components/Header";
import Table from "../../components/Table";

import "./style.css";
import { User } from "../../types/user";

function Main() {
  const { users, filterUser } = useContext(UserContext);

  const [searchText, setSearchText] = useState("");
  const [userFiltred, setUSerFiltred] = useState<User[]>({} as User[]);

  useEffect(() => {
    const result = filterUser(searchText);
    setUSerFiltred(result);
  }, [searchText, users, filterUser]);

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
            onChange={(e) => setSearchText(e.target.value)}
          />

          <div className="table-content-main">
            <Table users={users} userFiltred={userFiltred} />
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
