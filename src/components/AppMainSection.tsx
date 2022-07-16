import { placesComponent } from "./placesData";

function AppMainScetion(): JSX.Element {
  return (
    <main>
      <section>
        <ol>{placesComponent}</ol>
      </section>
    </main>
  );
}

export default AppMainScetion;
