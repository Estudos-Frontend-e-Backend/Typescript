import React from 'react'

interface Props {
    name: string,
    title: string,
    content: string,
    commentsQty: number,
    tags: string[]

    category: Category;
}

// enum
export enum Category {
    JS = 'Javascript',
    TS = 'Typescript',
    P = 'Python'
}

export const SecondComponent = ({ name, title, content, commentsQty, tags, category }: Props) => {
    return (
        <div>
            <h5>My second component</h5>
            <p>Name is {name}</p>
            <p>Title: {title}</p>
            <p>Content: {content}</p>
            <p>Quantity comment number: {commentsQty}</p>
            <div>
                {tags.map(tag => (
                    <span>#{tag}</span>
                ))}
            </div>
            <h4>Category: {category}</h4>
        </div>
    );
}

