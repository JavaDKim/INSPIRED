import s from "./ProductPage.module.scss";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../Layout/Container/Container";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../const";
import { fetchProduct } from "../../features/productSlice";
import ColorList from "../ColorList/ColorList";
import Count from "../Count/Count";
import ProductSize from "../ProductSize/ProductSize";
import RandomGoods from "../RandomGoods/RandomGoods";
import { BtnLike } from "../BtnLike/BtnLike";
import { addToCart } from "../../features/cartSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);
  const { colorsList } = useSelector((state) => state.colors);
  const [selectedColor, setSelectedColor] = useState("");
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedsize] = useState("");

  const handleSelectedSize = (e) => {
    //console.log(e.target.value);
    setSelectedsize(e.target.value);
  };

  const handleIncrement = () => {
    setCount((prev) => ++prev);
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => --prev);
    }
  };
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };
  useEffect(() => {
    if (colorsList.length && product.colors.length) {
      const firstColor = colorsList.find(
        (color) => color.id === product.colors[0]
      ).title;
      setSelectedColor(firstColor);
    }
  }, [colorsList, product.colors]);

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id));
    }
  }, [dispatch, id]);

  return (
    <>
      <section className={s.card}>
        {
          // Это проверка сделана для того чтобы данные подгрузились
          //и не выскакивала ошибка 404 в консоли ссылка localhost/product/undefined

          <Container className={s.container}>
            {product?.pic && (
              <img
                className={s.image}
                src={`${API_URL}/${product?.pic}`}
                alt={`${product?.title} ${product?.description}`}
              />
            )}
            <form
              className={s.content}
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  addToCart({
                    id,
                    color: selectedColor,
                    size: selectedSize,
                    count,
                  })
                );
              }}
            >
              <h2 className={s.title}>{product?.title}</h2>
              <p className={s.price}>руб {product?.price}</p>
              <div className={s.vendorCode}>
                <span className={s.subtitle}>Артикул</span>
                <span className={s.id}>{product?.id}</span>
              </div>
              <div className={s.color}>
                <p className={cn(s.subtitle, s.colorTitle)}>Цвет</p>
                <ColorList
                  colors={product.colors}
                  selectedColor={selectedColor}
                  handleColorChange={handleColorChange}
                />
              </div>
              <ProductSize
                sizeList={product.size}
                selectedSize={selectedSize}
                handleSelectedSize={handleSelectedSize}
              />
              <div className={s.description}>
                <p className={cn(s.subTitle, s.descriptionTitle)}> Описание</p>
                <p className={s.descriptionTitle}>{product.description}</p>
              </div>
              <div className={s.control}>
                <Count
                  className={s.count}
                  count={count}
                  handleIncrement={handleIncrement}
                  handleDecrement={handleDecrement}
                />
                <button className={s.addCart} type="submit">
                  В корзину
                </button>
                <BtnLike id={id} />
              </div>
            </form>
          </Container>
        }
      </section>
      <RandomGoods />
    </>
  );
};

export default ProductPage;
