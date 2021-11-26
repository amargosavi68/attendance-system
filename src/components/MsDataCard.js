import { StackItem, Text } from "@fluentui/react";
import React from "react";
import MsCard from "./MsCard";

const outerDiv = {
     height: "130px",
     width: "130px",
     backgroundColor: "#0000ff",
     borderRadius: "50%",
     zIndex: "-1",
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
};

const innerDiv = {
     height: "110px",
     width: "110px",
     backgroundColor: "#fff",
     borderRadius: "50%",
     zIndex: "1",
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
};

const MsDataCard = (props) => {
     return (
          <StackItem className="col-sm-10 col-md-6 col-lg-3 mt-3">
               <MsCard height="200px" width="330px">
                    <StackItem className="mt-2" align="center">
                         <Text variant="xLarge">{props.heading}</Text>
                    </StackItem>
                    <StackItem className="m-3" align="center" style={outerDiv}>
                         <div style={innerDiv}>
                              <Text variant="xxLarge">{props.value}</Text>
                         </div>
                    </StackItem>
               </MsCard>
          </StackItem>
     );
};

export default MsDataCard;
