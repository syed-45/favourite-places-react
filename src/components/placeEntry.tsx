interface placeInfo {
    title: string;
    placeName: string;
    countryName: string;
    imageURL: string;
    location: string;    
    reason: string;
}
// a title (text)
// a place name (text)
// a country name (text)
// a main image (URL)
// a link to the rough location on google maps (or alternative) (URL)
// some text explaining why you like the place

function PlaceEntry(props: placeInfo): JSX.Element {
    return (
        <section style={{border:'2px dashed green', textAlign: 'center', margin: '0px 0px 10px 0px'} }>
            <li>
                <h2> {props.title} </h2>
                <img src={props.imageURL} width="20%" alt="ncl"/>
                <h3> {props.placeName}, {props.countryName} </h3>
                <p> {props.reason} </p>
            </li>
        </section>
    );
}

export default PlaceEntry