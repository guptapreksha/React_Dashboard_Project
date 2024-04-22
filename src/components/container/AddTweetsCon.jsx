import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
// import AddTweetsService from "../../services/AddTweetsService";
import { useState } from "react";

const AddTweetsCon = () => {
  const [tweetURL, setTweetURL] = useState("");
  const [tokenAddress, setTokenAddress] = useState("");
  const [sizeOfAirdrop, setSizeOfAirdrop] = useState("");
  const [amount, setAmount] = useState("");

  async function postData() {
    let item = { tweetURL, tokenAddress, sizeOfAirdrop, amount };
    let result = await fetch("https://techyroots.com:8001/api/admin/tweet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: " I8oYpoieFYQL7LGlRkJc77i7BkolHJof",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    alert(result.message);
    // localStorage.setItem( JSON.stringify(result));
  }

  return (
    <Card className="addtweetscon">
      <Card.Body>
        <Card.Title>Tweets URL</Card.Title>
        <Card.Text>
          <Form.Control
            placeholder="Enter Tweets URL"
            aria-label="Enter Tweets URL"
            aria-describedby="basic-addon2"
            onChange={(e)=>{setTweetURL(e.target.value)}}
          />
        </Card.Text>

        <Card.Title>Amount</Card.Title>
        <Card.Text>
          <Form.Control
            placeholder="Enter Amount"
            aria-label="Enter Amount"
            aria-describedby="basic-addon2"
            onChange={(e)=>{setAmount(e.target.value)}}
          />
        </Card.Text>

        <Card.Title>Token Address</Card.Title>
        <Card.Text>
          <Form.Control
            placeholder="Enter Token Address"
            aria-label="Enter Token Address"
            aria-describedby="basic-addon2"
            onChange={(e)=>{setTokenAddress(e.target.value)}}
          />
        </Card.Text>

        <Card.Title>Size Of Airdrop (%)</Card.Title>
        <Card.Text>
          <Form.Control
            placeholder="Enter size"
            aria-label="Enter size"
            aria-describedby="basic-addon2"
            onChange={(e)=>{setSizeOfAirdrop(e.target.value)}}
          />
        </Card.Text>

        <Button variant="dark" onClick={postData}>
          POST
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AddTweetsCon;
