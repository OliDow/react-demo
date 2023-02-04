import { useNavigate } from "react-router-dom";
import {Button} from "@mui/material";
export default function Header() {

    let navigate = useNavigate();

    /*
        Example of navigation using a
         - traditional anchor tag
         - internal navigation using react routing
     */

    return <ul>
        <li><Button onClick={() => navigate("/")} >Home</Button></li>
        <li><a href="/about">About</a></li>
    </ul>
}