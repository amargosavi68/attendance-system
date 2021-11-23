import { Stack } from '@fluentui/react';
import React from 'react'

const MsCard = (props) => {
     const cardStyle = {
          boxShadow: "0px 0px 8px 1px #bbb",
          borderRadius: props.br || "5px",
          height: props.height || "",
          width: props.width || ""
     }

     return (
          <Stack style={cardStyle}>{props.children}</Stack>
     )
}

export default MsCard;
