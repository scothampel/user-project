import { useEffect } from "react";
import { Redirect } from "react-router";

export default function Logout({ setCurrentUser }) {
  useEffect(() => {
    setCurrentUser(null);
  }, [setCurrentUser]);

  return (
    <Redirect to='/' />
  );
}