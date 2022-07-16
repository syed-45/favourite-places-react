import PlaceEntry from "./placeEntry";

function AppMainScetion(): JSX.Element {
  return (
    <main>
      <section
        style={{
          border: "2px dashed green",
          textAlign: "center",
          margin: "0px 0px 10px 0px",
        }}
      >
        <ol>
          <PlaceEntry
            title={"Home Town"}
            imageURL={
              "https://a.cdn-hotels.com/gdcs/production114/d1461/2267d2c2-21e8-4964-bed0-f5bb480def60.jpg?impolicy=fcrop&w=800&h=533&q=medium"
            }
            placeName={"Newcastle Upon Tyne"}
            countryName={"United Kingdom"}
            location={
              "https://www.google.com/maps/dir//Newcastle+upon+Tyne,+UK/@55.0023721,-1.6568434,12z/data=!4m17!1m7!3m6!1s0x487d857e0c6f64cd:0xbe252b072a76191!2sNewcastle+upon+Tyne,+UK!3b1!8m2!3d54.978252!4d-1.61778!4m8!1m0!1m5!1m1!1s0x487d857e0c6f64cd:0xbe252b072a76191!2m2!1d-1.61778!2d54.978252!3e3"
            }
            reason={`It's where I was born and where I grew up!`}
          />
          <PlaceEntry
            title={"Home Town 2"}
            imageURL={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Jaflong_Sylhet.jpg/800px-Jaflong_Sylhet.jpg"
            }
            placeName={"Sylhet"}
            countryName={"Bangladesh"}
            location={
              "https://www.google.com/maps?q=sylhet&source=lmns&bih=784&biw=1919&hl=en&sa=X&ved=2ahUKEwjQo7Dimf34AhXNhFwKHaY0BicQ_AUoAXoECAEQAQ"
            }
            reason={`It's where I was born and where I grew up!`}
          />
          <PlaceEntry
            title={"Home Town"}
            imageURL={
              "https://a.cdn-hotels.com/gdcs/production114/d1461/2267d2c2-21e8-4964-bed0-f5bb480def60.jpg?impolicy=fcrop&w=800&h=533&q=medium"
            }
            placeName={"Newcastle Upon Tyne"}
            countryName={"United Kingdom"}
            location={
              "https://www.google.com/maps/dir//Newcastle+upon+Tyne,+UK/@55.0023721,-1.6568434,12z/data=!4m17!1m7!3m6!1s0x487d857e0c6f64cd:0xbe252b072a76191!2sNewcastle+upon+Tyne,+UK!3b1!8m2!3d54.978252!4d-1.61778!4m8!1m0!1m5!1m1!1s0x487d857e0c6f64cd:0xbe252b072a76191!2m2!1d-1.61778!2d54.978252!3e3"
            }
            reason={`It's where I was born and where I grew up!`}
          />
          <PlaceEntry
            title={"Home Town"}
            imageURL={
              "https://a.cdn-hotels.com/gdcs/production114/d1461/2267d2c2-21e8-4964-bed0-f5bb480def60.jpg?impolicy=fcrop&w=800&h=533&q=medium"
            }
            placeName={"Newcastle Upon Tyne"}
            countryName={"United Kingdom"}
            location={
              "https://www.google.com/maps/dir//Newcastle+upon+Tyne,+UK/@55.0023721,-1.6568434,12z/data=!4m17!1m7!3m6!1s0x487d857e0c6f64cd:0xbe252b072a76191!2sNewcastle+upon+Tyne,+UK!3b1!8m2!3d54.978252!4d-1.61778!4m8!1m0!1m5!1m1!1s0x487d857e0c6f64cd:0xbe252b072a76191!2m2!1d-1.61778!2d54.978252!3e3"
            }
            reason={`It's where I was born and where I grew up!`}
          />
        </ol>
      </section>
    </main>
  );
}

export default AppMainScetion;
