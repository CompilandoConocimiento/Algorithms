// =====================================================================
// ============                 IMPORTS            =====================
// =====================================================================
import React from "react"
import Code from "./Code"
import { Link, Switch, Route } from 'react-router-dom'

// =====================================================================
// ============                 CODE               =====================
// =====================================================================
function ListOfSubTopics (props) {

    const ColorsForCards = [
        "red lighten-2",
        "indigo lighten-2",
        "cyan lighten-1",
        "green lighten-2",
        "orange lighten-2",
        "brown lighten-2",
    ].sort(() => Math.random() - 0.5)

    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="card-panel">
                        
                        <div className="center">
                            <h4 className="blue-grey-text text-darken-3">
                                {props.Topic[0]}
                            </h4>
                            <br />
                            <br />
                        </div>

                        {props.SubTopics.map(
                            (e, index) =>  {

                                let ButtonStyle = "waves-effect hoverable btn-large col s12 m10 l8 offset-m1 offset-l2"
                                ButtonStyle = `${ButtonStyle} ${ColorsForCards[index % ColorsForCards.length]}`

                                return (
                                    <div className="row" key={e[1]}>
                                        <Link 
                                            className={ButtonStyle}
                                            to={`/Topic/${props.Topic[1]}/${e[1]}`}
                                        >
                                            {e[0]}
                                        </Link>
                                    </div>
                                )
                            }
                        )}

                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

        </div>

    )
}


export default function Topic (props) {

    return (
        <Switch>
            {props.Data.map(
                (Topic) => (
                    <React.Fragment key={Topic}>
                        <Route 
                            key    = {`${Topic[0][1]}`} 
                            path   = {`/Topic/${Topic[0][1]}/:Algorithm`}
                            render = { (props) => <Code {...props} Topic={Topic[0][1]} TopicID={Topic[0][2]} /> }
                        />
                        <Route 
                            exact path = {`/Topic/${Topic[0][1]}/`}
                            render     = { (props) => <ListOfSubTopics {...props} Topic={Topic[0]} SubTopics={Topic[1]} /> }
                        />
                    </React.Fragment>
                )
            )}
        </Switch>
    )
  
}
