import PlaceEntry from "./placeEntry";

function AppMainScetion(): JSX.Element {
    return ( 
      <main>    
        <PlaceEntry 
          title={"Home Town"}
          imageURL={"https://a.cdn-hotels.com/gdcs/production114/d1461/2267d2c2-21e8-4964-bed0-f5bb480def60.jpg?impolicy=fcrop&w=800&h=533&q=medium"}          
          placeName = {'Newcastle Upon Tyne'}
          countryName = {'United Kingdom'}
          location = {'https://www.google.com/maps/dir//Newcastle+upon+Tyne,+UK/@55.0023721,-1.6568434,12z/data=!4m17!1m7!3m6!1s0x487d857e0c6f64cd:0xbe252b072a76191!2sNewcastle+upon+Tyne,+UK!3b1!8m2!3d54.978252!4d-1.61778!4m8!1m0!1m5!1m1!1s0x487d857e0c6f64cd:0xbe252b072a76191!2m2!1d-1.61778!2d54.978252!3e3'}    
          reason = {`It's where I was born and where I grew up!`}
          />
          <PlaceEntry 
          title={"Home Town"}
          imageURL={"https://a.cdn-hotels.com/gdcs/production114/d1461/2267d2c2-21e8-4964-bed0-f5bb480def60.jpg?impolicy=fcrop&w=800&h=533&q=medium"}          
          placeName = {'Newcastle Upon Tyne'}
          countryName = {'United Kingdom'}
          location = {'https://www.google.com/maps/dir//Newcastle+upon+Tyne,+UK/@55.0023721,-1.6568434,12z/data=!4m17!1m7!3m6!1s0x487d857e0c6f64cd:0xbe252b072a76191!2sNewcastle+upon+Tyne,+UK!3b1!8m2!3d54.978252!4d-1.61778!4m8!1m0!1m5!1m1!1s0x487d857e0c6f64cd:0xbe252b072a76191!2m2!1d-1.61778!2d54.978252!3e3'}    
          reason = {`It's where I was born and where I grew up!`}
          />
      </main>
    );
  }
  
  export default AppMainScetion;
  