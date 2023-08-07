import GoogleMapReact from 'google-map-react';
import './LocationPage.css'

function LocationPage() {

	const defaultProps = {
		center: { lat: 40.73, lng: -73.93 },
		zoom: 12
	}

	return (
		<div id="map-page">
			<h1>Location and Hotels</h1>
			<div id="l-content">
				<div id="l-info">
					<ul>
						<li></li>
					</ul>
				</div>
				<div id='map'>
					<GoogleMapReact
						bootstrapURLKeys={{
							key: "AIzaSyAhpWV2IdkrhIey64dO3OJwp1aWRDCfqS8",
							language: 'en'
						}}
						defaultCenter={defaultProps.center}
						defaultZoom={defaultProps.zoom}
						disableDefaultUI={true}

					>
					</GoogleMapReact>
				</div>
			</div>
		</div>
	);
}

export default LocationPage;
