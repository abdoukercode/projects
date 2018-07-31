
import React from 'react'

// eslint-disable-next-line
import PropTypes from 'prop-types';

export default function GamesList(props) {

    const emptyMessage = (
        <p>There are no games in your collection</p>
    );
    const gamesList = (
        <p>games List</p>
    );
    return (
            <div>
                    {props.games.length === 0 ? emptyMessage : gamesList}
            </div>
    );
}

GamesList.propTypes = {
    games: PropTypes.array.isRequired
}

