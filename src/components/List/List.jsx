import React from "react";
import "./List.scss";
import ListItem from "./ListItem";

const List = ({
  items,
  className,
  removable,
  hadleClickOnItem,
  activeList,
  editList,
  deleteList,
}) => {
  return (
    <ul className={className}>
      {items.map((item, index) => {
        return (
          <ListItem
            key={`${item.name}_${index}`}
            item={item}
            hadleClickOnItem={hadleClickOnItem}
            activeList={activeList}
            removable={removable}
            editList={editList}
            deleteList={deleteList}
          />
        );
      })}
    </ul>
  );
};

export default List;
