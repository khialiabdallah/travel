import React  from 'react'
import "./Profile.css"
import ProfileInfoCard from './ProfileInfoCard';
import FluidContent from './ProfileInfoCard/FluidContent';
import ProfilePosts from './ProfilePosts';
import ProfileCover from './ProfileCover';
function Profile() {
    return (
            < >
        
                <ProfileCover/>
                <ProfileInfoCard/>

                <div className="profileContent">

                    <div>

                            <div className="profileIntroduction">
                                <ProfilePosts/>
                            </div>

                    </div>
                    
                    
                    <FluidContent/>


                </div>

            

            </>
    )
}

export default Profile
