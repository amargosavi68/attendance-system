import { Stack, Text } from "@fluentui/react";
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
                    <div className="mt-4 mb-1 text-center">
                         <Text style={{color: "#888"}} variant="xxLarge">Analytics</Text>
                         <div className="d-flex mt-2 mb-3">
                              <Stack className="row  justify-content-center" horizontal grow>
                                   {analytics &&
                                        analytics.map((data, i) => (
                                             <MsDataCard key={i} heading={data.heading} value={data.value} />
                                        ))}
                              </Stack>
                         </div>
                    </div>

                    <div className="mt-4 mb-1 text-center">
                         <Text style={{color: "#888"}} variant="xxLarge">Historical Analysis</Text>
                         <div className="d-flex mt-2 mb-3">
                              <Stack className="row  justify-content-center" horizontal grow>
                                   
                              </Stack>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default MsDashboard;
