import React, { Component } from 'react'

export default class LembreteLista extends Component {
    render() {
        return (
            <div className="container border rounded mt-3 mb-3" >
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-8 my-3">
                        {
                            this.props.lembretes.length > 0 ?
                                this.props.lembretes.map((lembrete) => (
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="text-center">
                                                {lembrete}
                                            </div>
                                        </div>
                                    </div>
                                ))

                            :
                            
                            <div className="text-center">
                                <p>Não há lembretes</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}