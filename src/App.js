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
    // flex is sidebyside, h-screen is full screen height
    <div className="flex h-screen">

      {/* create map container, center on current snorkel spot */}
      {/* flex-1 lets map take all remaining space after panel takes its space */}
      <div className="flex-1">
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
      </div>

      {/* create side panel */}
      {/* overflow y auto lets scroll happen */}
      <div className="w-80 bg-white border-1 border-slate-200 p-6 overflow-y-auto">
        {/* header */}
        <div className="mb-6 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2">
            {/* logo */}
            <span className="text-2xl">🌊</span>
            {/* tracking-tight puts letters slightly closer */}
            <h1 className="text-2xl font-medium text-slate-800 tracking-tight">
              Splash
            </h1>
          </div>
          {/* tagline */}
          <p className="text-xs text-slate-400 mt-1">
            Florida Snorkel Explorer
          </p>
        </div>

        {/* if a spot is selected show the info else show placeholder */}
        {selectedSpot ? (
          <div>
            <h2 className="text-xl font-medium text-slate-800">{selectedSpot.name}</h2>
            <p className="text-sm text-slate-500 mt-1">{selectedSpot.location}</p>
            {/* <p className="text-sm text-slate-600 mt-4">{selectedSpot.difficulty}</p> */}
            <span className="bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full px-3 py-1 inline-block mt-3">
              {selectedSpot.difficulty}
            </span>
            {/* leading relaxed is for lineheight */}
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">{selectedSpot.description}</p>
          </div>
        ) : (
          <p className="text-center text-slate-400 text-sm mt-10">Click a marker to see spot details</p>
        )}
      </div>

    </div>
  )
}

export default App