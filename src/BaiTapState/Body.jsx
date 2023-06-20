import React, { Component } from 'react';
import data from '../data/dataGlasses.json'
export default class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listClasses: data,
            img: './glassesImage/v1.png',
            name: 'GUCCI G8850U',
            desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.'
        };
    }

    renderClasesSelect = (classes) => {
        this.setState({
            img: classes.url,
            name: classes.name,
            desc: classes.desc,
            price: classes.price
        })
    }

    renderClassesUI = () => {
        return this.state.listClasses.map((classes, index) => {
            return (
                <div className='col-sm-2 p-0' key={classes.id}>
                    <img src={classes.url} alt="" width={100} height={100} className='img-fluid img-item' onClick={()=>{this.renderClasesSelect(classes)}}/>
                    <p>{classes.price}$</p>
                </div>
            )
        })
    }


    render() {
        return (
            <div className='body__classes'>
                <div className="container">
                    <div className="row ">
                        <div className="col-sm-6">
                            <div className="card card__left ml-auto">
                                <img  className="card-img-select" src={this.state.img} alt="" />
                                <img className="card-img-top img_fluid" src="./glassesImage/model.jpg" alt />
                                <div className="card-body bg-dark text-white">
                                    <h4 className="card-title">{this.state.name}</h4>
                                    <p className="card-text">{this.state.desc}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mr-auto">
                            <div className="card card__right mr-auto">
                                <img className="card-img-top img_fluid" src="./glassesImage/model.jpg" alt />
                                <div className="card-body bg-dark text-white">
                                    <h4 className="card-title">Your Face</h4>
                                    <p className="card-text">After Select Classes</p>
                                    <p className='mb-1'>Click Select Classes <i class="fa-solid fa-arrow-down"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="container content__classes">
                        <div className="row">
                            {this.renderClassesUI()}
                        </div>
                    </div>
            </div>
        )
    }
}
