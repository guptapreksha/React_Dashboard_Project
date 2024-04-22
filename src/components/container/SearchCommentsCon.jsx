import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function SearchCommentsCon() {
  
  const [comment , setComment] = useState([]);
  const [records, setRecords] = useState([]);

  const searchData = (id) => {
    fetch(`https://techyroots.com:8001/api/tweet/search?query=${id}`)
      .then((response) => response.json())
      .then((data) => setRecords(data.comments))
      .catch((err) => console.log(err));
  };

  const rows =
    records && records.length
      ? records.map((list) => {
          return {
            comment: list.comment,
          };
        })
      : [];

  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title>Comment Address</Card.Title>
        <Card.Text>
          <Form.Control
            placeholder="Enter Comment Address"
            aria-label="Enter Comment Address"
            aria-describedby="basic-addon2"
            type="text"
            value={comment}
            onChange={(e)=>{setComment(e.target.value)}}
          />
        </Card.Text>
        <Button variant="dark" onClick={()=>searchData(comment)}>
          Search
        </Button>
        <ul>
          {rows && rows.map((row) => <li key={row.comment}>{row.comment}</li>)}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default SearchCommentsCon;

