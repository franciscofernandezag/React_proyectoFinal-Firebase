import React from "react";
import Card from "@mui/material/Card";
import {
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 180 }} style={styles.container}>
      <CardActionArea>
        <Link to={`/product/${product.id}`}>
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
          />
        </Link>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ fontSize: "20px", fontWeight: "bold", color: "blue" }}
          >
            {product.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={styles.title}
          >
            Autor: {product.author}
          </Typography>
          <Typography
            variant="body2"
            color="primary"
            style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
          >
            Precio ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
};

const styles = {
  container: {
    width: window.innerHeight > 500 ? "25%" : "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: "rgba(169, 221, 158, 0.591)",
  },
};

export default Item;
