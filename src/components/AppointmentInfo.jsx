import { Button, ListGroupItem } from "react-bootstrap";
import { FiDelete } from "react-icons/fi";

const AppointmentInfo = ({ appointment, onDeleteAppointment }) => {
    return (
        <ListGroupItem className="apt-info my-1 mx-auto w-75">
            <span>{appointment.aptDate}</span>
            <h6>{appointment.petName}</h6>
            <h6>Owner: {appointment.ownerName}</h6>
            <p>{appointment.aptNotes}</p>
            <Button variant="danger"
            onClick={() => onDeleteAppointment(appointment.id)}
            >
                <FiDelete />
            </Button>
        </ListGroupItem>
    )
}

export default AppointmentInfo;