import {  BiCheck } from "react-icons/bi";
import { Form, Dropdown, Container } from "react-bootstrap";

const Search = ({ query, onQueryChange, sortBy, onSortByChange, orderBy, onOrderByChange }) => {

    return (
        <Container className="d-flex justify-content-center my-4 mx-auto w-75" fluid>
            <Form className="w-100">
                <Form.Control type="text" placeholder="Search" 
                    value={query}
                    onChange={(event) => { onQueryChange(event.target.value) }} 
                />
            </Form>
            <Dropdown>
                <Dropdown.Toggle id="sortBy" className="mx-1 btn__sort">
                    Sort By
                </Dropdown.Toggle>
                <Dropdown.Menu
                    sortBy={sortBy}
                    onSortByChange={mySort => onSortByChange(mySort)}
                    orderBy={orderBy}
                    onOrderByChange={myOrder => onOrderByChange(myOrder)}
                >
                    <Dropdown.Item as="button" onClick={() => onSortByChange('petName')}>
                        Pet Name {(sortBy === 'petName') && <BiCheck />}
                    </Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => onSortByChange('ownerName')}>
                        Owner Name {(sortBy === 'ownerName') && <BiCheck />}
                    </Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => onSortByChange('aptDate')}>
                        Date {(sortBy === 'aptDate') && <BiCheck />}
                    </Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => onOrderByChange('asc')}>
                        Asc {(orderBy === 'asc') && <BiCheck />}
                    </Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => onOrderByChange('desc')}>
                        Desc {(orderBy === 'desc') && <BiCheck />}
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    )
}

export default Search;