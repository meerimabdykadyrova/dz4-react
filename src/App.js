import React, { useState, useMemo } from 'react';
import './Form.css';
import { Input } from "./component/input";
import { Card } from './component/card';
import Button from './component/Button';

const cards = [
    { id: 1, name: "Rose" },
    { id: 2, name: "Peony" },
    { id: 3, name: "Lily" },
    { id: 4, name: "Tulip" },
    { id: 5, name: "Violet" },
    { id: 6, name: "Chamomile" },
];

function App() {
    const [list, setList] = useState(cards);
    const [query, setQuery] = useState('');

    const handleAddClick = () => {
        if (query) {
            setList([...list, { id: list.length + 1, name: query }]);
            setQuery('');
        }
    };

    const handleDeleteClick = () => {
        if (list.length > 0) {
            const newList = [...list];
            newList.pop();
            setList(newList);
        }
    };

    const memoizedList = useMemo(() => {
        if (query) {
            return list.filter(item => item.name.includes(query));
        }
        return list;
    }, [list, query]);

    return (
        <div className="App">
            <Input value={query} setValue={setQuery} />
            <Button
                handleAddClick={handleAddClick}
                handleDeleteClick={handleDeleteClick}
            />

            {memoizedList.map((card) => {
                return <Card key={card.id} name={card.name} />;
            })}
        </div>
    );
}

export default App;
