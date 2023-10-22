import React from 'react';

const TextExcerpt = ({ text, maxWords }: {
    text: string,
    maxWords: number
}) => {
    const truncateText = (text: string, maxWords: number) => {
        const words = text.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return text;
    };

    const truncatedText = truncateText(text, maxWords);

    return (
        <p
            className='
            whitespace-nowrap
            overflow-hidden
            overflow-ellipsis
        '
        >
            {truncatedText}
        </p>
    );
}

export default TextExcerpt;