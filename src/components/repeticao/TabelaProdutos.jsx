import './TabelaProdutos.css'
import React from 'react'
import produtos from '../../data/produtos'

export default props => {
    const produtosLI = produtos.map((produto, i) => {
        return ( 
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''}>
                <th>{produto.id}</th>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2).replace('.',',')}</td>
            </tr>
        )
    })
    return(
        <div>
            <table className='TabelaProdutos' width='100%' border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosLI}
                </tbody>
            </table>
        </div>
    )
}