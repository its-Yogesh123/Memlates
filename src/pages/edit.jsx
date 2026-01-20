import { useSearchParams } from "react-router-dom";
import { TextElement } from "../components/text";
import { useRef, useState } from "react";
import {Button} from "react-bootstrap"
import {toPng} from "html-to-image"
const Edit =()=>{
    const [params] = useSearchParams();   // destructuring
    const [count,setCount] = useState(0);
    const memRef = useRef(null);
    const downloadImage = async (ref) => {
        if (!ref.current) return;

        const dataUrl = await toPng(ref.current, {
        cacheBust: true,
        pixelRatio: 2   // improves quality
        });

        const link = document.createElement("a");
        link.download = "component.png";
        link.href = dataUrl;
        link.click();
    };
    return (
        <div>
            <div ref={memRef} style={{width:"350px" ,background:"white"}}>
                <img src={params.get("url")} width="250px" alt=""/>
                {Array(count).fill(0).map((e)=> <TextElement />)}
                  
            </div>
            <Button onClick ={()=>{setCount(count+1)}} variant="primary">Add Text</Button>
            <Button onClick ={()=>{downloadImage(memRef)}} variant="success">Download</Button>
        </div>
    );
};
export default Edit;