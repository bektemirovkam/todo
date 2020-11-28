import React from "react";
import classNames from "classnames";
import Badge from "../Badge/Badge";

const ListItem = ({
  hadleClickOnItem,
  activeList,
  item,
  removable,
  editList,
  deleteList,
}) => {
  const [inputValue, setInputValue] = React.useState(item.name);
  const [editMode, setEditMode] = React.useState(false);

  const turnEditMode = () => {
    setEditMode(true);
  };

  const switchEditMode = () => {
    setEditMode(false);
    if (item.name !== inputValue) {
      editList(item.id, inputValue, item.colorId);
    }
  };

  const handleSelectItem = () => {
    hadleClickOnItem(item);
  };

  const handleClickOnDelete = (id) => {
    deleteList(id);
  };

  const handleInputKeyUp = (event) => {
    switch (event.keyCode) {
      case 13: {
        switchEditMode();
        break;
      }
      case 27: {
        setEditMode(false);
        setInputValue(item.name);
        break;
      }
      default:
        return false;
    }
  };

  return (
    <li
      key={item.id}
      className={classNames({
        active: item.active
          ? item.active
          : activeList && activeList.id === item.id,
      })}
    >
      {item.icon ? (
        <i>{item.icon}</i>
      ) : (
        <Badge
          className={classNames("badge", {
            [`badge--${item.color.name}`]: true,
          })}
        />
      )}
      {editMode ? (
        <input
          autoFocus
          value={inputValue}
          className="input sidebar__input"
          onBlur={switchEditMode}
          onKeyUp={(e) => {
            handleInputKeyUp(e);
          }}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      ) : (
        <span onDoubleClick={turnEditMode} onClick={handleSelectItem}>
          {item.name}
          {item.tasks ? ` (${item.tasks.length})` : ""}
        </span>
      )}
      {activeList && activeList.id === item.id && (
        <i onClick={turnEditMode}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="edit"
          >
            <path
              d="M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9338 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.6379 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825Z"
              fill="#000000"
            />
          </svg>
        </i>
      )}
      {removable && (
        <i
          onClick={() => {
            handleClickOnDelete(item.id);
          }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="remove"
          >
            <path
              d="M6.24741 5L9.73899 1.50842C9.9047 1.343 9.99791 1.11853 9.99812 0.884393C9.99832 0.650251 9.90551 0.425617 9.74009 0.259907C9.57468 0.0941973 9.35021 0.000986589 9.11606 0.000779811C8.88192 0.000573033 8.65729 0.0933872 8.49158 0.258804L5 3.75038L1.50842 0.258804C1.34271 0.0930948 1.11796 0 0.883613 0C0.649264 0 0.424514 0.0930948 0.258804 0.258804C0.0930948 0.424514 0 0.649264 0 0.883613C0 1.11796 0.0930948 1.34271 0.258804 1.50842L3.75038 5L0.258804 8.49158C0.0930948 8.65729 0 8.88204 0 9.11639C0 9.35074 0.0930948 9.57549 0.258804 9.7412C0.424514 9.90691 0.649264 10 0.883613 10C1.11796 10 1.34271 9.90691 1.50842 9.7412L5 6.24962L8.49158 9.7412C8.65729 9.90691 8.88204 10 9.11639 10C9.35074 10 9.57549 9.90691 9.7412 9.7412C9.90691 9.57549 10 9.35074 10 9.11639C10 8.88204 9.90691 8.65729 9.7412 8.49158L6.24741 5Z"
              fill="#000000"
            />
          </svg>
        </i>
      )}
    </li>
  );
};

export default ListItem;
