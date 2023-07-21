import { Component } from "react";

import {Header} from './Header';
import Footer from './Footer';

class Main extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Header />
                    Main Component.
                <Footer />
            </div>
        );
    }
}

export default Main;