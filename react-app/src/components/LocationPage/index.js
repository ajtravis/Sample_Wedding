import GoogleMapReact, { Marker } from 'google-map-react';
import './LocationPage.css'

const AnyReactComponent = ({ text }) => <div style={{
	color: 'white',
	background: 'red',
	width:'20px',
	height:'20px',
	display: 'inline-flex',
	textAlign: 'center',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: '100%',

	transform: 'translate(-50%, -50%)'
}}>{text}</div>;

function LocationPage() {

	const defaultProps = {
		center: { lat: 41.4965243, lng: -81.7863008 },
		zoom: 12
	}

	return (
		<div id="map-page">
			<h1>August 29 2023</h1>
			<h2>2000 Sycamore St, Cleveland, OH 44113</h2>
			<div id='map'>
				<GoogleMapReact
					bootstrapURLKeys={{
						key: "AIzaSyAhpWV2IdkrhIey64dO3OJwp1aWRDCfqS8",
						language: 'en'
					}}
					yesIWantToUseGoogleMapApiInternals
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}
					disableDefaultUI={true}
				>
					<AnyReactComponent
						lat={41.4965243} lng={-81.7863008}
						text=""
					/>
				</GoogleMapReact>
			</div>
			<div>here you can list the wedding location and hotels that guests can stay at</div>
		</div>
	);
}

export default LocationPage;
