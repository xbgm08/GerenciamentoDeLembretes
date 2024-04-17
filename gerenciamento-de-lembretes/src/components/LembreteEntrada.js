import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export default class LembreteEntrada extends Component {
    state = {
        lembrete: null
    }

    LembretePreenchido = (desc) => {
        this.setState({ lembrete: desc.target.value });
    }

    Adicionar = () => {
        if (this.state.lembrete !== null && this.state.lembrete !== '') {
            this.props.onAdicionar(this.state.lembrete);
            this.setState({ lembrete: '' });
        }
        else {
            alert(`Preencha o campo textual com um lembrete!`);
        }

    }

    render() {
        return (
            <div>
                <InputText
                    className={`${this.props.classNameInputText} w-full mb-2`}
                    placeholder='Digite um novo lembrete'
                    style={{ textAlign: 'center' }}
                    value={this.state.lembrete}
                    onChange={this.LembretePreenchido}
                />
                <Button
                    label='Adicionar'
                    className={`${this.props.classNameButton}`}
                    onClick={this.Adicionar}
                />
            </div>
        )
    }
}