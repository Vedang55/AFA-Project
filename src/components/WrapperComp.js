import React, { useEffect } from 'react'

const WrapperComp = (props) => {
    return props.children;
}

export default React.memo(WrapperComp);