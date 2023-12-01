const getRandomLevel = (difficulty) => {
    
    let value = 0
    switch(difficulty){
        case 'EASY':
            value = randomValue(1,7)
            return value

        case 'MEDIUM':
            value = randomValue(1,12)

            return value

        case  'HARD':
            value = randomValue(7,20)
            return value
        default:
            return value
    }

}

const randomValue = (min, max) =>{
    let ranNum = Math.floor(Math.random() * (max - min)) + min;
    return ranNum;
}  

export default getRandomLevel;