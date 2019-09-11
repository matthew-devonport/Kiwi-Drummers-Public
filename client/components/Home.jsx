import React from 'react'
import { getDrummerInfo} from '../api'

class Home extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        fullname: ''
    }

    }


componentDidMount() {
getDrummerInfo().then(result => {
    const data = result.body                                       
    console.log(data[0].fullname)
    this.setState({                     
        firstname: data.fullname
    })
})
}



render () {
    return (
        <p>hi</p>
    )
    
    
}
}

export default Home