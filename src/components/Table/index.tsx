import { useContext, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UserContext } from "../../context/userContext";

import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Button from "@mui/material/Button";
import Modal from "../ModalUser";
import { User } from "../../types/user";
import ModalWrapper from "../ModalUserWraper";

interface TableProps {
  users: User[];
}
export default function DenseTable({ users }: TableProps) {
  const [userInfo, setUserInfo] = useState<User>({} as User);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TableContainer component={Paper}>
      <ModalWrapper>
        <Modal userInfo={userInfo} isOpen={isOpen} setIsOpen={setIsOpen} />
      </ModalWrapper>

      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Geder</TableCell>
            <TableCell align="center">Birth</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.login.uuid}>
              <TableCell align="center">
                {user.name.title + " " + user.name.first + " " + user.name.last}
              </TableCell>
              <TableCell align="center">{user.gender}</TableCell>
              <TableCell align="center">{user.dob.date}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">
                <Button
                  // variant="contained"
                  // size="large"
                  // to={`/see/${user.login.uuid}`}
                  onClick={() => {
                    setIsOpen(true);
                    setUserInfo(user);
                  }}
                >
                  SEE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
