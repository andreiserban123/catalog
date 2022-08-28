import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/Container";

const Search = () => {
    return(
        <Container className="mt-5">
            <Form.Group className="mb-3 mt-2">
                <Form.Control type="email" placeholder="Search a student"/>
            </Form.Group>
        </Container>
    )
}
export default Search;