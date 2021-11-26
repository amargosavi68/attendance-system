import { Stack, StackItem, Text } from "@fluentui/react";
import React from "react";
import MsHeader from "./MsHeader";
import MsDataCard from "./MsDataCard";
import { dashboard } from "../utils/dashboard.json";
import MsCard from "./MsCard";
import MsAttendeeChart from "./MsAttendeeChart";
import MsRevenueChart from "./MsRevenueChart";

const MsDashboard = (props) => {
     const { analytics } = dashboard;

     return (
          <div>
               <MsHeader />
               <div className="container-fluid">
                    <div className="mt-4 mb-1 text-center">
                         <Text style={{ color: "#888" }} variant="xxLarge">
                              Analytics
                         </Text>
                         <div className="d-flex mt-2 mb-3">
                              <Stack className="row  justify-content-center" horizontal grow>
                                   {analytics &&
                                        analytics.map((data, i) => (
                                             <MsDataCard
                                                  key={i}
                                                  heading={data.heading}
                                                  value={data.value}
                                             />
                                        ))}
                              </Stack>
                         </div>
                    </div>
                    <hr />
                    <div className="mt-4 mb-1 text-center">
                         <Text style={{ color: "#888" }} variant="xxLarge">
                              Historical Analysis
                         </Text>
                         <div className="d-flex mt-2 mb-3">
                              <Stack className="row justify-content-center" horizontal grow>
                                   <StackItem className="col-sm-12 col-md-6 col-lg-6">
                                        <MsCard margin="20px 0px" height="400px" width="95%">
                                             <MsAttendeeChart />
                                        </MsCard>
                                   </StackItem>
                                   <StackItem className="col-sm-12 col-md-6 col-lg-6">
                                        <MsCard margin="20px 0px" height="400px" width="95%">
                                             <MsRevenueChart />
                                        </MsCard>
                                   </StackItem>
                              </Stack>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default MsDashboard;
