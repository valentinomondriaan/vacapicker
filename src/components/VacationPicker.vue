<template>
<div class="container">
  <div>
    <h2>VacationPicker</h2>
    <div className="row">
      <div className="col-12">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button className="btn btn-outline-primary" v-bind:disabled="isBackDisabled" v-on:click="backClick()">« Vorige
          </button>
          <button className="btn btn-outline-primary" v-bind:disabled="true">{{ chosenCountry.id + 1 }}</button>
          <button className="btn btn-outline-primary" v-bind:disabled="isNextDisabled" v-on:click="nextClick()">Volgende »
          </button>
        </div>
        <br><br>
        <button className="btn btn-outline-primary" v-on:click="toggleDetails()">{{ showChosenCountryButtonText }}</button>
      </div>
      <div class="row mt-5">
      <div className="col-12">
        <ul className="list-group">
          <li className="list-group-item">
            <h3>{{ chosenCountry.name }}</h3>
          </li>
          <li className="list-group-item">
            <h4>Hoofdstad: {{ chosenCountry.capital }}</h4>
          </li>
          <li className="list-group-item" v-show="showChosenCountry">
            Reizen naar {{ chosenCountry.name }} kost €{{ chosenCountry.cost }}.
          </li>

          <li className="list-group-item" v-show="showChosenCountry">
            <img v-bind:src="getImgUrl(chosenCountry.img)" v-bind:alt="chosenCountry.img" className="img-fluid"/>
          </li>
          
          <li className="list-group-item" v-show="showChosenCountry">
            {{ chosenCountry.details }}
          </li>
          <li class="list-group-item" v-show="showChosenCountry">
             <button class="btn btn-primary" @click="addLike(chosenCountry.name)">Like!</button>
          </li>
          <li class="list-group-item" v-show="showChosenCountry">
              <button class="btn btn-success" >
              {{this.store.$state[chosenCountry.name]}}
              </button>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import mixins from '@/mixins/mixins'
import countryData from '@/data/countryData';

export default {
  name: 'VacationPicker',
  mixins: [mixins],
  data() {
    return {
      countryData,
      chosenCountry: countryData.countries[0],
      isBackDisabled: true,
      isNextDisabled: false,
      showChosenCountry: true,
      showChosenCountryButtonText: "Verberg details"
    }
  },
  methods: {
    backClick() {
      this.setCountry(this.countryData.countries[this.chosenCountry.id - 1]);
      if (this.chosenCountry.id < 1) {
        this.isBackDisabled = true;
      }
      this.isNextDisabled = false;
    },
    nextClick() {
      this.setCountry(this.countryData.countries[this.chosenCountry.id + 1]);
      this.isBackDisabled = false;
      if ((this.chosenCountry.id + 1) >= this.countryData.countries.length) {
        this.isNextDisabled = true;
      }
    },
    toggleDetails() {
      this.showChosenCountry = !this.showChosenCountry;
      if (this.showChosenCountry) {
        this.showChosenCountryButtonText = "Verberg details";
      } else {
        this.showChosenCountryButtonText = "Toon details";
      }
    },
    setCountry(country) {
      this.chosenCountry = country;
    },
    getImgUrl(img) {
      console.log(img);
      return require('../assets/countries/' + img);
    }
  },
  computed: {
			routeId() {
				return this.$route.params.id;
			},
			getIndex() {
				return this.country.countries.find(
					(index) => index.name === this.routeId
				);
			},
			Likes() {
				return this.store.count;
			},
		},
		mounted() {
			for (let i = 0; i < countryData.countries.length; i++) {
				const name = countryData.countries[i].name;
				this.store.$state[name] = 0;
			}
		},
}

</script>