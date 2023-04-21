import React from "react";
import { motion } from "framer-motion";
import "./index.css";
import Human from "../../assets/man.png";
import Alien from "../../assets/alien.png";
import Male from "../../assets/male-gender.png";
import Female from "../../assets/femenine.png";
import Dead from "../../assets/rip.png";
import Alive from "../../assets/heartbeat.png";
import Unknown from "../../assets/anonymous.png";

const CharactersCard = (props) => {
  return (
    <>
      <motion.div className="character-card-wrapper">
        <motion.div className="image-wrapper">
          <img src={props?.image} alt="images" />
        </motion.div>
        <motion.div className="content-wrapper">
          <motion.div
            className="name"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {props?.name}
          </motion.div>
          <motion.div className="list">
            <li>
              {props?.species === "Human" ? (
                <div className="icon-wrapper">
                  <img src={Human} alt="Human" width={20} />
                  {props?.species}
                </div>
              ) : (
                <div className="icon-wrapper">
                  <img src={Alien} alt="Alien" width={20} />
                  {props?.species}
                </div>
              )}
            </li>
            <li>
              {props?.status === "Alive" ? (
                <div className="icon-wrapper">
                  <img src={Alive} alt="Alive" width={20} />
                  {props?.status}
                </div>
              ) : props?.status === "Dead" ? (
                <div className="icon-wrapper">
                  <img src={Dead} alt="Dead" width={20} />
                  {props?.status}
                </div>
              ) : (
                <div className="icon-wrapper">
                  <img src={Unknown} alt="Unknown" width={20} />
                  {props?.status}
                </div>
              )}
            </li>

            <li>
              {props?.gender === "Male" ? (
                <div className="icon-wrapper">
                  <img src={Male} alt="Male" width={15} />
                  {props?.gender}
                </div>
              ) : (
                <div className="icon-wrapper">
                  <img src={Female} alt="Female" width={15} />
                  {props?.gender}
                </div>
              )}
            </li>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default CharactersCard;
