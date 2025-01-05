import styles from '../../styles/Project.module.css';
import ProjectLayout from './layout';
import spotifySearchResults from '../../images/spotify-search-results.jpg';


export default function SpotifyPlaylistSearch(){
    return (
        <ProjectLayout title={'Spotify Playlist Search'} 
        image={spotifySearchResults}
        githubLink={'https://github.com/eaberger2/spotify-listened-to'}/>
    )
}