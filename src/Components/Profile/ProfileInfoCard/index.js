import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import PlaceIcon from '@material-ui/icons/Place';
import AddIcon from '@material-ui/icons/Add';

function ProfileInfoCard() {
    return (
        <div className="profileInfo">
                <div className="profileUserInfo">
                    <img className="PhotoProfile"></img>
                <div>
                            <div>
                                    <h2 style={{paddingTop:'10px'}}>username</h2>
                                    <h5>@user_id</h5>
                            </div>

                            <div className="profileFollowers"> 

                                    <div className="Followers">
                                        <h3>Contribution</h3>
                                        <h3>0</h3>
                                    </div>

                                    <div className="Followers">
                                        <h3>Abonnés</h3>
                                        <h3>0</h3>
                                    </div>

                                    <div className="Followers">
                                        <h3>Abonnements</h3>
                                        <h3>0</h3>
                                        
                                    </div>

                            </div>



                    </div>

                    <div className="profileModification">
                        Modifier 
                        <SettingsIcon className="settingIcon" />

                    </div>

                

                </div>

                <div className="ProfileBio">
                    <a><PlaceIcon style={{fontSize:'medium'}}/> commune,wilaya</a>
                    <a> <AddIcon style={{fontSize:'small'}}/> ajouter un site web</a>
                    <a><AddIcon style={{fontSize:'small'}}/> de details</a>
                </div>
               
              



            </div>
    )
}

export default ProfileInfoCard
