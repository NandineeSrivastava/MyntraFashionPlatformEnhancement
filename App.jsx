import ChallengeDetails from "./components/ChallengeDetails"
import CommunityVoting from "./components/CommunityVoting"
import CreateOutfit from "./components/CreateOutfit"
import Dressupgame from "./components/Dressupgame"
import EnterFashionshow from "./components/EnterFashionshow"
import FashionQuizzes from "./components/FashionQuizzes"
import GamifiedExploration from "./components/GamifiedExploration"
import Homescreen from "./components/Homescreen"
import Leaderboard from "./components/Leaderboard"
import Navbar from "./components/Navbar"
import Profilepage from "./components/Profilepage"
import Stylechallenges from "./components/Stylechallenges"
import SubmitOutfit from "./components/SubmitOutfit"
import Triviagame from "./components/Triviagame"
import VirtualFashionShow from "./components/VirtualFashionShow"
import VoteOutfits from "./components/VoteOutfits"
import Zgames from "./components/Zgames"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <Routes>
    <Route path="/" element={<Homescreen />} />
    <Route path="zgames" element={<Zgames />} />
    <Route path="challenge" element={<Stylechallenges />} />
    <Route path="challengedetails" element={<ChallengeDetails />} />
    <Route path="createoutfit" element={<CreateOutfit />} />
    <Route path="submitoutfit" element={<SubmitOutfit />} />
    <Route path="comvote" element={<CommunityVoting />} />
    <Route path="leaderboard" element={<Leaderboard />} />
    <Route path="profile" element={<Profilepage />} />
    <Route path="fashionquizzes" element={<FashionQuizzes />} />
    <Route path="trivia" element={<Triviagame />} />
    <Route path="games" element={<GamifiedExploration />} />
    <Route path="fashionshow" element={<VirtualFashionShow />} />
    <Route path="entershow" element={<EnterFashionshow />} />
    <Route path="vote" element={<VoteOutfits />} />
    <Route path="dressup" element={<Dressupgame />} />
    <Route path="*" element={<p>404 not found</p>} />
    </Routes>
  )
}

export default App
