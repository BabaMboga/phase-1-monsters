document.addEventListener('DOMContentLoaded', () => {
    const monsterContainer = document.getElementById('monster-container');
    const createMonsterForm = document.getElementById('monster-form');
    const loadMoreButton = document.getElementById('load-monsters-btn');

    let currentPage = 1;

    // Function to fetch monsters from the API

    const fetchMonsters = async (page = 1, limit = 50) => {
        const response = await fetch(`http://localhost:3000/monsters/?_limit=${limit}&_page=${page}`);
        return await response.json();
    };

    // Function to render monsters to the DOM
    const renderMonsters = (monsters) => {
        monsters.forEach(monster => {
            const monsterDiv = document.createElement('div');
            monsterDiv.innerHTML = `
            <h2>${monster.name}`
        })
    }
})