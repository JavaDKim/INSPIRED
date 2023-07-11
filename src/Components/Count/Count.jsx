import s from "./Count.module.scss";
import cn from "classnames";

const Count = ({ className, count, handleIncrement, handleDecrement }) => {
  return (
    <div className={cn(s.count, className)}>
      <button className={s.item} type="button" onClick={handleDecrement}>
        -
      </button>
      <span className={cn(s.item, s.number)}>{count}</span>
      <button className={s.item} type="button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Count;
