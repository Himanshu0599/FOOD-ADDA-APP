import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "himanshu gupta",
    email: "himanshu05@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;