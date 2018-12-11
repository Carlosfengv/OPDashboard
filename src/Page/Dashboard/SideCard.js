import React ,{Component} from 'react';
import Show from './SideCard/Show';
import Hidden from './SideCard/Hidden';



class SideCard extends Component{
    constructor(props){
        super(props);
        this.state={
            FullScreen: true,
        }
    }
   
    componentDidMount() {
        this.screenChange();
        console.log("didmount")
    }
    screenChange = () => {
        window.onresize = () =>{
            let ScreenWidth = document.body.clientWidth;
            if(ScreenWidth<1440){
                this.setState({
                    FullScreen: false
                })
            }else{
                this.setState({
                    FullScreen: true
                })
            };
            console.log(ScreenWidth, this.state.FullScreen);
        }
    }
    componentWillUnmount() {       
        window.removeEventListener('resize',this.screenChange);
        console.log("un")
    }
    render (){
        return  <div className="SideCar Right">
                    {
                        this.state.FullScreen? <Show></Show> : <Hidden></Hidden>
                    }
                </div>
    }
}

export default SideCard;