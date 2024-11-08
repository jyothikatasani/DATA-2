body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    transition: background-color 0.5s;
    background-size: cover;
    background-position: center;
}

.container {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white */
    padding: 20px;
    border-radius: 10px;
}

.board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    gap: 5px;
    margin: 20px auto;
}

.cell {
    width: 100px;
    height: 100px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    cursor: pointer;
}

#reset {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
}

#message {
    margin-top: 20px;
    font-size: 1.2rem;
}

@keyframes celebration {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

.celebration {
    animation: celebration 0.5s infinite;
}
