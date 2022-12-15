import { useState } from "react";

const useAvatarStyling = () => {
    const [avatarStyling, setAvatarStyling] = useState({
        topType: 'WinterHat2',
        accessoriesType: 'Blank',
        hatColor: 'Heather',
        hairColor: 'Black',
        facialHairType: 'Blank',
        facialHairColor: 'Black',
        clothesType: 'CollarSweater',
        clothesColor: 'Pink',
        eyeType: 'Default',
        eyeBrowType: 'Default',
        mouthType: 'Twinkle',
        skinColor: 'Brown'
    })

    
    const onChange = (event) => {
        setAvatarStyling({
            ...avatarStyling,
            [event.target.name]: event.target.value
        });
    }

    const { topType, accessoriesType, hairColor, hatColor, facialHairColor, facialHairType, clothesColor, clothesType, eyeType, eyeBrowType, mouthType, skinColor } = avatarStyling;


    const avatarImage = `https://avataaars.io/?avatarStyle=Circle&topType=${topType}&accessoriesType=${accessoriesType}&hatColor=${hatColor}&hairColor=${hairColor}&facialHairType=${facialHairType}&facialHairColor=${facialHairColor}&clotheType=${clothesType}&clotheColor=${clothesColor}&eyeType=${eyeType}&eyebrowType=${eyeBrowType}&mouthType=${mouthType}&skinColor=${skinColor}`;
    console.log(avatarImage)

    return {
        avatarStyling,
        onChange,
        avatarImage
    }
}

export default useAvatarStyling;