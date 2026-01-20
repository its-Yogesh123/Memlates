import { useRef, useState } from "react";
import Draggable from "react-draggable";
export const TextElement= ()=>{
    const [text,setText] = useState();
    const [isEdit,setEdit] = useState(false);
    const nodeRef = useRef();
    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef}>
                {
            !isEdit?
       <h1  onDoubleClick={()=>{setEdit(!isEdit)}}>{text?text:"Double Click TO edit"}</h1>
        :
         <input value={text} style={{display:"block"}} 
        onChange={(e)=>{setText(e.target.value)}} 
        placeholder="Double CLick to Edit" 
        onDoubleClick={()=>{setEdit(!isEdit)}}
        type="text" />}
            </div>
        </Draggable>
    );
};