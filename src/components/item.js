import React from "react";
import { Card, Button } from "antd";

const { Meta } = Card;

const Item = ({ id, name, image, cost, type, addFunc }) => {
  return (
    <Card
      id={id}
      style={{ width: 300 }}
      cover={<img style={{ height: "20vh" }} alt={name} src={image} />}
      actions={[
        <Button
          type="primary"
          icon="plus-circle"
          onClick={() => addFunc({ id, name, image, cost, type, units: 1 })}
        >
          Add
        </Button>,
        <p>Cost:{cost}</p>
      ]}
    >
      <Meta title={name} description={type} description={type} />
    </Card>
  );
};

export default Item;
