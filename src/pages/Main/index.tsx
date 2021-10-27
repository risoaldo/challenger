import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../context/userContext";
import { User } from "../../types/user";


import Header from "../../components/Header";
import Table from "../../components/Table";

import "./style.css";

function Main() {
  const { users, filterUser, loadMoreUsers } = useContext(UserContext);

  const [searchText, setSearchText] = useState("");
  const [userFiltred, setUSerFiltred] = useState<User[]>([]);

  useEffect(() => {
    const result = filterUser(searchText);
    setUSerFiltred(result);
  }, [searchText, users, filterUser]);

  async function handleClickLoadingMore() {
    await loadMoreUsers();
  }

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
            <Table userFiltred={userFiltred} />
          </div>
          <div className="loading-more" onClick={handleClickLoadingMore}>
            Loading More
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
