import bootsrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Ride from '../components/Ride';
import Modal from '../components/Modal';


const HomePage = () =>{
    const [driverModal,setDriverModal] = useState(false)
    return (
        <div className="p-2">
            <div class="bg-light d-flex justify-content-between">
                <span class="display-4">Rides</span>
                <button type="button" class="btn btn-primary align-self-center" onClick={()=>{setDriverModal(true)}}>New Ride</button>
            </div>
            <ul className="list-group">
                <Ride time="Time" price="$price" name="Name" start="Start" end="End" capacity="0/0"/>
            </ul>
            <Modal title="Driver" visible={driverModal} onClose={()=>{setDriverModal(false)}}>
                <p>Test</p>
            </Modal>
        </div>
        )
}
export default HomePage