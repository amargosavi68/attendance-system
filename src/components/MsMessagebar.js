import { MessageBar, MessageBarType } from '@fluentui/react';
import React from 'react'

const MsMessagebar = (props) => {
     const message = props.message || "";
     const messageBarType = props.messageBarType || MessageBarType.info;


     return (
          <MessageBar messageBarType={messageBarType} isMultiline={false} onDismiss={props.toggleMessageBar}>
               {message}
          </MessageBar>
     )
}

export default MsMessagebar
