import { Stack } from "@fluentui/react";
import React from "react";
import MsHeader from "./MsHeader";
import MsDataCard from "./MsDataCard";
import { dashboard } from "../utils/dashboard.json";

const MsDashboard = (props) => {
     const { analytics } = dashboard;

     return (
          <div>
               <MsHeader />
               <div className="container-fluid">
                    <div className="d-flex mt-3 mb-3">
                         <Stack className="row  justify-content-center" horizontal grow>
                              {analytics &&
                                   analytics.map((data, i) => (
                                        <MsDataCard key={i} heading={data.heading} value={data.value} />
                                   ))}
                         </Stack>
                    </div>
               </div>
          </div>
     );
};

export default MsDashboard;
