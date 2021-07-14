import classes from "./card.module.css";
function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}
export default Card;
//children passes content jo ki card vale element ke beech mai hei..pass krta h vo