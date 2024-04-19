import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import React from 'react'
import LembreteEntrada from './LembreteEntrada'
import LembreteLista from './LembreteLista'

class App extends React.Component {

    state = {
        lembretes: []
    }

    adicionarLembrete = (novoLembrete) => {
        let lista = this.state.lembretes
        lista.push(novoLembrete)

        this.setState({lembretes: lista})
        alert(`Lembrete "` + novoLembrete + `" adicionado!`)
    }

    render() {
        return (
            <div className="container border rounded mt-3" >
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-8 my-3">
                        <h1 className="text-center">
                            Meus Lembretes
                        </h1>
                        <LembreteLista
                            lembretes={this.state.lembretes}
                        />
                        <LembreteEntrada
                            classNameInputText="col-12 md:col-6 form-control"
                            classNameButton="col-12 md:col-6 btn btn-primary"
                            onAdicionar={this.adicionarLembrete}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App