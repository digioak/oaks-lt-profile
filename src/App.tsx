import "@cloudscape-design/global-styles/index.css";
import { Profile } from "./Profile";
import "./App.css";

function App() {

  const sites = [
    {
      name: "Apple Music",
      icon: "/apple-music.svg",
    },
    {
      name: "bandcamp",
      icon: "/bandcamp.svg",
    },
    {
      name: "bandsintown",
      icon: "/bandsintown.svg",
    },
    {
      name: "Instagram",
      icon: "/instagram.svg",
    },
    {
      name: "SoundCloud",
      icon: "/soundcloud.svg",
    },
    {
      name: "Spotify",
      icon: "/spotify.svg",
    },
    {
      name: "TIDAL",
      icon: "/tidal.svg",
    },
    {
      name: "YouTube",
      icon: "/youtube.svg",
    },
  ]


  return (
    <>
      <div>
        <Profile
          name="Oak Chantosa"
          title="Senior Software Engineer with Hinge Health"
          location="Seattle, WA"
          imageUrl="/oak-profile.jpeg"
          sites={sites}
        />
      </div>
    </>
  );
}

export default App;
