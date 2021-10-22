import React, { useState, useEffect } from "react";
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  FormGroup,
  Label,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// This is the Home Page

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  const handleSubmit = () => {
    let cards = [];
    setLoading(true);
    if (maxResults > 10 || maxResults < 1) {
      toast.error("Max Results Must Be Between 1 & 10");
    } else {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
        )
        .then((res) => {
          if (startIndex >= res.data.totalItems || startIndex < 1) {
            toast.error(
              `Max Reults Must Be Between 1 and ${res.data.totalItems}`
            );
          } else {
            for (var book in res.data.items) {
              cards.push(res.data.items[book]);
            }
          }
          setCards(cards);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(true);
          toast.error(`${err.response.data.error.message}`);
        });
    }
  };

  // const handleCards = () => {
  //   if (loading) {
  //     return (
  //       <div className="d-flex justify-content-center mt-3">
  //         <Spinner style={{ width: "3rem", height: "3rem" }} />
  //       </div>
  //     );
  //   } else {
  //     const items = cards.map((item, i) => {
  //       let thumbnail = "";
  //       if (item.volumeInfo.imageLinks) {
  //         thumbnail = item.volumeInfo.imageLinks.thumbnail;
  //       }

  //       return (
  //         <div className="col-lg-4 mb-3" key={item.id}>
  //           <BookCard
  //             thumbnail={thumbnail}
  //             title={item.volumeInfo.title}
  //             pageCount={item.volumeInfo.pageCount}
  //             language={item.volumeInfo.language}
  //             authors={item.volumeInfo.authors}
  //             publisher={item.volumeInfo.publisher}
  //             description={item.volumeInfo.description}
  //             previewLink={item.volumeInfo.previewLink}
  //             infoLink={item.volumeInfo.infoLink}
  //           />
  //         </div>
  //       );
  //     });
  //   }
  // };

  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState("");
  useEffect(() => {}, [cards]);
  return (
    <div className="main-image d-flex justify-content-center align-items-center flex-column">
      {/* Overlay */}
      <div className="filter"></div>
      <h1
        className="display-3 text-center text-white mb-3"
        style={{ zIndex: 2 }}
      >
        Marvel App
      </h1>
      <div style={{ width: "60%", zIndex: 2 }}>
        <InputGroup size="lg" className="mb-3">
          <Input
            placeholder="Please Search For The Comic"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <InputGroupAddon addonType="append">
            <Button color="secondary" onClick={(e) => handleSubmit(e)}>
              <i className="fas fa-search"></i>
            </Button>
          </InputGroupAddon>
        </InputGroup>
        <div className="d-flex text-white justify-content-center">
          <FormGroup>
            <Label for="maxResults">Max Results</Label>
            <Input
              type="number"
              id="maxResults"
              placeholder="Max Results"
              value={maxResults}
              onChange={(e) => setMaxResults(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="ml-5">
            <Label for="startIndex">Start Index</Label>
            <Input
              type="number"
              id="startIndex"
              placeholder="Start Index"
              value={startIndex}
              onChange={(e) => setStartIndex(e.target.value)}
            />
          </FormGroup>

          <ToastContainer />
        </div>
        <hr />
        {/* <div className="row d-flex justify-content-center mt-3">
          {!loading ? (
            cards.map((data) => {
              return <BookCard data={data} />;
            })
          ) : (
            <div className="row-cols-3">
              <Spinner style={{ width: "3rem", height: "3rem" }} />
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};
export default Home;