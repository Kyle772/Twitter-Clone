import React from 'react';
import './Profile.css';

export default class Profile extends React.Component {
    render() {
        let profile = {
            "image": require("../../Assets/img/profile.png"),
            "cover": require("../../Assets/img/cover.png"),
            "ref": '@TheZuck',
            "name": 'ZuckZuckZuck',
            "bio": '*Lizard Noises*',
            "tweetCount": '210',
            "tweetrtCount": '420',
            "location": 'Hatched from an egg',
            "joindate": '1/31/2020',
        }

        return (
            <div className="col profileCard">
                <div className="content">
                    <img className="photo" src={profile.image} alt=''/>
                    <h3>{profile.ref}</h3>
                    <h2>{profile.name}</h2>
                    <p className="bio">{profile.bio}</p>
                    <div className="row">
                        <div className="tweetCount">{profile.tweetCount}</div>
                        <div className="tweetrtCount">{profile.tweetrtCount}</div>
                    </div>
                    <div className="row">
                        <div className="joindate">Joined {profile.joindate}</div>
                        <div className="location">{profile.location}</div>
                    </div>
                </div>
                <img className="cover" src={profile.cover} alt=''/>
            </div>
        )
    }
}