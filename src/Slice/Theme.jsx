import {createSlice} from '@reduxjs/toolkit'


const counterSlice = createSlice({
    name: 'counter',
    initialState:{ value:"",
                luz: 0.5,
                cam: false,
                intensity:0,
                luz2:0.3,
                path:false,
                travel:false,
                buzon: false,
                room:false,
                loading:false,
                mobile:false,
                tablet:false,
                desktop:false


 },
    reducers: {
        
        chCam(state){
            state.cam=true
        },
        chCam2(state){
            state.cam=false
        },
        chMobile(state){
            state.mobile=true
        },
        chDesktop(state){
            state.desktop=true
        },
        chTablet(state){
            state.tablet=true
        },
        chIntesity(state){
            state.intensity=0
            state.luz=0.5
            state.luz2=0.3
        },
        chIntesity2(state){
            state.intensity=0.28
            state.luz=0
            state.luz2=0
        },
        chPath(state){
            state.path=true
        },
        chPath2(state){
            state.path=false
        },
        chTravel(state){
            state.travel=true
        },
        chTravel2(state){
            state.travel=false
        },
        chBuzon(state){
            state.buzon=true
        },
        chBuzon2(state){
            state.buzon=false
        },
        chRoom(state){
            state.room=true
        },
        chRoom2(state){
            state.room=false
        },
        chLoading(state){
            state.loading=true
        },
        


    },
  })

  export const { dark, sun, chCam, chCam2, chSize, chDesktop,chMobile,chTablet, chIntesity, chIntesity2, chPath,chPath2, chTravel,chTravel2,chBuzon,chBuzon2, chRoom,chRoom2,chLoading, } = counterSlice.actions
export default counterSlice.reducer