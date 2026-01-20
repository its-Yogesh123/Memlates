import { Button, Card } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
const MemeCard = (props) => {
    const navigate = useNavigate();
    return(
            <Card style={{ width: '18rem' ,margin:"1px",height:"fit-content"}}>
                <Card.Img variant="top" src={props.url} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Button onClick={(e)=>{navigate(`/edit?url=${props.url}`)}} variant="primary">Edit</Button>
                </Card.Body>
            </Card>
    );
};
export default MemeCard;