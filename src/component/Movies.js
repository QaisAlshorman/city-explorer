import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,CardColumns,Accordion } from "react-bootstrap";
class Movies extends React.Component {
  render() {
    return (
      <div>
        <CardColumns>
        {this.props.displayMovies.map((item,indx) => {
          return (
            <div key={indx}>
                <Card>
              {
               <Card.Header>
                 Movie {indx} : {item.original}
                </Card.Header>
              }
              <Card.Body>
              {/* {<Card.Text> overview  : {item.overview}</Card.Text>} */}
              <Accordion defaultActiveKey="0">
                    <Accordion.Toggle as={Card.Header}  eventKey="1">
                        {item.original}     <br></br> <small className="text-muted">Click for overview</small>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>{item.overview}</Card.Body>
                    </Accordion.Collapse>
                  </Accordion>
              {<Card.Text> Votes ⭐ : {item.averageVotes}</Card.Text>}
              {/* {<Card.Text>totalVotes :{item.totalVotes}</Card.Text>} */}
              {<Card.Img variant="top" src={item.imagel} height='250px'></Card.Img>}
              {<Card.Text>Popularity⭐ :{item.popularity}</Card.Text>}
              </Card.Body>
              {<Card.Footer>releasedOn  : {item.releasedOn}</Card.Footer>}
              </Card>
            </div>
          )
            }
        )}
        </CardColumns>
      </div>
      );
  }
}
export default Movies;