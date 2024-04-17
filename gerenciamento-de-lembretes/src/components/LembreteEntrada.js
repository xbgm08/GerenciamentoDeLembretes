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
        this.props.onAdicionar(this.state.lembrete);
        this.state.lembrete = ''
    }

    render() {
        return (
            <div>
                <InputText
                    className={`${this.props.classNameInputText} w-full mb-2`}
                    placeholder='Digite seu novo lembrete'
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