import React from 'react'

const WrapperComp = (props) => {
    return props.children;
}

export default React.memo(WrapperComp);