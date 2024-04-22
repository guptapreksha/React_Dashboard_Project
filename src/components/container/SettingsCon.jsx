import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

function WithHeaderExample() {
  return (
    <Card className="settingStyle">
      <Card.Body>
        <Card.Title>Private Key</Card.Title>
        <Card.Text>
          {/* <InputGroup className="mb-3"> */}
            <Form.Control
              placeholder="Enter Private key"
              aria-label="Enter Private key"
              aria-describedby="basic-addon2"
            />
          {/* </InputGroup> */}
        </Card.Text>
        <Button variant="dark">Update settings</Button>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderExample;
