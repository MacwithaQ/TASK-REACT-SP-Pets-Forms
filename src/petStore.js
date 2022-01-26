import { action, makeObservable, observable } from "mobx";
import petsData from "./petsData";
class PetStore {
  // Links the data file to the mobx class
  pets = petsData;

  // Makes the items observable for the browser to rerender on changes
  constructor() {
    makeObservable(this, {
      pets: observable,
      handleAdopt: action,
    });
  }

  // Add pet function that allows for an addition
  addPet = (pet) => {
    pet.id = this.pets[this.pets.length - 1].id + 1;
    this.pets.push(pet);
  };

  // Update pet function that updates a single pet element
  updatePet = (updatedPet) => {
    this.pets = this.pets.map((pet) =>
      pet.id === updatedPet.id ? updatedPet : pet
    );
    console.log(this.pets);
  };

  // Handles deleting a pet "adopt"
  handleAdopt = (petId) => {
    this.pets = this.pets.filter((pet) => pet.id !== petId);
  };
}

const petStore = new PetStore();
export default petStore;
