import { Box, List, ListItem, ListItemIcon } from "@mui/material";
import { listWithIconData } from "./ListWithIcon.data";
import CheckIcon from "@mui/icons-material/Check";

export default function ListWithIcon() {
  return (
    <Box className="w-full text-pactto-gray">
      <nav aria-label="main mailbox folders">
        <List className="flex flex-col gap-4">
          {listWithIconData.map((item) => (
            <ListItem key={"item.type"} disablePadding className="flex gap-2">
              <CheckIcon className="text-accent text-base" />
              <div>{item}</div>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
