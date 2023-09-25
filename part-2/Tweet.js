"use strict";

function Tweet(prop) {
  const style = { color: "tomato" };
  return (<div className={style}>
    {prop.username}'s name is {prop.name} and they wrote this tweet on {prop.date}
  </div>);
}

