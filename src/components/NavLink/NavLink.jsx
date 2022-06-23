import { ListItem, ListItemButton, ListItemText } from "@mui/material";

function NavLink( {name} ) {
    return (
        <ListItem>
            <ListItemButton>
                <ListItemText>{name}</ListItemText>
            </ListItemButton>
        </ListItem>
    );
}

export default NavLink;