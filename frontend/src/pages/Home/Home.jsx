import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import AuthContext from "../../contexts/AuthContext";

import "./Home.scss";

export default function Home() {
  const navigate = useNavigate();
  const { userToken } = useContext(AuthContext);

  useEffect(() => {
    if (!userToken) {
      navigate("/");
    }
  }, [userToken]);

  return (
    userToken && (
      <div className="home">
        <Navbar />
      </div>
    )
  );
}
