import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { GlobalStateProvider } from './globalVarialbles.tsx'
import { AuthPage } from './ui/pages/authPage/authPage.tsx'
import { BookPage } from './ui/pages/bookPage/bookPage.tsx'
import { ChapterListPage } from './ui/pages/chapterListPage/chapterListPage.tsx'
import { ChapterPage } from './ui/pages/chapterPage/chapterPage.tsx'
import { HomePage } from './ui/pages/homePage/homePage.tsx'
import { MainPage } from './ui/pages/mainPage/mainPage.tsx'
import { NotFoundPage } from './ui/pages/notFoundPage/notFounfPage.tsx'
import { ProfilePage } from './ui/pages/profilePage/profilePage.tsx'
import { Theme } from './ui/pages/theme/theme.tsx'
import { GameIntroPage } from './ui/pages/gamePages/gameIntroPage/gameIntroPage.tsx'
import { CharacterPage } from './ui/pages/gamePages/gameCharactersPage/characterPage.tsx'
import { GamePageChoice } from './ui/pages/gamePages/gameChoicePage/gameChoicePage.tsx'
import { LocationPage } from './ui/pages/gamePages/gameLocationPage/gameLocationPage.tsx'
import { GamePage } from './ui/pages/gamePages/gamePage/gamePage.tsx'

function App() {

  return (
    <>
      <BrowserRouter>
      <GlobalStateProvider>
        <Theme>
          <Routes>
            <Route path = "/" element = {<HomePage />}/>
            <Route path = "/auth" element = {<AuthPage />}/>
            <Route path = "/main" element = {<MainPage />}/>
            <Route path = "/book/*" element = {<BookPage />} />
            <Route path = "/chapters/book/*" element = {<ChapterListPage />} />
            <Route path = "/chapter/*" element = {<ChapterPage />}/>
            <Route path = "/profile" element = {<ProfilePage />}/>
            <Route path = "/game/intro" element = {<GameIntroPage />}/>
            <Route path = "/game/choice" element = {<GamePageChoice />}/>
            <Route path = "/game/characters" element = {<CharacterPage />}/>
            <Route path = "/game/locations" element = {<LocationPage />}/>
            <Route path = "/game/match" element = {<GamePage />}/>
            <Route path = "*" element = {<NotFoundPage />}/> 

           </Routes>
        </Theme>
      </GlobalStateProvider>
      </BrowserRouter>
    </>
  )
}

export default App
