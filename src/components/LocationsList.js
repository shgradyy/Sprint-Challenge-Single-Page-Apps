import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from "./LocationCard.js";
import Header from "./Header.js";
import TabNav from "./TabNav.js";

export default function LocationsList() {
    // TODO: Add useState to track data from useEffect
  const [location, setLocation] = useState({name: ""});
    useEffect(() => {
      // TODO: Add AJAX/API Request here - must run in `useEffect`
      axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(result => {
        setCharacter(result.data.results);
      })
      .catch(error => {
        console.log("There's an error", error);
      })
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, []);
  
    return (
      <>
      
      <Header />
      <TabNav />
      <section className="location-list grid-view">
        <h2>TODO: `array.map()` over your state here!</h2>
        {location.map(locale => {
          return <LocationCard locale={locale} key={locale.id} />;
        })}
      </section>
      </>
    );
  }
  