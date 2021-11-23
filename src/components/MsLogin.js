import {
     PrimaryButton,
     Stack,
     Text,
     TextField,
} from "@fluentui/react";
import React from "react";
import MsCard from "./MsCard";

const divStyle = {
     display: "flex",
     minHeight: "100vh",
     justifyContent: "center",
     alignItems: "center",
};

const MsLogin = (props) => {
     return (
          <div style={divStyle}>
               <MsCard height="450px" width="450px">
                    <Stack verticalFill style={{ padding: '20px', position:'relative' }}>
                         <Stack horizontal horizontalAlign="center">
                              <Text variant="xxLarge">Login Here</Text>
                         </Stack>
                    </Stack>
               </MsCard>
          </div>
     );
};

export default MsLogin;
