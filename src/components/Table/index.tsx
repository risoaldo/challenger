import { useContext, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";
import Modal from "../ModalUser";
import ModalWrapper from "../ModalUserWraper";

import { User } from "../../types/user";
import { Pagination } from "../Pagination";
import { UserContext } from "../../context/userContext";

interface TableProps {
  users: User[];
  userFiltred: User[];
}
export default function DenseTable({ users, userFiltred }: TableProps) {
  const [userInfo, setUserInfo] = useState<User>({} as User);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.login.uuid}>
                <TableCell align="center">
                  {user.name.title +
                    " " +
                    user.name.first +
                    " " +
                    user.name.last}
                </TableCell>
                <TableCell align="center">{user.gender}</TableCell>
                <TableCell align="center">
                  {new Date(user.dob.date).toLocaleString("en")}
                </TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">
                  <Button
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
    </>
  );
}
