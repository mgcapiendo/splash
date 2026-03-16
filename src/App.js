import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useState } from "react"

// create an array to store all snorkel spots
const spots = [
  {
    id: 1,
    name: 'Phil Foster Park',
    location: 'Riviera Beach, FL',
    lat: 26.7845,
    lng: -80.0427,
    difficulty: 'Beginner',
    description: 'Home to the famouse Blue Heron Bridge',
  }
]

function App() {

  // create memory for snorkel spot selection
  const [selectedSpot, setSelectedSpot] = useState(null)

  return (
    <div style={{display: 'flex', height: '100vh' }}>

      {/* create map container, center on current snorkel spot */}
      <MapContainer
        center={[spots[0].lat, spots[0].lng]}
        zoom={14}
        style={{ height: '100%', width: '100%' }}
      >
        {/* get all map tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {/* create a snorkel spot map marker */}
        <Marker 
          position={[spots[0].lat, spots[0].lng]}
          
          // when clicked set it as selected spot in memory
          eventHandlers={{
            click: () => setSelectedSpot(spots[0])
          }}
        >
          <Popup>Phil Foster Park</Popup>
        </Marker>

      </MapContainer>

      {/* create side panel */}
      <div style={{
        width: '360px',
        background: 'white',
        borderLeft: '1px solid #e2e8f0',
        padding: '24px'
      }}>

        {/* if a spot is selected show the info else show placeholder */}
        {selectedSpot ? (
          <div>
            <h2>{selectedSpot.name}</h2>
            <p>{selectedSpot.location}</p>
            <p>{selectedSpot.difficulty}</p>
            <p>{selectedSpot.description}</p>
          </div>
        ) : (
          <p>Click a marker to see spot details</p>
        )}
      </div>

    </div>
  )
}

export default App