/* @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import RButton from "../../components/button/RButton";
import imgCat from "../../assets/images/imgCat.png";

const cardStyles = css`
  border: 1px solid #ddd;
  border-radius: 12px;
  font-family: Montserrat, sans-serif;
  overflow: hidden;

  button {
    visibility: hidden;
  }

  &:hover {
    button {
      visibility: visible;
    }
  }
`;

const cardTopSection = css`
  height: 284px;
  max-width: 316px;
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const cardBottomSection = css`
  padding: 20px 32px 32px;

  p {
    margin: 0;
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.3;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const activePriceStyle = css`
  font-size: 40px;
  font-weight: 600;
  color: #282828;
  margin-right: 16px;
  line-height: 1.1;
`;

const inactivePriceStyle = css`
  font-size: 20px;
  color: #8b8b8b;
  font-weight: 500;
  text-decoration: line-through;
  line-height: 1.3;
`;

const overlayStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const discountStyle = css`
  align-self: end;
  background-color: #0d50ff;
  padding: 4px 8px;
  color: white;
  border-radius: 6px;

  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 3%;
`;

function ProductItem(props) {
  const {
    productId,
    title,
    activePrice,
    inactivePrice,
    percentDiscount,
    imageUrl,
  } = props;

  return (
    <div css={cardStyles}>
      <div css={cardTopSection}>
        <div css={overlayStyle}>
          {percentDiscount && <div css={discountStyle}>{percentDiscount}</div>}
          <RButton>Add to Cart</RButton>
        </div>

        <img src={imgCat} alt={title} />
      </div>
      <div css={cardBottomSection}>
        <p title={title}>{title}</p>
        <span css={activePriceStyle}>${activePrice}</span>
        <span css={inactivePriceStyle}>${inactivePrice}</span>
      </div>
    </div>
  );
}

export default ProductItem;
