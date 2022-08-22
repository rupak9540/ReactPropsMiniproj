// import React,{Component} from 'react';
const CartItem = (props) => {
  const { product } = props;
  //  const {name,imgesrc,Link} = props.product;

  return (
    <div
      className="container"
      style={{ background: product.background, padding: 5 }}
    >
      <div
        className="image"
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <img src={product.imgesrc} alt="imagesrc" style={styles.imge} />
        <a href={product.Link} style={styles.anc}>
          <span style={styles.span.hover}>{product.name}</span>
        </a>
      </div>
    </div>
  );
};
const styles = {
  imge: {
    height: 30,
    width: 40,
    marginRight: 4
  },
  anc: {
    textAlign: "center",

    fontSize: 20,
    textDecoration: "none"
  },
  span: {
    hover: {
      color: "blue"
    }
  }
};
export default CartItem;
