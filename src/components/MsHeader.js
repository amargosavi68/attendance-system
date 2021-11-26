import {
     IconButton,
     Nav,
     Panel,
     PanelType,
     Stack,
     StackItem,
     Text,
} from "@fluentui/react";
import React, { useState } from "react";
import MsCard from "./MsCard";

const MsHeader = () => {
     const [isOpen, setIsOpen] = useState(false);

     const navLinkGroup = [
          {
               links: [
                    {
                         name: "Dashboard",
                         url: "/dashboard",
                         expandAriaLabel: "Navigation to dashboard",
                         icon: "BIDashboard",
                         key: "1",
                    },
                    {
                         name: "Manage Entities",
                         expandAriaLabel: "Navigations of employees",
                         collapseAriaLabel: "Collapse section",
                         key: "2",
                         links: [
                              {
                                   name: "Projects",
                                   icon: "ProductVariant",
                                   url: "/projects",
                                   key: "3",
                              },
                              {
                                   name: "Departments",
                                   icon: "Manufacturing",
                                   url: "/departments",
                                   key: "4",
                              },
                         ],
                    },

                    {
                         name: "Setting",
                         icon: "Settings",
                         url: "/settings",
                         key: "5",
                    },
                    {
                         name: "Profile",
                         url: "/profile",
                         icon: "Contact",
                         key: "6",
                    },
                    {
                         name: "Logout",
                         url: "/logout",
                         icon: "SignOut",
                         key: "7",
                    },
               ],
          },
     ];

     const togglePanel = () => {
          setIsOpen(!isOpen);
     };

     return (
          <MsCard width="100%" height="auto" br="0">
               <Stack grow horizontal>
                    <StackItem grow align="start" style={{ margin: 8 }}>
                         <IconButton
                              aria-label="Menu"
                              iconProps={{ iconName: "Waffle", style: { fontSize: "24px" } }}
                              onClick={() => togglePanel()}
                         />
                    </StackItem>
                    <StackItem grow align="center" style={{ margin: "8px 15px" }}>
                         <Text variant="xLarge">Attendance System</Text>
                    </StackItem>
                    <StackItem align="end" style={{ margin: "8px 15px" }}>
                         <IconButton
                              aria-label="Notification"
                              label="Sign Out"
                              iconProps={{ iconName: "SignOut", style: { fontSize: "24px" } }}
                         />
                    </StackItem>
               </Stack>
               <Panel
                    isLightDismiss
                    isOpen={isOpen}
                    onDismiss={togglePanel}
                    closeButtonAriaLabel="Close"
                    key="menu"
                    headerText="Attendance System"
                    type={PanelType.smallFixedNear}
               >
                    <Nav groups={navLinkGroup} />
               </Panel>
          </MsCard>
     );
};

export default MsHeader;
