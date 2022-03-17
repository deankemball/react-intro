import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"

const items = ["Banana", "Orange", "Apple", "Lemon"];

type Props = {
  children: React.ReactNode
}

const ListItem = (props: Props) => {
  return <li>{props.children}</li>;
};

const App = () => {
  return (
    <div className="flex justify-center text-2xl">
      <ul>
        {items.map((fruit, i) => (
          <ListItem key={i}>{`${i}. ${fruit}`}</ListItem>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
