import React from "react";
import {IState as IProps} from '../App';

// const List: React.FC<IProps> = () => {

const List = ({ people }: IProps) => {

  const renderList = () : JSX.Element[]=> {
    return people.map((person, index) => {
      return (
        <li className="List-element" key={index}>
          <div className="List-header">
            <img className="List-img" src={person.url} alt={"no img"}/>
            <h2>{person.name}</h2>
          </div>
          <p className="List-age">{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  }

  return (
    <ul>
      {renderList()}
    </ul>
  );
};

export default List;