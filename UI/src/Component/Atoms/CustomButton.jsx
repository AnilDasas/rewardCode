import React from "react";
import Button from "@material-ui/core/Button";

const CustomButton = (props) => {
  const {title} = props;
  return (
    <Button
      variant="contained"
      color="primary"
      {...props}
    >
      {title}
    </Button>
  );
};
export default CustomButton;
