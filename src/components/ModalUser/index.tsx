import { Dispatch, SetStateAction, useContext } from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import { User } from "../../types/user";

import "./style.css";

const style = {};

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  // setUserInfo: Dispatch<SetStateAction<User>>;
  userInfo: User;
}
export default function ModalUser({ userInfo, isOpen, setIsOpen }: ModalProps) {
  console.log(userInfo);

  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="content-modal-user"
    >
      <div className="user-modal-container">
        <div className="user-modal-content">
          <img
            className="image-user-modal"
            src={`${userInfo.picture?.medium}`}
            alt={`${userInfo.name?.first + " " + userInfo.name?.last}`}
          />

          <div className="user-modal-description">
            <section className="user-modal-divider">
              <p className="name-user-modal">
                {`${
                  userInfo.name?.title +
                  " " +
                  userInfo.name?.first +
                  " " +
                  userInfo.name?.last
                }`}
              </p>
            </section>

            <section className="user-modal-divider">
              {`${userInfo?.gender}`}
            </section>

            <section className="user-modal-divider">
              {`${new Date(userInfo.dob?.date).toLocaleString("en")}`}
            </section>

            <section className="user-modal-divider">
              {`${userInfo?.phone}`}
            </section>

            <section className="user-modal-divider">
              {`${userInfo.location?.country} - `}
              {`${userInfo.location?.city} - `}
              {`${userInfo.location?.state} - `}
              {`${userInfo.location?.postcode} `}
            </section>

            <section className="user-modal-divider">
              {`${userInfo.login?.uuid}`}
            </section>

            <section className="user-modal-divider-button">
              <Button
                onClick={() => setIsOpen(false)}
                variant="contained"
                size="small"
              >
                Fechar
              </Button>
            </section>
          </div>
        </div>
      </div>
      {/* <Card sx={{ maxWidth: 345 }}> */}
      {/* <CardMedia
          className="card-media"
          component="img"
          image={`${userInfo.picture?.medium}`}
          alt={`${userInfo.name?.first + " " + userInfo.name?.last}`}
        /> */}
      {/* <CardActions className="card-content"> */}
      {/* <Typography gutterBottom variant="h5" component="div">
            {`${
              userInfo.name?.title +
              " " +
              userInfo.name?.first +
              " " +
              userInfo.name?.last
            }`}
          </Typography> */}
      {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardActions>
        <CardActions>
          <Button onClick={() => setIsOpen(false)} size="small">
            Fechar
          </Button>
        </CardActions>
      </Card> */}
    </Modal>
  );
}
