const { default: styled } = require("@emotion/styled");
const { Box } = require("@mui/material");

const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
});

export default FlexBetween;