import React, { memo } from 'react'

export const Small = React.memo(({value}) => {
    console.log('me volvi a dibujar :C');
  return (
    <small>{value}</small>
  )
});
