import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const params = useParams();

  useEffect(() => {
    setUserId(params.userId);
  }, [params]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5200/user/${userId}`
        );
       
        if (response.status === 200) {
          setUser(response.data);
          setErrorMessage("");
        }
      } catch (error) {
        if (error.response.status >= 400) {
          setUser(null);
          setErrorMessage(error.response.data.message);
        }
      }
    };

    if (userId !== "") {
      fetchUser();
    }
  }, [userId]);

  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      {user && (
        <div>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
