import bootsrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Ride = (props) =>{
    return (
        <li class="list-group-item">
            <div className="d-flex flex-row justify-content-evenly">
                <span>{props.name}</span>
                <span>{props.start}</span>
                <span>{props.end}</span>
                <span>{props.time}</span>
                <span>{props.price}</span>
                <span>{props.capacity}</span>
            </div>
        </li>
        )
}
export default Ride