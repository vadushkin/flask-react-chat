import {useState} from "react";

import AuthPage from "./Pages/authPage";
import ChatsPage from "./Pages/chatsPage";

function App() {
    const [user, setUser] = useState();

    if (!user) {
        return <AuthPage onAuth={(user) => setUser(user)}/>;
    } else {
        return <ChatsPage user={user}/>;
    }
}

export default App;
