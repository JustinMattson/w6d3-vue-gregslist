import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";

let _api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api",
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cars: [],
    activeCar: {},
    houses: [],
    activeHouse: {},
  },
  mutations: {
    setAllCars(state, cars) {
      state.cars = cars;
    },
    setAllHouses(state, houses) {
      state.houses = houses;
    },
    setActiveCar(state, car) {
      state.activeCar = car;
    },
    setActiveHouse(state, house) {
      state.activeHouse = house;
    },
    addToCars(state, car) {
      state.cars.push(car);
    },
    addToHouses(state, house) {
      state.houses.push(house);
    },
  },
  actions: {
    async getAllCars({ commit }) {
      try {
        let res = await _api.get("cars");
        commit("setAllCars", res.data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllHouses({ commit }) {
      try {
        let res = await _api.get("houses");
        commit("setAllHouses", res.data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getCarDetails({ commit }, id) {
      try {
        let res = await _api.get("cars/" + id);
        commit("setActiveCar", res.data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getHouseDetails({ commit }, id) {
      try {
        let res = await _api.get("houses/" + id);
        commit("setActiveHouse", res.data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async createCar({ commit, dispatch }, carDeetz) {
      try {
        let res = await _api.post("cars", carDeetz);
        commit("addToCars", res.data.data);
        router.push({ name: "CarDetails", params: { id: res.data.data._id } });
      } catch (error) {
        console.error(error);
      }
    },
    async createHouse({ commit, dispatch }, houseDetails) {
      try {
        let res = await _api.post("houses", houseDetails);
        commit("addToHouses", res.data.data);
        router.push({
          name: "HouseDetails",
          params: { id: res.data.data._id },
        });
      } catch (error) {
        console.error(error);
      }
    },
    async deleteCar({ commit, dispatch }, id) {
      try {
        let res = await _api.delete("cars/" + id);
        // NOTE Router Push is NOT an array method but a navigation method
        router.push({ name: "Home" });
      } catch (error) {
        console.error(error);
      }
    },
    async deleteHouse({ commit, dispatch }, id) {
      try {
        let res = await _api.delete("houses/" + id);
        router.push({ name: "Home" });
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
