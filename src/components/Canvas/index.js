import React from 'react';
import { useOnDraw } from '../../hooks/useOnDraw';

const Canvas = ({
    width, 
    height, 
    pushMessage,
    channel,
    setCanvasCtx,
    inputProps
  }) => {
    const {setCanvasRef, onMouseDown} = useOnDraw(
      pushMessage,
      channel,
      setCanvasCtx,
      inputProps
      );
      
    const canvasStyle={
      position: 'absolute', 
      zIndex: inputProps.zIndex
    }
  return (
        <canvas 
            width={width}
            height={height}
            style={canvasStyle}
            ref={setCanvasRef}
            onMouseDown={onMouseDown}
        />
  )
}

export default Canvas

