import { useEffect, useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import RepoList from "./components/RepoList";
import SearchBar from "./components/SearchBar";

function App() {
  const [inputUser, setInputUser] = useState("");
  const [activeUser, setActiveUser] = useState("rohitjanggid");
  const [userProfile, setUserProfile] = useState(null);
  const [userRepo, setUserRepo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileResponse, repoResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${activeUser}`),
          fetch(
            `https://api.github.com/users/${activeUser}/repos?sort=created&per_page=6`,
          ),
        ]);

        const profileData = await profileResponse.json();
        const repoData = await repoResponse.json();
        if (profileData.status == 404) {
          alert("please Enter the correct username!");
          return;
        }

        setUserProfile(profileData);
        setUserRepo(repoData);
        console.log(repoData);
      } catch (error) {
        alert("Technical error please try again later!");
      }
    };

    fetchData();
  }, [activeUser]);

  return (
    <div
      className="min-vh-100 d-flex pt-5 justify-content-center p-3"
      style={{
        backgroundColor: "#0f172a",
        fontFamily: "'Sego UI', Roboto, sans-serif",
        color: "#f8fafc",
      }}
    >
      <div className="container" style={{ maxWidth: "1100px" }}>
        <SearchBar
          inputUser={inputUser}
          setInputUser={setInputUser}
          setActiveUser={setActiveUser}
        />
        <div className="row g-4">
          <ProfileCard userProfile={userProfile}/>
          <RepoList userRepo={userRepo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
