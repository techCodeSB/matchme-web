import React from 'react'

const ProfileFieldCars = ({title, subTitle}) => {
    return (
        <div className='profile__field__card'>
            <p className='title'>{title}</p>
            <p className='sub__title'>{subTitle}</p>
        </div>
    )
}

export default ProfileFieldCars