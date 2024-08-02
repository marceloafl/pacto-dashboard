import { Box, List, ListItem, ListItemIcon } from "@mui/material";

interface IOnboardingList {
  listItems: { text: string; done: boolean; id: string }[];
}

export default function OnboardingList({ listItems }: IOnboardingList) {
  return (
    <Box className="w-full text-pactto-gray">
      <nav aria-label="main mailbox folders">
        <List className="flex flex-col gap-4">
          {listItems.map((item) => (
            <ListItem key={item.id} disablePadding className="flex gap-2">
              <ListItemIcon
                className={`flex items-center justify-center text-pactto-gray text-white min-w-[38px] h-[18px] rounded-lg font- text-[9px] px-0.5 py-1.5 ${item.done ? "bg-accent" : "bg-gray-500"}`}
              >
                <p>{item.done ? "DONE" : "TO DO"}</p>
              </ListItemIcon>
              <p className="font-medium text-sm">{item.text}</p>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
