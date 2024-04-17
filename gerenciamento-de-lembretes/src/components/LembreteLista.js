import React, { Component } from 'react'

export default class LembreteLista extends Component {
    render() {
        return (
            <div className="container border rounded mt-3 mb-3" >
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-8 my-3">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="text-center">
                                    Preparar aula de programação
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="text-center">
                                    Fazer feira
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 ">
                            <div className="card-body">
                                <div className="text-center">
                                    Preparar marmitas
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}