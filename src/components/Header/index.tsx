import { Avatar } from "@mui/material";

import "./style.css";


function Main() {
  return (
    <header className="header">
      <section className="content">
        <section className="section">
          <Avatar>H</Avatar>
          <strong className="company-name">Company</strong>
        </section>
        <section>
          <Avatar
            alt="Remy Sharp"
            sx={{ width: 56, height: 56 }}
          />
        </section>
      </section>
    </header>
  );
}

export default Main;
