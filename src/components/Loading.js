import React from 'react'
import styled from '@emotion/styled'

const CircleContainer = styled.div`
    height: 100px;
    width: 100px;
    color: rgba($loadercolor, 0.2);
    position: absolute;
    top: 30%;
    right: 40%;
    display: inline-block;
    border: 10px solid white;
    border-radius: 50%;
    border-right-color: grey;
    animation: rotate 1s linear infinite;

@keyframes rotate {
    0%{transform: rotate(0);}
    100%{transform: rotate(360deg);}
}
`

function Loading() {
  return (
    <CircleContainer />
  )
}

export default Loading