/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { right } from "@popperjs/core";

// Created Arrays
window.onload = function() {
  // Define the possible suits and card values
  const suits = ["♥", "♠", "♣", "♦"]; // Use a single array for both corners
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  // Function to generate a random suit
  function getRandomSuit() {
    const randomIndex = Math.floor(Math.random() * suits.length);
    return suits[randomIndex];
  }

  // Function to generate a random value
  function getRandomValue() {
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
  }

  // Function to create and display the card
  function displayCard() {
    const cardContainer = document.getElementById("card-container");
    const card = document.createElement("div");
    card.id = "card";

    const chosenSuit = getRandomSuit();

    const suitElementTop = document.createElement("p"); // Use span for smaller size
    suitElementTop.classList.add("suit-corner-top"); // Class for styling (optional)
    suitElementTop.textContent = chosenSuit;
    card.appendChild(suitElementTop);

    // const suitLocation = document.querySelector(suitElementTop);
    // suitLocation.style.position = "relative";
    // suitLocation.style.left = "50px";

    const valueElement = document.createElement("h2");
    valueElement.textContent = getRandomValue();
    valueElement.classList.add("my-auto");

    card.appendChild(valueElement);

    const suitElementBottom = document.createElement("p");
    suitElementBottom.classList.add("suit-corner-bottom", "inverted"); // Add "inverted" class
    suitElementBottom.textContent = chosenSuit; // Use the same chosenSuit
    card.appendChild(suitElementBottom);

    if (chosenSuit === "♥" || chosenSuit === "♦") {
      suitElementBottom.style.color = "red";
      suitElementTop.style.color = "red";
      valueElement.style.color = "red";
    } else {
      suitElementBottom.style.color = "black";
      suitElementTop.style.color = "black";
      valueElement.style.color = "black";
    }

    cardContainer.innerHTML = ""; // Clear any previous card
    cardContainer.appendChild(card);
  }

  // Generate and display a card on page load
  displayCard();

  console.log("Hello Rigo from the console!");
};
