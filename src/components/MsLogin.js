import {
     Icon,
     Link,
     MessageBarType,
     PrimaryButton,
     Stack,
     StackItem,
     Text,
     TextField,
} from "@fluentui/react";
import React, { useState } from "react";
import MsCard from "./MsCard";
import MsMessagebar from "./MsMessagebar";



const divStyle = {
     display: "flex",
     minHeight: "100vh",
     justifyContent: "center",
     alignItems: "center",
};

const style = {
     outerStyle: {
          height: '40px',
          width: '40px',
          lineHeight: '40px',
          borderRadius: '50%',
          background: '#b4009e',
          textAlign: 'center'
     },
     iconStyle: {
          fontSize: 30,
          color: "white"
     }
}



const MsLogin = (props) => {

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [showMessageBar, setShowMessageBar] = useState(true);

     const signIn = () => {
          const payload = {};
          payload['email'] = email;
          payload['password'] = password;
          console.log(JSON.stringify(payload));
     }

     const toggleMessageBar = () => {
          setShowMessageBar(!showMessageBar);
     }


     return (
          <div>
               {
                    showMessageBar && (
                         <MsMessagebar message="You need to sign in or sign up before continuing.." messageBarType={MessageBarType.warning} toggleMessageBar={toggleMessageBar} />
                    )
               }
               <div className="container" style={divStyle}>
                    <MsCard height="420px" width="420px">
                         <div className="col">
                              <Stack tokens={{ childrenGap: 25 }} style={{ margin: 30, padding: 10 }}>
                                   <Stack.Item align="center">
                                        <div style={style.outerStyle}>
                                             <Icon iconName="AuthenticatorApp" style={style.iconStyle} />
                                        </div>
                                   </Stack.Item>
                                   <Stack.Item align="center">
                                        <Text variant="xxLarge" block={true}>
                                             Sign In
                                        </Text>
                                   </Stack.Item>
                                   <StackItem>
                                        <TextField
                                             name="email"
                                             label="Email:"
                                             value={email}
                                             underlined
                                             onChange={(e) => setEmail(e.target.value)}
                                             autoComplete="off"
                                             iconProps={{ iconName: "Mail" }}
                                        />
                                   </StackItem>
                                   <StackItem>
                                        <TextField
                                             name="password"
                                             label="Password:"
                                             value={password}
                                             underlined
                                             type="password"
                                             onChange={(e) => setPassword(e.target.value)}
                                             autoComplete="on"
                                             iconProps={{ iconName: "Permissions" }}
                                        />
                                   </StackItem>
                                   <StackItem align="end">
                                        <PrimaryButton
                                             data-automation-id="test"
                                             text="Sign In"
                                             onClick={signIn}
                                             allowDisabledFocus={true}
                                        />
                                   </StackItem>
                                   <StackItem align="center">
                                        <Stack tokens={{ childrenGap: 10 }}>
                                             <StackItem align="center">
                                                  Don't have an account?{' '}
                                                  <Link href="sign_up">Sign Up</Link>
                                             </StackItem>
                                             {/* <StackItem align="center">
                                             <Link href="password/new.html">Forgot You Password?</Link>
                                        </StackItem> */}
                                        </Stack>
                                   </StackItem>
                              </Stack>
                         </div>

                    </MsCard>
               </div>
          </div>
     );
};

export default MsLogin;
