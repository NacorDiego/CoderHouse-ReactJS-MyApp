import { List } from "@mui/material";
import NavLink from "../NavLink/NavLink";

function NavMenu() {
    return (
        <List sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <NavLink name="Shop" />
            <NavLink name="Contact" />
        </List>
    );
}

export default NavMenu;