import { Component } from "react";

import {Header} from './Header';
import Footer from './Footer';
import { Jumbotron } from "./Jumbotron";
import Counter from "./Counter";

class Main extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Jumbotron />
                    <div class="row align-items-md-stretch">
                        <div class="col-md-6">
                            <div class="h-100 p-5 text-bg-dark rounded-3">
                            <h2>Change the background</h2>
                            <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                            <button class="btn btn-outline-light" type="button">Example button</button>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="h-100 p-5 bg-body-tertiary border rounded-3">
                            <h2>Add Borders</h2>
                            <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                            <button class="btn btn-outline-secondary" type="button">Example button</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Counter />
                <Footer />
            </div>
        );
    }
}

export default Main;