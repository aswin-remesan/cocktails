import {Circle} from "better-react-spinkit";


function Loading() {
    return (
        <center style={{display: "grid", placeItems: "center", height: "100vh"}}>
            <div>
                <img 
                    src="/img/cocktail_logo.png"
                    alt=''
                    height={200}
                    style={{marginBottom: 10}}>

                </img>

                <Circle color="orange" size={60} />
            </div>
        </center>
    )
}

export default Loading