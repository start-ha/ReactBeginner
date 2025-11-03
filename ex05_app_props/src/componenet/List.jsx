import React from 'react';

const List = ({items}) => { // {items} > ["AAA","BBB","CCC"]
    return (
        <div>
            {
            //jsx 문법 안에서 map출력
            items.map((item,index) => (
                <li key = {index}>{item}</li>
            ))   // {return } > jsx > ()
            }
        </div>
    );
};

export default List;