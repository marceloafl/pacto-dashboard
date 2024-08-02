import { Box, List, ListItem, ListItemIcon } from "@mui/material";
import {
  onboardingListData,
  OnboardingListDataType,
} from "./OnboardingList.data";

export interface IListItem {
  type: OnboardingListDataType;
  done: boolean;
}

interface IOnboardingListProps {
  listItems: IListItem[];
}

export default function OnboardingList({ listItems }: IOnboardingListProps) {
  return (
    <Box className="w-full text-pactto-gray">
      <nav aria-label="main mailbox folders">
        <List className="flex flex-col gap-4">
          {listItems.map((item) => (
            <ListItem key={item.type} disablePadding className="flex gap-2">
              <ListItemIcon
                className={`flex items-center justify-center text-pactto-gray text-white min-w-[38px] h-[18px] rounded-lg font- text-[9px] px-0.5 py-1.5 ${item.done ? "bg-accent" : "bg-gray-500"}`}
              >
                <p>{item.done ? "DONE" : "TO DO"}</p>
              </ListItemIcon>
              <OnboardingItemText type={item.type} />
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}

const OnboardingItemText = ({ type }: { type: OnboardingListDataType }) => {
  return <div>{onboardingListData[type].text}</div>;
};
