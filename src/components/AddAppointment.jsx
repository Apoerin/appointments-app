import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { BiCalendarPlus } from "react-icons/bi";

const AddAppointment = ({ onSendAppointment, lastId }) => {
    const clearData = {
        ownerName: '',
        petName: '',
        aptDate: '',
        aptTime: '',
        aptNotes: ''
    }
    let [toggleForm, setToggleForm] = useState(false);
    let [formData, setFormData] = useState(clearData);

    function formDataPublish() {
        const appointmentInfo = {
            id: lastId + 1,
            ownerName: formData.ownerName,
            petName: formData.petName,
            aptDate: formData.aptDate + ' ' + formData.aptTime,
            aptNotes: formData.aptNotes
        }
        onSendAppointment(appointmentInfo);
        setFormData(clearData);
        setToggleForm(!toggleForm)
    }

    return (
        <Container className="mx-auto mt-3 w-75" fluid>
        <Button className="btn__add"
        onClick={() => { setToggleForm(!toggleForm) }}
        >
            <BiCalendarPlus/> Add Appointment
        </Button>
            {
                toggleForm &&
                <Form className="add-apt my-2">
                    <Form.Group controlId="ownerName" className="mx-auto w-75">
                        <Form.Label className="mt-1">Owner Name</Form.Label>
                        <Form.Control type="text" placeholder="" required
                        onChange={(event) => {setFormData({...formData, ownerName: event.target.value}) }}
                        value={formData.ownerName}
                        />
                    </Form.Group>
                    <Form.Group controlId="petName" className="mx-auto w-75">
                        <Form.Label className="mt-1">Pet Name</Form.Label>
                        <Form.Control type="text" placeholder="" required
                        onChange={(event) => {setFormData({...formData, petName: event.target.value}) }}
                        value={formData.petName}
                        />
                    </Form.Group>
                    <Form.Group controlId="aptTime" className="mx-auto w-75">
                        <Form.Label className="mt-1">Appointment Date</Form.Label>
                        <Form.Control type="date" placeholder="" required
                        onChange={(event) => {setFormData({...formData, aptDate: event.target.value}) }}
                        value={formData.aptDate}
                        />
                    </Form.Group>
                    <Form.Group controlId="aptTime" className="mx-auto w-75">
                        <Form.Label className="mt-1">Appointment Time</Form.Label>
                        <Form.Control type="time" placeholder="" required
                        onChange={(event) => {setFormData({...formData, aptTime: event.target.value}) }}
                        value={formData.aptTime}
                        />
                    </Form.Group>
                    <Form.Group controlId="petInfo" className="mx-auto w-75">
                        <Form.Label className="mt-1">Appointment Notes</Form.Label>
                        <Form.Control as="textarea" rows={3} required
                        onChange={(event) => {setFormData({...formData, aptNotes: event.target.value}) }}
                        value={formData.aptNotes}
                        />
                    </Form.Group>
                    <div className="mx-auto w-75">
                    <Button type="submit" variant="success" className="my-3" onClick={formDataPublish}>Submit</Button>
                    </div>
                </Form>
            }
        </Container>
    )
}

export default AddAppointment;