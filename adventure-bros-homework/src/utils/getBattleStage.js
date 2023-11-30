

const getBattleStage = (stage) => {

    // console.log('detailscreen line 19', heroName);
    try {
      /**
       * let stageList = [
      "DARKNESS",
      "DESERT",
      "FOREST",
      "LAB",
      "NEWYORK",
      "SNOW",
      "VOLCANO"  
    ];
       */
        switch (stage) {
            case 'DARKNESS':
                return require('../../assets/stages/darkness.gif')
               
            case 'DESERT':
                return require('../../assets/stages/desert.gif') 
               
            case 'FOREST':
                return require('../../assets/stages/forest.gif')
               
            case 'LAB':
                return require('../../assets/stages/lab.gif')
                
            case 'NEWYORK':
                return require('../../assets/stages/newyork.gif')
               
            case 'SNOW':
                return require('../../assets/stages/snow.gif')
            
            case 'VOLCANO':
                return  require('../../assets/stages/volcano.gif')
                     
            default:
                return ''
  
        }
    } catch (e) { console.log('detailscreen line 59', e); }
  
  }
  
  export default getBattleStage