import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";

const MenuItem = (props) => {
  return (
    <div>
      <Card style={{ margin: "10px" }}>
        <CardBody>
          <CardImg
            width="100%"
        
            alt={props.dish.name}
            src={'http://localhost:3002/'+ props.dish.image}
            style={{ opacity: "0.85",  float: 'left',
            width:  '300px',
            height: '200px',
            backgroundSize: 'cover'}}
          />
          <CardImgOverlay>
            <CardTitle
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.DishSelect(props.dish);
              }}
            >
              {props.dish.name}
            </CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
};

export default MenuItem;
